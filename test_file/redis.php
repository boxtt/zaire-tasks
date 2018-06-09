<?php  
  
//连接本地Redis服务  
$redis=new Redis();  
$redis->connect('localhost','6379'); //$redis->auth('admin123');//如果设置了密码，添加此行  
//查看服务是否运行  
$redis->ping();  
  
//选择数据库  
$redis->select(5);  
  
//设置数据  
$redis->set('school','WuRuan');  
//设置多个数据  
$redis->mset(array('name'=>'jack','age'=>24,'height'=>'1.78'));  
  
//存储数据到列表中  
$redis->lpush("tutorial-list", "Redis");  
$redis->lpush("tutorial-list", "Mongodb");  
$redis->lpush("tutorial-list", "Mysql");  
  
//获取存储数据并输出  
echo $redis->get('school');  
  
echo '<br/>';  
  
$gets=$redis->mget(array('name','age','height'));  
print_r($gets);  
  
$tl=$redis->lrange("tutorial-list", 0 ,5);  
print_r($tl);  
?>  
