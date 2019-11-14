<meta charset="utf-8">
<?php
	if(isset($_POST['username']))
	{
		$username=$_POST['username'];
		$pwd=$_POST['pwd'];
		$link=@mysql_connect("localhost","root","") or die(mysql_error());
		mysql_select_db('Programming');
		mysql_query('set names utf8');
		$sql="select * from `admin` where username='$username' and `password`='$pwd'";
		$rs=mysql_query($sql);
		if(mysql_num_rows($rs)==1)
		{
			header('location:../main.html');
		}
		else
		{
			header('location:../login.html');
		}
	}
?>