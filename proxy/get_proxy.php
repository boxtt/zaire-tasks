<?php
require_once __DIR__.'./../tool/mysql.php';
require_once __DIR__.'./../tool/functions.php';
header("Content-type: text/html; charset=utf-8");
//set_time_limit(0);
//$db = sql::getInstance();

$urls = [
	[
		'type'  => 'goubanjia',   // 类型
		'url'   => 'http://www.goubanjia.com',   // 地址
		'host'  => 'www.goubanjia.com',  // 抓取请求的时候需要的传递的参数
		'valid' => TRUE,  // 本条记录是否可用
	],
	[
		'type'       => 'kuaidaili',
		'url'        => 'https://www.kuaidaili.com/ops/proxylist/{page}/',
		'host'       => 'www.kuaidaili.com',
		'page_start' => 1,   // 如果有分页，这是开始的页数
		'page_end'   => 10,  // 如果有分页，这是结束的页数
		'valid'      => TRUE,
	],
	[
		'desc'  => '米扑代理，端口是图片，需要识别图片，我记得我做过',
		'type'  => 'mimvp',
		'url'   => 'https://proxy.mimvp.com/',
		'host'  => '',
		'valid' => FALSE,
	],
	[
		'desc'       => '西刺代理高匿代理，每天访问的有限制，还是次数有限制，这个需要在看看',
		'type'       => 'xicidaili',
		'url'        => 'http://www.xicidaili.com/nn/{page}',
		'host'       => 'www.xicidaili.com',
		'page_start' => 1,   // 如果有分页，这是开始的页数
		'page_end'   => 2048,  // 如果有分页，这是结束的页数
		'valid'      => TRUE,
	],
	[
		'desc'       => '西刺代理普通代理',
		'type'       => 'xicidaili',
		'url'        => 'http://www.xicidaili.com/nt/{page}',
		'host'       => 'www.xicidaili.com',
		'page_start' => 1,   // 如果有分页，这是开始的页数
		'page_end'   => 667,  // 如果有分页，这是结束的页数
		'valid'      => TRUE,
	],
	[
		'desc'       => '西刺代理https代理',
		'type'       => 'xicidaili',
		'url'        => 'http://www.xicidaili.com/wn/{page}',
		'host'       => 'www.xicidaili.com',
		'page_start' => 1,   // 如果有分页，这是开始的页数
		'page_end'   => 1173,  // 如果有分页，这是结束的页数
		'valid'      => TRUE,
	],
	[
		'desc'       => '西刺代理http代理',
		'type'       => 'xicidaili',
		'url'        => 'http://www.xicidaili.com/wt/{page}',
		'host'       => 'www.xicidaili.com',
		'page_start' => 1,   // 如果有分页，这是开始的页数
		'page_end'   => 1769,  // 如果有分页，这是结束的页数
		'valid'      => TRUE,
	],
	[
		'desc'  => '无忧代理-全部',
		'type'  => 'data5u',
		'url'   => 'http://www.data5u.com/free/index.shtml',
		'host'  => 'www.data5u.com',
		'valid' => TRUE,
	],
	[
		'desc'  => '无忧代理-国内高匿',
		'type'  => 'data5u',
		'url'   => 'http://www.data5u.com/free/gngn/index.shtml',
		'host'  => 'www.data5u.com',
		'valid' => TRUE,
	],
	[
		'desc'  => '无忧代理-国内普通',
		'type'  => 'data5u',
		'url'   => 'http://www.data5u.com/free/gnpt/index.shtml',
		'host'  => 'www.data5u.com',
		'valid' => TRUE,
	],
	[
		'desc'  => '无忧代理-国外高匿',
		'type'  => 'data5u',
		'url'   => 'http://www.data5u.com/free/gwgn/index.shtml',
		'host'  => 'www.data5u.com',
		'valid' => TRUE,
	],
	[
		'desc'  => '无忧代理-国外普通',
		'type'  => 'data5u',
		'url'   => 'http://www.data5u.com/free/gwpt/index.shtml',
		'host'  => 'www.data5u.com',
		'valid' => TRUE,
	],
	[
		'desc'       => '蚂蚁代理，这个端口也是图片，另，图片上还有干扰线',
		'type'       => 'mayidaili',
		'url'        => 'http://www.mayidaili.com/free/{page}',
		'host'       => 'www.mayidaili.com',
		'page_start' => 1,   // 如果有分页，这是开始的页数
		'page_end'   => 5928,  // 如果有分页，这是结束的页数
		'valid'      => TRUE,
	],
	[
		'desc'  => '三一代理，每小时更新',
		'type'  => 'saiyidaili',
		'url'   => 'http://31f.cn/',
		'host'  => '31f.cn',
		'valid' => TRUE,
	],
	[
		'desc'  => '站大爷，报错了，不知道为什么',
		'type'  => 'zhandaye',
		'url'   => 'http://ip.zdaye.com/FreeIPlist.html',
		'host'  => 'ip.zdaye.com',
		'valid' => FALSE,
	],
	[
		'desc'       => '66ip的代理，返回没有结果',
		'type'       => 'ip66',
		'url'        => 'http://www.66ip.cn/{page}.html',
		'host'       => 'www.66ip.cn',
		'page_start' => 1,   // 如果有分页，这是开始的页数
		'page_end'   => 1261,  // 如果有分页，这是结束的页数
		'valid'      => FALSE,
	],
	[
		'type' => 'goubanjia',
		'url'  => 'http://www.ip3366.net/?stype=1&page=2',
		'host' => '',
	],
	[
		'type' => 'goubanjia',
		'url'  => 'http://www.cz88.net/proxy/',
		'host' => '',
	],
	[
		'type' => 'goubanjia',
		'url'  => 'http://www.xdaili.cn/ipagent//checkIp/ipList?ip_ports%5B%5D=76.67.60.60%3A2283&ip_ports%5B%5D=15.81.2.37%3A3234&ip_ports%5B%5D=214.169.146.220%3A1138&ip_ports%5B%5D=35.101.180.56%3A8133&ip_ports%5B%5D=99.209.178.150%3A3543&ip_ports%5B%5D=77.218.34.24%3A6635&ip_ports%5B%5D=160.98.213.66%3A8115&ip_ports%5B%5D=162.70.180.172%3A124&ip_ports%5B%5D=194.149.193.201%3A6238&ip_ports%5B%5D=150.61.149.127%3A5728&ip_ports%5B%5D=118.184.138.27%3A785&ip_ports%5B%5D=16.104.224.108%3A2063&ip_ports%5B%5D=74.21.67.143%3A4626',
		'host' => '',
	],
	[
		'type' => 'goubanjia',
		'url'  => 'http://www.mogumiao.com/web',
		'host' => '',
	],
];
foreach ($urls as $one)
{
	$file       = 'tmp';
	$h          = init_file($file, 'html');
	$url        = get_arr($one, 'url');
	$host       = get_arr($one, 'host');
	$type       = get_arr($one, 'type');
	$page_start = get_arr($one, 'page_start');
	$page_end   = get_arr($one, 'page_end');
	$valid      = get_arr($one, 'valid', FALSE);
	if ( ! $valid)
	{
		continue;
	}
	if ($type != 'ip66')
	{
		continue;
	}

	$now_urls = [];
	if ($page_start && $page_end)
	{
		for (; $page_start <= $page_end; $page_start ++)
		{
			$now_urls[] = str_replace('{page}', $page_start, $url);
		}
	}
	else
	{
		$now_urls[] = $url;
	}

	foreach ($now_urls as $url)
	{
		dump('当前设置访问的网站：'.$url);
		// 抓取页面
//		$content = file_get_contents('./tmp.html');
		$content = proxy_curl($url, $host);
		ll($h, $content);
		switch ($type)
		{
			case 'goubanjia':
				get_goubanjia_proxy($content);
				break;
			case 'kuaidaili':
				get_kuaidaili_proxy($content);
				break;
			case 'xicidaili':
				get_xicidaili_proxy($content);
				break;
			case 'data5u':
				get_data5u_proxy($content);
				break;
			case 'mayidaili':
				get_mayidaili_proxy($content);
				break;
			case 'saiyidaili':
				get_saiyidaili_proxy($content);
				break;
			case 'zhandaye':
				get_zhandaye_proxy($content);
			case 'ip66':
				get_ip66_proxy($content);
				break;
			default:
				die('no this type');
				break;
		}
		die('one_all');
	}
}
die('ok');

