<?php
error_reporting(E_ALL ^ E_NOTICE);
ob_implicit_flush();

require './../../tool/functions.php';

$address = '127.0.0.1';
$port    = 9111;

$config    = array(
	'address' => '127.0.0.1',
	'port'    => '9111',
	'event'   => 'WSevent',//回调函数的函数名
	'log'     => TRUE,
);
$websocket = new websocket($config);
$websocket->run();
function WSevent($type, $event)
{
	global $websocket;
	if ('in' == $type)
	{
		$websocket->log('------------客户进入id:'.$event['k']);
	}
	elseif ('out' == $type)
	{
		$websocket->log('-----------------客户退出id:'.$event['k']);
	}
	elseif ('msg' == $type)
	{
		$websocket->log('--------------------'.$event['k'].'消息:'.$event['msg']);
		roboot($event['sign'], $event['msg']);
	}
}

function roboot($sign, $t)
{
	global $websocket;
	switch ($t)
	{
		case 'hello':
			$show = 'hello,GIt @ OSC';
			break;
		case 'name':
			$show = 'Robot';
			break;
		case 'time':
			$show = '当前时间:'.date('Y-m-d H:i:s');
			break;
		case '再见':
			$show = '( ^_^ )/~~拜拜';
			$websocket->write($sign, 'Robot:'.$show);
			$websocket->close($sign);

			return;
			break;
		case '天王盖地虎':
			$array = array('小鸡炖蘑菇', '宝塔震河妖', '粒粒皆辛苦');
			$show  = $array[rand(0, 2)];
			break;
		default:
			$show = '( ⊙o⊙?)不懂,你可以尝试说:hello,name,time,再见,天王盖地虎.';
			$show = $t;
	}
	$websocket->write_all($sign, 'Robot:'.$show);
}

/**
 * 创建类websocket($config);
 * $config结构:
 * $config=array(
 * 'address'=>'192.168.0.200',//绑定地址
 * 'port'=>'8000',//绑定端口
 * 'event'=>'WSevent',//回调函数的函数名
 * 'log'=>true,//命令行显示记录
 * );
 *
 * 回调函数返回数据格式
 * function WSevent($type,$event)
 *
 * $type字符串 事件类型有以下三种
 * in  客户端进入
 * out 客户端断开
 * msg 客户端消息到达
 * 均为小写
 *
 * $event 数组
 * $event['k']内置用户列表的userid;
 * $event['sign']客户标示
 * $event['msg']收到的消息 $type='msg'时才有该信息
 *
 * 方法:
 * run()运行
 * search(标示)遍历取得该标示的id
 * close(标示)断开连接
 * write(标示,信息)推送信息
 * idwrite(id,信息)推送信息
 *
 * 属性:
 * $users 客户列表
 * 结构:
 * $users=array(
 * [用户id]=>array('socket'=>[标示],'hand'=[是否握手-布尔值]),
 * [用户id]=>arr.....
 * )
 */
class websocket {

	public $log;
	public $event;
	public $signets;
	public $users = [];
	public $master;
	public $sockets = [];

	public function dump_obj()
	{
		var_dump('users:');
		var_dump($this->users);
		var_dump('master:');
		var_dump($this->master);
		var_dump('sockets:');
		var_dump($this->sockets);
	}

	public function __construct($config)
	{
		if (substr(php_sapi_name(), 0, 3) !== 'cli')
		{
			die("请通过命令行模式运行!");
		}
		error_reporting(E_ALL);
		set_time_limit(0);
		ob_implicit_flush();
		$this->event   = $config['event'];
		$this->log     = $config['log'];
		$this->master  = $this->WebSocket($config['address'], $config['port']);
		$this->sockets = array('s' => $this->master);
	}

	function WebSocket($address, $port)
	{
		// 新建一个套接字（套接字是 socket的翻译，个人理解为创建一个长连接） 三个参数 ipv4 套接字类型 具体协议
		// 创建并返回一个套接字，也称作一个通讯节点。一个典型的网络连接由 2 个套接字构成，一个运行在客户端，另一个运行在服务器端。
		$server = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
		if ( ! $server)
		{
			echo("create socket 失败: ".socket_strerror(socket_last_error()).'----'.socket_clear_error());
			exit;
		}
		// 设置套接字的协议 的级别属性什么的
		socket_set_option($server, SOL_SOCKET, SO_REUSEADDR, 1);
		// 给socket绑定主机和端口（设置socket套接字资源地址），这样客户端才能通过主机和端口连接
		if ( ! socket_bind($server, $address, $port))
		{
			echo 'In bind process:'.socket_strerror(socket_last_error($server));
			exit;
		}
		// 监听套接字上的连接
		socket_listen($server);
		$this->log('开始监听: '.$address.' : '.$port);

		return $server;
	}

