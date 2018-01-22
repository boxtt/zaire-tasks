<?php

require './functions.php';

$word = '你好';
$re   = translate($word);
dump($re);

die;

$url  = 'https://www.aliexpress.com/store/product/2017-ROXI-Brand-Classic-Necklace-for-Women-Double-Circle-Pendant-Women-Necklace-Rose-Gold-Color-Chain/314050_32676018245.html?spm=2114.12010609.8148355.85.f0802ccUhZ0Gc';
$data = get_aliexpress($url);

dump($data);



