<?php
error_reporting(E_ALL ^ E_NOTICE);
ob_implicit_flush();

require __DIR__.'./../../tool/functions.php';

$address = '127.0.0.1';
$port    = 9111;

$server = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($server < 0)
{
	output('fail at socket_create(): '.socket_last_error($server));
	exit;
}
else
{
	output('success at socket_create(): ');
}
socket_set_option($server, SOL_SOCKET, SO_REUSEADDR, 1);
$ret = socket_bind($server, $address, $port);
if ($ret < 0)
{
	output('fail at socket_bind(): '.socket_last_error($ret));
	exit;
}
else
{
	output('success at socket_bind(): ');
}
$ret = socket_listen($server);
if ($ret < 0)
{
	output('fail at socket_listen(): '.socket_last_error($ret));
	exit;
}
else
{
	output('success at socket_listen(): ');
}

$all_clients = [];

while (TRUE)
{
	$write = $except = NULL;
	output('*********');

	$read = array_merge([$server], array_column($all_clients,'client'));

	$r = @socket_select($read, $write, $except, NULL);

	if ($r < 1)
	{
		continue;
	}
	$client = array_shift($read);
	if ($client == $server)
	{
		$client_now     = @socket_accept($server);
		$client_now_key = intval($client_now);
		if ( ! in_array($client_now_key, $all_clients))
		{
			$all_clients[$client_now_key] = [
				'client' => $client_now,
				'shake'  => FALSE,
			];
		}
	}
	else
	{
		$client_now     = $client['client'];
		$client_now_key = intval($client_now);
	}

	$len    = 0;
	$buffer = '';
	//读取该socket的信息，注意：第二个参数是引用传参即接收数据，第三个参数是接收数据的长度
	do
	{
		$l      = @socket_recv($client_now, $buf, 1000, 0);
		$len    += $l;
		$buffer .= $buf;
	} while ($l == 1000);

	if ($client == $server)
	{
		//截取Sec-WebSocket-Key的值并加密，其中$key后面的一部分258EAFA5-E914-47DA-95CA-C5AB0DC85B11字符串应该是固定的
		$buf     = substr($buffer, strpos($buffer, 'Sec-WebSocket-Key:') + 18);
		$key     = trim(substr($buf, 0, strpos($buf, "\r\n")));
		$new_key = base64_encode(sha1($key."258EAFA5-E914-47DA-95CA-C5AB0DC85B11", TRUE));

		//按照协议组合信息进行返回
		$new_message = "HTTP/1.1 101 Switching Protocols\r\n";
		$new_message .= "Upgrade: websocket\r\n";
		$new_message .= "Sec-WebSocket-Version: 13\r\n";
		$new_message .= "Connection: Upgrade\r\n";
		$new_message .= "Sec-WebSocket-Accept: ".$new_key."\r\n\r\n";
		$re          = socket_write($client_now, $new_message);

		//对已经握手的client做标志
		$all_clients[$client_now_key]['shake'] = TRUE;
	}
	else
	{

		output($buffer);
//		socket_write($client,'aaaaa');
	}
}

//解码函数
function uncode($str, $key)
{
	$mask = array();
	$data = '';
	$msg  = unpack('H*', $str);
	$head = substr($msg[1], 0, 2);
	if ($head == '81')
	{
		$len = substr($msg[1], 2, 2);
		$len = hexdec($len);//把十六进制的转换为十进制
		if (substr($msg[1], 2, 2) == 'fe')
		{
			$len    = substr($msg[1], 4, 4);
			$len    = hexdec($len);
			$msg[1] = substr($msg[1], 4);
		}
		else
		{
			if (substr($msg[1], 2, 2) == 'ff')
			{
				$len    = substr($msg[1], 4, 16);
				$len    = hexdec($len);
				$msg[1] = substr($msg[1], 16);
			}
		}
		$mask[] = hexdec(substr($msg[1], 4, 2));
		$mask[] = hexdec(substr($msg[1], 6, 2));
		$mask[] = hexdec(substr($msg[1], 8, 2));
		$mask[] = hexdec(substr($msg[1], 10, 2));
		$s      = 12;
		$n      = 0;
	}
	else
	{
		if ($this->slen[$key] > 0)
		{
			$len  = $this->slen[$key];
			$mask = $this->ar[$key];
			$n    = $this->n[$key];
			$s    = 0;
		}
	}

	$e = strlen($msg[1]) - 2;
	for ($i = $s; $i <= $e; $i += 2)
	{
		$data .= chr($mask[$n % 4] ^ hexdec(substr($msg[1], $i, 2)));
		$n ++;
	}
	$dlen = strlen($data);

	if ($len > 255 && $len > $dlen + intval($this->sjen[$key]))
	{
		$this->ar[$key]   = $mask;
		$this->slen[$key] = $len;
		$this->sjen[$key] = $dlen + intval($this->sjen[$key]);
		$this->sda[$key]  = $this->sda[$key].$data;
		$this->n[$key]    = $n;

		return FALSE;
	}
	else
	{
		unset($this->ar[$key], $this->slen[$key], $this->sjen[$key], $this->n[$key]);
		$data = $this->sda[$key].$data;
		unset($this->sda[$key]);

		return $data;
	}
}