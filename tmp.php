<?php

require './functions.php';

$url = 'https://www.aliexpress.com/item/Global-Version-Xiaomi-Mi-A1-MiA1-Mobile-Phone-4GB-RAM-64GB-ROM-Snapdragon-625-Octa-Core/32830253938.html?spm=2114.search0103.3.7.5004b486bVSmmy&ws_ab_test=searchweb0_0,searchweb201602_3_10152_10151_10065_10068_10344_10342_10325_10546_10343_10340_10548_10341_10084_10617_10083_10616_10615_10307_10313_10059_10534_100031_10604_10103_10142,searchweb201603_25,ppcSwitch_2&algo_expid=b5f2e5a3-d173-4b84-b490-544c39bea74f-0&algo_pvid=b5f2e5a3-d173-4b84-b490-544c39bea74f&priceBeautifyAB=2';

$data = get_aliexpress($url);

dump($data);

die;
$word = '你好';
$re   = translate($word);
dump($re);