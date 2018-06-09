<?php

$mng = new MongoDB\Driver\Manager();

//$con = new MongoClient("mongodb://127.0.0.1:27017");


var_dump($mng);

$someData = 'somedata';
$someInfo = 'someinfo';

$bulk = new MongoDB\Driver\BulkWrite;

$doc = ["_id" => new MongoDB\BSON\ObjectID, "data" => $someData, "info" => $someInfo];

$bulk->insert($doc);

$mng->executeBulkWrite('dbName.collectionName', $bulk);


die('ok');


try{

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

}
catch(Exception $e)
{
var_dump($e->getMessage());
}
/*
$bulk = new MongoDB\Driver\BulkWrite;

die('ok');

$document = ['_id' => new MongoDB\BSON\ObjectID, 'name' => '菜鸟教程'];

$_id= $bulk->insert($document);

var_dump($_id);

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");  
$writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);
$result = $manager->executeBulkWrite('test.runoob', $bulk, $writeConcern);
}
catch(Exception $e)
{
var_dump($e->getMessage());
}

*/
