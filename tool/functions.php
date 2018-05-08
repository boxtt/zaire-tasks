<?php

// 设置时区为上海
ini_set('date.timezone', 'Asia/Shanghai');
if ( ! function_exists('array_column'))
{
	/**
	 * 这个函数上就是因为php5.3没有这个函数，所以自己实现
	 *
	 * @param array    $array 数组
	 * @param   string $key   指定要获取的二维数组的列
	 * @param  string  $value 指定作为键的列
	 *
	 * @return array $return
	 */
	function array_column(array $array, $key, $value = NULL)
	{
		$return = array();
		foreach ($array as $one)
		{
			if (array_key_exists($key, $one))
			{
				if ($value && array_key_exists($value, $one))
				{
					$return[$one[$value]] = $one[$key];
				}
				else
				{
					$return[] = $one[$key];
				}
			}
		}

		return $return;
	}
}

/**
 * 获取代理的ip和端口
 * @return mixed
 */
function get_ip()
{
	// http代理和https代理是不一样的
//	curl_setopt($ch, CURLOPT_PROXY, $ip);
//	curl_setopt($ch, CURLOPT_PROXYPORT, $port);
////curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
//	curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式
	$ip_port = [
		['118.114.77.47', '8080'],
		['116.27.245.37', '808'],
		['117.65.41.76', '42421'],
		['39.134.161.14', '8080'],
		['125.210.121.113', '3128'],
		['27.36.116.226', '3128'],
		['218.56.132.158', '8080'],
		['47.52.252.4', '3128'],
		['61.155.164.110', '3128'],
		['207.154.231.209', '1080'],
		['124.193.33.233', '3128'],
		['111.2.122.46', '8080'],
		['218.56.132.156', '8080'],
		['111.2.122.46', '8080'],
		['218.56.132.156', '8080'],
		['60.214.155.243', '53281'],
		['125.211.202.26', '53281'],
		['27.42.185.16', '9797'],
		['219.138.58.42', '3128'],
		['120.77.201.46', '8080'],
		['58.83.218.186', '80'],
		['113.106.94.213', '80'],
		['101.6.51.61', '8123'],
		['183.51.191.146', '9999'],
		['183.163.46.24', '42421'],
		['58.83.218.186', '80'],
		['120.55.61.182', '80'],
		['60.208.44.228', '80'],
		['106.39.179.86', '80'],
		['125.89.53.73', '9797'],
	];

	return $ip_port[0];

	return $ip_port[array_rand($ip_port)];
}

//************************************************************************************************start
// 为了破解百度云盘

// 讲10进制改成 36进制，可以让26个英文字母也排列好，为了破解百度云盘的四位验证码
function get_str($i)
{
	$n   = base_convert($i, 10, 36);
	$n   = str_pad($n, 4, 0, STR_PAD_LEFT);
	$arr = str_split($n, 1);
	$str = implode('', $arr);

	return $str;
}

// 访问fanyi.baidu.com获取cookie
function get_cookie($url, $user_agent, $ip = NULL, $port = NULL)
{
	// 根据地址获取百度网盘的真正地址
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding:gzip, deflate, br',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Connection:keep-alive',
		'Host:pan.baidu.com',
		'Upgrade-Insecure-Requests:1',
		'User-Agent:'.$user_agent,
	]);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查
	// 只获取响应头就行了
	curl_setopt($ch, CURLOPT_HEADER, TRUE);
	curl_setopt($ch, CURLOPT_NOBODY, TRUE);

	if ($ip && $port)
	{
		curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC); //代理认证模式
		curl_setopt($ch, CURLOPT_PROXY, $ip.':'.$port);
//	curl_setopt($ch, CURLOPT_PROXYPORT, $port);
////curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
		curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式
	}

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

	return $cookie_tmp;
}

// 获取盘百度网盘的结果
function get_pan($url, $cookie_tmp, $user_agent, $pwd = '', $vcode_str = '', $h, $ip = NULL, $port = NULL)
{
	/*if ($headers['Set-Cookie'])
	{
		$cookies = $headers['Set-Cookie'];
		$cookies = explode(';', $cookies);
		$cookie  = [];
		foreach ($cookies as $value)
		{
			$value = trim($value);
			if ($value && strpos($value, '=') !== FALSE)
			{
				list($k, $v) = explode('=', $value, 2);
				setcookie($k, $v);
				$cookie[$k] = $v;
			}
		}
	}*/
	$surl       = substr($url, - 7);
	$t          = get_total_millisecond();
	$data       = [
		'pwd'       => $pwd,
		'vcode'     => $pwd,
		'vcode_str' => $vcode_str,
	];
	$data       = http_build_query($data);
	$verify_url = 'http://pan.baidu.com/share/verify?';
	$verify_url .= 'surl='.$surl;
	$verify_url .= '&t='.$t;
	$verify_url .= '&bdstoken=null';
	$verify_url .= '&channel=chunlei';
	$verify_url .= '&clienttype=0';
	$verify_url .= '&web=1';
	$verify_url .= '&app_id=250528';
	$verify_url .= '&logid=MTUxNDQzMTk1NzA0NjAuNTQzNjA4ODMwNDk3MzIwMw==';
	$ch         = curl_init($verify_url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:*/*',
		'Accept-Encoding:gzip, deflate, br',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Cache-Control:no-cache',
		'Connection:keep-alive',
		//		'Content-Length:26',
		'Content-Type:application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie:'.$cookie_tmp,
		'Host:pan.baidu.com',
		'Origin:https://pan.baidu.com',
		'Pragma:no-cache',
		'Referer:https://pan.baidu.com/share/init?surl='.$surl,
		'User-Agent:'.$user_agent,
		'X-Requested-With:XMLHttpRequest',
	]);
//	curl_setopt($ch, CURLOPT_HEADER, TRUE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_POST, TRUE);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

	if ($ip && $port)
	{
		curl_setopt($ch, CURLOPT_PROXY, $ip);
		curl_setopt($ch, CURLOPT_PROXYPORT, $port);
//curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
		curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式
	}

//	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept-Encoding: gzip, deflate'));
	curl_setopt($ch, CURLOPT_ENCODING, 'gzip,deflate');
	curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
	$result = curl_exec($ch);

	// 获得响应结果里的：头大小
//	$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	// 根据头大小去获取头信息内容
//	$header = substr($result, 0, $headerSize);
//	$result = substr($result, $headerSize);

//	$header_arr = explode(PHP_EOL, $header);
//	$headers    = [];
//	foreach ($header_arr as $value)
//	{
//		$value = trim($value);
//		if ($value && strpos($value, ':') !== FALSE)
//		{
//			list($k, $v) = explode(':', $value, 2);
//			$headers[$k] = $v;
//		}
//	}
	curl_close($ch);

	return $result;
	/*
	 * {"errno":-9,"err_msg":"","request_id":4817706520363686291}        //密码错误
	{"errno":-62,"request_id":206026661042873124}                        //要验证码了
	{"errno":0,"err_msg":"","request_id":4817740255807962253}        //密码正确
		-12 好像是位数不正确
		0:成功;
	-1:由于您分享了违反相关法律法规的文件，分享功能已被禁用，之前分享出去的文件不受影响。;
	-2:用户不存在;请刷新页面后重试;-3:文件不存在;请刷新页面后重试;
	-4:登录信息有误，请重新登录试试;
	-5:登录信息有误，请重新登录试试;
	-6:请重新登录;
	-7:该分享已删除或已取消;
	-8:该分享已经过期;
	-9:访问密码错误;
	-10:分享外链已经达到最大上限100000条，不能再次分享;
	-11:验证cookie无效;
	-14:对不起，短信分享每天限制20条，你今天已经分享完，请明天再来分享吧！;
	-15:对不起，邮件分享每天限制20封，你今天已经分享完，请明天再来分享吧！;
	-16:对不起，该文件已经限制分享！;
	-17:文件分享超过限制;
	-19:验证码输入错误，请重试;
	-20:请求验证码失败，请重试;
	-21:未绑定手机或邮箱，没有权限私密分享;
	-22:被分享的文件无法重命名，移动等操作;
	-30:文件已存在;
	-31:文件保存失败;
	-32:你的空间不足了哟，赶紧购买空间吧;
	-33:一次支持操作999个，减点试试吧;
	-40:热门推荐失败;
	-60:相关推荐数据异常;
	-62:密码输入次数达到上限;
	-64:描述包含敏感词;
	-70:你分享的文件中包含病毒或疑似病毒，为了你和他人的数据安全，换个文件分享吧;
	1:服务器错误;
	2:参数错误;
	3:未登录或帐号无效;
	4:存储好像出问题了，请稍候再试;
	12:批量处理错误;
	14:网络错误，请稍候重试;
	15:操作失败，请稍候重试;
	16:网络错误，请稍候重试;
	105:创建链接失败，请重试;
	106:'文件读取失败，请<ahref=javascript:window.location.reload();>刷新</a>页面后重试';
	108:文件名有敏感词，优化一下吧;
	110:您今天分享太多了，24小时后再试吧;
	111:外链转存失败，请稍候重试;
	112:'页面已过期，请<ahref=javascript:window.location.reload();>刷新</a>后重试';
	113:外链签名有误;
	114:当前任务不存在，保存失败;
	115:该文件禁止分享;
	116:分享不存在;117:分享已经过期;2126:文件名中含有敏感词;
	2135:对方拒绝接收消息;2102:群组不存在;2103:你已退出该群;
	9100:'你的帐号存在违规行为，已被冻结，<ahref=/disk/appeal>查看详情</a>';
	9200:'你的帐号存在违规行为，已被冻结，<ahref=/disk/appeal>查看详情</a>';
	9300:'你的帐号存在违规行为，该功能暂被冻结，<ahref=/disk/appeal>查看详情</a>';
	9400:'你的帐号异常，需验证后才能使用该功能，<ahref=/disk/appeal>立即验证</a>';
	9500:'您的帐号存在安全风险，已进入保护模式，请修改密码后使用;<a
		 */
}

// 如果需要验证的话，获取验证码，但是我发现验证码可以随便填
function get_code($cookie, $ip, $port)
{
	$curl = curl_init();
	curl_setopt_array($curl, array(
		CURLOPT_URL            => "https://pan.baidu.com/api/getcaptcha?prod=shareverify&web=1,1&t=0.17097459915762636&bdstoken=190ef621ed867f40947197f283e8ce63&channel=chunlei&clienttype=0&app_id=250528&logid=MTUxNTAzNjcyNDU2MDAuOTczNTMzMjA2MzQ1MzA2NA==",
		CURLOPT_RETURNTRANSFER => TRUE,
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
		CURLOPT_PROXY          => $ip,
		CURLOPT_PROXYPORT      => $port,
		//curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
		CURLOPT_PROXYTYPE      => CURLPROXY_HTTP, //使用http代理模式
		CURLOPT_ENCODING       => "",
		CURLOPT_MAXREDIRS      => 10,
		CURLOPT_TIMEOUT        => 5,
		CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST  => "GET",
		CURLOPT_HTTPHEADER     => array(
			"Cookie:$cookie",
			"Accept: application/json, text/javascript, */*; q=0.01",
			"Accept-Encoding: gzip, deflate, br",
			"Accept-Language: zh-CN,zh;q=0.9",
			"Cache-Control: no-cache",
			"Connection: keep-alive",
			"Host: pan.baidu.com",
			"Postman-Token: 28e3df5e-b0ff-1b1c-35ab-bc9dc0bdbe21",
			"Pragma: no-cache",
			"Referer: https://pan.baidu.com/share/init?surl=dEoq2A1",
			"User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36",
			"X-Requested-With: XMLHttpRequest",
		),
	));

	$response = curl_exec($curl);
	$err      = curl_error($curl);

	curl_close($curl);

	if ( ! $err)
	{
		$re = json_decode($response, TRUE);
		if (is_array($re))
		{
			if (isset($re['vcode_str']))
			{
				return $re['vcode_str'];
			}
		}
	}

	return FALSE;
}

//************************************************************************************************end

// 专区西刺代理的免费代理ip
function xici_curl($url)
{
	$time = time();
	list($ip, $port) = get_ip();
	$proxy      = $ip.':'.$port;
	$user_agent = get_user_agent();
	$ch         = curl_init($url);
	curl_setopt($ch, CURLOPT_PROXY, $proxy);
//	curl_setopt($ch, CURLOPT_PROXY, $ip);
//	curl_setopt($ch, CURLOPT_PROXYPORT, $port);
	curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		//		'Accept-Encoding:gzip, deflate',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Cache-Control:no-cache',
		'Host:www.xicidaili.com',
		'Pragma:no-cache',
		'Proxy-Connection:keep-alive',
		//		'Connection:keep-alive',
		'Referer:'.$url,
		'Upgrade-Insecure-Requests:1',
		'User-Agent:'.$user_agent,
		'Content-Type:application/x-www-form-urlencoded; charset=UTF-8',
		/*'Cookie:Hm_lvt_0cf76c77469e965d2957f0553e6ecf59='.($time - 86400 * 4).','.($time - 86400 * 3).','.($time - 86400
			* 2).','.($time - 86400).'; Hm_lvt_c27e828ededac3928c725c1cd6475dbd='.($time - 86400 * 4).','.($time - 86400
			* 3).','.($time - 86400 * 2).','.($time - 86400)
		.'; _free_proxy_session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiJWYwYTM0ZjhjZjNmOTJiMWQ0N2Y5YWViM2M4YTllODA1BjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMUJhWERQNUlOMmNheVkvSE1pd3Z5ME5MbFVnVnp5cFpmRy84Mk1EZFlJMFk9BjsARg%3D%3D--38b9b1f123d1acc14d3f544066a8b9c0b3d2e8b1; Hm_lpvt_0cf76c77469e965d2957f0553e6ecf59='
		.$time.'; Hm_lpvt_c27e828ededac3928c725c1cd6475dbd='.$time,*/
	]);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5);
	$result = curl_exec($ch);
	curl_close($ch);

	return $result;
}

