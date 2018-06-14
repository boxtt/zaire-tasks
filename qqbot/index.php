<?php
require './../tool/functions.php';
header('Content-Type: text/html; charset=utf-8');

$user_agent = get_user_agent();

$url_sig           = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin';
$url_sig_query     = [
	'daid'           => '164',
	'target'         => 'self',
	'style'          => '40',
	'pt_disable_pwd' => '1',
	'mibao_css'      => 'm_webqq',
	'appid'          => '501004106',
	'enable_qlogin'  => '0',
	'no_verifyimg'   => '1',
	's_url'          => 'http://web2.qq.com/proxy.html',
	'f_url'          => 'loginerroralert',
	'strong_login'   => '1',
	'login_state'    => '10',
	't'              => '20131024001',
];
$url_sig_query_str = http_build_query($url_sig_query);
$url_sig_all       = $url_sig.'?'.$url_sig_query_str;
$login_sig         = get_web_qq_cookie($url_sig_all, $user_agent, 'pt_login_sig');

/*// 获取登录二维码图片
$start_url = 'http://web2.qq.com/';
$re        = get_ssl_page($start_url);
dump($re);
die('ok');*/

// 获取ptqrtoken参数
$url_get_token           = 'https://ssl.ptlogin2.qq.com/ptqrshow';
$url_get_token_query     = [
	'appid'      => '501004106',
	'e'          => '2',
	'l'          => 'M',
	's'          => '3',
	'd'          => '72',
	'v'          => '4',
	't'          => strval(random()),
	'daid'       => '164',
	'pt_3rd_aid' => '0',
];
$url_get_token_query_str = http_build_query($url_get_token_query);
$url_get_token_all       = $url_get_token.'?'.$url_get_token_query_str;
$qrsig                   = get_web_qq_cookie($url_get_token_all, $user_agent, 'qrsig');

$ptqrtoken = hash33($qrsig);

$url_get_ticket = 'https://ssl.ptlogin2.qq.com/ptqrlogin';
$query_data     = [
	'ul'         => 'http://web2.qq.com/proxy.html', // 不变
	// 从这个网站获取set-cookie的 qrsig字段 然后在js里面加密  $.str.hash33($.cookie.get("qrsig"))
	// https://ssl.ptlogin2.qq.com/ptqrshow
	// ?appid=501004106
	// &e=2
	// &l=M
	// &s=3
	// &d=72
	// &v=4
	// &t=0.8274302217884086 // js里面的Math.random() 获取随机数
	// &daid=164
	// &pt_3rd_aid=0
	'ptqrtoken'  => $ptqrtoken, // 这是会变化的
	'ptredirect' => '0', // 不变
	'h'          => '1', // 不变
	't'          => '1', // 不变
	'g'          => '1', // 不变
	'from_ui'    => '1', // 不变
	'ptlang'     => '2052', // 不变
	'action'     => '0-0-'.get_total_millisecond(), // 0-0-时间戳后加三位，感觉应该是微妙
	'js_ver'     => '10270', // 不变
	'js_type'    => '1', // 不变
	// 每次刷新的时候会变化，从
	//https://xui.ptlogin2.qq.com/cgi-bin/xlogin
	//?daid=164
	//&target=self
	//&style=40
	//&pt_disable_pwd=1
	//&mibao_css=m_webqq
	//&appid=501004106
	//&enable_qlogin=0
	//&no_verifyimg=1
	//&s_url=http%3A%2F%2Fweb2.qq.com%2Fproxy.html
	//&f_url=loginerroralert
	//&strong_login=1
	//&login_state=10
	//&t=20131024001
	// 这个网站里面的响应头里面获取set-cookie字段
	'login_sig'  => $login_sig,
	'pt_uistyle' => '40', // 不变
	'aid'        => '501004106', // 不变
	'daid'       => '164', // 不变
	'mibao_css'  => 'm_webqq', // 不变
];

$query_str          = http_build_query($query_data);
$url_get_ticket_all = $url_get_ticket.'?'.$query_str;

$re = get_ssl_page($url_get_ticket_all, $user_agent);

dump($re);

function get_web_qq_cookie($url, $user_agent, $cookie_key = 'pt_login_sig')
{
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		':authority: xui.ptlogin2.qq.com',
		':method: GET',
		':path: /cgi-bin/xlogin?daid=164&target=self&style=40&pt_disable_pwd=1&mibao_css=m_webqq&appid=501004106&enable_qlogin=0&no_verifyimg=1&s_url=http%3A%2F%2Fweb2.qq.com%2Fproxy.html&f_url=loginerroralert&strong_login=1&login_state=10&t=20131024001',
		':scheme: https',
		'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'accept-encoding: gzip, deflate, br',
		'accept-language: zh-CN,zh;q=0.9',
		'cache-control: no-cache',
		'pragma: no-cache',
		'referer: http://web2.qq.com/',
		'upgrade-insecure-requests: 1',
		'User-Agent:'.$user_agent,
	]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查

	// 只获取响应头就行了
	curl_setopt($ch, CURLOPT_HEADER, TRUE);
//	curl_setopt($ch, CURLOPT_NOBODY, TRUE);

	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
	$result = curl_exec($ch);
//	return $result;

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
			if ($k == 'Set-Cookie')
			{
				list($kk, $vv) = explode('=', $v, 2);
				if (trim($kk) == $cookie_key)
				{
					$e = strpos($vv, ';');
					if ($e == FALSE)
					{
						return $vv;
					}
					else
					{
						return substr($vv, 0, $e);
					}
				}
			}
			if (isset($headers[$k]))
			{
				$headers[$k] .= ';'.$v;
			}
			else
			{
				$headers[$k] = $v;
			}
		}
	}
	$cookie_tmp = $headers['Set-Cookie'];

	return '';

	return $cookie_tmp;
}

function random($min = 0, $max = 1)
{
	return $min + mt_rand() / mt_getrandmax() * ($max - $min);
}

function hash33($qrsig)
{
	$length = strlen($qrsig);
	for ($i = 0, $e = 0; $i < $length; $i ++)
	{
		$e += ($e << 5) + charCodeAt($qrsig, $i);
	}
	$ptqrtoken = 2147483647 & $e;

	return $ptqrtoken;
}

/**
 * function hash33(t){
 * for (var e = 0, i = 0, n = t.length; i < n; ++i)
 * e += (e << 5) + t.charCodeAt(i);
 * return 2147483647 & e
 * }
 */
