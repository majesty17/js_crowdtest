//给按钮增加个复制功能
new Clipboard('.cp_btn', {
	text: function(trigger) {
		return addr_ch=document.getElementsByClassName('com-mark-pr-content com-mark-pr-html')[1].children[1].innerText;
	}
});