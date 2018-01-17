<?php

class sql {

	private $host = '101.200.50.10';
	private $port = '3306';
	private $user = 'root';
	private $pwd = 'root';
	private $db = 'proxy';
	private $char = 'UTF8';
	private $prefix = '';
	private $fetch_mode = MYSQLI_ASSOC;//获取模式
	private $result;//结果集
	public $mysqli;//mysqli实例对象
	static private $_instance;//本类实例

	//构造函数初始化$mysqli对象
	private function __construct()
	{
		$this->mysqli = new mysqli($this->host, $this->user, $this->pwd, $this->db, $this->port);
		if (mysqli_connect_errno())
		{
			$this->mysqli = FALSE;
			echo mysqli_connect_error();
			die();
		}
		else
		{
			$this->mysqli->set_charset($this->char);
		}
	}

	//析构函数：释放结果集和关闭数据库
	public function __destruct()
	{
		$this->free();
		$this->close();
	}

	//初始化$mysqli对象
	public static function getInstance()
	{
		if ( ! (self::$_instance instanceof self))
		{
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	//释放结果集
	private function free()
	{
		@$this->result->free();
	}

	//关闭数据库连接
	private function close()
	{
		$this->mysqli->close();
	}

	//执行sql语句
	public function query($sql)
	{
		return $this->mysqli->query($sql);
	}

	//获取查询结果
	public function get_result_array($table, $field, $condition = '')
	{
		$table = $this->prefix.$table;
		if (is_array($field))
		{
			$field = join(',', $field);
		}

		$sql = "SELECT $field FROM ".$table;
		if ( ! empty($condition))
		{
			$sql .=' where ';
			$sql .= " $condition ";
		}
		$return = array();
		if ($this->result = $this->query($sql))
		{
			while ($row = $this->fetch($this->result))
			{
				$return[] = $row;
			}
		}
		$this->free();

		return $return;
	}

	//增删改操作
	public function execute($table, $action, $arr_field = array(), $condition = '')
	{
		$table = $this->prefix.$table;
		switch ($action)
		{
			case 'INSERT':
				$str_field = '';
				$str_val   = '';
				foreach ($arr_field as $key => $val)
				{
					$str_field .= '`'.$key.'`,';
					$str_val   .= '\''.$val.'\',';
				}
				$str_field = rtrim($str_field, ',');
				$str_val   = rtrim($str_val, ',');
				$sql       = "INSERT INTO $table ($str_field) VALUES ($str_val) ";
				break;

			case 'DELETE':
				$sql = "DELETE FROM $table";
				if ( ! empty($condition))
				{
					$sql .= " WHERE $condition";
				}
				break;

			case 'UPDATE':
				$str_field = '';
				foreach ($arr_field as $key => $val)
				{
					$str_field .= '`'.$key."` ='$val',";
				}
				$str_field = rtrim($str_field, ',');
				$sql       = "UPDATE $table SET $str_field";
				if ( ! empty($condition))
				{
					$sql .= " WHERE $condition";
				}
				break;
		}
		$this->query($sql);

		return $this->get_affected_rows();
	}

	//获得受影响行数(针对增删改操作)
	public function get_affected_rows()
	{
		return $this->mysqli->affected_rows;
	}

	//获取集合条数
	public function get_rows($table, $condition = 'WHERE 1 ', $id = 'id')
	{
		$table        = $this->prefix.$table;
		$sql          = "SELECT COUNT($id) num FROM ".$table." $condition";
		$this->result = $this->query($sql);
		$row          = $this->fetch($this->result);

		return $row['num'];
	}

	//获得结果集
	public function fetch($result)
	{
		return $result->fetch_array($this->fetch_mode);
	}

	//获得所有结果集
	public function fetch_all($result)
	{
		$rows = array();
		while ($row = $this->fetch($result))
		{
			$rows[] = $row;
		}

		return $rows;
	}
}