// 返回字符串的毫秒数时间戳
function get_total_millisecond()
{
	$time  = explode(" ", microtime());
	$time  = $time [1].($time [0] * 1000);
	$time2 = explode(".", $time);
	$time  = $time2[0];

	return $time;
}

// 获取随机的user-agent
function get_user_agent()
{
	$user_agent = require './user_agent.php';

	return $user_agent;
}

/**
 * 浏览器友好的变量输出
 *
 * @param mixed   $var    变量
 * @param boolean $echo   是否输出 默认为True 如果为false 则返回输出字符串
 * @param string  $label  标签 默认为空
 * @param boolean $strict 是否严谨 默认为true
 *
 * @return void|string
 */
function dump($var, $echo = TRUE, $label = NULL, $strict = TRUE)
{
	$label = ($label === NULL) ? '' : rtrim($label).' ';
	if ( ! $strict)
	{
		if (ini_get('html_errors'))
		{
			$output = print_r($var, TRUE);
			$output = '<pre>'.$label.htmlspecialchars($output, ENT_QUOTES).'</pre>';
		}
		else
		{
			$output = $label.print_r($var, TRUE);
		}
	}
	else
	{
		ob_start();
		var_dump($var);
		$output = ob_get_clean();
		if ( ! extension_loaded('xdebug'))
		{
			$output = preg_replace('/\]\=\>\n(\s+)/m', '] => ', $output);
			$output = '<pre>'.$label.htmlspecialchars($output, ENT_QUOTES).'</pre>';
		}
	}
	if ($echo)
	{
		echo($output);

		return NULL;
	}
	else
	{
		return $output;
	}
}

/**
 * 即时输出，在命令行模式下
 *
 * @param $string
 */
function output($string)
{
	if (is_array($string))
	{
		var_export($string);
	}
	else
	{
		echo $string;
	}

	if (is_cli())
	{
		echo PHP_EOL;
		flush();
	}
	else
	{
		echo '<br/>';
		ob_flush();
	}
}

/**
 * utf8字符转换成Unicode字符，单个字符
 *
 * @param  string $utf8_str Utf-8字符
 * @param  bool   $opper    是否转化大写
 * @param  string $pre      前缀默认是%u
 *
 * @return string Unicode字符,前边没有%u的
 */
function utf8_str_to_unicode($utf8_str, $opper = TRUE, $pre = '%u')
{
	$unicode = 0;
	$unicode = (ord($utf8_str[0]) & 0x1F) << 12;
	$unicode |= (ord($utf8_str[1]) & 0x3F) << 6;
	$unicode |= (ord($utf8_str[2]) & 0x3F);

	return '%u'.strtoupper(dechex($unicode));
}

/**
 * Unicode字符转换成utf8字符
 *
 * @param  string $unicode_str Unicode字符 前边没有%u的
 *
 * @return string              Utf-8字符
 */
function unicode_to_utf8($unicode_str)
{
	$utf8_str = '';
	$code     = intval(hexdec($unicode_str));
	//这里注意转换出来的code一定得是整形，这样才会正确的按位操作
	$ord_1    = decbin(0xe0 | ($code >> 12));
	$ord_2    = decbin(0x80 | (($code >> 6) & 0x3f));
	$ord_3    = decbin(0x80 | ($code & 0x3f));
	$utf8_str = chr(bindec($ord_1)).chr(bindec($ord_2)).chr(bindec($ord_3));

	return $utf8_str;
}

//************************************************************************************************
// 定时任务的解析

// windows 下按照linux那样解析计划任务，不过需要windows每分钟或者每小时（根据实际情况）运行一次
function tasks()
{
	$_tasks = [
		'test0' => '*/3 * * * *',
		'test1' => '20 * * * *',
	];

	$time = date('m-d-H-i-w');
	$time = explode('-', $time);
	$time = array_map('intval', $time);
	list($m, $d, $h, $i, $w) = $time;
	foreach ($_tasks as $task => $timer)
	{
		$ranges = [];
		$timer  = preg_replace('/\s+/', ' ', $timer);
		$timer  = explode(' ', $timer);
		if (count($timer) != 5)
		{
			continue;
		}
		list($minute, $hour, $day, $month, $week) = $timer;

		// 暂时不支持用月份和星期的英文表示来代替
		$types = [
			'minute' => [0, 59], // minute (0 - 59)
			'hour'   => [0, 23], // hour (0 - 23)
			'day'    => [1, 31], // day of month (1 - 31)
			'month'  => [1, 12], // month(1 - 12) OR jan, feb, mar, apr ...
			'week'   => [0, 7], // day of week (0 - 6) (Sunday=0 or 7)  OR sun,mon,tue,wed,thu,fri,sat
		];

		foreach ($types as $type => $limit)
		{
			list($limit_min, $limit_max) = $limit;
			$ranges_now = [];
			$differ     = 1;
			if (strpos($$type, '/') !== FALSE)
			{
				list($range, $differ) = explode('/', $$type);
				if ($range == '*')
				{
					$range_min = $limit_min;
					$range_max = $limit_max;
				}
				elseif (strpos($range, '-') !== FALSE)
				{
					list($range_min, $range_max) = explode('-', $range);
				}
			}
			elseif ($$type == '*')
			{
				$range_min = $limit_min;
				$range_max = $limit_max;
			}
			elseif (strpos($$type, '-'))
			{
				list($range_min, $range_max) = explode('-', $$type);
			}
			elseif (strpos($$type, ','))
			{
				$ranges_now = explode(',', $$type);
			}
			elseif (is_numeric($$type))
			{
				$ranges_now[] = intval($$type);
			}

			if (isset($range_min) && isset($range_max))
			{
				if ($range_min < $limit_min)
				{
					$range_min = $limit_min;
				}
				if ($range_max > $limit_max)
				{
					$range_max = $limit_max;
				}

				for ($j = intval($range_min); $j <= intval($range_max); $j += $differ)
				{
					$ranges_now[] = $j;
				}
			}
			$ranges_now    = array_map('intval', $ranges_now);
			$ranges[$type] = $ranges_now;
		}

		if (in_array($i, $ranges['minute']) && in_array($h, $ranges['hour']) && in_array($d, $ranges['day'])
			&& in_array($m, $ranges['month'])
			&& in_array($w, $ranges['week']))
		{
			if (method_exists($this, $task))
			{
				$this->$task();
			}
		}
	}
}

function test0()
{
	$h = init_file('tt');
	ll($h, 'test0:'.date('Y-m-d H:i:s', time()));
	close_file($h);
}

function test1()
{
	$h = init_file('tt');
	ll($h, 'test1:'.date('Y-m-d H:i:s', time()));
	close_file($h);
}

//************************************************************************************************

//去掉数字段前面的0
function del0($num)
{
	return "".intval($num);
}

//单个数字变汉字
function n2c($x)
{
	$arr_n = array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");

	return $arr_n[$x];
}

//读取数值（4位）
function num_r($abcd)
{
	$arr      = array();
	$str      = ""; //读取后的汉字数值
	$flag     = 0; //该位是否为零
	$flag_end = 1; //是否以“零”结尾
	$size_r   = strlen($abcd);
	for ($i = 0; $i < $size_r; $i ++)
	{
		$arr[$i] = $abcd{$i};
	}
	$arrlen = count($arr);
	for ($j = 0; $j < $arrlen; $j ++)
	{
		$ch = n2c($arr[$arrlen - 1 - $j]); //从后向前转汉字
//		echo $ch;
//		echo "";
		if ($ch == "零" && $flag == 0)
		{ //如果是第一个零
			$flag = 1; //该位为零
			$str  = $ch.$str; //加入汉字数值字符串
			continue;
		}
		elseif ($ch == "零")
		{ //如果不是第一个零了
			continue;
		}
		$flag = 0; //该位不是零
		switch ($j)
		{
			case 0:
				$str      = $ch;
				$flag_end = 0;
				break; //第一位（末尾），没有以“零”结尾
			case 1:
				$str = $ch."十".$str;
				break; //第二位
			case 2:
				$str = $ch."百".$str;
				break; //第三位
			case 3:
				$str = $ch."千".$str;
				break; //第四位
		}
	}
	if ($flag_end == 1) //如果以“零”结尾
	{
		mb_internal_encoding("UTF-8");
		$str = mb_substr($str, 0, mb_strlen($str) - 1); //把“零”去掉
	}

	return $str;
}

