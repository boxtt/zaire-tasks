<?php
header("Content-type: text/html; charset=utf-8");
//header("Content-Disposition: attachment; filename=test.csv");
require './tool/functions.php';

$dir     = 'E:/aaa/jz';
$modules = [
	'Aat', 'Common', 'Custom', 'Dir',
	'Doc', 'Ga', 'Guide', 'Home',
	'Manage', 'Mater', 'Statistics', 'Student',
	'Teacher', 'Test', 'train', 'User', 'work',
];
$layers  = [
	'api',
	'controller',
	'model',
	'wln',
];

$arr = [];

//echo '<table border="1">';
//echo '<tr><td>模块</td><td>层级</td><td>控制器</td><td>继承自</td></tr>';
//echo "模块 \t 层级 \t 控制器 \t 继承自 \n";

foreach ($modules as $module)
{
	$module      = ucfirst($module);
	$module_path = $dir.'/'.$module;

	if (is_dir($module_path))
	{
//		echo_hr();
//		output($module);
		foreach ($layers as $layer)
		{
			$layer      = ucfirst($layer);
			$layer_path = $module_path.'/'.$layer;
			if (is_dir($layer_path))
			{
//				echo_t();
//				output($layer);
				$path_handle = dir($layer_path);
				while ($file = $path_handle->read())
				{
					$file_path = $layer_path.'/'.$file;
					if ($file != '.' && $file != '..' && is_file($file_path))
					{
//						echo_t(2);
//						output($file);

						$h       = @fopen($file_path, 'r');
						$content = array();
						if ( ! $h)
						{
							output('file '.$file_path.' open fail');
							die('ok');
						}
						else
						{
							$i = 0;
							while ( ! feof($h))
							{
								$i ++;
								$line = fgets($h);
								$line = trim($line);
								$re   = strpos($line, 'use');
								if ($re !== FALSE)
								{
//									echo_t(3, '---');
									$use = str_replace([' ', ';', 'use'], ['', '', ''], $line);
//									output($use);
								}
								$re = strpos($line, 'extends');
								if ($re !== FALSE)
								{
									$line    = str_replace([' ', ';', 'class', '{'], ['', '', '', ''], $line);
									$la      = explode('extends', $line);
									$class   = $la[0];
									$extends = '';
									if (isset($la[1]))
									{
										$extends = isset($use)
											? $use
											: (strpos($la[1], '\\') !== FALSE ? $la[1]
												: '\\'.$module.'\\'.$layer.'\\'.$la[1]);
									}
//									echo_t(3, '+++');
//									output($class.'--extends--'.$extends);
//									echo $module."\t".$layer."\t".$class."\t".$extends."\n";
									if (strpos($extends, '\\') !== 0)
									{
										$extends = '\\'.$extends;
									}
									$class = '\\'.$module.'\\'.$layer.'\\'.$class;
//									echo '<tr><td>'.$module.'</td><td>'.$layer.'</td><td>'.$class.'</td><td>'.$extends
//										.'</td></tr>';
									$arr[$class] = $extends;
									break;
								}

								if ($i > 30)
								{
									break;
								}
							}

							if (isset($use))
							{
								unset($use);
							}
							fclose($h);
						}
					}
				}
			}
		}
	}
}
//echo '</table>';

//dump($arr);

$new_arr = [];

foreach ($arr as $k => $v)
{
	$one   = [];
	$one[] = $k;
	$one[] = $v;
	while ($v = get_v($v, $arr))
	{
		$one[] = $v;
	}
	$one         = array_reverse($one);
	$new_arr[$k] = $one;
}

//dump($new_arr);

function get_v($k, $arr)
{
	if (array_key_exists($k, $arr))
	{
		return $arr[$k];
	}
	else
	{
		return '';
	}
}

$data = [];

foreach ($new_arr as $vv)
{
	if (isset($vv[0]))
	{
		if ( ! isset($data[$vv[0]]))
		{
			$data[$vv[0]] = [];
		}
	}
	if (isset($vv[1]))
	{
		if ( ! isset($data[$vv[0]][$vv[1]]))
		{
			$data[$vv[0]][$vv[1]] = [];
		}
	}
	if (isset($vv[2]))
	{
		if ( ! isset($data[$vv[0]][$vv[1]][$vv[2]]))
		{
			$data[$vv[0]][$vv[1]][$vv[2]] = [];
		}
	}
	if (isset($vv[3]))
	{
		if ( ! isset($data[$vv[0]][$vv[1]][$vv[2]][$vv[3]]))
		{
			$data[$vv[0]][$vv[1]][$vv[2]][$vv[3]] = [];
		}
	}
	if (isset($vv[4]))
	{
		if ( ! isset($data[$vv[0]][$vv[1]][$vv[2]][3][$vv[4]]))
		{
			$data[$vv[0]][$vv[1]][$vv[2]][$vv[3]][$vv[4]] = [];
		}
	}
	if (isset($vv[5]))
	{
		if ( ! isset($data[$vv[0]][$vv[1]][$vv[2]][3][$vv[4]][$vv[5]]))
		{
			$data[$vv[0]][$vv[1]][$vv[2]][$vv[3]][$vv[4]][$vv[5]] = [];
		}
	}
	if (isset($vv[6]))
	{
		if ( ! isset($data[$vv[0]][$vv[1]][$vv[2]][3][$vv[4]][$vv[5]][$vv[6]]))
		{
			$data[$vv[0]][$vv[1]][$vv[2]][$vv[3]][$vv[4]][$vv[5]][$vv[6]] = [];
		}
	}
}




echo '<pre>';
print_r($data);

dump($new_arr);
