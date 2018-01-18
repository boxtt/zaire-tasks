<?php
require './functions.php';
$url        = 'http://www.luckyairship.com/history.html';
$user_agent = get_user_agent();
$cookie     = get_cookie_new($url, $user_agent);
$html       = get_html($url, $user_agent, $cookie);

/**
 *
 *;
 * q = 0.8
 * Accept - Encoding:gzip, deflate
 * Accept - Language:zh - CN,zh;q = 0.9
 * Cache - Control:no - cache
 * Connection:keep - alive
 * Host:www.luckyairship.com
 * Pragma:no - cache
 * Upgrade - Insecure - Requests:1
 * User - Agent:Mozilla / 5.0 (Windows NT 6.1; Win64; x64) AppleWebKit / 537.36 (KHTML, like Gecko) Chrome / 63.0.3239.132 Safari
 * / 537.36
 **/
function get_cookie_new($url, $user_agent)
{
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding:gzip, deflate',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Cache-Control:no-cache',
		'Connection:keep-alive',
		'Host:www.luckyairship.com',
		'Pragma:no-cache',
		'Upgrade-Insecure-Requests:1',
		'User-Agent:'.$user_agent,
	]);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查
	// 只获取响应头就行了
	curl_setopt($ch, CURLOPT_HEADER, TRUE);
	curl_setopt($ch, CURLOPT_NOBODY, TRUE);

	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
	$result = curl_exec($ch);

	// 获得响应结果里的：头大小
	$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	curl_close($ch);
	// 根据头大小去获取头信息内容
	$header = substr($result, 0, $headerSize);

	$header_arr = explode(PHP_EOL, $header);
	$headers    = [];
	foreach ($header_arr as $value)
	{
		$value = trim($value);
		if ($value && strpos($value, ':') !== FALSE)
		{
			list($k, $v) = explode(':', $value, 2);
			$headers[$k] = $v;
		}
	}
	$cookie_tmp = $headers['Set-Cookie'];

	return $cookie_tmp;
}

function get_html($url, $user_agent, $cookie)
{
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:text / html,application / xhtml + xml,application / xml;q = 0.9,image / webp,image / apng,*/*;q=0.8',
//		'Accept-Encoding:gzip, deflate',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Cache-Control:no-cache',
		'Connection:keep-alive',
		'Cookie:'.$cookie,
		'Host:www.luckyairship.com',
		'Pragma:no-cache',
		'Upgrade-Insecure-Requests:1',
		'User-Agent:'.$user_agent,
	]);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查

	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
	$result = curl_exec($ch);

	return $result;
}