function num2ch($num) //整体读取转换
{
	$num_real = del0($num);//去掉前面的“0”
	$numlen   = strlen($num_real);
//	echo "numlen=".$numlen."";
	if ($numlen >= 9)//如果满九位，读取“亿”位
	{
		$y = substr($num_real, - 9, 1);
//echo $y;
		$wsbq = substr($num_real, - 8, 4);
		$gsbq = substr($num_real, - 4);
		$a    = num_r(del0($gsbq));
		$b    = num_r(del0($wsbq))."万";
		$c    = num_r(del0($y))."亿";
	}
	elseif ($numlen <= 8 && $numlen >= 5) //如果大于等于“万”
	{
		$wsbq = substr($num_real, 0, $numlen - 4);
		$gsbq = substr($num_real, - 4);
		$a    = num_r(del0($gsbq));
		$b    = num_r(del0($wsbq))."万";
		$c    = "";
	}
	elseif ($numlen <= 4) //如果小于等于“千”
	{
		$gsbq = substr($num_real, - $numlen);
		$a    = num_r(del0($gsbq));
		$b    = "";
		$c    = "";
	}
	$ch_num = $c.$b.$a;

	return $ch_num;
}

//************************************************************************************************
// 文件操作类的，记录日志用的
function init_file($surl)
{
	$file = __DIR__ . 'functions.php/' .$surl.'.txt';
	if ( ! is_file($file))
	{
		touch($file);
	}
	else
	{
		file_put_contents($file, '');
	}

	$h = fopen($file, 'w+');

	return $h;
}

function ll($h, $data, $eol = TRUE)
{
	$new_data = json_encode($data);
	$data     = empty($new_data) ? $data : $new_data;
	if ($eol)
	{
		$data .= PHP_EOL;
	}
	output($data);
	fwrite($h, $data);
}

function close_file($h)
{
	fclose($h);
}

function change_file($surl, $start, $end_old, $end_new)
{
	$file_old = $surl.'-'.$start.'-'.$end_old;
	$file_new = $surl.'-'.$start.'-'.$end_new;
	$old      = __DIR__ . 'functions.php/' .$file_old.'.txt';
	$new      = __DIR__ . 'functions.php/' .$file_new.'.txt';
	output('old:'.$old.'--new:'.$new);
	if (file_exists($old))
	{
		if (file_exists($new))
		{
			rename($new, $new.'.bak');
		}
		else
		{
			rename($old, $new);
		}
	}
}

// 获取指定文件夹里面的所有子文件夹和文件
function get_allfiles($path, &$files)
{
    if (is_dir($path))
    {
        $dp = dir($path);
        $file = $dp->read();
        $e = $file!==false?true:false;
        while ($e)
        {
            if ($file != "." && $file != "..")
            {
                get_allfiles($path."/".$file, $files);
            }
        }
        $dp->close();
    }
    if (is_file($path))
    {
        output($path);
        unlink($path);
//		$files[] = $path;
    }
}

function get_filenamesbydir($dir)
{
    $files = array();
    get_allfiles($dir, $files);

    return $files;
}

// 删除空文件夹
function rm_empty_dir($path)
{
    if (is_dir($path) && ($handle = opendir($path)) !== FALSE)
    {
        while (($file = readdir($handle)) !== FALSE)
        {// 遍历文件夹
            if ($file != '.' && $file != '..')
            {
                $curfile = $path.'/'.$file;// 当前目录
                if (is_dir($curfile))
                {// 目录
                    rm_empty_dir($curfile);// 如果是目录则继续遍历
                    if (count(scandir($curfile)) == 2)
                    {//目录为空,=2是因为.和..存在
                        rmdir($curfile);// 删除空目录
                    }
                }
            }
        }
        closedir($handle);
    }
}

//************************************************************************************************

// 判断是否是命令行模式
function is_cli()
{
	// 是否是cli 模式下的
	$sapi_type = php_sapi_name();
	$is_cli    = (substr($sapi_type, 0, 3) == 'cgi') ? FALSE : TRUE;

	return $is_cli;
}

// 获取app端传递来的参数信息，json字典的数据处理
function get_data()
{
	$data = file_get_contents(('php://input'));
	// echo '<pre>';var_dump($data);
	$data = json_decode($data, TRUE);

	// var_dump($data);
	return (array) $data;
}

// 获取命令号脚本的参数或者
function get_param()
{
	$data = [];

	if (is_cli())
	{
		// $_SERVER['argv']里面保存的就是脚本的参数，那么需要
		$argv = $_SERVER['argv'];
		$argc = $_SERVER['argc'];
		$preg = '/^--([\w]+)=([\w]+)/';
		foreach ($argv as $k => $arg)
		{
			if ($k == 0)
			{
				$data['filename'] = $arg;
			}
			elseif (preg_match($preg, $arg, $match))
			{
				if ($match)
				{
					$data[$match[1]] = $match[2];
				}
			}
		}
	}
	else
	{
		$data = $_GET;
	}

	return $data;
}

// 获取数组指定的键
function get_arr(array $arr, $key, $default = NULL)
{
	if (isset($arr[$key]))
	{
		return $arr[$key];
	}

	return $default;
}

// 输出二维数据
function echo_arr($result)
{
	foreach ($result as $one)
	{
		foreach ($one as $item)
		{
			echo $item;
		}
		echo is_cli() ? "\n" : '<br/>';
	}
}

// 把字符变成竖直的，然后在横向切割
function change_arr($result)
{
	$tmp_result = [];
	foreach ($result as $h => $item)
	{
		foreach ($item as $l => $v)
		{
			$tmp_result[$l][$h] = $v;
		}
	}

	return $tmp_result;
}

// 去除顶部和底部的空白段
function delete_arr_top_and_bottom($result, $full, $empty)
{
	$ii         = count($result);
	$jj         = count($result[0]);
	$z          = 0;
	$new_result = [];
	$break      = FALSE;
	for ($i = 0; $i < $ii; $i ++)
	{
		if ($break)
		{
			$new_result[$z ++] = $result[$i];
		}
		else
		{
			if (in_array($full, $result[$i]))
			{
				$break = TRUE;
				for ($j = 0; $j < $jj; $j ++)
				{
					if ($result[$i][$j] == $full)
					{
						$new_result[$z][$j] = $full;
					}
					else
					{
						$new_result[$z][$j] = $empty;
					}
				}
				$z ++;
			}
		}
	}
	$result = $new_result;

	$ii     = count($result);
	$bottom = 0;
	for ($i = $ii - 1; $i > 0; $i --)
	{
		if (in_array($full, $result[$i]))
		{
			$bottom = $i;
			break;
		}
	}

	for ($i = $bottom + 1; $i < $ii; $i ++)
	{
		unset($result[$i]);
	}

	return $result;
}

// 填充空白
function fill_black_in_empty_line($result, $full, $fill)
{
	$ii = count($result);
	$jj = count($result[0]);

	for ($i = 0; $i < $ii; $i ++)
	{
		if ( ! in_array($full, $result[$i]))
		{
			for ($j = 0; $j < $jj; $j ++)
			{
				$result[$i][$j] = $fill;
			}
		}
	}

	return $result;
}

// 将数组转化成字符串
function arr_to_str($arr)
{
	$str = '';
	foreach ($arr as $item)
	{
		foreach ($item as $v)
		{
			$str .= $v;
		}
	}

	return $str;
}

// 删除数组中的空行
function delete_empty_line($result, $full, $empty)
{
	$hid = count($result);
	$wid = count($result[0]);

// 行列互换，然后就可以用去掉空行的方法来去掉空列
//	$result = change_arr($result);

// 去掉空行
	$z          = 0; // 新的行号
	$new_result = [];
	for ($i = 0; $i < $hid; $i ++)
	{
		// 如果该行存在有效值，那么保留该行
		if (in_array($full, $result[$i]))
		{
			$z ++;
			for ($j = 0; $j < $wid; ++ $j)
			{
				if ($result[$i][$j] == $full)
				{
					$new_result[$z][$j] = $full;
				}
				else
				{
					$new_result[$z][$j] = $empty;
				}
			}
		}
	}

	return $new_result;
}

// 填充空行
function fill_empty_line($result, $full, $fill)
{
	$hid = count($result);
	$wid = count($result[0]);
	// 判断某一列都是-的话，就是
	for ($j = 0; $j < $wid; ++ $j)
	{
		$all = TRUE;
		for ($i = 0; $i < $hid; $i ++)
		{
			if ($result[$i][$j] == $full)
			{
				$all = FALSE;
				break;
			}
		}
		if ($all)
		{
			for ($i = 0; $i < $hid; $i ++)
			{
				$result[$i][$j] = $fill;
			}
		}
	}
}

/**
 * 检测是否是邮箱
 *
 * @param $email
 *
 * @return int
 */
function check_email($email)
{
	$pattern = '/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/';

	return preg_match($pattern, $email);
}

/**
 * 检测是否是手机号码
 *
 * @param $phone
 *
 * @return int
 */
function check_phone($phone)
{
	$pattern = '/^(\+86)?1[0-9]{10}$/';

	return preg_match($pattern, $phone);
}

