<?php
require_once __DIR__.'/functions.php';
set_time_limit(5);
/***
 * 简单验证码识别
 * @author zhjx922
 */

$url      = 'http://210.32.33.91:8080/reader/captcha.php';
$url      = './y12358.png';
$im       = imagecreatefrompng($url);
$rgbArray = array();
$resource = $im;
$size     = getimagesize($url);

//字符特征码 -- https://proxy.mimvp.com/free.php?proxy=in_tp  米扑代理的端口号的数字
$_wordKeys = array(
	'0' => '==* * ===* ==* =* ====* * ====* * ====* * ====* * ====* * ====* =* ==* ===* * ==',
	'1' => '==* ===* * ==* =* ====* ====* ====* ====* ====* ====* ==* * * * * ',
	'2' => '=* * * * =* ====* * ====* =====* ===* * ===* ====* ====* =====* =====* * * * * * ',
	'3' => '=* * * * =* ====* * ====* =====* ==* * * ======* =====* * ====* * ====* =* * * * =',
	'4' => '====* ====* * ===* =* ==* ==* =* ===* =* ===* =* * * * * * ====* =====* =====* =',
	'5' => '* * * * * * * =====* =====* =====* * * * * ======* =====* =====* * ====* =* * * * =',
	'6' => '==* * * ==* ====* =====* =====* * * * * =* ====* * ====* * ====* * ====* =* * * * =',
	'7' => '* * * * * * =====* =====* ====* =====* =====* ====* =====* =====* =====* ==',
	'8' => '=* * * * =* ====* * ====* * ====* =* * * * =* ====* * ====* * ====* * ====* =* * * * =',
	'9' => '=* * * * =* ====* * ====* * ====* =* * * * * =====* =====* =====* ====* ==* * * ==',
);

$wid    = $size['0'];
$hid    = $size['1'];
$result = [];

$empty = '=';
$full  = '* ';

// 二值化
for ($i = 0; $i < $hid; ++ $i)
{
	for ($j = 0; $j < $wid; ++ $j)
	{
		$rgb              = imagecolorat($resource, $j, $i);
		$tmp              = imagecolorsforindex($resource, $rgb);
		$rgbArray[$i][$j] = $tmp;
		if ($tmp['red'] && $tmp['blue'] && $tmp['green'])
		{
			$result[$i][$j] = $empty;
		}
		else
		{
			$result[$i][$j] = $full;
		}
	}
}
echo_arr($result);
// 把字符变成竖直的，然后在横向切割
$result = change_arr($result);
$ii     = count($result);
$jj     = count($result[0]);
$pieces = [];
// 只保留存在有效信息的行
for ($i = 0, $start = 0, $end = 0; $i < $ii; $i ++)
{
	if (in_array($full, $result[$i]))
	{
		$pieces[] = $i;
	}
}
$count = count($pieces);
$ps    = [];
// 根据有效信息的行号和键的差，获取行的段落
for ($i = 0; $i < $count; $i ++)
{
	$ps[$pieces[$i] - $i][] = $pieces[$i];
}
// 处理行的段落
$pieces = [];
foreach ($ps as $p)
{
	$tmp = [];
	foreach ($p as $k)
	{
		$tmp[] = $result[$k];
	}
	// 将数据段横竖转换回来，去除顶部和底部的空白段，将数组转化成字符串，获取代码段
	$tmp = change_arr($tmp);
	$tmp = delete_arr_top_and_bottom($tmp,$full,$empty);
	$str = arr_to_str($tmp);
	dump($str);
	echo '<hr/>';
	$pieces[] = $tmp;
}
echo_arr($result);
die;

class vCode {

