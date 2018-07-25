<?php
error_reporting(E_ALL ^ E_NOTICE);
ob_implicit_flush();
phpinfo();die;
require __DIR__.'./../../tool/functions.php';

$address = '127.0.0.1';
$port    = 9111;

$server1 = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
//	$server2 = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
output('start to connect socker server');
$client1 = @socket_connect($server1, $address, $port);
//	$client2 = socket_connect($server2, $address, $port);
output('client-1---'.$client1);
//	output('client-2---'.$client2);
if ( ! $client1)
{
	output('error, can not connect');
	exit;
}
$limit = 5;
for ($i = 1; $i <= $limit; $i ++)
{
	$content = 'aaa'.$i;
	output($i.'-----send to server: '.$content);
	$out     = "GET / HTTP/1.1\r\n";
	$out     .= "Host: 127.0.0.1\r\n";
	$out     .= "Connection: Close\r\n\r\n";
	$content = $out;
	$ret1    = @socket_write($server1, $content, strlen($content));
//	$ret2 = @socket_write($server2, $content, strlen($content));
	output($i.'client-1 -message sending status:'.($ret1 ? 'success' : 'fail'));
//	output($i.'client-2 -message sending status:'.($ret2 ? 'success' : 'fail'));

	$out = @socket_read($server1, 2048);
	output('receive:'.$out);
}