<?php
require(__DIR__.'/./../tool/functions.php');
//$arr = range(0, 500);
//shuffle($arr);
//echo_arr_one($arr);
//echo_hr();

$arr = [3, 4, 5, 2, 1, 7, 6, 9, 8];

$new_arr = xuanze_sort_2($arr);
echo_arr_one($new_arr);
echo_hr();
$new_arr = xuanze_sort_2($arr, FALSE);
echo_arr_one($new_arr);
echo_hr();

//$o = [3,4,5];
//array_splice($o,3,0,6);
//dump($o);

// 选择排序 不需要新数组
function xuanze_sort_2($arr, $sort = TRUE)
{
	$length = count($arr);
	for ($i = 0; $i < $length; $i ++)
	{
		for ($j = $i; $j < $length; $j ++)
		{
			if (($sort && $arr[$j] < $arr[$i]) || (( ! $sort) && $arr[$j] > $arr[$i]))
			{
				$t       = $arr[$j];
				$arr[$j] = $arr[$i];
				$arr[$i] = $t;
			}
		}
	}

	return $arr;
}

// 选择排序 需要新数组
function xuanze_sort($arr, $sort = TRUE)
{
	$new_arr = [];
	$length  = count($arr);
	while (count($new_arr) < $length)
	{
		$min_key = 0;
		foreach ($arr as $k => $one)
		{
			if (( ! isset($min)) || (($sort && $one < $min) || (( ! $sort) && $one > $min)))
			{
				$min_key = $k;
				$min     = $one;
			}
		}
		$new_arr[] = $min;
		unset($min);
		unset($arr[$min_key]);
	}

	return $new_arr;
}

// 插入排序，sort表示是正序true，还是倒叙false，都在一个数组里面实现，
// 以要排序的那个数的顺序为分界线，前后当成两个数组
function charu_sort_2(&$arr, $sort = TRUE)
{
	$lenght = count($arr);
	for ($i = 1; $i < $lenght; $i ++)
	{
		/*$j = 0;
		while ($j < $i)
		{
			if (($sort && $arr[$i] < $arr[$j]) || (( ! $sort) && $arr[$i] > $arr[$j]))
			{
				$now = $arr[$i];
				for ($k = $i; $k > $j; $k --)
				{
					$arr[$k] = $arr[$k - 1];
				}
				$arr[$j] = $now;
				continue 2;
			}
			$j ++;
		}*/

		for ($j = 0; $j < $i; $j ++)
		{
			if (($sort && $arr[$i] < $arr[$j]) || (( ! $sort) && $arr[$i] > $arr[$j]))
			{
				$now = $arr[$i];
				for ($k = $i; $k > $j; $k --)
				{
					$arr[$k] = $arr[$k - 1];
				}
				$arr[$j] = $now;
				continue 2;
			}
		}
	}

	return $arr;
}

// 插入排序，sort表示是正序true，还是倒叙false，用了一个新的数组，往里面填数据
function charu_sort($arr, $sort = TRUE)
{
	$new_arr = [$arr[0]];
	$lenght  = count($arr);
	for ($i = 1; $i < $lenght; $i ++)
	{
		for ($j = 0; $j < $i; $j ++)
		{
			if (($sort && $arr[$i] < $new_arr[$j]) || (( ! $sort) && $arr[$i] > $new_arr[$j]))
			{
				array_splice($new_arr, $j, 0, $arr[$i]);
				continue 2;
			}
		}
		array_splice($new_arr, $i, 0, $arr[$i]);
	}

	return $new_arr;
}

