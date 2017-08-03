$(function(){
	
	$('.part li').hover(function(){
		$('.part li').removeClass('active');
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})
	
	
	
})