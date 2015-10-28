<?php
	//新建类。
	class Coder {
		//定义属性
		public $name = "DavidYu";
		public $age = "24";
		//构造函数
		function  __construct($name,$age){
			echo "bulalala\n";
			$this -> name = $name;
			$this -> age = $age;
		}
		//定义方法
		public function run(){
			echo "I'm running \n";
		}

	}
	//实例化
	$Yuyang = new Coder("YuYang","25");
	//输出实例化后的一个属性
	echo $Yuyang ->name ."\n";
	//输出实例化后的一个方法
	echo $Yuyang ->run();

?>