function get_goubanjia_proxy($content)
{
	$urls = [];
	$preg = '/<tbody>([\s\S.]*?)<\/tbody>/';
	preg_match_all($preg, $content, $matches);
	if (count($matches) > 1)
	{
		$content = $matches[1][0];
		if ($content)
		{
			$preg = '/<tr\sclass=\"([\s\S.]*?)<\/tr>/';
			preg_match_all($preg, $content, $matches);
			if (count($matches) > 1)
			{
				$urls = array_map(function ($one) {
					$preg = '/<td([\s\S.]*?)<\/td>/';
					preg_match_all($preg, $one, $re);
					$re        = $re[1];
					$ip        = '';
					$port      = '';
					$desc      = '';
					$type      = '';
					$anonymous = '';
					foreach ($re as $k => $v)
					{
						switch ($k)
						{
							// ip 和端口
							case 0:
								$preg = '/<div\sstyle=\'display\s?:\s?inline-block;\'>([0-9.:]*?)<\/div>';
								$preg .= '|<span\sstyle=\'display\s?:\s?inline-block;\'>([0-9.:]*?)<\/span>';
								$preg .= '|<span\sstyle=\'display\s?:\s?inline-block;\'>([0-9.:]*?)<\/span>';
								$preg .= '|<span>([0-9.:]*?)<\/span>';
								$preg .= '|<p>([0-9.:]*?)<\/p>';
								$preg .= '|\">([0-9:]*?)<\/';
								$preg .= '|<p\sstyle=\'display\s?:\s?inline-block;\'>([0-9.:]*?)<\/p>/';
								preg_match_all($preg, $v, $ip);
								$ip      = array_slice($ip, 1);
								$ip_port = [];
								foreach ($ip as $o)
								{
									foreach ($o as $k => $v)
									{
										if (array_key_exists($k, $ip_port))
										{
											$ip_port[$k] = $ip_port[$k].$v;
										}
										else
										{
											$ip_port[$k] = $v;
										}
									}
								}
								$ip_port[count($ip_port) - 2] = ':';
								$ip_port                      = implode('', $ip_port);
								list($ip, $port) = explode(':', $ip_port);
								break;
							// 匿名度
							case 1:
								$preg = '/class=\"href\">([.\s\S]*?)<\/a>/';
								preg_match_all($preg, $v, $anonymous);
								$anonymous = $anonymous[1][0];
								break;
							// 类型
							case 2:
								$preg = '/class=\"href\">([.\s\S]*?)<\/a>/';
								preg_match_all($preg, $v, $type);
								$type = $type[1][0];
								break;
							// 地址，作为额外的描述
							case 3:
								$preg = '/class=\"href\">([.\s\S]*?)<\/a>/';
								preg_match_all($preg, $v, $desc);
								$desc = implode('-', $desc[1]);
								break;
							default:
								break;
						}
					}

					return [
						'ip'        => $ip,
						'port'      => $port,
						'desc'      => $desc,
						'type'      => $type,
						'anonymous' => $anonymous,
					];
				}, $matches[1]);
			}
		}
	}
	dump($urls);
}

