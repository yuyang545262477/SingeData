<?php
// 声明一个类
class Nbaplayer{
	// 定义属性
	public $name = "Jordan";
	public $height = "198cm";
	public $weight = "98kg";
	public $team = "Bull";
	public $playernumber = "23";
	// 定义构造函数，实例化后自动调用
	function __construct($name,$height,$weight,$team,$playernumber){
		echo "lalalalalal,我又出现了\n";
		//将之前定义的属性，全部初始化，这就要求，实例化时，对其属性肤质
		$this -> name = $name;
		$this -> height = $height;
		$this -> weight = $weight;
		$this -> team = $team;
		$this -> playernumber = $playernumber;
	}
	// 析构函数 程序结束时，自动调用
	function __destruct(){
		echo "Destroying".$this -> name ."\n";
	}
	// 定义方法
	public function run(){
		echo "Running\n";
	}
}
// 类的实例化
$jordan = new Nbaplayer("James","203cm","120kg","Heat","6");
// 实例化后,输出其属性
echo $jordan -> name."\n";
//实例化后，调用其方法
$jordan -> run();
?>