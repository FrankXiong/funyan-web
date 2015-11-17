function checkTitleLength(){
	var titleList = document.getElementsByClassName('xx_list_item_title');
	for(var i = 0;i < titleList.length;i++){
		var str = text(titleList[i]);
		if(str.length>10){
			titleList[i].innerText = str.substring(0,12) + '...'
		}
	}
} 

//兼容浏览器获取节点文本的方法
function text(e)
{
    var t="";
    //如果传入的是元素，则继续遍历其子元素
    //否则假定它是一个数组
    e=e.childNodes||e;
    //遍历所有子节点
    for(var j=0;j<e.length;j++){
        //如果不是元素，追加其文本值
        //否则，递归遍历所有元素的子节点
        t+=e[j].nodeType!=1?
            e[j].nodeValue:text(e[j].childNodes);
    }

    return t;
}
onload = function(){
	checkTitleLength();
}
