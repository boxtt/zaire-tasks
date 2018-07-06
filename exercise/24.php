<?php
/**
 * 计算24点
 */
require __DIR__.'/../tool/functions.php';
set_time_limit(10);

get_all_combination([1, 2, 3, 4, 5], 4);

// 计算数组的几个元素的所有排列
/**
 * @param  array $arr            要排列的数组
 * @param   int  $n              从数组中取出多少个
 * @param bool   $is_combination 是否是排列，排列不可重复，组合可以重复
 *
 * @return array
 */
function get_all_combination($arr, $n, $is_combination = TRUE)
{
	$m = count($arr);
	$n = $n > $m ? $m : ($n < 1 ? 1 : $n);

	$data = array_fill(0,$n,0);
	dump($data);
	while(TRUE)
	{

	}


	return [];
}

die('ok');

/*$a = rand(1,24);
$b = rand(1,24);
$c = rand(1,24);
$d = rand(1,24);*/

$a = 3;
$b = 4;
$c = 5;
$d = 6;

$arr = [$a, $b, $c, $d];

foreach ($arr as $v)
{
	if ($v > 24 || $v < 1)
	{
		die('不允许输入1-13之外的数字');
	}
}

// 4个数字的所有排列组合
//计算一个数组的所有排列组合

// 求一个含有N个元素的数组中取出M个元素组成新的数组，一共可以组合成的数组并输出
function getCombinationToString($arr, $m)
{
	if ($m == 1)
	{
		return $arr;
	}
	$result = array();

	$tmpArr = $arr;
	unset($tmpArr[0]);
	for ($i = 0; $i < count($arr); $i ++)
	{
		$s   = $arr[$i];
		$ret = getCombinationToString(array_values($tmpArr), ($m - 1));

		foreach ($ret as $row)
		{
			$result[] = $s.$row;
		}
	}

	return $result;
}


/* // 网上找的代码，不能用 https://blog.csdn.net/phpfenghuo/article/details/23137749
$values = array(3, 4, 5, 6);
$result = 24;
$list = array();
echo "<pre>";
makeValue($values);
print_r($list);

function makeValue($values, $set = array())
{
	$words = array("+", "-", "*", "/");
	if (sizeof($values) == 1)
	{
		$set[] = array_shift($values);

		return makeSpecial($set);
	}

	foreach ($values as $key => $value)
	{
		$tmpValues = $values;
		unset($tmpValues[$key]);
		foreach ($words as $word)
		{
			makeValue($tmpValues, array_merge($set, array($value, $word)));
		}
	}
}

function makeSpecial($set)
{
	$size = sizeof($set);

	if ($size <= 3 || ! in_array("/", $set) && ! in_array("*", $set))
	{
		return makeResult($set);
	}

	for ($len = 3; $len < $size - 1; $len += 2)
	{
		for ($start = 0; $start < $size - 1; $start += 2)
		{
			if ( ! ($set[$start - 1] == "*" || $set[$start - 1] == "/" || $set[$start + $len] == "*"
				|| $set[$start + $len] == "/"))
			{
				continue;
			}
			$subSet = array_slice($set, $start, $len);
			if ( ! in_array("+", $subSet) && ! in_array("-", $subSet))
			{
				continue;
			}
			$tmpSet = $set;
			array_splice($tmpSet, $start, $len - 1);
			$tmpSet[$start] = "(".implode("", $subSet).")";
			makeSpecial($tmpSet);
		}
	}
}

function makeResult($set)
{
	global $result, $list;
	$str = implode("", $set);
	@eval("\$num=$str;");
	if ($num == $result && ! in_array($str, $list))
	{
		$list[] = $str;
	}

	return '';
}
*/