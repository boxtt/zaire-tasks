<?php
require_once './functions.php';

echo '<pre>';
print_r(xici_curl('www.guoyunxia.com/get_ip.php'));
die;

$time = time();
$base = 'http://demo.zjmainstay.cn/php/curl/dump_ip.php?t=';
$url  = $base.$time;
echo "本地IP：".file_get_contents($url).PHP_EOL."伪造IP：";
// http代理
list($ip, $port) = get_ip();
// https代理
//$ip   = '219.138.58.42';
//$port = '3128';
//伪造请求头参数，如果是高匿代理这里不需要提供
$header = array(
//	'X-FORWARDED-FOR: '.$ip,
//	'CLIENT-IP: '.$ip,
);
$time   = time() + 1;
$url    = $base.$time;
$ch     = curl_init($url);  //初始化curl
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_TIMEOUT, 5); // 设置超时限制防止死循环
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURLOPT_PROXY, $ip);
curl_setopt($ch, CURLOPT_PROXYPORT, $port);
//curl_setopt($ch, CURLOPT_PROXYUSERPWD, ":"); //http代理认证帐号，username:password的格式
curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式
$content = curl_exec($ch);  //执行并存储结果
curl_close($ch);
echo $content;
echo PHP_EOL;

die;

$url_get_ip = 'http://dev.kuaidaili.com/api/getproxy/?orderid=4020&num=100&b_pcchrome=1&b_pcie=1&b_pcff=1&protocol=1&method=2&an_an=1&an_ha=1&sep=1';
$url_get_ip = 'https://proxy.mimvp.com/index.php?pageindex=cn';

$content = file_get_contents($url_get_ip);

$preg = '/<tbody>([\S\s.]*?)<\/tbody>/';
preg_match_all($preg, $content, $matches);
$matches = $matches[1];
$preg    = '/<tr>([\S\s.]*?)<\/tr>/';
preg_match_all($preg, $content, $matches);
$matches       = $matches[1];
$preg_ip       = '/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/';
$preg_port_img = '/src=(.*?)\s\/>/';
$first         = TRUE;
foreach ($matches as $match)
{
	if ($first)
	{
		$first = FALSE;
		continue;
	}
	var_dump($match);
	preg_match_all($preg_ip, $match, $ip);
	$ip = $ip[0];
	preg_match_all($preg_port_img, $match, $port_img);
	$port_img = $port_img[1][0];
	var_dump($ip, $port_img);
	$gjPhone = new gjPhone('https://proxy.mimvp.com/'.$port_img);// 进行颜色分离
	$gjPhone->getHec();
// 画出横向数据
	$horData = $gjPhone->magHorData();
	$gjPhone->drawWH($horData);

// 输出电话
	$phone = $gjPhone->showPhone($horData);
	echo "<br/><br/><br/>===============电话==============<br /><br/><br/>".$phone;
	die('one');
}

/**
 * 电话号码识别.
 * @author by zsc for 2010.03.24
 */
class gjPhone {

	protected $imgPath; // 图片路径
	protected $imgSize; // 图片大小
	protected $hecData; // 分离后数组
	protected $horData; // 横向整理的数据
	protected $verData; // 纵向整理的数据

	function __construct($path)
	{
		$this->imgPath = $path;
	}

	/**
	 * 颜色分离转换...
	 *
	 * @param unknown_type $path
	 *
	 * @return unknown
	 */
	public function getHec()
	{
		$size = getimagesize($this->imgPath);
		$res  = imagecreatefrompng($this->imgPath);
		for ($i = 0; $i < $size[1]; ++ $i)
		{
			for ($j = 0; $j < $size[0]; ++ $j)
			{
				$rgb      = imagecolorat($res, $j, $i);
				$rgbarray = imagecolorsforindex($res, $rgb);
				if ($rgbarray['red'] < 125 || $rgbarray['green'] < 125
					|| $rgbarray['blue'] < 125)
				{
					$data[$i][$j] = 1;
				}
				else
				{
					$data[$i][$j] = 0;
				}
			}
		}
		$this->imgSize = $size;
		$this->hecData = $data;
	}