// 谷歌翻译 --start------------------------------------------------------------------------------------------start
// ar 是阿拉伯 en是英语 zh-CN是汉语
// zh-CN:中文;auto:检测语言;sq:阿尔巴尼亚语;ar:阿拉伯语;am:阿姆哈拉语;az:阿塞拜疆语;ga:爱尔兰语;et:爱沙尼亚语;
// eu:巴斯克语;be:白俄罗斯语;bg:保加利亚语;is:冰岛语;pl:波兰语;bs:波斯尼亚语;fa:波斯语;af:布尔语(南非荷兰语);da:丹麦语;
// de:德语;ru:俄语;fr:法语;tl:菲律宾语;fi:芬兰语;fy:弗里西语;km:高棉语;ka:格鲁吉亚语;gu:古吉拉特语;kk:哈萨克语;ht:海地克里奥尔语;
// ko:韩语;ha:豪萨语;nl:荷兰语;ky:吉尔吉斯语;gl:加利西亚语;ca:加泰罗尼亚语;cs:捷克语;kn:卡纳达语;co:科西嘉语;hr:克罗地亚语;
// ku:库尔德语;la:拉丁语;lv:拉脱维亚语;lo:老挝语;lt:立陶宛语;lb:卢森堡语;ro:罗马尼亚语;mg:马尔加什语;mt:马耳他语;mr:马拉地语;
// ml:马拉雅拉姆语;ms:马来语;mk:马其顿语;mi:毛利语;mn:蒙古语;bn:孟加拉语;my:缅甸语;hmn:苗语;xh:南非科萨语;zu:南非祖鲁语;
// ne:尼泊尔语;no:挪威语;pa:旁遮普语;pt:葡萄牙语;ps:普什图语;ny:齐切瓦语;ja:日语;sv:瑞典语;sm:萨摩亚语;sr:塞尔维亚语;
// st:塞索托语;si:僧伽罗语;eo:世界语;sk:斯洛伐克语;sl:斯洛文尼亚语;sw:斯瓦希里语;gd:苏格兰盖尔语;ceb:宿务语;so:索马里语;
// tg:塔吉克语;te:泰卢固语;ta:泰米尔语;th:泰语;tr:土耳其语;cy:威尔士语;ur:乌尔都语;uk:乌克兰语;uz:乌兹别克语;es:西班牙语;
// iw:希伯来语;el:希腊语;haw:夏威夷语;sd:信德语;hu:匈牙利语;sn:修纳语;hy:亚美尼亚语;ig:伊博语;it:意大利语;yi:意第绪语;
// hi:印地语;su:印尼巽他语;id:印尼语;jw:印尼爪哇语;en:英语;yo:约鲁巴语;vi:越南语;zh-CN:中文;
function google_translate($keyword, $tl = 'en', $sl = 'zh-CN')
{
	$tkk        = get_tkk();
	$tk         = get_tk_or_sign($keyword, $tkk);
	$url        = 'https://translate.google.cn/translate_a/single';
	$param      = 'client=t&sl='.$sl.'&tl='.$tl
		.'&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&ssel=5&tsel=5&kc=1';
	$param      .= '&tk='.$tk.'&q='.urlencode($keyword);
	$url_all    = $url.'?'.$param;
	$out        = file_get_contents($url_all);
	$out        = json_decode($out, TRUE);
	$out_string = '';
	foreach ($out[0] as $item)
	{
		$out_string .= $item[0];
	}

	return $out_string;
}

function get_tkk()
{
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);
	mb_internal_encoding("UTF-8");
	$url   = "http://translate.google.cn";
	$conts = file_get_contents($url);
	$tkk   = 0;
	if (preg_match("#TKK\=eval\('\(\(function\(\)\{var\s+a\\\\x3d(-?\d+);var\s+b\\\\x3d(-?\d+);return\s+(\d+)\+#isU",
		$conts, $arr))
	{
		$tkk = $arr[3].'.'.($arr[1] + $arr[2]);
	}

	return $tkk;
}

function get_tk_or_sign($a, $tkk)
{
	$tkk = explode('.', $tkk);
	$b   = $tkk[0];

	for ($d = array(), $e = 0, $f = 0; $f < mb_strlen($a, 'UTF-8'); $f ++)
	{
		$g = charCodeAt($a, $f);
		if (128 > $g)
		{
			$d [$e ++] = $g;
		}
		else
		{
			if (2048 > $g)
			{
				$d [$e ++] = $g >> 6 | 192;
			}
			else
			{
				if (55296 == ($g & 64512) && $f + 1 < mb_strlen($a, 'UTF-8')
					&& 56320 == (charCodeAt($a, $f + 1) & 64512)
				)
				{
					$g         = 65536 + (($g & 1023) << 10) + (charCodeAt($a, ++ $f) & 1023);
					$d [$e ++] = $g >> 18 | 240;
					$d [$e ++] = $g >> 12 & 63 | 128;
				}
				else
				{
					$d [$e ++] = $g >> 12 | 224;
					$d [$e ++] = $g >> 6 & 63 | 128;
				}
			}
			$d [$e ++] = $g & 63 | 128;
		}
	}
	$a = $b;
	for ($e = 0; $e < count($d); $e ++)
	{
		$a += $d [$e];
		$a = RL($a, '+-a^+6');
	}
	$a = RL($a, "+-3^+b+-f");
	$a ^= $tkk[1];
	if (0 > $a)
	{
		$a = ($a & 2147483647) + 2147483648;
	}
	$a = fmod($a, pow(10, 6));

	return $a.".".($a ^ $b);
}

function charCodeAt($str, $index)
{
	$char = mb_substr($str, $index, 1, 'UTF-8');

	if (mb_check_encoding($char, 'UTF-8'))
	{
		$ret = mb_convert_encoding($char, 'UTF-32BE', 'UTF-8');

		return hexdec(bin2hex($ret));
	}
	else
	{
		return NULL;
	}
}

function RL($a, $b)
{
	for ($c = 0; $c < strlen($b) - 2; $c += 3)
	{
		$d = $b{$c + 2};
		$d = $d >= 'a' ? charCodeAt($d, 0) - 87 : intval($d);
		$d = $b{$c + 1} == '+' ? shr32($a, $d) : $a << $d;
		$a = $b{$c} == '+' ? ($a + $d & 4294967295) : $a ^ $d;
	}

	return $a;
}

function shr32($x, $bits)
{

	if ($bits <= 0)
	{
		return $x;
	}
	if ($bits >= 32)
	{
		return 0;
	}

	$bin = decbin($x);
	$l   = strlen($bin);

	if ($l > 32)
	{
		$bin = substr($bin, $l - 32, 32);
	}
	elseif ($l < 32)
	{
		$bin = str_pad($bin, 32, '0', STR_PAD_LEFT);
	}

	return bindec(str_pad(substr($bin, 0, 32 - $bits), 32, '0', STR_PAD_LEFT));
}

// 删除文件夹
function deldir($dir)
{
	//先删除目录下的文件：
	$dh = opendir($dir);
	while ($file = readdir($dh))
	{
		if ($file != "." && $file != "..")
		{
			$fullpath = $dir."/".$file;
			if ( ! is_dir($fullpath))
			{
				unlink($fullpath);
			}
			else
			{
				deldir($fullpath);
			}
		}
	}
	closedir($dh);
	//删除当前文件夹：
	if (rmdir($dir))
	{
		return TRUE;
	}
	else
	{
		return FALSE;
	}
}

// 谷歌翻译 --end-----------------------------------------------------------------------------------------------end

// 百度翻译 --start zh:中文   en:英语   ara:阿拉伯语--------------------------------------------------------------start
// zh:中文;jp:日语;jpka:日语假名;th:泰语;fra:法语;;spa:西班牙语;kor:韩语;tr:土耳其语;vie:越南语;ms:马来语;
// de:德语;ru:俄语;ir:伊朗语;ara:阿拉伯语;est:爱沙尼亚语;be:白俄罗斯语;bul:保加利亚语;hi:印地语;is:冰岛语;pl:波兰语;
// fa:波斯语;dan:丹麦语;tl:菲律宾语;fin:芬兰语;nl:荷兰语;ca:加泰罗尼亚语;cs:捷克语;hr:克罗地亚语;lv:拉脱维亚语;
// lt:立陶宛语;rom:罗马尼亚语;af:南非语;no:挪威语;pt_BR:巴西语;pt:葡萄牙语;swe:瑞典语;sr:塞尔维亚语;eo:世界语;
// sk:斯洛伐克语;slo:斯洛文尼亚语;sw:斯瓦希里语;uk:乌克兰语;iw:希伯来语;el:希腊语;hu:匈牙利语;hy:亚美尼亚语;
// it:意大利语;id:印尼语;sq:阿尔巴尼亚语;am:阿姆哈拉语;as:阿萨姆语;az:阿塞拜疆语;eu:巴斯克语;bn:孟加拉语;bs:波斯尼亚语;
// gl:加利西亚语;ka:格鲁吉亚语;gu:古吉拉特语;ha:豪萨语;ig:伊博语;iu:因纽特语;ga:爱尔兰语;zu:祖鲁语;kn:卡纳达语;
// kk:哈萨克语;ky:吉尔吉斯语;lb:卢森堡语;mk:马其顿语;mt:马耳他语;mi:毛利语;mr:马拉提语;ne:尼泊尔语;or:奥利亚语;
// pa:旁遮普语;qu:凯楚亚语;tn:塞茨瓦纳语;si:僧加罗语;ta:泰米尔语;tt:塔塔尔语;te:泰卢固语;ur:乌尔都语;uz:乌兹别克语;
// cy:威尔士语;yo:约鲁巴语;yue:粤语;wyw:文言文;cht:中文繁体;
// 现在的问题是，总是998错误，好像是cookie过期
function translate($keyword, $to = 'en', $from = 'zh')
{
//	return $keyword;
	$user_agent = get_user_agent();
//	$user_agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36';
	$cookie_url = 'https://fanyi.baidu.com/';
	list($cookie, $token, $gtk) = get_cookie_and_token_and_gtk($cookie_url, $user_agent);
	$sign = get_tk_or_sign($keyword, $gtk);
	output('token:'.$token);
	output('gtk:'.$gtk);
	output('sign:'.$sign);
	output('cookie:'.$cookie);
//	$token = '113f5c20ed0717aa4b283282fdf75cbf';
	/**
	 * {
	 * "zh": "中文",
	 * "jp": "日语",
	 * "jpka": "日语假名",
	 * "th": "泰语",
	 * "fra": "法语",
	 * "en": "英语",
	 * "spa": "西班牙语",
	 * "kor": "韩语",
	 * "tr": "土耳其语",
	 * "vie": "越南语",
	 * "ms": "马来语",
	 * "de": "德语",
	 * "ru": "俄语",
	 * "ir": "伊朗语",
	 * "ara": "阿拉伯语",
	 * "est": "爱沙尼亚语",
	 * "be": "白俄罗斯语",
	 * "bul": "保加利亚语",
	 * "hi": "印地语",
	 * "is": "冰岛语",
	 * "pl": "波兰语",
	 * "fa": "波斯语",
	 * "dan": "丹麦语",
	 * "tl": "菲律宾语",
	 * "fin": "芬兰语",
	 * "nl": "荷兰语",
	 * "ca": "加泰罗尼亚语",
	 * "cs": "捷克语",
	 * "hr": "克罗地亚语",
	 * "lv": "拉脱维亚语",
	 * "lt": "立陶宛语",
	 * "rom": "罗马尼亚语",
	 * "af": "南非语",
	 * "no": "挪威语",
	 * "pt_BR": "巴西语",
	 * "pt": "葡萄牙语",
	 * "swe": "瑞典语",
	 * "sr": "塞尔维亚语",
	 * "eo": "世界语",
	 * "sk": "斯洛伐克语",
	 * "slo": "斯洛文尼亚语",
	 * "sw": "斯瓦希里语",
	 * "uk": "乌克兰语",
	 * "iw": "希伯来语",
	 * "el": "希腊语",
	 * "hu": "匈牙利语",
	 * "hy": "亚美尼亚语",
	 * "it": "意大利语",
	 * "id": "印尼语",
	 * "sq": "阿尔巴尼亚语",
	 * "am": "阿姆哈拉语",
	 * "as": "阿萨姆语",
	 * "az": "阿塞拜疆语",
	 * "eu": "巴斯克语",
	 * "bn": "孟加拉语",
	 * "bs": "波斯尼亚语",
	 * "gl": "加利西亚语",
	 * "ka": "格鲁吉亚语",
	 * "gu": "古吉拉特语",
	 * "ha": "豪萨语",
	 * "ig": "伊博语",
	 * "iu": "因纽特语",
	 * "ga": "爱尔兰语",
	 * "zu": "祖鲁语",
	 * "kn": "卡纳达语",
	 * "kk": "哈萨克语",
	 * "ky": "吉尔吉斯语",
	 * "lb": "卢森堡语",
	 * "mk": "马其顿语",
	 * "mt": "马耳他语",
	 * "mi": "毛利语",
	 * "mr": "马拉提语",
	 * "ne": "尼泊尔语",
	 * "or": "奥利亚语",
	 * "pa": "旁遮普语",
	 * "qu": "凯楚亚语",
	 * "tn": "塞茨瓦纳语",
	 * "si": "僧加罗语",
	 * "ta": "泰米尔语",
	 * "tt": "塔塔尔语",
	 * "te": "泰卢固语",
	 * "ur": "乌尔都语",
	 * "uz": "乌兹别克语",
	 * "cy": "威尔士语",
	 * "yo": "约鲁巴语",
	 * "yue": "粤语",
	 * "wyw": "文言文",
	 * "cht": "中文繁体"
	 * }
	 */

//	$langdetect_url = 'http://fanyi.baidu.com/langdetect';
//	$lch            = curl_init($langdetect_url);
//	$data           = ['query' => $keyword];
//	$data           = http_build_query($data);
//	$length         = strlen($data);
//	curl_setopt($lch, CURLOPT_HTTPHEADER, [
//		'Accept:*/*',
//		'Accept-Encoding:gzip, deflate',
//		'Accept-Language:zh-CN,zh;q=0.9',
//		'Cache-Control:no-cache',
//		'Connection:keep-alive',
//		'Content-Length:'.$length,
//		'Content-Type:application/x-www-form-urlencoded',
//		'Cookie:'.$cookie,
//		'Host:fanyi.baidu.com',
//		'Origin:http://fanyi.baidu.com',
//		'Pragma:no-cache',
//		'Referer:http://fanyi.baidu.com/',
//		'User-Agent:'.$user_agent,
//		'X-Requested-With:XMLHttpRequest',
//	]);
//	curl_setopt($lch, CURLOPT_ENCODING, 'gzip');
//	curl_setopt($lch, CURLOPT_SSL_VERIFYHOST, 2);
//	curl_setopt($lch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查
//	// 设置post方法
//	curl_setopt($lch, CURLOPT_POST, TRUE);
//	// 设置post数据
//	curl_setopt($lch, CURLOPT_POSTFIELDS, $data);
//	// 获取响应头
//	curl_setopt($lch, CURLOPT_HEADER, TRUE);
//
//	curl_setopt($lch, CURLOPT_REFERER, $langdetect_url);
//	curl_setopt($lch, CURLOPT_RETURNTRANSFER, TRUE);
//	curl_setopt($lch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
//	$re = curl_exec($lch);
//	curl_close($lch);
//	dump($re);

	$url  = 'https://fanyi.baidu.com/v2transapi';
	$data = array(
		'from'              => $from,
		'to'                => $to,
		'query'             => $keyword,
		'transtype'         => 'translang',
		'simple_means_flag' => 'realtime',
		'sign'              => $sign,
		'token'             => $token,
	);
	$data = http_build_query($data);

	$length = strlen($data);

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding:gzip, deflate, br',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Cache-Control:no-cache',
		'Connection:keep-alive',
		//		'Content-Length:'.$length,
		//		'Content-Type:application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie:'.$cookie,
		'Host:fanyi.baidu.com',
		//		'Origin:https://fanyi.baidu.com',
		'Pragma:no-cache',
		'Referer:https://fanyi.baidu.com/',
		'User-Agent:'.$user_agent,
		'X-Requested-With:XMLHttpRequest',
	]);
