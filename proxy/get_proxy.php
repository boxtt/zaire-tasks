<?php
require_once __DIR__ . './../tool/mysql.php';
require_once __DIR__ . './../tool/functions.php';
header("Content-type: text/html; charset=utf-8");
//set_time_limit(0);
//$db = sql::getInstance();

$urls = [
    [
        'type' => 'goubanjia',
        'url' => 'http://www.goubanjia.com',
        'host' => 'www.goubanjia.com'
    ],
    [
        'type' => 'kuaidaili',
        'url' => 'https://www.kuaidaili.com/ops/proxylist/{page}/',
        'host' => 'www.kuaidaili.com',
        'page_start' => 1,
        'page_end' => 10,
    ],
    [
        'type' => 'goubanjia',
        'url' => 'https://proxy.mimvp.com/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.xicidaili.com/nn/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.xicidaili.com/nt/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.xicidaili.com/wn/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.xicidaili.com/wt/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.data5u.com/free/gngn/index.shtml',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.data5u.com/free/gnpt/index.shtml',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.data5u.com/free/gwgn/index.shtml',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.data5u.com/free/gwpt/index.shtml',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.mayidaili.com/free/1',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://31f.cn/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://ip.zdaye.com/FreeIPlist.html',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.66ip.cn/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.ip3366.net/?stype=1&page=2',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.cz88.net/proxy/',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.xdaili.cn/ipagent//checkIp/ipList?ip_ports%5B%5D=76.67.60.60%3A2283&ip_ports%5B%5D=15.81.2.37%3A3234&ip_ports%5B%5D=214.169.146.220%3A1138&ip_ports%5B%5D=35.101.180.56%3A8133&ip_ports%5B%5D=99.209.178.150%3A3543&ip_ports%5B%5D=77.218.34.24%3A6635&ip_ports%5B%5D=160.98.213.66%3A8115&ip_ports%5B%5D=162.70.180.172%3A124&ip_ports%5B%5D=194.149.193.201%3A6238&ip_ports%5B%5D=150.61.149.127%3A5728&ip_ports%5B%5D=118.184.138.27%3A785&ip_ports%5B%5D=16.104.224.108%3A2063&ip_ports%5B%5D=74.21.67.143%3A4626',
        'host' => ''
    ],
    [
        'type' => 'goubanjia',
        'url' => 'http://www.mogumiao.com/web',
        'host' => ''
    ],
];
foreach ($urls as $one) {
    $file = 'tmp';
//    $h = init_file($file, 'html');
    $url = get_arr($one, 'url');
    $host = get_arr($one, 'host');
    $type = get_arr($one, 'type');
    $page_start = get_arr($one, 'page_start');
    $page_end = get_arr($one, 'page_end');
    if ($type != 'kuaidaili') {
        continue;
    }

    $now_urls = [];
    if($page_start&&$page_end)
    {

    }
    else
    {
        $now_urls[] = $url;
    }

    
    dump('当前设置访问的网站：' . $url);
    dump($one);
    // 抓取页面
    $content = file_get_contents('./tmp.html');
    $content = proxy_curl($url, $host);
//    dump($content);
//    ll($h, $content);
    switch ($type) {
        case 'goubanjia':
            get_goubanjia_proxy($content);
            break;
        case 'kuaidaili':
            get_kuaidaili_proxy($content);
            break;
        default:
            die('no this type');
            break;
    }
    die('one');
}
die('ok');

function get_goubanjia_proxy($content)
{
    $urls = [];
    $preg = '/<tbody>([\s\S.]*?)<\/tbody>/';
    preg_match_all($preg, $content, $matches);
    if (count($matches) > 1) {
        $content = $matches[1][0];
        if ($content) {
            $preg = '/<tr\sclass=\"([\s\S.]*?)<\/tr>/';
            preg_match_all($preg, $content, $matches);
            if (count($matches) > 1) {
                $urls = array_map(function ($one) {
                    $preg = '/<td([\s\S.]*?)<\/td>/';
                    preg_match_all($preg, $one, $re);
                    $re = $re[1];
                    $ip = '';
                    $port = '';
                    $desc = '';
                    $type = '';
                    $anonymous = '';
                    foreach ($re as $k => $v) {
                        switch ($k) {
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
                                $ip = array_slice($ip, 1);
                                $ip_port = [];
                                foreach ($ip as $o) {
                                    foreach ($o as $k => $v) {
                                        if (array_key_exists($k, $ip_port)) {
                                            $ip_port[$k] = $ip_port[$k] . $v;
                                        } else {
                                            $ip_port[$k] = $v;
                                        }
                                    }
                                }
                                $ip_port[count($ip_port) - 2] = ':';
                                $ip_port = implode('', $ip_port);
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
                        'ip' => $ip,
                        'port' => $port,
                        'desc' => $desc,
                        'type' => $type,
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
    $preg = '/<tr>([.\s\S]*?)<\/tr>/';
    preg_match_all($preg, $content, $matches);
    $urls = array_map(function ($one) {
        $preg = '/\">([.\s\S]*?)</';
        preg_match_all($preg, $one, $matches);
        $match = $matches[1];
        return [
            'ip' => $match[0],
            'port' => $match[1],
            'type' => $match[3],
            'anonymous' => $match[2],
            'desc' => $match['5'],
        ];
    }, $matches[1]);
    dump($urls);
}


$base = 'http://www.xicidaili.com/wn/';

//$content = proxy_curl($base);
dump($content);
die;
// 获取多少页
$pagination_preg = '/<div\sclass=\"pagination\">([\s\S.]*?)<\/div>/';
preg_match_all($pagination_preg, $content, $matches);
$match = $matches[1][0];
$a_preg = '/>([0-9]+)<\/a>/';
preg_match_all($a_preg, $match, $matches);
$matches = $matches[1];
$page = end($matches);
for ($i = 1; $i <= $page; $i++) {
    $url = $base . $i;

    $sql = 'select count(*) AS c from proxy WHERE source=' . $url;
    $count = $db->query($sql);
    $count = $count['c'];
    if ($count >= 100) {
        continue;
    }

    $content = proxy_curl($url);

    $tr_preg = '/<tr([\s\S.]*?)<\/tr>/';
    preg_match_all($tr_preg, $content, $matches);
    $matches = $matches[1];

    $ip_preg = '/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/';
    $port_preg = '/<td>([0-9]{1,5})<\/td>/';
    foreach ($matches as $value) {
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
        $ip = $ips[0];
        $port = $ports[1];
        if ($ip && $port) {
            $time = time();
            $ip = $ip[0];
            $port = $port[0];
            $data = [
                'ip' => $ip,
                'port' => $port,
                'update_time' => $time,
                'source' => $url,
            ];
            $one = $db->get_result_array('proxy', '*', 'ip=\'' . $ip . '\' and port=\'' . $port . '\'');
            if (!$one) {
                $data['create_time'] = $time;
                $db->execute('proxy', 'INSERT', $data);
            }
            ll($h, $ip . ':' . $port);
        }
    }
}

close_file($h);