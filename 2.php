<?php 

  $hostdir=dirname(__FILE__);

//获取本文件目录的文件夹地址

  $filesnames = scandir($hostdir.'\img_img');

//获取也就是扫描文件夹内的文件及文件夹名存入数组 $filesnames

  //print_r ($filesnames);

// foreach ($filesnames as $name) {

// //echo $name; 

// $url=$name;

// // $aurl= "<a href=\"".$url."\">".$url."</a>";
// if ($url=='..' or $url=='.') {
	
// }else{
// 	$img='<img class="cump" src="img_img/'.$url.'">';

// 	echo $img . "<br/>";
// }
// echo sizeof($filesnames);
// }
for ($i=2; $i < sizeof($filesnames); $i++) { 
	$img='<img class="cump" src="img_img/'.$filesnames[$i].'">';
	echo $img . "<br/>";
}
// echo $hostdir;
echo __FILE__ . "<br/>"; // 取得当前文件的绝对地址，结果：D:\www\test.php 
echo dirname(__FILE__). "<br/>"; // 取得当前文件所在的绝对目录，结果：D:\www\ 
echo dirname(dirname(__FILE__)). "<br/>"; //取得当前文件的上一层目录名，结果：D:\ 
echo dirname(dirname(dirname(__FILE__))). "<br/>"; //取得当前文件的上一层目录名，结果：D:\ 
?>