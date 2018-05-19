<?php
/**
 * 用于计算md5的值存进数据库
 * Created by PhpStorm.
 * User: zaire
 * Date: 2017/9/14
 * Time: 20:52
 */

ini_set('memory_limit', '2G');
set_time_limit(0);

$count_bite = 107;
// 5M
$limit = 5 * 1024;

// 命令行模式
if (substr(php_sapi_name(), 0, 3) != 'cgi')
{
	$count_argv = count($argv);
	// 带结束页码
	if ($count_argv > 2)
	{
		$max_page = $argv[2];
	}
	elseif ($count_argv > 1)
	{
		$page   = $argv[1];
		$return = exec('tail -n 1  ./_'.$page.'.txt');// 要加空格
	}
}
else
{
	if (array_key_exists('max_page', $_GET))
	{
		$max_page = intval($_GET['max_page']);
	}
	if (array_key_exists('page', $_GET))
	{
		$page = $_GET['page'];
		$file = './_'.$page.'.txt';

		$fp     = fopen($file, "r");
		$line   = 1;
		$pos    = - 2;
		$t      = " ";
		$return = "";
		while ($line > 0)
		{
			while ($t != "\n")
			{
				fseek($fp, $pos, SEEK_END);
				$t = fgetc($fp);
				$pos --;
			}
			$t      = " ";
			$return .= fgets($fp);
			$line --;
		}
		fclose($fp);
	}
}
if (isset($page) && isset($return))
{
	// 如果传入的页码数对应的文件已经存在且大于文件大小限制，那么page++
	$tmp = './_'.$page.'.txt';
	if (file_exists($tmp) && filesize($tmp) > 1024 * $limit)
	{
		echo '第'.$page.'页已经写完';
		$page ++;
	}
	$page ++;
	$a       = explode(" \t ", $return);
	$last    = $a[1];
	$sum     = $a[0];
	$key_arr = explode('*', $last);
}
else
{
	$page     = 0;
	$bite_arr = range(1, $count_bite, 1);
	$key_arr  = array_map(function () { return - 1; }, $bite_arr);
	$sum      = 0;
}
// 如果不存在最大页码的话，需要自动停止，默认500个就停止，不然会把磁盘弄满
if ( ! isset($max_page))
{
	$max_page = $page + 500;
	var_dump('没有设置页数，自动修改为500页');
}
else
{
	if ($max_page - $page >= 500)
	{
		$max_page = $page + 500;
		var_dump('不能大于500页，已经自动修改成500页');
	}
}

$key_arr = array_map('intval', $key_arr);

// 可以采用数组的下标来定位，就可以用纯粹的加减一来进行定位字>符
$str_num   = array_map('strval', array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
$str_lower = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
$str_upper = array_map('strtoupper', $str_lower);
$str_other = array(
	'`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ')', '{', '}', ';', ':', '\'',
	'"', '\\', '|', ',', '.', '/', '<', '>', '?', '\ ', '·', '！', '￥', '…', '（', '）', '；', '：', '’', '‘', '，', '>、', '。',
);
$str       = array_merge($str_num, $str_lower, $str_upper, $str_other);
$count     = count($str);

/*
$base = 'a_';
foreach ($str as $k => $v)
{
        $temp  = $base.$k;
        $$temp = $v;
}
unset($str, $str_other, $str_upper, $str_lower, $str_num);

foreach (range(1, $bite, 1) as $v)
{
        $temp = $base.$v;
        for($i = 0; $i<$count;$i++)
        {
                $temp
        }
}

var_dump(get_defined_vars());*/

//$all        = array();
$end = FALSE;
while ( ! $end)
{
	$key_arr[0] ++;
	$key_arr = jinwei($key_arr, $count, $count_bite);
	if (is_bool($key_arr))
	{
		$end = TRUE;
		break;
	}
	if ($key_arr[0] == - 1)
	{
		$count_values = array_count_values($key_arr);
		if (array_key_exists('0', $count_values))
		{
			if ($count_values['0'] >= $count_bite - 1)
			{
				continue;
			}
		}
	}
	$r = array();
	foreach ($key_arr as $v)
	{
		if ($v >= 0 && $v < $count)
		{
			$r[] = $str[$v];
		}
	}
	$num = implode('*', $key_arr);
	$os  = implode('', $r);
	$sum ++;
	write($sum, $num, $os, $page, $max_page, $limit);
//      var_dump($os);
//      $all[] = $key_arr;
};

/*$all_str = array_map(function ($o) use ($str, $count)
{
        $r = [];
        foreach ($o as $v)
        {
                if ($v >= 0 && $v < $count)
                {
                        $r[] = $str[$v];
                }
        }

        $os = implode('', $r);

        return $os;
}, $all);*/
echo '共有'.$sum.'个组合<br/>';
//echo '<pre>';
//print_r($all_str);
//echo '</pre>';

/**
 * @param $key_arr
 * @param $count
 * @param $count_bite
 *
 * @return bool|array
 */
function jinwei($key_arr, $count, $count_bite)
{
	foreach ($key_arr as $k => $v)
	{
		// 如果当前位最大了
		if ($v >= $count)
		{
			$key_arr[$k] = - 1;
			if ($k >= $count_bite - 1)
			{
				return TRUE;
			}

			// 进位，并且将当前位复原
			$key_arr[$k + 1] ++;

			$key_arr = jinwei($key_arr, $count, $count_bite);
		}
	}

	return $key_arr;
}

function write($i, $num, $value, &$page, $max_page, $limit = 500)
{
	$file = './_'.$page.'.txt';
	if (file_exists($file) && filesize($file) > 1024 * $limit)
	{
		echo '第'.$page.'页已经写完';
		$page ++;
		// 要写入新文件之前，先检查是否当前页面超过了指定的最大页面，需要结束掉
		if ($page > $max_page)
		{
			die('已经到了最大页面');
		}
	}
	if ( ! file_exists($file))
	{
		file_put_contents($file, "i \t num \t value \t md5 \t sha1 \n");
	}
	if ( ! is_writable($file))
	{
		chmod($file, '777');
	}
	$sha1 = sha1($value);
	$md5  = md5($value);
	file_put_contents($file, "$i \t $num \t $value \t $md5 \t $sha1 \n", FILE_APPEND);
	clearstatcache();
}

die('ok');


/*
1.1016960126173405456464265050799e+220
 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
 */
