function checkTitleLength(){
	var titleList = document.getElementsByClassName('xx_list_item_title');
	for(var i = 0;i < titleList.length;i++){
		var str = text(titleList[i]);
		if(str.length>10){
			titleList[i].innerText = str.substring(0,10) + '...'
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

//使列表图片高度=右侧内容高度 
function setImgHeight(){
    var listItemContent = document.getElementsByClassName('xx_list_item_content');
    var listItemImg = document.getElementsByClassName('xx_list_item_img');
    for(var i = 0;i < listItemContent.length;i++){
        listItemImg[i].style.height = listItemContent[i].offsetHeight+'px';
    }
}

// 这个函数并没有实现图片自适应填充......help!!!....
function fitImg(){
    // 图片区域的宽度设为窗口的1/3宽
    var w = document.body.clientWidth*1/3;
    var listItemImg = document.getElementsByClassName('xx_list_item_img');
    var listItemContent = document.getElementsByClassName('xx_list_item_content');
    for(var i=0;i < listItemImg.length;i++){
        var h = listItemContent[i].offsetHeight;
        resizeImg(listItemImg[i],w,h); 
    }
}

// 图片按比例自适应缩放
function resizeImg(img, maxWidth, maxHeight){
        var w = img.width;
        var h = img.height;
        // 当图片比预览区域小时不做任何改变
        if(w < maxWidth && h < maxHeight) 
            return;
        // 当实际图片比例大于预览区域宽高比例时
        // 缩放图片宽度，反之缩放图片高度
        if(w/h > maxWidth/maxHeight){
            img.style.width = maxWidth+'px';
        }else{
            img.style.height = maxHeight+'px';
        }
}

// 下拉列表
function dropList(){

    var flag = true;
    var dropBtn = document.getElementById('xx_type_drop');
    var hideType = document.getElementsByClassName('xx_type_hide');
    setTimeout(function(){
        dropBtn.onclick = function(){
           if(flag){
                hideType[0].style.visibility = 'visible';
                dropBtn.className = 'am-icon-chevron-up';
                flag = false;
           }    
            else{
                hideType[0].style.visibility = 'hidden';
                dropBtn.className = 'am-icon-chevron-down';
                flag = true;
            }
        }     
    },0.5);
}





onload = function(){
	checkTitleLength();
    setImgHeight();
    fitImg();
    dropList();
}
