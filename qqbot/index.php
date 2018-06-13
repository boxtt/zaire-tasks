<?php
require './../tool/functions.php';

/*  https://ssl.ptlogin2.qq.com/ptqrlogin
?u1=http%3A%2F%2Fweb2.qq.com%2Fproxy.html
&ptqrtoken=1916321726
&ptredirect=0
&h=1
&t=1
&g=1
&from_ui=1
&ptlang=2052
&action=0-0-1528899270916
&js_ver=10270
&js_type=1
&login_sig=wa9wDD-63IekPXyhUtl5nG0P1UBHjocJ273kfADOFu-la0na7wh1CQmOELHzKVm3
&pt_uistyle=40
&aid=501004106
&daid=164
&mibao_css=m_webqq
&
*/
$start_url = 'http://web2.qq.com/';
$re = get_ssl_page($start_url);
dump($re);
die('ok');

$url_get_ticket = 'https://ssl.ptlogin2.qq.com/ptqrlogin';

$query_data = [
	'ul'         => 'http://web2.qq.com/proxy.html', // 不变
	'ptqrtoken'  => '955954507', // 这是会变化的
	'ptredirect' => '0', // 不变
	'h'          => '1', // 不变
	't'          => '1', // 不变
	'g'          => '1', // 不变
	'from_ui'    => '1', // 不变
	'ptlang'     => '2052', // 不变
	'action'     => '0-0-1528898313415', // 0-0-时间戳后加三位，感觉应该是微妙
	'js_ver'     => '10270', // 不变
	'js_type'    => '1', // 不变
	'login_sig'  => '9CqjrZP1RB4q*7WxJwatFdHvS5fQ3rNdvbIc0omHIjLqa0TDR9SQUgS8Q56I0ulj',
	'pt_uistyle' => '40', // 不变
	'aid'        => '501004106', // 不变
	'daid'       => '164', // 不变
	'mibao_css'  => 'm_webqq', // 不变
];

$query_str          = http_build_query($query_data);
$url_get_ticket_all = $url_get_ticket.'?'.$query_str;
dump($url_get_ticket_all);

$re = get_ssl_page($url_get_ticket_all);

dump($re);



