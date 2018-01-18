<?php
header('Content-Type:text/html; charset=utf-8');
//include_once("../mysqli.php");
//require("curl_http.php");
function ob2ar($obj)
{
	if (is_object($obj))
	{
		$obj = (array) $obj;
		$obj = ob2ar($obj);
	}
	elseif (is_array($obj))
	{
		foreach ($obj as $key => $value)
		{
			$obj[$key] = ob2ar($value);
		}
	}

	return $obj;
}

function trimall($str)//删除空格
{
	$qian = array(" ", "　", "\t", "\n", "\r");
	$hou  = array("", "", "", "", "");

	return str_replace($qian, $hou, $str);
}

/*$curl = new Curl_HTTP_Client();
$curl->set_referrer("http://www.luckyairship.com");
$curl->set_user_agent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101");
$html_data = $curl->fetch_url("http://www.luckyairship.com/history.html");*/
//$user_agent = get_user_agent();
$url        = 'http://www.luckyairship.com/history.html';
$user_agent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Maxthon/4.4.3.4000 Chrome/30.0.1599.101';
$cookie     = get_cookie($url, $user_agent);
$html_data  = get_html($url, $user_agent, $cookie);

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
function get_cookie($url, $user_agent)
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

preg_match_all('|<div\s+?class=\"historySearch\">([\s\S]+)</table>|', $html_data, $ul_arr);
//echo $html_data;
//$data=explode("</ul>",strtolower($html_data));
preg_match_all("|<tr class=\"\w*?\">([\s\S]+?)</tr>|", $ul_arr[1][0], $ul_arr2);
//print_r($ul_arr2);exit;
$i = 0;
foreach ($ul_arr2[1] as $arr)
{
	preg_match_all('|<td>([\s\S]+?)</td>|', $arr, $qishu_arr);
	//print_r($qishu_arr);exit;
	$qishu = trimall(strip_tags($qishu_arr[1][1]));
	preg_match_all('|<span class=\"ball1\">([\s\S]+?)</span>|', $qishu_arr[1][2], $number_arr);
	//print_r($number_arr);exit;
	$v    = $number_arr[1];
	$time = date('Y-m-d H:i:s');;
	$ball_1  = $v[0];
	$ball_2  = $v[1];
	$ball_3  = $v[2];
	$ball_4  = $v[3];
	$ball_5  = $v[4];
	$ball_6  = $v[5];
	$ball_7  = $v[6];
	$ball_8  = $v[7];
	$ball_9  = $v[8];
	$ball_10 = $v[9];
	if (strlen($qishu) > 0)
	{
		if ($i == 0)
		{
			$sball_1  = $ball_1;
			$sball_2  = $ball_2;
			$sball_3  = $ball_3;
			$sball_4  = $ball_4;
			$sball_5  = $ball_5;
			$sball_6  = $ball_6;
			$sball_7  = $ball_7;
			$sball_8  = $ball_8;
			$sball_9  = $ball_9;
			$sball_10 = $ball_10;
			$sqishu   = $qishu;
		}
		$is_js = 1;
		$sql   = "select id from c_auto_8 where qishu='".$qishu."' ";
//		$tquery = $mysqli->query($sql);
//		$tcou = $mysqli->affected_rows;
//		if ($tcou == 0)
//		{
//			$sql = "insert into c_auto_8(qishu,datetime,ball_1,ball_2,ball_3,ball_4,ball_5,ball_6,ball_7,ball_8,ball_9,ball_10) values ('$qishu','$time','$ball_1','$ball_2','$ball_3','$ball_4','$ball_5','$ball_6','$ball_7','$ball_8','$ball_9','$ball_10')";
			//echo $sql."<br>";
//			$mysqli->query($sql);
//			$m = $m + 1;
//		}
//		else
//		{
//			$usql = "update c_auto_8 set ball_1=$ball_1,ball_2=$ball_2,ball_3=$ball_3,ball_4=$ball_4,ball_5=$ball_5,ball_6=$ball_6,ball_7=$ball_7,ball_8=$ball_8,ball_9=$ball_9,ball_10=$ball_10 where qishu='"
//				.$qishu."'";
			//	echo $usql."<br>";
//			$mysqli->query($usql);
//		}
	}
	$i ++;
}
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title></title>
	<style type="text/css">
		<!--
		body, td, th {
			font-size: 12px;
		}

		body {
			margin-left: 0px;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 0px;
		}

		-->
	</style>
</head>
<body>
<script>
  window.parent.is_open = 1;
</script>
<script>
  <
  !--
  <?php $limit = rand(10, 25);?>
  var limit = "<?=$limit?>"
  if (document.images) {
    var parselimit = limit
  }

  function beginrefresh() {
    if (!document.images)
      return
    if (parselimit == 1)
      window.location.reload()
    else {
      parselimit -= 1
      curmin = Math.floor(parselimit)
      if (curmin != 0)
        curtime = curmin + "秒后自动获取!"
      else
        curtime = cursec + "秒后自动获取!"
      timeinfo.innerText = curtime
      setTimeout("beginrefresh()", 1000)
    }
  }

  window.onload = beginrefresh
</script>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td align="left">
			<input type=button name=button value="刷新" onClick="window.location.reload()">
			幸运飞艇<br>(<?= $sqishu ?>期:<?= "$sball_1,$sball_2,$sball_3,$sball_4,$sball_5,$sball_6,$sball_7,$sball_8,$sball_9,$sball_10" ?>)<br><span id="timeinfo"></span>
		</td>

	</tr>
</table>
<? if ($is_js)
{ ?>
	<iframe src="./js/js_xyft.php?qi=<?= $sqishu ?>" frameborder="0" scrolling="no" height="0" width="0"></iframe>
<? } ?>
</body>
</html>