//	curl_setopt($ch, CURLOPT_COOKIE, $cookie);
	curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查
	// 设置post方法
	curl_setopt($ch, CURLOPT_POST, TRUE);
	// 设置post数据
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	// 获取响应头
	curl_setopt($ch, CURLOPT_HEADER, TRUE);

//	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环

	// 返回的error错误代码
	//997, 没有cookie；998，cookie过期；999，内部错误

//	    res
//	    Transfer - Encoding:chunked，响应头部应该有这个字段，
// 	    curl请求的响应头里面有Proxy-Connection字段

	$re = curl_exec($ch);
	dump($re);
	die('ok');

	return $re;
	$re = json_decode($re, TRUE);
//	$re   = $re['trans_result']['data'][0]['dst'];
	$re = $re['trans_result']['data'];

	$result = array();
	foreach ($re as $one)
	{
		if ( ! $one)
		{
			continue;
		}
		$result[] = $one['dst'];
	}

	$result = implode("\n", $result);

	return $result;
}

function get_cookie_and_token_and_gtk($url, $user_agent, $ip = NULL, $port = NULL)
{
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding:gzip, deflate',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Cache-Control:no-cache',
		'Connection:keep-alive',
		'Host:fanyi.baidu.com',
		'Upgrade-Insecure-Requests:1',
		'User-Agent:'.$user_agent,
	]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 跳过证书检查
	// 只获取响应头就行了
	curl_setopt($ch, CURLOPT_HEADER, TRUE);
//	curl_setopt($ch, CURLOPT_NOBODY, TRUE);

	if ($ip && $port)
	{
		curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC); //代理认证模式
		curl_setopt($ch, CURLOPT_PROXY, $ip.':'.$port);
//	curl_setopt($ch, CURLOPT_PROXYPORT, $port);
////curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
		curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式
	}

	curl_setopt($ch, CURLOPT_ENCODING, 'gzip');

//	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
	$result = curl_exec($ch);

	// 获得响应结果里的：头大小
	$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	curl_close($ch);
	// 根据头大小去获取头信息内容
	$header = trim(substr($result, 0, $headerSize));

	$result = trim(substr($result, $headerSize));

	// --start debug---
	file_put_contents('./baidu.html', $result);
	file_put_contents('./header.html', $header);
