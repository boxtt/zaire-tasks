<?php
require './../tool/functions.php';

// ------------------------------------------------------------------------------------------------------------------------
// 堆栈结构和队列结构可以直接用php里面的SPL 标准库里面的类来引用
$books = new SplStack();
$books->push("Introduction to PHP7");
$books->push("Mastering JavaScript");
$books->push("MySQL Workbench tutorial");
echo $books->pop();
echo $books->top();
// 队列
$books = new SplQueue();
$books->enqueue("Introduction to PHP7");
$books->enqueue("Mastering JavaScript");
$books->enqueue("MySQL Workbench tutorial");
echo $books->dequeue();
// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------
// 链表结构  线性表
// 这个例子是单向链表，还有双向链表和 循环链表
$data  = ['a', 'b', 'c'];
$list1 = new my_list_l1($data);
$list1->dump();
$list1->insert('d', 5);
$list1->dump();
$list1->delete(2);
dump($list1->length());
$list1->search('a');
die('level1');

// level--1
class my_list_l1 {

	public $_start = 'start';
	public $_value = 'value';
	public $_next = 'next';
	public $_values = [];
	public $_limit = 0;
	public $_num = 0;

	public function __construct($data = [], $limit = 0)
	{
		if ($limit)
		{
			$this->_limit = $limit;
		}
		if ($data)
		{
			$init  = [];
			$start = $this->_start;
			foreach ($data as $value)
			{
				$next         = uniqid();
				$init[$start] = [
					$this->_value => $value,
					$this->_next  => $next,
				];
				$start        = $next;
				$this->_num ++;
			}
			$this->_values = $init;
		}
	}

	public function dump()
	{
		$start  = $this->_start;
		$values = [];
		while (array_key_exists($start, $this->_values))
		{
			$node     = $this->_values[$start];
			$start    = $node[$this->_next];
			$value    = $node[$this->_value];
			$values[] = $value;
		}
		dump(implode('--', $values));
	}

	public function insert($value, $k = 1)
	{
		if ($this->_limit && $this->_num >= $this->_limit)
		{
			echo '链表已经满了，不能插入数值 '.$value;
			$this->dump();

			return FALSE;
		}

		$k = intval($k);
		if ($k < 1 || $k > $this->_num + 1)
		{
			echo '插入的位置只能在 1-'.($this->_num + 1).'之间';

			return FALSE;
		}

		$start  = $this->_start;
		$i      = 1;
		$insert = FALSE;
		$next   = uniqid();
		while (array_key_exists($start, $this->_values))
		{
			$now = $this->_values[$start];
			if ($k == $i)
			{
				$this->_values[$start] = [
					$this->_value => $value,
					$this->_next  => $next,
				];
				$this->_values[$next]  = $now;

				$insert = TRUE;
				break;
			}
			$start = $now[$this->_next];
			$i ++;
		}
		if ( ! $insert)
		{
			$this->_values[$start] = [
				$this->_value => $value,
				$this->_next  => $next,
			];
		}
		$this->_num ++;

		return TRUE;
	}

	public function delete($k)
	{
		$k = intval($k);
		if ($k < 1 || ($this->_limit && $k > $this->_limit))
		{
			echo '请输入大于1 '.($this->_limit ? '小于100 ' : '').'的整数';
		}
		else
		{
			$start = $this->_start;
			$i     = 1;
			while (array_key_exists($start, $this->_values))
			{
				$now = $this->_values[$start];
				if ($i == $k)
				{
					$next = $this->_values[$now[$this->_next]];
					if ($next)
					{
						$this->_values[$start][$this->_value] = $next[$this->_value];
						$this->_values[$start][$this->_next]  = $next[$this->_next];
						unset($this->_values[$now[$this->_next]]);
					}
					else
					{
						unset($this->_values[$start]);
					}
					$this->_num --;
					break;
				}
				$start = $now[$this->_next];
				$i ++;
			}
		}
	}

	public function length()
	{
		return $this->_num;
	}

	public function search($value)
	{
		$start = $this->_start;
		$i     = 0;
		$res   = [];
		while (array_key_exists($start, $this->_values))
		{
			$i ++;
			$now = $this->_values[$start];
			if ($value == $now[$this->_value])
			{
				$res[] = [
					'i'     => $i,
					'key'   => $start,
					'value' => $now[$this->_value],
				];
			}
			$start = $now[$this->_next];
		}
		if (empty($res))
		{
			echo '没有找到指定的值';
		}
		else
		{
			$str = '';
			foreach ($res as $re)
			{
				$str .= (empty($str) ? '' : '****').'位置是第 '.$re['i'].' 个，所在地址是'.$re['key'].'--值为'.$re['value'];
			}
			echo $str;
		}
	}
}
// ------------------------------------------------------------------------------------------------------------------------
