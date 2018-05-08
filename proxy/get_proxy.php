<?php
require_once './mysql.php';
require_once __DIR__ . '/functions.php';
//set_time_limit(0);
//$db = sql::getInstance();

// 抓取西刺代理
$file = 'tmp';
//$h    = init_file($file);
$base = 'http://www.xicidaili.com/wn/';

$content = xici_curl($base);
dump($content);
die;
// 获取多少页
$pagination_preg = '/<div\sclass=\"pagination\">([\s\S.]*?)<\/div>/';
preg_match_all($pagination_preg, $content, $matches);
$match  = $matches[1][0];
$a_preg = '/>([0-9]+)<\/a>/';
preg_match_all($a_preg, $match, $matches);
$matches = $matches[1];
$page    = end($matches);
for ($i = 1; $i <= $page; $i ++)
{
	$url = $base.$i;

	$sql   = 'select count(*) AS c from proxy WHERE source='.$url;
	$count = $db->query($sql);
	$count = $count['c'];
	if ($count >= 100)
	{
		continue;
	}

	$content = xici_curl($url);

	$tr_preg = '/<tr([\s\S.]*?)<\/tr>/';
	preg_match_all($tr_preg, $content, $matches);
	$matches = $matches[1];

	$ip_preg   = '/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/';
	$port_preg = '/<td>([0-9]{1,5})<\/td>/';
	foreach ($matches as $value)
	{
		/**
		 * <tr class="odd">
		 * <td class="country"><img src="http://fs.xicidaili.com/images/flag/cn.png" alt="Cn" /></td>
		 * <td>113.89.55.146</td>
		 * <td>9999</td>
		 * <td>
		 * <a href="/2018-01-01/guangdong">广东深圳</a>
		 * </td>
		 * <td class="country">透明</td>
		 * <td>HTTPS</td>
		 * <td class="country">
		 * <div title="1.198秒" class="bar">
		 * <div class="bar_inner fast" style="width:92%">
		 *
		 * </div>
		 * </div>
		 * </td>
		 * <td class="country">
		 * <div title="0.239秒" class="bar">
		 * <div class="bar_inner fast" style="width:96%">
		 *
		 * </div>
		 * </div>
		 * </td>
		 *
		 * <td>8天</td>
		 * <td>18-01-09 05:00</td>
		 * </tr>
		 */
		preg_match_all($ip_preg, $value, $ips);
		preg_match_all($port_preg, $value, $ports);
		$ip   = $ips[0];
		$port = $ports[1];
		if ($ip && $port)
		{
			$time = time();
			$ip   = $ip[0];
			$port = $port[0];
			$data = [
				'ip'          => $ip,
				'port'        => $port,
				'update_time' => $time,
				'source'      => $url,
			];
			$one  = $db->get_result_array('proxy', '*', 'ip=\''.$ip.'\' and port=\''.$port.'\'');
			if ( ! $one)
			{
				$data['create_time'] = $time;
				$db->execute('proxy', 'INSERT', $data);
			}
			ll($h, $ip.':'.$port);
		}
	}
}

close_file($h);