function get_kuaidaili_proxy($content)
{
	$urls = [];
	$preg = '/<tbody\sclass=\"center\">([\s\S.]*?)<\/tbody>/';
	preg_match_all($preg, $content, $matches);
	$content = $matches[1][3];
	$preg    = '/<tr>([.\s\S]*?)<\/tr>/';
	preg_match_all($preg, $content, $matches);
	$urls = array_map(function ($one) {
		$preg = '/\">([.\s\S]*?)</';
		preg_match_all($preg, $one, $matches);
		$match = $matches[1];

		return [
			'ip'        => $match[0],
			'port'      => $match[1],
			'type'      => $match[3],
			'anonymous' => $match[2],
			'desc'      => $match['5'],
		];
	}, $matches[1]);
	dump($urls);
}

function get_xicidaili_proxy($content)
{
	$tr_preg = '/<tr([\s\S.]*?)<\/tr>/';
	preg_match_all($tr_preg, $content, $matches);
	$matches = $matches[1];
	dump($matches);
	die;

	$ip_preg   = '/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/';
	$port_preg = '/<td>([0-9]{1,5})<\/td>/';
	foreach ($matches as $value)
	{
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
				'source'      => $value,
			];
			dump($data);
		}
	}
}

function get_data5u_proxy($content)
{
	$preg = '/<ul\sclass=\"l2\">([.\s\S]*?)<\/ul>/';
	preg_match_all($preg, $content, $matches);
	$content = $matches[1];
	foreach ($content as $one)
	{
		$preg = '/<li([.\s\S]*?<\/li>)/';
		preg_match_all($preg, $one, $matches);
		$match = $matches[1];
		$data  = [];
		foreach ($match as $k => $v)
		{
			if ($k == 0)
			{
				$ip         = substr($v, 1, - 5);
				$data['ip'] = $ip;
			}
			elseif ($k == 1)
			{
				$preg = '/>([0-9]{1,5})</';
				preg_match_all($preg, $v, $v_match);
				$data['port'] = $v_match[1][0];
			}
			elseif ($k == 2)
			{
				$preg = '/\/index\.html\">([.\s\S]*?)<\/a>/';
				preg_match_all($preg, $v, $v_match);
				$data['anonymous'] = $v_match[1][0];
			}
			elseif ($k == 3)
			{
				$preg = '/\/index\.html\">([.\s\S]*?)<\/a>/';
				preg_match_all($preg, $v, $v_match);
				$data['type'] = $v_match[1][0];
			}
		}
		dump($data);
	}
}