	function run()
	{
		$j = 0;
		while (TRUE)
		{
			output('*********jjjjj---'.$j ++);
			$changes = $this->sockets;
			// 在指定的超时时间内，运行select()系统调用数组参数内的套接字，用于确定一个或多个套接字的状态，
			// 对每一个套接字，调用者可查询它的可读性、可写性及错误状态信息，第四、五个参数用来设置select()的等待时间，秒，毫秒
			// 第四个参数为0，认为是非阻塞的，适用于轮询；为null 是为阻塞的，会一直等待到有一个 套接字 满足条件

			@socket_select($changes, $write = NULL, $except = NULL, NULL);
			$this->dump_obj();
			$i = 0;
			foreach ($changes as $sign)
			{
				output('*****************i---'.$i ++);
				if ($sign == $this->master)
				{
					// 接受一个套接字连接，成功返回一个新的套接字的信息资源，失败返回false
					$client          = socket_accept($this->master);
					$this->sockets[] = $client;
					$user            = array(
						'socket' => $client,
						'hand'   => FALSE,
					);
					$this->users[]   = $user;
					$k               = $this->search($client);
					$eventreturn     = array('k' => $k, 'sign' => $sign);
					$this->eventoutput('in', $eventreturn);
				}
				else
				{
					$buffer = NULL;
					$len    = @socket_recv($sign, $buffer, 2048, 0);
					output($buffer);
					output($len);
					$k = $this->search($sign);
					output($k);
					$user = $this->users[$k];
					if ($len < 7)
					{
						$this->close($sign);
						$eventreturn = array('k' => $k, 'sign' => $sign);
						$this->eventoutput('out', $eventreturn);
						continue;
					}
					output('hand---');
					output($this->users[$k]['hand']);
					if ( ! $this->users[$k]['hand'])
					{//没有握手进行握手
						$this->handshake($k, $buffer);
					}
					else
					{
						$buffer      = $this->uncode($buffer);
						$eventreturn = array('k' => $k, 'sign' => $sign, 'msg' => $buffer);
						$this->eventoutput('msg', $eventreturn);
					}
				}
			}
		}
	}

	function search($sign)
	{//通过标示遍历获取id
		foreach ($this->users as $k => $v)
		{
			if ($sign == $v['socket'])
			{
				return $k;
			}
		}

		return FALSE;
	}

	function close($sign)
	{//通过标示断开连接
		$k = array_search($sign, $this->sockets);
		socket_close($sign);
		unset($this->sockets[$k]);
		unset($this->users[$k]);
	}

	function handshake($k, $buffer)
	{
		$buf         = substr($buffer, strpos($buffer, 'Sec-WebSocket-Key:') + 18);
		$key         = trim(substr($buf, 0, strpos($buf, "\r\n")));
		$new_key     = base64_encode(sha1($key."258EAFA5-E914-47DA-95CA-C5AB0DC85B11", TRUE));
		$new_message = "HTTP/1.1 101 Switching Protocols\r\n";
		$new_message .= "Upgrade: websocket\r\n";
		$new_message .= "Sec-WebSocket-Version: 13\r\n";
		$new_message .= "Connection: Upgrade\r\n";
		$new_message .= "Sec-WebSocket-Accept: ".$new_key."\r\n\r\n";
		socket_write($this->users[$k]['socket'], $new_message, strlen($new_message));
		$this->users[$k]['hand'] = TRUE;

		return TRUE;
	}

	function uncode($str)
	{
		$mask = array();
		$data = '';
		$msg  = unpack('H*', $str);
		$head = substr($msg[1], 0, 2);
		if (hexdec($head{1}) === 8)
		{
			$data = FALSE;
		}
		else
		{
			if (hexdec($head{1}) === 1)
			{
				$mask[] = hexdec(substr($msg[1], 4, 2));
				$mask[] = hexdec(substr($msg[1], 6, 2));
				$mask[] = hexdec(substr($msg[1], 8, 2));
				$mask[] = hexdec(substr($msg[1], 10, 2));
				$s      = 12;
				$e      = strlen($msg[1]) - 2;
				$n      = 0;
				for ($i = $s; $i <= $e; $i += 2)
				{
					$data .= chr($mask[$n % 4] ^ hexdec(substr($msg[1], $i, 2)));
					$n ++;
				}
			}
		}

		return $data;
	}

	function code($msg)
	{
		$msg      = preg_replace(array('/\r$/', '/\n$/', '/\r\n$/',), '', $msg);
		$frame    = array();
		$frame[0] = '81';
		$len      = strlen($msg);
		$frame[1] = $len < 16 ? '0'.dechex($len) : dechex($len);
		$frame[2] = $this->ord_hex($msg);
		$data     = implode('', $frame);

		return pack("H*", $data);
	}

	function ord_hex($data)
	{
		$msg = '';
		$l   = strlen($data);
		for ($i = 0; $i < $l; $i ++)
		{
			$msg .= dechex(ord($data{$i}));
		}

		return $msg;
	}

	function idwrite($id, $t)
	{//通过id推送信息
		if ( ! $this->users[$id]['socket'])
		{
			return FALSE;
		}//没有这个标示
		$t = $this->code($t);

		return socket_write($this->users[$id]['socket'], $t, strlen($t));
	}

	function write($k, $t)
	{//通过标示推送信息
		$t = $this->code($t);

		return socket_write($k, $t, strlen($t));
	}

	// 给所有人发送消息
	function write_all($k, $t)
	{//通过标示推送信息
		$t = $this->code($t);
		foreach ($this->users as $user)
		{
//			if ($user['hand'])
			{
				socket_write($user['socket'], $t, strlen($t));
			}
		}

		return TRUE;
	}

	function eventoutput($type, $event)
	{//事件回调
		call_user_func($this->event, $type, $event);
	}

	function log($t)
	{//控制台输出
		if ($this->log)
		{
			$t = $t."\r\n";
			fwrite(STDOUT, iconv('utf-8', 'gbk//IGNORE', $t));
		}
	}
}