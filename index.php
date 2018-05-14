<?php
header("Content-type: text/html; charset=utf-8");
require './tool/functions.php';

// 快递100查询的接口
//$num = '889352208136690662';
$num = '889602731173989991';
$url = 'http://www.kuaidi100.com/autonumber/autoComNum?resultv2=1&text='.$num;
$data = getSslPage($url);
$re = json_decode($data, true);

$type = $re['auto'][0]['comCode'];
$url2 = 'http://www.kuaidi100.com/query?type='.$type.'&postid='.$num.'&temp='.(1/time());
$data = getSslPage($url2);
$re2 = json_decode($data,true);

dump($re);
dump($re2);

die;
$h = mysqli_connect('127.0.0.1', 'root', 'root', 'bigdata', 3306);

$i = 2000000;
while ($i < 2000000) {
    $i++;
    $v = num2ch($i);
    output($i . '--' . $v);
    $sql = 'insert into bb (`id`,`value`) VALUE (' . $i . ' , \'' . $v . '\')';
    $res = mysqli_query($h, $sql);
}

die;

$auth_key = 'QQvfCR/&@lre:"GwXJLK_(`#$W/Sf!gS&-~)]/v}vXY{R]cAIc-ZOs~lNA}opN.h';
$str = '123456';
dump(md5(sha1($str) . $auth_key));

die;

$tt = '‭13585810626';
$gg = '13585810626';

$t_m = mb_detect_encoding($tt, array("ASCII", 'UTF-8', "GB2312", "GBK", 'BIG5'));
$g_m = mb_detect_encoding($gg, array("ASCII", 'UTF-8', "GB2312", "GBK", 'BIG5'));
echo $t_m;
echo '<br />';
echo $g_m;
echo '<br />';
echo strlen($tt);
echo '<br />';
echo strlen($gg);
echo '<br />';
echo mb_strlen($tt);
echo '<br />';
echo mb_strlen($gg);
echo '<br />';

$str = '[{"name":"\u5c3a\u5bf8","value":["\u5927","\u5c0f","\u4e2d"]}]';

function unicode_decode($name)
{
    // 转换编码，将Unicode编码转换成可以浏览的utf-8编码
    $pattern = '/([\w]+)|(\\\u([\w]{4}))/i';
    preg_match_all($pattern, $name, $matches);
    if (!empty ($matches)) {
        $name = '';
        for ($j = 0; $j < count($matches [0]); $j++) {
            $str = $matches [0][$j];
            if (strpos($str, '\\u') === 0) {
                $code = base_convert(substr($str, 2, 2), 16, 10);
                $code2 = base_convert(substr($str, 4), 16, 10);
                $c = chr($code) . chr($code2);
                $c = iconv('UCS-2', 'UTF-8', $c);
                $name .= $c;
            } else {
                $name .= $str;
            }
        }
    }

    return $name;
}