//	dump($result);die;
	// --end debug---

	$gtk = 0;
	if (preg_match("/window\.gtk\s?=\s?\'([\d\.]*)\'/", $result, $arr))
	{
		$gtk = $arr[1];
	}
	$token = '';
	// token: '9b8bb341109338ba7e875bd9a9dd88ba',
	if (preg_match("/token\:\s?\'([\w]*)\',/", $result, $arr))
	{
		$token = $arr[1];
	}

	$header_arr = explode(PHP_EOL, $header);
	$headers    = [];
	foreach ($header_arr as $value)
	{
		$value = trim($value);
		if ($value && strpos($value, ':') !== FALSE)
		{
			list($k, $v) = explode(':', $value, 2);
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

	if ( ! isset($headers['Set-Cookie']))
	{
		die('没有接收到cookie');
	}
	$cookie_tmp     = $headers['Set-Cookie'];
	$cookie_tmp_arr = explode(';', $cookie_tmp);
	$cookies        = [];
	foreach ($cookie_tmp_arr as $cook)
	{
		list($k, $v) = explode('=', $cook, 2);
		$k = trim($k);
		$v = trim($v);
		if (in_array($k, ['locale', 'BAIDUID']))
		{
			$cookies[$k] = $v;
		}
	}
//	$baiduid  = $cookies['BAIDUID'];
//	$cookies['BIDUPSID'] = substr($baiduid, 0, strpos($baiduid, ':'));
//		$time            = time();
//	$lang = '[{"value":"zh","text":"'.urlencode('中文').'"},{"value":"en","text":"'.urlencode('英语').'"}]';
//	$to_lang_often = urlencode('[{"value":"zh","text":"').utf8_str_to_unicode('中').utf8_str_to_unicode('文')
//		.urlencode('"},{"value":"en","text":"')
//		.utf8_str_to_unicode('英').utf8_str_to_unicode('语').urlencode('"}]');
//	$from_lang_often = urlencode('[{"value":"en","text":"').utf8_str_to_unicode('英').utf8_str_to_unicode('语')
//		.urlencode('"},{"value":"zh","text":"')
//		.utf8_str_to_unicode('中').utf8_str_to_unicode('文').urlencode('"}]');
//	$cookies['from_lang_often'] = $from_lang_often;
//	$cookies['to_lang_often'] = $to_lang_often;
//	$cookies['FANYI_WORD_SWITCH'] = 1;
//	$cookies['HISTORY_SWITCH'] = 1;
//	$cookies['REALTIME_TRANS_SWITCH'] = 1;
//	$cookies['SOUND_PREFER_SWITCH'] = 1;
//	$cookies['RESOUND_PREFER_SWITCH'] = 1;
//	$cookies['SOUND_SPD_SWITCH'] = 1;
//	$cookies['PSTM'] = '1519289280';
//	$cookies['pgv_pvi'] = '4332079104';
//	$cookies['MCITY'] = '-%3A';
//	$cookies['Hm_lvt_64ecd82404c51e03dc91cb9e8c025574'] = ($time - 100);
//	$cookies['Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574'] = ($time - 102);
//	$cookies['Hm_lvt_c27e828ededac3928c725c1cd6475dbd'] = ($time - 101);
//	$cookies['Hm_lpvt_c27e828ededac3928c725c1cd6475dbd'] = ($time - 103);
//	output('cookie:'.$cookie);
//	die;

	$cookie_str = '';
	foreach ($cookies as $k => $v)
	{
		$cookie_str .= (empty($cookie_str) ? '' : ';').$k.'='.$v;
	}

	return [$cookie_str, $token, $gtk];
}

function get_token_and_gtk()
{
	$url   = "http://fanyi.baidu.com";
	$conts = file_get_contents($url);
	$gtk   = 0;
	//<script>window.bdstoken = '';window.gtk = '320305.131321201';</script>
	if (preg_match("/window\.gtk\s?=\s?\'([\d\.]*)\'/", $conts, $arr))
	{
		$gtk = $arr[1];
	}
	$token = '';
	// token: '9b8bb341109338ba7e875bd9a9dd88ba',
	if (preg_match("/token\:\s?\'([\w]*)\',/", $conts, $arr))
	{
		$token = $arr[1];
	}

	return [$token, $gtk];
}

function send_post($url, $post_data)
{

	$postdata = http_build_query($post_data);
	$options  = array(
		'http' => array(
			'method'  => 'POST',
			'header'  => 'Content-type:application/x-www-form-urlencoded',
			'content' => $postdata,
			'timeout' => 15 * 60 // 超时时间（单位:s）
		),
	);
	$context  = stream_context_create($options);
	$result   = file_get_contents($url, FALSE, $context);

	return $result;
}

// 百度翻译 --end-----------------------------------------------------------------------------------------------end

// 百度翻译和谷歌翻译的不同语言的字符串的对应关系
function trans_lang()
{
	$baidu_str  = 'zh:中文;jp:日语;jpka:日语假名;th:泰语;fra:法语;en:英语;spa:西班牙语;kor:韩语;tr:土耳其语;vie:越南语;ms:马来语;de:德语;ru:俄语;ir:伊朗语;ara:阿拉伯语;est:爱沙尼亚语;be:白俄罗斯语;bul:保加利亚语;hi:印地语;is:冰岛语;pl:波兰语;fa:波斯语;dan:丹麦语;tl:菲律宾语;fin:芬兰语;nl:荷兰语;ca:加泰罗尼亚语;cs:捷克语;hr:克罗地亚语;lv:拉脱维亚语;lt:立陶宛语;rom:罗马尼亚语;af:南非语;no:挪威语;pt_BR:巴西语;pt:葡萄牙语;swe:瑞典语;sr:塞尔维亚语;eo:世界语;sk:斯洛伐克语;slo:斯洛文尼亚语;sw:斯瓦希里语;uk:乌克兰语;iw:希伯来语;el:希腊语;hu:匈牙利语;hy:亚美尼亚语;it:意大利语;id:印尼语;sq:阿尔巴尼亚语;am:阿姆哈拉语;as:阿萨姆语;az:阿塞拜疆语;eu:巴斯克语;bn:孟加拉语;bs:波斯尼亚语;gl:加利西亚语;ka:格鲁吉亚语;gu:古吉拉特语;ha:豪萨语;ig:伊博语;iu:因纽特语;ga:爱尔兰语;zu:祖鲁语;kn:卡纳达语;kk:哈萨克语;ky:吉尔吉斯语;lb:卢森堡语;mk:马其顿语;mt:马耳他语;mi:毛利语;mr:马拉提语;ne:尼泊尔语;or:奥利亚语;pa:旁遮普语;qu:凯楚亚语;tn:塞茨瓦纳语;si:僧加罗语;ta:泰米尔语;tt:塔塔尔语;te:泰卢固语;ur:乌尔都语;uz:乌兹别克语;cy:威尔士语;yo:约鲁巴语;yue:粤语;wyw:文言文;cht:中文繁体;';
	$google_str = 'zh-CN:中文;auto:检测语言;sq:阿尔巴尼亚语;ar:阿拉伯语;am:阿姆哈拉语;az:阿塞拜疆语;ga:爱尔兰语;et:爱沙尼亚语;eu:巴斯克语;be:白俄罗斯语;bg:保加利亚语;is:冰岛语;pl:波兰语;bs:波斯尼亚语;fa:波斯语;af:布尔语(南非荷兰语);da:丹麦语;de:德语;ru:俄语;fr:法语;tl:菲律宾语;fi:芬兰语;fy:弗里西语;km:高棉语;ka:格鲁吉亚语;gu:古吉拉特语;kk:哈萨克语;ht:海地克里奥尔语;ko:韩语;ha:豪萨语;nl:荷兰语;ky:吉尔吉斯语;gl:加利西亚语;ca:加泰罗尼亚语;cs:捷克语;kn:卡纳达语;co:科西嘉语;hr:克罗地亚语;ku:库尔德语;la:拉丁语;lv:拉脱维亚语;lo:老挝语;lt:立陶宛语;lb:卢森堡语;ro:罗马尼亚语;mg:马尔加什语;mt:马耳他语;mr:马拉地语;ml:马拉雅拉姆语;ms:马来语;mk:马其顿语;mi:毛利语;mn:蒙古语;bn:孟加拉语;my:缅甸语;hmn:苗语;xh:南非科萨语;zu:南非祖鲁语;ne:尼泊尔语;no:挪威语;pa:旁遮普语;pt:葡萄牙语;ps:普什图语;ny:齐切瓦语;ja:日语;sv:瑞典语;sm:萨摩亚语;sr:塞尔维亚语;st:塞索托语;si:僧伽罗语;eo:世界语;sk:斯洛伐克语;sl:斯洛文尼亚语;sw:斯瓦希里语;gd:苏格兰盖尔语;ceb:宿务语;so:索马里语;tg:塔吉克语;te:泰卢固语;ta:泰米尔语;th:泰语;tr:土耳其语;cy:威尔士语;ur:乌尔都语;uk:乌克兰语;uz:乌兹别克语;es:西班牙语;iw:希伯来语;el:希腊语;haw:夏威夷语;sd:信德语;hu:匈牙利语;sn:修纳语;hy:亚美尼亚语;ig:伊博语;it:意大利语;yi:意第绪语;hi:印地语;su:印尼巽他语;id:印尼语;jw:印尼爪哇语;en:英语;yo:约鲁巴语;vi:越南语;zh-CN:中文;';

	$baidu_arr  = explode(';', $baidu_str);
	$google_arr = explode(';', $google_str);

	$baidu_arr_new = array();
	foreach ($baidu_arr as $item)
	{
		list($k, $v) = explode(':', $item);
		$baidu_arr_new[$k] = $v;
	}
	$google_arr_new = array();
	foreach ($google_arr as $item)
	{
		list($k, $v) = explode(':', $item);
		$google_arr_new[$k] = $v;
	}

	$trans = array();

	foreach ($baidu_arr_new as $baidu_key => $value)
	{
		if ($google_key = array_search($value, $google_arr_new))
		{
			$trans[$baidu_key] = $google_key;
			unset($baidu_arr_new[$baidu_key], $google_arr_new[$google_key]);
		}
	}
	dump($trans);

	dump($baidu_arr_new);
	dump($google_arr_new);
}

// 抓取数据 --start-------------------------------------------------------------------------------------------start
/**
 * 访问网页
 *
 * @param $url
 *
 * @return mixed
 */
function getSslPage($url)
{
	/*  http://www.manongjc.com/article/1428.html */
	$ch = curl_init();

	$user_agent      = array(
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1",
		"Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6",
		"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6",
		"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/19.77.34.5 Safari/537.1",
		"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5",
		"Mozilla/5.0 (Windows NT 6.0) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.36 Safari/536.5",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
		"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
		"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1062.0 Safari/536.3",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1062.0 Safari/536.3",
		"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
		"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
		"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.0 Safari/536.3",
		"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24",
		"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24",
		"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
		"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6 (.NET CLR 3.5.30729)",
		"Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) App leWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53",
		"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
		"Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER",
		"Opera/9.25 (Windows NT 5.1; U; en)",
		"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11",
		"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
		"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SV1; QQDownload 732; .NET4.0C; .NET4.0E; 360SE)",
		"Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)",
		"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20",
		"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
		"Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1",
		"Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",
		"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
		"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E; LBBROWSER)",
		"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1",
		"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
	);
	$count           = count($user_agent);
	$rand            = rand(1, $count);
	$user_agent_rand = $user_agent[$rand - 1];

	// 设置浏览器的特定header
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//		':authority:www.aliexpress.com',
//		':method:GET',
//		':path:/store/product/ROXI-TOP-Exquisite-Champagne-Rings-platinum-rose-gold-plated-with-zirconfashion-Environmental-Micro-Inserted-Jewelry-FULL/314050_32524990479.html',
//		':scheme:https',
//		'accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//		'accept-encoding:gzip, deflate, br',
//		'accept-language:zh-CN,zh;q=0.9',
//		'cache-control:no-cache',
//		'pragma:no-cache',
//		'upgrade-insecure-requests:1',
//		"User-Agent: $user_agent_rand",

"User-Agent: $user_agent_rand",
"Accept-Language: en-us,en;q=0.5",
"Connection: keep-alive",
"Accept: */*",
"Referrer: $url",
//		'cookie:ali_apache_id=10.181.239.59.1516676165281.222230.3; intl_locale=en_US; _mle_tmp0=eNrz4A12DQ729PeL9%2FV3cfUxiKnOTLFScnMziwyMMAsPNNINNQkPCnXyNA309TY19jB3Cw03jDLU9TcJCzEMcvbSNbLwD1TSSS6xMjQ1NDMzNzM0MzW1NNJJTEYTyK2wMqiNAgCFRR0U; xman_f=28fX+ZPdr26Ky9sbivI7KJe8j/3+a/4ICKMVsBBbjaEfixkItkRyESvxyE2uKdsE9GDwoRDOWQFXWTvUnICXgBpMvGHXrSzNvwOOU7c3jv0bcSM0r7rz+A==; xman_t=akde7AYG8uloAzju9orVlqPRlEQr3J4/o/82M+synbGsOauooLIHl2q1dfvz51wq; JSESSIONID=FF6YQX6WQ2-U4WRUBI5QMK53H7FUW1Z1-O4VT1RCJ-28OQ; Hm_lvt_c27e828ededac3928c725c1cd6475dbd=1516676169; aep_history=keywords%5E%0Akeywords%09%0A%0Aproduct_selloffer%5E%0Aproduct_selloffer%0932524990479; cna=Rwu+Enuiq2MCAQHG3eXiiT1N; __lnkrntdmcvrd=aliexpress.com; __lnkrntafu=-1; _ga=GA1.2.1073968253.1516676180; _gid=GA1.2.1531436314.1516676180; __lfcc=1; aeu_cid=33c5a6e9bc944871a84d0d757b82c6b6-1516676193946-03869-rBUjEynII; xman_us_f=x_l=1&x_locale=en_US&x_as_i=%7B%22cv%22%3A%222%22%2C%22tp1%22%3A%22lc%22%2C%22src%22%3A%22promotion%22%2C%22af%22%3A761872645%2C%22cpt%22%3A1516676193946%2C%22channel%22%3A%22AFFILIATE%22%2C%22affiliateKey%22%3A%22rBUjEynII%22%2C%22cn%22%3A%22102480007%22%2C%22tagtime%22%3A1516676193953%2C%22vd%22%3A%2230%22%7D; Hm_lpvt_c27e828ededac3928c725c1cd6475dbd=1516676198; aep_usuc_f=site=glo&region=US&b_locale=en_US&c_tp=USD; intl_common_forever=I5VlMalEluKfHKOy7JjdeUSj71zTRlj0zEq+XXViauGRdnHJuF4WrQ==; ali_apache_track=; ali_apache_tracktmp=; acs_usuc_t=acs_rt=f818d4d905424965bb926f5bff2e5e7d&x_csrf=14v56ej5j4g3m; isg=BPz8Cwv6iul2-r41DAjw3nUuzZpuXbTHHqjDJNZ9COfKoZwr_gVwr3IbhcvZ6dh3',
	));
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_HEADER, FALSE);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	$result = curl_exec($ch);
	curl_close($ch);

	return $result;
}

