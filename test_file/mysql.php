<?php
echo '----------------------------\n';

try{
$con = mysqli_connect( "localhost", "root", "root" );
}
catch(Exception $e)
{
var_dump($e->getMessage());
}
//var_dump($con);die('ok');
/*if (!$con){
 Â echo 'Could not connect:'mysqli_error();
 die();
}*/

if( mysqli_query( $con, 'create database test') ) {

 echo 'Database created! ';

}  else  {

  echo 'Database created error : '  . mysqli_error();

}

mysqli_close( $con);

