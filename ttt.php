<?php
require './functions.php';

$arr1 = array(1, 2);
$arr2 = array('1' => 3, '2' => 4);

var_dump($arr2[$arr1[0]]);
var_dump($arr2[$arr1[1]]);
var_dump($arr1);
var_dump($arr2);