// 阿里巴巴1688上的商品，国际站的是alibaba
function get_1688($url)
{
	die('ok');
//	$url = 'https://detail.1688.com/offer/556564577668.html?spm=a2604.10528227.j5xw6k7a.1.og5TLL';
//	$url = 'https://detail.1688.com/offer/538544179434.html?spm=b26110380.sw1688.mof001.13.PtIdYp';
//	$url = 'https://www.aliexpress.com/item/New-2016-Brand-Autumn-Winter-Sudaderas-Hombre-Thick-Velvet-Sweatshirt-Men-Sport-Baseball-Soft-Shell-Mens/32699113679.html?spm=2114.search0103.3.45.IGTqs5&ws_ab_test=searchweb0_0,searchweb201602_1_10152_10151_10065_10344_10068_10345_10342_10343_10340_10341_10541_10562_10084_10083_10307_10175_10539_10312_10059_10313_10314_10534_10533_100031_10604_10603_10103_10594_10557_10596_10595_10142_10107,searchweb201603_25,ppcSwitch_5&btsid=3f4c49e7-a036-4ef1-8ee4-ef2dba60bc2b&algo_expid=170b32a2-8552-4dd7-b6ea-63f0253689f2-5&algo_pvid=170b32a2-8552-4dd7-b6ea-63f0253689f2&rmStoreLevelAB=3';
	try
	{
		$html = getSslPage($url);
//			$html = file_get_contents('./ali.html');
		dump($html);
		file_put_contents('./ali.html', $html);
		die('ok');
		$html = iconv('CP936', 'UTF-8', $html);
		// 获取标题
		$title_preg = '/<h1\sclass=\"d-title\">([^{]*?)<\/h1>/';
		preg_match_all($title_preg, $html, $titles);
		$title = $titles[1];
		dump($titles);

		// 获取到的是小图，改一下名字就是大图了
		$pics_preg = '/\"(https\:\/\/cbu01\.alicdn\.com\/img.*?\.60x60\.jpg)\"/';
		preg_match_all($pics_preg, $html, $pics);
		$pics = array_map(function ($pic) {
			return str_replace('60x60', '400x400', $pic);
		}, $pics[1]);
		dump($pics);

		// 获取详情图的地址
		$detail_preg = '/data-tfs-url=\"(.*)\"\s/';
		preg_match_all($detail_preg, $html, $details);
		dump($details[1]);
		$json = getSslPage($details[1][0]);
//			dump($json);
		$img_preg = '/\\\"(https:\/\/cbu.*?\.jpg)\\\"/';
		preg_match_all($img_preg, $json, $detail_pics);
		dump($detail_pics[1]);

		// 获取商品描述
		$desc_preg = '/<td\sclass=\"de-feature\">([^<]*?)<\/td>\s*<td\sclass=\"de-value\">([^<]*?)<\/td>/';
		preg_match_all($desc_preg, $html, $descs);
//			dump($descs[1]);
//			dump($descs[2]);
		$count = count($descs[0]);
		$desc  = '';
		for ($i = 0; $i < $count; $i ++)
		{
			$desc .= $descs[1][$i].':'.$descs[2][$i]."\n";
		}
		dump($desc);

		//属性，属性值

		file_put_contents('./ali.html', $html);
	}
	catch (Exception $e)
	{
		dump($e->getMessage());
	}
}

// 速卖通网站上的商品
function get_aliexpress($url)
{
	die('ok');
	$data = array();
	try
	{
//		$url  = 'https://www.aliexpress.com/item/New-2016-Brand-Autumn-Winter-Sudaderas-Hombre-Thick-Velvet-Sweatshirt-Men-Sport-Baseball-Soft-Shell-Mens/32699113679.html?spm=2114.search0103.3.45.IGTqs5&ws_ab_test=searchweb0_0,searchweb201602_1_10152_10151_10065_10344_10068_10345_10342_10343_10340_10341_10541_10562_10084_10083_10307_10175_10539_10312_10059_10313_10314_10534_10533_100031_10604_10603_10103_10594_10557_10596_10595_10142_10107,searchweb201603_25,ppcSwitch_5&btsid=3f4c49e7-a036-4ef1-8ee4-ef2dba60bc2b&algo_expid=170b32a2-8552-4dd7-b6ea-63f0253689f2-5&algo_pvid=170b32a2-8552-4dd7-b6ea-63f0253689f2&rmStoreLevelAB=3';
		$html = getSslPage($url);
//		file_put_contents('./aliexpress.html', $html);
//		$html = file_get_contents('./aliexpress.html');
		// 获取标题
		$title_preg = '/<h1\sclass=\"product-name\"\sitemprop=\"name\">([^{]*?)<\/h1>/';
		preg_match_all($title_preg, $html, $titles);
		$title = $titles[1][0] ?: '';
		if (empty($title))
		{
			return array();
		}
		$data['note_l1']     = translate($title, 'zh', 'en') ?: $title;
		$data['note_l4']     = translate($title, 'ara', 'en') ?: $title;
		$data['note_l2']     = $title;
		$data['pro_name_l1'] = translate($title, 'zh', 'en') ?: $title;
		$data['pro_name_l4'] = translate($title, 'ara', 'en') ?: $title;
		$data['pro_name_l2'] = $title;
		/*$data['note_l1']     = google_translate($title, 'zh-CN', 'en') ?: $title;
		$data['note_l4']     = google_translate($title, 'ar', 'en') ?: $title;
		$data['note_l2']     = $title;
		$data['pro_name_l1'] = google_translate($title, 'zh-CN', 'en') ?: $title;
		$data['pro_name_l4'] = google_translate($title, 'ar', 'en') ?: $title;
		$data['pro_name_l2'] = $title;*/

		// 获取到的是小图，改一下名字就是大图了，这里面会有货物里面的图
		$pics_preg = '/\ssrc=\"(https:\/\/ae01\.alicdn\.com.*?50x50\.jpg)\"\/><\/span>/';
		preg_match_all($pics_preg, $html, $pics);
		$pics           = array_map(function ($pic) {
			return str_replace('50x50', '640x640', $pic);
		}, $pics[1]);
		$data['banner'] = $pics;
		$data['pic']    = $pics[0];

		// 获取详情图的地址
		$detail_preg = '/window\.runParams\.detailDesc\s?=\s?\"(.*)\"/';
		preg_match_all($detail_preg, $html, $details);
		$json     = getSslPage($details[1][0]);
		$img_preg = '/src=\"(https:.*?\.jpg)/';
		preg_match_all($img_preg, $json, $detail_pics);
		if (empty($detail_pics))
		{
			return array();
		}
		$data['details'] = $detail_pics[1];

		// 获取商品描述
		$desc_preg = '/<span\sclass=\"propery\-title\">([^<]*?)<\/span>\s*<span\sclass=\"propery-des\"\stitle=\"(.*?)\">([^<]*?)<\/span>/';
		preg_match_all($desc_preg, $html, $descs);
		$count = count($descs[0]);
		$desc  = '';
		for ($i = 0; $i < $count; $i ++)
		{
			$desc .= $descs[1][$i].':'.$descs[2][$i]."\n";
		}
		$data['desc_l1'] = translate($desc, 'zh', 'en') ?: $desc;
		$data['desc_l2'] = $desc;
		$data['desc_l4'] = translate($desc, 'ara', 'en') ?: $desc;
		/*$data['desc_l1'] = google_translate($desc, 'zh-CN', 'en') ?: $desc;
		$data['desc_l2'] = $desc;
		$data['desc_l4'] = google_translate($desc, 'ar', 'en') ?: $desc;*/

		//属性，属性值
//		$goods_preg = '/j\-product\-info\-sku[\s\S.]*?class=\"p\-property\-item([.\n\S\s]*?)<\/dl>[\s\S]*?<div\sclass=\"buynow-custom\">/';
		$goods_preg = '/<dl\sclass=\"p\-property\-item\">([\s\S.]*?)<\/dl>/';
		preg_match_all($goods_preg, $html, $matches);
		$matches          = $matches[1];
		$attr_name_preg   = '/<dt\sclass=\"p\-item\-title\">(.*)<\/dt>/';
		$attr_value_preg1 = '/<span>(.*)<\/span>/';
		$attr_value_preg2 = '/title=\"(.*)\"\shref/';
		$goods            = array();
		foreach ($matches as $match)
		{
			preg_match_all($attr_name_preg, $match, $attr_names);
			preg_match_all($attr_value_preg1, $match, $attr_values);
			$attr_names  = $attr_names[1];
			$attr_values = $attr_values[1];
			if (empty($attr_values))
			{
				preg_match_all($attr_value_preg2, $match, $attr_values);
				$attr_values = $attr_values[1];
			}
			$attr_names = array_map(function ($attr_name) {
				return str_replace(':', '', $attr_name);
			}, $attr_names);
			$goods[]    = array('key' => $attr_names, 'value' => $attr_values);
		}
		if (empty($goods))
		{
			return array();
		}
		$data['goods'] = $goods;

		$price_preg = '/<span\sitemprop=\"highPrice\">([\.\d]*)<\/span>/';
		preg_match_all($price_preg, $html, $prices);
		$price = $prices[1][0];
		if (empty($price))
		{
			$pics_preg = '/itemprop=\"price\">(.*)<\/span>/';
			preg_match_all($pics_preg, $html, $prices);
			$price = $prices[1][0];
		}
		$data['price'] = $price;
	}
	catch (Exception $e)
	{
		dump($e->getMessage());
	}

	return $data;
}

