//用户名失去焦点
function blur_username()
{
	//获取id=username input对象的的值,id=td_username的对象
	var username = document.form_register.username.value;
	var td_username = document.getElementById("td_username");
	var ok_img = document.getElementById("ok_username");
	ok_img.innerHTML = "";
	if (username.length != 11)
	{
		td_username.innerHTML = "手机号为11个数字组成";
		return false;
	}else if (checkOtherChar(username))
	{
		td_username.innerHTML = "手机号不能含有特殊符号";
		return false;
	}else
	{
		//获得id=ok_img对象
		td_username.innerHTML = "";
		ok_img.innerHTML = "<img src='images/login_ok.gif' />";
		//这里的返回值是在提交表单时用上
		return true;
	}
}

//密码失去焦点验证
function blur_pwd()
{
	//获取id=pwd input对象的的值,id=td_pwd的对象,id=ok_img对象
	var pwd = document.form_register.pwd.value;
	var td_pwd = document.getElementById("td_pwd");
	var ok_img = document.getElementById("ok_pwd");
	ok_img.innerHTML = "";
	if (pwd.length < 5 || pwd.length >20)
	{
		td_pwd.innerHTML = "密码的长度在10-20的字符之间";
		return false;
	}else if (checkOtherChar(pwd))
	{
		td_pwd.innerHTML = "密码不能含有特殊符号";
		return false;
	}else
	{
		td_pwd.innerHTML = "";
		ok_img.innerHTML = "<img src='images/login_ok.gif' />";
		return true;
	}
}
//是否有特殊字符
function checkOtherChar(str)
{
	var arr = ["*","&","<",">","$","\\","/"];
	for (var i=0;i<arr.length ;i++ )
	{
		for (var j=0;j<str.length ;j++ )
		{
			if (arr[i] == str.charAt(j))
			{
				return true;
			}
		}
	}
	return false;
}
//身份证号失去焦点验证
function blur_identity()
{
	var identity = document.form_register.identity.value;
	var td_identity = document.getElementById("td_identity");
	var ok_img = document.getElementById("ok_identity");
	ok_img.innerHTML = "";
	if (identity.length != 18)
	{
		td_identity.innerHTML = "身份证的长度为18位";
		return false;
	}else if (checkOtherChar(identity))
	{
		td_identity.innerHTML = "身份证不能含有特殊符号";
		return false;
	}else
	{
		td_identity.innerHTML = "";
		ok_img.innerHTML = "<img src='images/login_ok.gif' />";
		return true;
	}
}
/*
function blur_address()
{
	var address = document.form_register.address.value;
	var td_address = document.getElementById("td_address");
	var ok_img = document.getElementById("td_address");
	ok_img.innerHTML = "";
	if (address.indexOf("市") && (address.indexOf("区") || address.indexOf("县")))
	{
		td_address.innerHTML = "地址的格式不对,请输入详细的地址";
		return false;
	}else if (checkOtherChar(address))
	{
		td_address.innerHTML = "地址不能含有特殊符号";
		return false;
	}else
	{
		td_address.innerHTML = "";
		ok_img.innerHTML = "<img src='images/login_ok.gif' />";
		return true;
	}
}
*/
//表单验证
function checkform()
{
	if(blur_username() && blur_pwd() && blur_identity() && blur_address())
	{
		return true;
	}else
	{
		return false;
	}
}