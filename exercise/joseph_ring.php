<?php
/**
 * Created by PhpStorm.
 * User: robin
 * Date: 2018/5/19
 * Time: 10:50
 * 一群猴子排成一圈，按 1，2，...，n 依次编号。然后从第 1 只开始数，数到第 m 只,把它踢出圈，
 * 从它后面再开始数，再数到第 m 只，在把它踢出去...，如此不停的进行下去，直到最后只剩下一只猴子为止，
 * 那只猴子就叫做大王。
 * 要求编程模拟此过程，输入 m、n, 输出最后那个大王的编号。（新浪）（小米）
 * 这是著名的约瑟夫环问题方案一，使用 php 来模拟这个过程
 */
require __DIR__.'/../tool/functions.php';
$n = 10;
$m = 10;
set_time_limit(5);
$arr = range(1, $n);
$i = 1;
while (TRUE)
{
	$count = count($arr);
	if ($count == 1)
	{
		break;
	}
	foreach ($arr as $k => $v)
	{
		if ($i == $m)
		{
			unset($arr[$k]);
			$i = 0;
		}
		$i ++;
	}
}
$arr = array_values($arr);
var_dump($arr[0]);


