
	
	$('.slick-slide').eq(0).addClass('active');
	showBig();
	
	$('.cardList').slick({
//		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		touchMove: false,
		slidesToScroll: 1,
		arrow:true
	});
	
	$('.slick-slide').hover(function(){
		$('.slick-slide').removeClass('active')
		$(this).addClass('active');
		setTimeout(showBig(),300);
	})
	
	

	



function showBig(){
	$('.showBig img').attr('src',$('.cardList .active .cardImg').attr('src'));
	$('.showBig .showTitle').html($('.cardList .active p').text()+"<br />—");
	$('.showBig .showContent').html($('.cardList .active label').text());
}
