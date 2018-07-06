<?php
require './../tool/functions.php';
header('Content-Type: text/html; charset=utf-8');

$str = 'Vg*cPufuL4UzqLHO6OPkHnGCRPAIB*zgUxHgT93CI8FvlsSTKbKBKzG*u*3*YofM';
dump(hash33($str));
$str = 'n2F62lzjmvLxetOVoMdpSf*hQmsahKnU-jYSdAjbuxsYU4UQIdOpYWy94vSOeaB0';
dump(hash33($str));

function hash33($qrsig)
{
	$length = strlen($qrsig);
	for ($i = 0, $e = 0; $i < $length; $i ++)
	{
		$e += ($e << 5) + charCodeAt($qrsig, $i);
	}
	$ptqrtoken = 2147483647 & $e;

	return $ptqrtoken;
}

/**
 * function hash33(t){
 * for (var e = 0, i = 0, n = t.length; i < n; ++i)
 * e += (e << 5) + t.charCodeAt(i);
 * return 2147483647 & e
 * }
 */