	//字符特征码 -- https://proxy.mimvp.com/free.php?proxy=in_tp  米扑代理的端口号的数字
	private $_wordKeys = array(
		'0' => '==* * ===* ==* =* ====* * ====* * ====* * ====* * ====* * ====* =* ==* ===* * ==',
		'1' => '==* ===* * ==* =* ====* ====* ====* ====* ====* ====* ==* * * * * ',
		'2' => '=* * * * =* ====* * ====* =====* ===* * ===* ====* ====* =====* =====* * * * * * ',
		'3' => '=* * * * =* ====* * ====* =====* ==* * * ======* =====* * ====* * ====* =* * * * =',
		'4' => '====* ====* * ===* =* ==* ==* =* ===* =* ===* =* * * * * * ====* =====* =====* =',
		'5' => '* * * * * * * =====* =====* =====* * * * * ======* =====* =====* * ====* =* * * * =',
		'6' => '==* * * ==* ====* =====* =====* * * * * =* ====* * ====* * ====* * ====* =* * * * =',
		'7' => '* * * * * * =====* =====* ====* =====* =====* ====* =====* =====* =====* ==',
		'8' => '=* * * * =* ====* * ====* * ====* =* * * * =* ====* * ====* * ====* * ====* =* * * * =',
		'9' => '=* * * * =* ====* * ====* * ====* =* * * * * =====* =====* =====* ====* ==* * * ==',
	);

	/***
	 * 生成验证码
	 * @author 武老师
	 */
	public function make($verCode = '')
	{
		if (empty($verCode))
		{
			$baseChars     = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789';
			$verCode       = '';
			$codeCharLenth = 4;
			for ($i = 1; $i <= $codeCharLenth; $i ++)
			{
				// 通过字符串下标形式随机获取
				$verCode .= $baseChars{mt_rand(0, strlen($baseChars) - 1)};
			}
		}

		// 以下代码是将生成的验证码生成图片
		$font_size = 20;
		$width     = 60;
		$height    = 30;
		$img       = imagecreate($width, $height); // 新建一个基于调色板的图像

		$bgR        = mt_rand(50, 200);//r(ed)
		$bgG        = mt_rand(50, 200); //g(reen)
		$bgB        = mt_rand(50, 200); //b(lue)
		$background = imagecolorallocate($img, $bgR, $bgG, $bgB);
		// 背景色
		$black = imagecolorallocate($img, 0, 0, 0);

		imagestring($img, 5, 9, 8, $verCode, $black); // 水平地画一行字符串

		ob_start();
		imagepng($img);
		$image = ob_get_contents();
		ob_end_clean();

		return array('image' => $image, 'code' => $verCode);
	}

	/***
	 * 获取原始图像数组
	 *
	 * @param string $imageString
	 *
	 * @return array
	 */
	public function getImage($imageString)
	{
		$im = imagecreatefromstring($imageString);

		list($width, $height) = getimagesizefromstring($imageString);

		$image = array();

		for ($x = 0; $x < $width; $x ++)
		{
			for ($y = 0; $y < $height; $y ++)
			{
				$rgb = imagecolorat($im, $x, $y);
				$rgb = imagecolorsforindex($im, $rgb);
				if ($rgb['red'] == 0 && $rgb['green'] == 0 && $rgb['blue'] == 0)
				{
					$image[$y][$x] = '*';
				}
				else
				{
					$image[$y][$x] = 0;
				}
			}
		}

		return $image;
	}

	/***
	 * 移除无用数据
	 *
	 * @param array $image
	 *
	 * @return array
	 */
	public function remove($image)
	{
		//计算x和y轴的
		$xCount = count($image[0]); //60
		$yCount = count($image); //30

		$xFilter = array();
		for ($x = 0; $x < $xCount; $x ++)
		{
			$filter = TRUE;
			for ($y = 0; $y < $yCount; $y ++)
			{
				$filter = $filter && ($image[$y][$x] == '0');
			}
			if ($filter)
			{
				$xFilter[] = $x;
			}
		}

		//有字符的列
		$xImage = array_values(array_diff(range(0, 59), $xFilter));

		//存放关键字
		$wordImage = array();

		$preX      = $xImage[0] - 1;
		$wordCount = 0;
		foreach ($xImage as $xKey => $x)
		{
			if ($x != ($preX + 1))
			{
				$wordCount ++;
			}
			$preX = $x;

			for ($y = 0; $y < $yCount; $y ++)
			{
				$wordImage[$wordCount][$y][$x] = $image[$y][$x];
			}
		}

		foreach ($wordImage as $key => $image)
		{
			$wordImage[$key] = $this->removeByLine($image);
		}

		return $wordImage;
	}

