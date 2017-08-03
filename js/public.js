/*引入iconfont文件*/
var iconLink = 'http://at.alicdn.com/t/font_5c2m6vemua3jtt9.css';
$('head').prepend('<link rel="stylesheet" type="text/css" href="'+ iconLink +'"/>');
if(!$('div').hasClass('section')){
	$('header').height(window.innerHeight*0.1111);
	$('footer').height(window.innerHeight*0.07407);
	$('.aboutUs,.product,.business').css('margin-top',window.innerHeight*0.1111);
}

$(function(){
	
	//右侧浮动图标
	$('.fixedIcon li').hover(function(){
		$('.fixedIcon li div').stop();
		$(this).find('div').fadeIn();
	},function(){
		$('.fixedIcon li div').stop();
		$(this).find('div').hide();
	})
	
	
	//右侧导航
	$('header i').hover(function(){
		$('.menu').animate({'right':0},300);
	})
	$('.menu').mouseleave(function(){
		$('.menu').animate({'right':'-16%'},300);
	})
	
	
	$('.backTop').click(function(){
		if($('div').hasClass('section')){
			
			
			$('#fp-nav li').eq(0).find('a').click();
		}else{
			$('body,html').animate({scrollTop:0},500);
		}
    })
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
