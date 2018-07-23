<?php
//header("Content-type: text/html; charset=utf-8");
//header("Content-Disposition: attachment; filename=test.csv");
require './tool/functions.php';

$dir     = 'E:/svn-zaire/ykyq/jz';
$modules = [
	'Aat', 'Common', 'Custom', 'Dir',
	'Doc', 'Ga', 'Guide', 'Home',
	'Manage', 'Mater', 'Statistics', 'Student',
	'Teacher', 'Test', 'train', 'User', 'work',
];

$info = file_get_contents('./json_get_api_info.txt');
$info = json_decode($info, TRUE);
if ( ! $info)
{

	$files = file_get_contents('./kaotu_files_names.txt');
	$files = json_decode($files, TRUE);
	if ( ! $files)
	{
		get_all_file($dir, $files);
		file_put_contents('./kaotu_files_names.txt', json_encode($files));
	}

	$info = [];
	foreach ($files as $file)
	{
		$contents = get_content_by_line($file);
		foreach ($contents as $line => $content)
		{
			foreach ($modules as $module)
			{
				$preg = 'getApi'.$module;
				if ( ! isset($info[$preg]))
				{
					$info[$preg] = [
						'count' => 0,
						'data'  => [],
					];
				}
				if (preg_match('/'.$preg.'/', $content))
				{
					$info[$preg]['count']  += 1;
					$info[$preg]['data'][] = [
						'file_name' => $file,
						'line'      => $line,
						'content'   => trim($content),
					];
				}
			}
		}
	}
	file_put_contents('./json_get_api_info.txt', json_encode($info));
}

echo '<pre>';
print_r($info);

die();

function get_all_file($path, &$return = [])
{
	if (is_dir($path))
	{
		$path_handle = dir($path);
		while ($file = $path_handle->read())
		{
			if (in_array($file, ['.', '..']))
			{
				continue;
			}
			get_all_file($path.'/'.$file, $return);
		}
	}
	elseif (is_file($path))
	{
		$return[] = $path;
	}
}

die('ok');

$dir     = 'E:/svn-zaire/ykyq/jz';
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
								$info = strpos($line, 'use');
								if ($info !== FALSE)
								{
//									echo_t(3, '---');
									$use[] = str_replace([' ', ';', 'use'], ['', '', ''], $line);
//									output($use);
								}
								$info = strpos($line, 'extends');
								if ($info !== FALSE)
								{
									$line    = str_replace([' ', ';', 'class', '{'], ['', '', '', ''], $line);
									$la      = explode('extends', $line);
									$class   = $la[0];
									$extends = '';
									if (isset($la[1]))
									{
										if (strpos($la[1], '\\') !== FALSE)
										{
											$extends = $la[1];
										}
										else
										{
											if (isset($use))
											{
												foreach ($use as $v)
												{
													if (strpos($v, $la[1]))
													{
														$extends = $v;
														break;
													}
												}
											}
											else
											{
												$extends = '\\'.$module.'\\'.$layer.'\\'.$la[1];
											}
										}
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

echo '<pre>';
print_r($new_arr);
die('k');

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
