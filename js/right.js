function dd_menu_top_down_block()
{
	//获取id=dd_menu_top_down对象
	var dd_menu_top_down = document.getElementById("dd_menu_top_down");
	dd_menu_top_down.style.display = "block";
}
function dd_menu_top_down_none()
{	
	//获取id=dd_menu_top_down对象
	var dd_menu_top_down = document.getElementById("dd_menu_top_down");
	dd_menu_top_down.style.display = "none";
}

window.onload = function(){
	window.setInterval("scrollShow()",1000);
}
	var scroll_img = new Array();
	scroll_img = ["images/programming_language1.jpg","images/programming_language2.jpg","images/programming_language3.jpg"];
	var scroll_number = new Array();
	scroll_number = ["scroll_number_1","scroll_number_2","scroll_number_3"];
	var max = scroll_img.length;
//nownumber如果是在函数的里面定义则,无法自动滚动图片
	var nownumber = 1;
function scrollShow(index)
{
	if(Number(index)){
		nownumber = index;
	}
	for( var i=1;i<=max;i++){
		if (i==nownumber){
			document.getElementById("scroll_img_id").src = scroll_img[i-1];			
			document.getElementById(scroll_number[i-1]).className = "scroll_number_over";
		}else{
			document.getElementById(scroll_number[i-1]).className = "scroll_number_out";
		}
	}
	if(nownumber == max){   //设置下一个显示的图片
		nownumber = 1;
	}
	else{
		nownumber++;
	}
}
