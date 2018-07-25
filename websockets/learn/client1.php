<?php
error_reporting(E_ALL ^ E_NOTICE);
ob_implicit_flush();

require __DIR__.'./../../tool/functions.php';

$address = '127.0.0.1';
$port    = 9111;

$fp = fsockopen($address,$port);

$out = "GET / HTTP/1.1\r\n";
$out .= "Host: www.example.com\r\n";
$out .= "Connection: Close\r\n\r\n";

fwrite($fp,$out);

fclose($fp);