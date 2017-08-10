//修改页面，注入js

injectCustomJs('js/inject.js');

crNode2();
clearNode();



function injectCustomJs(jsPath)
{
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


function crNode2(){  
	var oDivNode =document.getElementById('mark_top_bar')
	oDivNode.innerHTML += "<button class='cp_btn'>Copy Text</button>";   
}  

function clearNode(){
	document.getElementsByClassName('container-head')[0].setAttribute('hidden','hidden');
	document.getElementsByClassName('task-flow-wrap ng-scope')[0].setAttribute('hidden','hidden');
	document.getElementsByClassName('pro-top-nav clearfix')[0].setAttribute('hidden','hidden');
	
	document.getElementsByClassName('item-x')[1].setAttribute('hidden','hidden');
	document.getElementById('mark_right_rate_bar').setAttribute('hidden','hidden');
}




