window.onload=load();
	
	function load(){
		$('.btn').on('click',load);
		var list=$('.cump'),sty,id;
	  	for (var i = 0 , len=list.length; i < len; i++) {
	  	var left_num = Math.random()*window.screen.width + 1;
	  	var top_num = Math.random()*window.screen.availHeight + 1;
	  	var deg_num = Math.random()*90 - 45;
	  	if (left_num>list[i].width) {
	  		left_num-=list[i].width;
	  	}
	  	if (top_num>list[i].height) {
	  		top_num-=list[i].height;
	  	}
	  	// left_num=(left_num>$list[i].width)?left_num-$list[i].width:left_num;
	  	// $($('.cump')[i]).css('top',top_num);
	  	// $($('.cump')[i]).css('left',left_num);
	  	$($('.cump')[i]).css({
	        'top':top_num,
	        'left':left_num,
	        'transform':'rotate('+deg_num+'deg)'
	    });
	  	$('.btn span').css('left',window.screen.width/2.2)
	  	// console.log('top:'+$list[i].width);
	  	// console.log('left:'+$list[i].height);
	  }
	  
	  	
		
	};
	$('.cump').on('click',function(){
	  	// console.log($(this).attr('data-bool'));
	  	if ($(this).attr('data-bool')==1) {
	  		$(this).attr({
	  			'style':sty,
	  			'data-bool':2,
	  			'id':''
	  		});
	  		$('.zz').css('display','none');
	  		$('.btn').css('display','block');
	  	}else{
	  		sty=$(this).attr('style');
		  	$(this).css({
		  		'left':0,
		  		'top':'1.5%',
		  		'height':'96%',
		  		'width':'auto',
		  		'z-index':'5555',
		  		'transform':'rotate(0deg)'
		  		});
		  	// $(this).css('left',window.screen.width/2-$(this).css('width'));
		  	$(this).attr('id',ranStr(32));
		  	$(this).attr('data-bool',1);
		  	id=$(this).attr('id');
		  	$('.zz').css('display','block');
		  	$('.btn').css('display','none');
		  	// console.log((rem($('#'+id).css('width'))-0));
		  	setTimeout(function(){$('#'+id).css('left',(window.screen.width-(rem($('#'+id).css('width'))-0))/2)},10);
		  	console.log((rem($('#'+id).css('width'))-0));
	  	}
	  	});
	$('.zz').on('click',function(){
	  		$('#'+id).trigger('click');

	 });
	function ranStr(len) {
	　　len = len || 32;
	　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	　　var maxPos = $chars.length;
	　　var pwd = '';
	　　for (i = 0; i < len; i++) {
	　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	　　}
	　　return pwd;
	}
	function rem(str){
    return str.substring(0,str.length - 2);
	}