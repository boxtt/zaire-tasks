<?php
try
{
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
	$url_sig_all       = $url_sig.'?'.$url_sig_query_str.'&';
	$cookies_xlogin    = get_web_qq_xlogin_cookie($url_sig_all, $user_agent);
	$login_sig         = get_arr($cookies_xlogin, 'pt_login_sig');
	dump($cookies_xlogin);

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
//	$qrsig                   = get_web_qq_cookie($url_get_token_all, $user_agent, 'qrsig');
	$cookies_ptqrshow = get_web_qq_ptqrshow_cookie($url_get_token_all, $user_agent, $cookies_xlogin);

	dump($cookies_ptqrshow);
	$qrsig     = $cookies_ptqrshow['qrsig'];
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
		//&s_url=http://web2.qq.com/proxy.html
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
	$url_get_ticket_all = $url_get_ticket.'?'.$query_str.'&';

//	$re = get_ssl_page($url_get_ticket_all, $user_agent);
	$cookies = array_merge($cookies_ptqrshow, $cookies_xlogin);
	$re      = get_web_qq_ptqrlogin_result($url_get_ticket_all, $user_agent, $cookies);

	dump($re);
}
catch (Exception $e)
{
	echo 'code: '.$e->getCode().'---message:'.$e->getMessage();
}

function get_web_qq_cookie($url, $user_agent, $cookie_key = 'pt_login_sig')
{
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		':authority: xui.ptlogin2.qq.com',
		':method: GET',
		':path: /cgi-bin/xlogin?daid=164&target=self&style=40&pt_disable_pwd=1&mibao_css=m_webqq&appid=501004106&enable_qlogin=0&no_verifyimg=1&s_url=http://web2.qq.com/proxy.html&f_url=loginerroralert&strong_login=1&login_state=10&t=20131024001',
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

function get_web_qq_xlogin_cookie($url, $user_agent)
{
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		':authority: xui.ptlogin2.qq.com',
		':method: GET',
		':path: /cgi-bin/xlogin?daid=164&target=self&style=40&pt_disable_pwd=1&mibao_css=m_webqq&appid=501004106&enable_qlogin=0&no_verifyimg=1&s_url=http://web2.qq.com/proxy.html&f_url=loginerroralert&strong_login=1&login_state=10&t=20131024001',
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
	$cookies    = [];
	foreach ($header_arr as $value)
	{
		$value = trim($value);
		if ($value && strpos($value, ':') !== FALSE)
		{
			list($k, $v) = explode(':', $value, 2);
			$k = strtolower(trim($k));
			$v = trim($v);
			if ($k == 'set-cookie')
			{
				list($kk, $vv) = explode('=', $v, 2);

				$e = strpos($vv, ';');
				if ($e == FALSE)
				{
					$cookies[$kk] = $vv;
				}
				else
				{
					$cookies[$kk] = substr($vv, 0, $e);
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

	return $cookies;

	return $cookie_tmp;
}

function get_web_qq_ptqrshow_cookie($url, $user_agent, $cookies)
{
	$cookies_str = '';
	foreach ($cookies as $k => $v)
	{
		$cookies_str .= (empty($cookies_str) ? '' : ';').' '.$k.'='.$v;
	}
	echo 'pt_recent_uins=7cc5615e8dc81b5acce1e7b9a5b536d98dcd19f6ad414d4e8376505bd874ee98e274c7f61cdd405e0895e3a6dc0292fdcccb19a31052c589; pgv_pvi=1467439104; pgv_si=s6066922496; pt_login_sig=6qkAvxRzQEhipQEDhR5Z8qdAIV*sgxVeLRx3-gxwz0EvaMYd5xzcnDSgCoJSWYDY; pt_clientip=182a733c3e8fe832; pt_serverip=60ba0abf0e2fa64e; pt_local_token=631721263; uikey=b85c619f5c4f52a10833e962dbe5e935c49d94e4c18b8e34518e3e13e6d694c2; pt_guid_sig=4db7ca142db890dfc4ae51e03985e31f0a1cb8e4c91ce7d4fe811821c6cc701d; qrsig=-nTnFOuFYw9nYN7dRAkE-7s0OE9YA4WHX3UBLT67V2DIiBmsaGWRJjKjK4-HthDP';
	echo '<hr/>';
	echo $cookies_str;
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		':authority: xui.ptlogin2.qq.com',
		':method: GET',
		':path: /cgi-bin/xlogin?daid=164&target=self&style=40&pt_disable_pwd=1&mibao_css=m_webqq&appid=501004106&enable_qlogin=0&no_verifyimg=1&s_url=http://web2.qq.com/proxy.html&f_url=loginerroralert&strong_login=1&login_state=10&t=20131024001',
		':scheme: https',
		'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'accept-encoding: gzip, deflate, br',
		'accept-language: zh-CN,zh;q=0.9',
		'cache-control: no-cache',
		'cookie: '.$cookies_str,
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
	$cookies    = [];
	foreach ($header_arr as $value)
	{
		$value = trim($value);
		if ($value && strpos($value, ':') !== FALSE)
		{
			list($k, $v) = explode(':', $value, 2);
			$k = strtolower(trim($k));
			$v = trim($v);
			if ($k == 'set-cookie')
			{
				list($kk, $vv) = explode('=', $v, 2);

				$e = strpos($vv, ';');
				if ($e == FALSE)
				{
					$cookies[$kk] = $vv;
				}
				else
				{
					$cookies[$kk] = substr($vv, 0, $e);
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

	return $cookies;

	return $cookie_tmp;
}

function get_web_qq_ptqrlogin_result($url, $user_agent, $cookies)
{
	$cookies_str = '';
	foreach ($cookies as $k => $v)
	{
		$cookies_str .= (empty($cookies_str) ? '' : ';').' '.$k.'='.$v;
	}
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		':authority: ssl.ptlogin2.qq.com',
		':method: GET',
		':path: /ptqrlogin?u1='.$url,
		':scheme: https',
		'accept: */*',
		'accept-encoding: gzip, deflate, br',
		'accept-language: zh-CN,zh;q=0.9',
		'cache-control: no-cache',
		'cookie: '.$cookies_str,
		'pragma: no-cache',
		'referer: https://xui.ptlogin2.qq.com/cgi-bin/xlogin?daid=164&target=self&style=40&pt_disable_pwd=1&mibao_css=m_webqq&appid=501004106&enable_qlogin=0&no_verifyimg=1&s_url=http://web2.qq.com/proxy.html&f_url=loginerroralert&strong_login=1&login_state=10&t=20131024001',
		'User-Agent:'.$user_agent,
	]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查

	curl_setopt($ch, CURLOPT_HEADER, FALSE);

	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
	$result = curl_exec($ch);

	return $result;
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