	/**
	 * 颜色分离后的数据横向整理...
	 *
	 * @return unknown
	 */
	public function magHorData()
	{
		$data    = $this->hecData;
		$size    = $this->imgSize;
		$newdata = [];
		$z       = 0;
		for ($i = 0; $i < $size[1]; ++ $i)
		{
			if (in_array('1', $data[$i]))
			{
				$z ++;
				for ($j = 0; $j < $size[0]; ++ $j)
				{
					if ($data[$i][$j] == '1')
					{
						$newdata[$z][$j] = 1;
					}
					else
					{
						$newdata[$z][$j] = 0;
					}
				}
			}
		}

		return $this->horData = $newdata;
	}

	/**
	 * 整理纵向数据...
	 *
	 * @return unknown
	 */
	public function magVerData($newdata)
	{
		$ndata = [];
		for ($i = 0; $i < 132; ++ $i)
		{
			for ($j = 1; $j < 13; ++ $j)
			{
				if (isset($ndata[$j][$i]))
				{
					$ndata[$i][$j] = $newdata[$j][$i];
				}
			}
		}

		$sum    = count($ndata);
		$ndatas = [];
		$c      = 0;
		for ($a = 0; $a < $sum; $a ++)
		{
			$value = $ndata[$a];
			if (in_array(1, $value))
			{
				$ndatas[$c] = $value;
				$c ++;
			}
			elseif (is_array($ndatas))
			{
				$b = $c - 1;
				if (in_array(1, $ndatas[$b]))
				{
					$ndatas[$c] = $value;
					$c ++;
				}
			}
		}

		return $this->verData = $ndatas;
	}

	/**
	 * 显示电话号码...
	 *
	 * @return unknown
	 */
	public function showPhone($ndatas)
	{
		$phone = NULL;
		$d     = 0;
		$ndArr = [];
		foreach ($ndatas as $key => $val)
		{
			if (in_array(1, $val))
			{
				foreach ($val as $k => $v)
				{
					$ndArr[$d] .= $v;
				}
			}
			if ( ! in_array(1, $val))
			{
				$d ++;
			}
		}
		foreach ($ndArr as $key01 => $val01)
		{
			$phone .= $this->initData($val01);
		}

		return $phone;
	}

	/**
	 * 分离显示...
	 *
	 * @param unknown_type $dataArr
	 */
	function drawWH($dataArr)
	{
		$c = '';
		if (is_array($dataArr))
		{
			foreach ($dataArr as $key => $val)
			{
				foreach ($val as $k => $v)
				{
					if ($v == 0)
					{
						$c .= "<font color='#FFFFFF'>".$v."</font>";
					}
					else
					{
						$c .= $v;
					}
				}
				$c .= "<br/>";
			}
		}
		echo $c;
	}

	/**
	 * 初始数据...
	 *
	 * @param unknown_type $numStr
	 *
	 * @return unknown
	 */
	public function initData($numStr)
	{
		$result = NULL;
		$data   = array(
			0 => '000011111000001111111110011000000011110000000001110000000001110000000001110000000001011000000011011100000111000111111100000001110000',
			1 => '011000000000011000000000111111111111111111111111',
			2 => '001000000011011000000111110000001101110000011001110000011001110000110001111001100001011111100001000110000001',
			3 => '001000000010011000000011110000000001110000000001110000110001110000110001011001110011011111011111000110001100',
			4 => '000000001100000000111100000001111100000011101100000111001100001100001100011000001100111111111111111111111111000000001100000000000100',
			5 => '111111000001111111000001110001000001110001000001110001100001110001100001110000110011110000111111000000001100',
			6 => '000011111000001111111110011000110011110001100001110001100001110001100001110001100001010001110011010000111111000000001100',
			7 => '110000000000110000000111110000111111110001110000110111000000111100000000111000000000111000000000',
			8 => '000100011110011111111111110011100001110001100001110001100001110001100001110011100001011111111111000100011110',
			9 => '001111000000011111100001110000110001110000110001110000110001110000110001011000100001011111100111000111111110000001110000',
		);
		foreach ($data as $key => $val)
		{
			similar_text($numStr, $val, $pre);
			if ($pre > 5)
			{ // 相似度95%以上
				$result = $key;
				break;
			}
		}

		return $result;
	}
}

die;


