<?php

require './functions.php';

$a = [
	'das',
	'fasd',
	'asdf',
	'fasdf',
	'asdf',
];

$a = (object)$a;
dump($a);
dump(json_encode($a));