function get_mayidaili_proxy($content)
{
	$preg = '/<tbody>([.\s\S]*?)<\/tbody>/';
	preg_match_all($preg, $content, $matches);
	$content = $matches[1][0];

	$preg = '/<tr>([.\s\S]*?)<\/tr>/';
	preg_match_all($preg, $content, $matches);
	$matches = $matches[1];
	foreach ($matches as $match)
	{
		$preg = '/<td>([.\s\S]*?)<\/td>/';
		preg_match_all($preg, $match, $one_matches);
		$one_matches = $one_matches[1];
		$data        = [];
		foreach ($one_matches as $k => $v)
		{
			switch ($k)
			{
				case 0:
					$data['ip'] = trim($v);
					break;
				case 1:
					$data['port'] = trim($v);
					break;
				case 2:
					$preg = '/\">([.\s\S]*?)<\/a>/';
					preg_match_all($preg, $v, $v_matches);
					$data['anonymous'] = $v_matches[1][0];
					break;
				default:
					break;
			}
		}
		dump($data);
	}
}

function get_saiyidaili_proxy($content)
{
	$preg = '/<table([.\s\S]*?)<\/table>/';
	preg_match_all($preg, $content, $matches);
	$content = $matches[1][0];

	$preg = '/<tr>([.\s\S]*?)<\/tr>/';
	preg_match_all($preg, $content, $matches);
	$content = $matches[1];
	foreach ($content as $k => $one)
	{
		if ($k)
		{
			$preg = '/<td>([.\s\S]*?)<\/td>/';
			preg_match_all($preg, $one, $matches);
			$matches = $matches[1];
			$data    = [];
			foreach ($matches as $kk => $v)
			{
				if ($kk == 1)
				{
					$data['ip'] = $v;
				}
				elseif ($kk == 2)
				{
					$data['port'] = $v;
				}
				elseif ($kk == 4)
				{
					$preg = '/\">([.\s\S]*?)<\/a>/';
					preg_match_all($preg, $v, $matches);
					$data['type'] = $matches[1][0];
				}
			}
			dump($data);
		}
	}
}

function get_zhandaye_proxy($content)
{
	dump($content);
}

function get_ip66_proxy($content)
{
	dump($content);
}