function get_souq_address()
{
	$url     = 'https://saudi.souq.com/sa-en/account_addresses.php';
	$data    = array(
		'action'           => 'select_area',
		'source'           => 'account_addresses',
		'hitsCfs'          => '0532bf00fed56d310bbf4692e9a82c9c',
		'country_iso_code' => 'sa',
		'city_iso_code'    => 'RUH',
		'r_rul'            => 'https://saudi.souq.com/sa-en/account_addresses.php?action=add',
		'hitsCfsMeta'      => '3ZInkE80iAtOS20AS5eyKk8WOwcmEXRk/Bd3lBiYDqKS36ElBnggdU/Y1rtuT0M/3Om0cf+fSgD4wNefXHqyeVGDaIlSkc0Zw644TzmZqujaPX+vplYUs3pGZOF6/wpfZ1pOW5VKzgH0/pUb1gpUzJXW/Wup3Bcusd/ouNwlrTM=',
	);
	$headers = array(
		'Accept:application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding:gzip, deflate, br',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Cache-Control:no-cache',
		'Connection:keep-alive',
		//			'Content-Length:399',
		'Content-Type:application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie:c_Ident=15122279371194; ab.storage.deviceId.2e4ae497-9aed-4a69-8a2d-91cd396ab384=%7B%22g%22%3A%22e7fbb262-ec98-c3b6-1e64-4bb40ae0afb1%22%2C%22c%22%3A1512227942144%2C%22l%22%3A1512227942144%7D; ab.storage.userId.2e4ae497-9aed-4a69-8a2d-91cd396ab384=%7B%22g%22%3A%2217220336%22%2C%22c%22%3A1512227997717%2C%22l%22%3A1512227997717%7D; COCODE_SA=sa; tree_top_nav_sa_en_=1; _ga=GA1.3.761958626.1512227942; _gid=GA1.3.507996180.1512227942; s_ev21=%5B%5B%27Typed%2FBookmarked%27%2C%271512227968468%27%5D%2C%5B%27Other%2520Natural%2520Referrers%27%2C%271512293091353%27%5D%5D; s_ev22=%5B%5B%27Typed%2FBookmarked%253A%2520HomePage%27%2C%271512227968468%27%5D%2C%5B%27Other%2520Natural%2520Referrers%253A%2520www.mijing.com%27%2C%271512293091354%27%5D%5D; idc=17220336; is_logged_in=1; NSC_tpvr-72.52.8.197-80=ffffffff373be72f45525d5f4f58455e445a4a423660; remember_key=0b8e7c6ae66e428c26f8c39685aed53c; PHPSESSID=59r56vnml9jh3c664egurkkeo7lao2lu; bShowMobileVerificationOnceADay=1; customer_logged_in=0; _dc_gtm_UA-31806200-1=1; ab.storage.sessionId.2e4ae497-9aed-4a69-8a2d-91cd396ab384=%7B%22g%22%3A%22611b26cb-c459-affe-7159-9a207944766b%22%2C%22e%22%3A1512295379002%2C%22c%22%3A1512291284858%2C%22l%22%3A1512293579002%7D; PLATEFORMC=sa; PLATEFORML=en; s_sq=%5B%5BB%5D%5D; s_cc=true; _ga=GA1.2.761958626.1512227942; _gid=GA1.2.507996180.1512227942; s_ppvl=CreateNewAddressPage%2C50%2C50%2C1200%2C1088%2C769%2C1600%2C900%2C1%2CP; _ceg.s=p0dp7a; _ceg.u=p0dp7a; s_fid=38CBD40846A75CB4-2F63EBC9530DCED5; s_depth=6; s_source=%5B%5BB%5D%5D; s_nr_lifetime=1512293596403-Repeat; s_nr_year=1512293596404-Repeat; s_nr_quarter=1512293596404-Repeat; s_vs=1; s_dl=1; s_ppv=CreateNewAddressPage%2C56%2C50%2C1335%2C1088%2C769%2C1600%2C900%2C1%2CP',
		'Host:saudi.souq.com',
		'Origin:https://saudi.souq.com',
		'Pragma:no-cache',
		'Referer:https://saudi.souq.com/sa-en/account_addresses.php?action=add',
		'User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
		'X-Requested-With:XMLHttpRequest',
	);
	$ch      = curl_init();
	$options = array(
		CURLOPT_URL            => $url,
		CURLOPT_POST           => TRUE,
		CURLOPT_POSTFIELDS     => $data,
		CURLOPT_HTTPHEADER     => $headers,
		CURLOPT_REFERER        => $url,
		CURLOPT_RETURNTRANSFER => TRUE,
		CURLOPT_SSL_VERIFYPEER => FALSE,
		CURLOPT_SSL_VERIFYHOST => 2,
	);
	curl_setopt_array($ch, $options);
	$output = curl_exec($ch);
	$output = gzdecode($output);
	file_put_contents('./test.html', $output);
	dump(curl_error($ch));
	dump($output);
	curl_close($ch);
}

/**
 * postman 右上角有个code，可以将postman的请求转换成各种语言的代码段，这个功能很强大啊
 *
 * @param $c
 *
 * @return mixed|string
 */
function postman_souq($c)
{
	$curl = curl_init();

	curl_setopt_array($curl, array(
		CURLOPT_URL            => "https://saudi.souq.com/sa-en/account_addresses.php",
		CURLOPT_RETURNTRANSFER => TRUE,
		CURLOPT_ENCODING       => "",
		CURLOPT_MAXREDIRS      => 10,
		CURLOPT_TIMEOUT        => 30,
		CURLOPT_SSL_VERIFYPEER => FALSE,
		CURLOPT_SSL_VERIFYHOST => 2,
		CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST  => "POST",
		CURLOPT_POSTFIELDS     => "action=select_area&source=account_addresses&hitsCfs=bfb973ead536e11c287f8b249ce124fe&country_iso_code=ae&city_iso_code="
			.$c
			."&r_url=https%3A%2F%2Fsaudi.souq.com%2Fsa-en%2Faccount_addresses.php%3Faction%3Dadd&hitsCfsMeta=HIyY4HrQXlIjDdhaYz7S0fqDSockplN3UCIiHuUNg%2BNZjseymAqFtWRCsXarVzQ%2FXv0jM%2BY91ofjNl2oT8vQJHxydTO87bksRpz%2BjRATWG8Y7Q3vBSXZRa%2BS3zDiEWJHXETHfh4j3mJiNCDorgCVypsxPP9w94kRmxbUpBSp%2Bis%3D",
		CURLOPT_HTTPHEADER     => array(
			"cache-control: no-cache",
			"content-type: application/x-www-form-urlencoded",
			"cookie: c_Ident=15122279371194; ab.storage.deviceId.2e4ae497-9aed-4a69-8a2d-91cd396ab384=%7B%22g%22%3A%22e7fbb262-ec98-c3b6-1e64-4bb40ae0afb1%22%2C%22c%22%3A1512227942144%2C%22l%22%3A1512227942144%7D; COCODE_SA=sa; s_ev21=%5B%5B%27Typed%2FBookmarked%27%2C%271512227968468%27%5D%2C%5B%27Other%2520Natural%2520Referrers%27%2C%271512293091353%27%5D%5D; s_ev22=%5B%5B%27Typed%2FBookmarked%253A%2520HomePage%27%2C%271512227968468%27%5D%2C%5B%27Other%2520Natural%2520Referrers%253A%2520www.mijing.com%27%2C%271512293091354%27%5D%5D; tree_top_nav_sa_en_=1; NSC_tpvr-72.52.8.197-80=ffffffff3540528845525d5f4f58455e445a4a423660; ab.storage.userId.2e4ae497-9aed-4a69-8a2d-91cd396ab384=%7B%22g%22%3A%2213789019%22%2C%22c%22%3A1512296553545%2C%22l%22%3A1512296553545%7D; _ga=GA1.3.761958626.1512227942; _gid=GA1.3.507996180.1512227942; PHPSESSID=ie5icsu9e6pjcgh96m64no67v3rr7o8o; remember_key=eabed95102e389a0af048c83a50df2b7; idc=13789019; is_logged_in=1; customer_logged_in=0; ab.storage.sessionId.2e4ae497-9aed-4a69-8a2d-91cd396ab384=%7B%22g%22%3A%22f08d5924-7ba7-eaa1-6033-e8606c866eed%22%2C%22e%22%3A1512298445422%2C%22c%22%3A1512296553546%2C%22l%22%3A1512296645422%7D; s_sq=%5B%5BB%5D%5D; s_cc=true; _ga=GA1.2.761958626.1512227942; _gid=GA1.2.507996180.1512227942; s_ppvl=CreateNewAddressPage%2C62%2C62%2C1502%2C1088%2C769%2C1600%2C900%2C1%2CP; _ceg.s=p0drkp; _ceg.u=p0drkp; PLATEFORMC=sa; PLATEFORML=en; s_fid=38CBD40846A75CB4-2F63EBC9530DCED5; s_depth=14; s_source=%5B%5BB%5D%5D; s_nr_lifetime=1512296953293-Repeat; s_nr_year=1512296953293-Repeat; s_nr_quarter=1512296953294-Repeat; s_vs=1; s_dl=1; s_ppv=CreateNewAddressPage%2C62%2C62%2C1502%2C1088%2C769%2C1600%2C900%2C1%2CP",
			"postman-token: 1e852844-f005-eae7-3597-900f20a2edbe",
		),
	));

	$response = curl_exec($curl);
	$err      = curl_error($curl);

	curl_close($curl);

	if ($err)
	{
		return "cURL Error #:".$err;
	}
	else
	{
		return $response;
	}
}

// 抓取数据 --end-------------------------------------------------------------------------------------------end

// 转换时间戳到制定的格式
function trans_time($time, $type = 'Y-m-d H:i:s')
{
	return date($type, $time);
}

/**
 * 检测数组中必须存在的键
 *
 * @param array        $arr
 * @param array|string $fields
 *
 * @return bool
 */
function check_require(array $arr, $fields)
{
	if (is_string($fields))
	{
		$fields = explode(',', $fields);
	}
	foreach ($fields as $field)
	{
		if ( ! isset($arr[$field]) || empty($arr[$field]))
		{
			return FALSE;
		}
	}

	return TRUE;
}

// 讲数组的所有值都递归的改成字符串类型的
function trans_string(array &$arr)
{
	foreach ($arr as &$one)
	{
		if (is_bool($one))
		{
			$one = $one ? '1' : '0';
		}
		if (is_array($one))
		{
			$one = trans_string($one);
		}
		else
		{
			$one = strval($one);
		}
	}

	return $arr;
}

// 检测手机号是哪个运营商的
function telephone_type($telephone)
{
	$isChinaMobile = "/^134[0-8]\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])\d{8}$/"; //移动方面最新答复
	$isChinaUnion  = "/^(?:13[0-2]|145|15[56]|176|18[56])\d{8}$/"; //向联通微博确认并未回复
	$isChinaTelcom = "/^(?:133|153|177|173|18[019])\d{8}$/"; //1349号段 电信方面没给出答复，视作不存在
	if (preg_match($isChinaMobile, $telephone))
	{
		return '移动';
	}
	elseif (preg_match($isChinaUnion, $telephone))
	{
		return '联通';
	}
	elseif (preg_match($isChinaTelcom, $telephone))
	{
		return '电信';
	}
	else
	{
		return '其他';
	}
}

// 检测加油卡是中石油的还是中石化的
function fuel_card_type($card)
{
	// 中国石油加油卡是“9”开头16位卡号。 中国石化是“1”开头19位的卡号
	if (strlen($card) == 16 && substr($card, 0, 1) == '9')
	{
		return '中石油';
	}
	elseif (strlen($card) == 19 && substr($card, 0, 1) == '1')
	{
		return '中石化';
	}
	else
	{
		return '其他';
	}
}

// 判断是否是电话号码
function is_phone($phone, $preg = '')
{
	if (empty($preg))
	{
		$preg = '/^1[3|4|5|7|8]\d{9}$/';
	}

	return (bool) preg_match($preg, $phone);
}

// 判断是否是邮箱
function is_email($email, $preg = '')
{
	if (empty($preg))
	{
		$preg = '/^1[3|4|5|7|8]\d{9}$/';
	}

	return (bool) preg_match($preg, $email);
}