<?php

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

function get_str($i)
{
	$n   = base_convert($i, 10, 36);
	$n   = str_pad($n, 4, 0, STR_PAD_LEFT);
	$arr = str_split($n, 1);
	$str = implode('', $arr);

	return $str;
}

function get_cookie($url, $user_agent, $ip, $port)
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

	curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC); //代理认证模式
	curl_setopt($ch, CURLOPT_PROXY, $ip.':'.$port);
//	curl_setopt($ch, CURLOPT_PROXYPORT, $port);
////curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
	curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式

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

function get_pan($url, $cookie_tmp, $user_agent, $pwd = '', $vcode_str = '', $h, $ip, $port)
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

	curl_setopt($ch, CURLOPT_PROXY, $ip);
	curl_setopt($ch, CURLOPT_PROXYPORT, $port);
//curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
	curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式

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

/*
*返回字符串的毫秒数时间戳
*/
function get_total_millisecond()
{
	$time  = explode(" ", microtime());
	$time  = $time [1].($time [0] * 1000);
	$time2 = explode(".", $time);
	$time  = $time2[0];

	return $time;
}

/*
 * 获取随机的user-agent
 */
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

function init_file($surl)
{
	$file = __DIR__.'/'.$surl.'.txt';
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
	$data = json_encode($data);
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
	$old      = __DIR__.'/'.$file_old.'.txt';
	$new      = __DIR__.'/'.$file_new.'.txt';
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

function is_cli()
{
	// 是否是cli 模式下的
	$sapi_type = php_sapi_name();
	$is_cli    = (substr($sapi_type, 0, 3) == 'cgi') ? FALSE : TRUE;

	return $is_cli;
}

function get_data()
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

function get_arr(array $arr, $key, $default = NULL)
{
	if (isset($arr[$key]))
	{
		return $arr[$key];
	}

	return $default;
}

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

// 谷歌翻译 --start
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
	$tk         = get_tk($keyword);
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

function get_tk($a)
{
	$tkk = explode('.', get_tkk());
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

// 谷歌翻译 --end

// 百度翻译 --start zh:中文   en:英语   ara:阿拉伯语
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
function translate($keyword, $to = 'en', $from = 'zh')
{
	$url  = 'http://fanyi.baidu.com/v2transapi';
	$data = array(
		'from'              => $from,
		'to'                => $to,
		'query'             => $keyword,
		'transtype'         => 'translang',
		'simple_means_flag' => '3',
	);
	$re   = send_post($url, $data);
	$re   = json_decode($re, TRUE);
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

// 百度翻译 --end

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