	/***
	 * 按行移除无用数据
	 *
	 * @param array $image
	 *
	 * @return array
	 */
	public function removeByLine($image)
	{

		$isFilter = FALSE;
		foreach ($image as $y => $yImage)
		{
			if ($isFilter == TRUE || array_filter($yImage))
			{
				$isFilter = TRUE;
			}
			else
			{
				unset($image[$y]);
			}
		}

		krsort($image);

		$isFilter = FALSE;
		foreach ($image as $y => $yImage)
		{
			if ($isFilter == TRUE || array_filter($yImage))
			{
				$isFilter = TRUE;
			}
			else
			{
				unset($image[$y]);
			}
		}

		ksort($image);

		return $image;
	}

	/***
	 * 获取关键字字符串
	 *
	 * @param array $wordImage
	 * * @return string
	 */
	public function getWordString($wordImage)
	{
		$wordString = '';
		foreach ($wordImage as $image)
		{
			foreach ($image as $string)
			{
				$wordString .= $string;
			}
		}

		return $wordString;
	}

	/***
	 * 匹配关键字
	 *
	 * @param array $image
	 * * @return array
	 */
	public function match($image)
	{
		$match = array('min' => '', 'key' => '');
		foreach ($this->_wordKeys as $k => $v)
		{
			$percent = 0.0;
			similar_text($this->getWordString($image), $v, $percent);
			if ($match['min'] == '')
			{
				$match['min'] = $percent;
				$match['key'] = $k;
			}
			else
			{
				if ($percent > $match['min'])
				{
					$match['min'] = $percent;
					$match['key'] = $k;
				}
			}
		}

		return $match;
	}

	/***
	 * 终端显示验证码
	 *
	 * @param $image
	 */
	public function show($image)
	{
		foreach ($image as $xImage)
		{
			foreach ($xImage as $yImage)
			{
				echo $yImage;
			}
			echo PHP_EOL;
		}
		echo PHP_EOL;
	}
}

$vCode = new vCode();

//$codeImage   = $vCode->make();
//$imageString = $codeImage['image'];
$url         = './ygrandimg.png';
$PSize       = filesize($url);
$imageString = fread(fopen($url, "r"), $PSize);

$image = $vCode->getImage($imageString);
//dump($image);
//die;
//原图
$vCode->show($image);

//去除干扰边框、拆字
$newImage = $vCode->remove($image);
$word     = array();
$code     = '';
foreach ($newImage as $image)
{
	$vCode->show($image);
	$code .= $vCode->match($image)['key'];
}

echo "生成的验证码为:{$codeImage['code']}".PHP_EOL;
echo "识别的验证码为:{$code}".PHP_EOL;

/*//用来批量生成验证码的特征码。识别他人网站验证码，需要自己采集多张，人肉标记特征码$vCode = new vCode();

$string = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789';

$max = ceil(strlen($string) / 4);

$wordKeys = array();

for($i=0;$i<$max;$i++) {$code = substr($string, $i * 4, 4);$imageString = $vCode->make($code)['image'];

$image = $vCode->getImage($imageString);$newImage = $vCode->remove($image);foreach($newImage as $key => $image) {$word = $vCode->getWordString($image);isset($code[$key]) && $wordKeys[$code[$key]] = $word;}}

echo var_export($wordKeys);*/