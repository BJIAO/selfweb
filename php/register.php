<meta charset="utf-8">
<?php
	if(isset($_POST['username']))
	{
		$username = $_POST['username'];
		$pwd=$_POST['pwd'];
		$sex=$_POST['sex'];
		$identity=$_POST['identity'];
		$address=$_POST['address'];
		$link=mysql_connect('localhost','root','') or die(mysql_error());
		mysql_select_db('programming');
		mysql_query('set names utf8');
		$sql="insert into admin values('null','$username','$pwd','$address','$identity','$sex')";
		mysql_query("$sql");
		echo "<script> {window.alert('注册成功');location.href='../login.html'} </script>";
	}
?>