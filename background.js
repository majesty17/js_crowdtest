//修改页面，注入js

injectCustomJs('js/inject.js');

crNode2();
clearNode();


//注入js
function injectCustomJs(jsPath){
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(jsPath);

    document.head.appendChild(temp);
	
	
	var cp=document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	cp.src='https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js';
	document.head.appendChild(cp);
}

//增加按钮
function crNode2(){  
	var oDivNode =document.getElementById('mark_top_bar')
	oDivNode.innerHTML += "<div class='mark-button-left'><button class='cp_btn button-mark button-red'>Copy Text</button></div>";   
}  

//清理一些无用node
function clearNode(){
	document.getElementsByClassName('container-head')[0].setAttribute('hidden','hidden');
	document.getElementsByClassName('task-flow-wrap ng-scope')[0].setAttribute('hidden','hidden');
	document.getElementsByClassName('pro-top-nav clearfix')[0].setAttribute('hidden','hidden');
	document.getElementsByClassName('mark-top-bar-tips clearfix')[0].setAttribute('hidden','hidden');
	
	document.getElementsByClassName('item-x')[1].setAttribute('hidden','hidden');
	document.getElementById('mark_right_rate_bar').setAttribute('hidden','hidden');
}




