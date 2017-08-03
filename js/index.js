var timer = null;
var speed = 1;
$('.index2 .ct1200').css({'transform':'scale('+window.innerWidth/1920+','+window.innerWidth/1920+')'});
$('.goodness .ct1200').css({'transform':'scale('+window.innerWidth/1920+','+window.innerWidth/1920+')'});
$('.product .ct1200').css({'transform':'scale('+window.innerWidth/1920+','+window.innerWidth/1920+')'});
//$('.goodness .ct1200').offset().top=window.innerHeight*0.1111;
//$('.bigSlider div').width($('.bigSlider').width());
$(function(){
	
	var productTime;
	
	goodnessHide();
	//fullpage
    $('#fullpage').fullpage({
    	navigation:true,//右侧焦点
    	verticalCentered:true,//垂直居中
    	resize:true,//字体是否随着窗口缩放而缩放
    	paddingTop:window.innerHeight*0.1111,
    	paddingBottom:window.innerHeight*0.07407,
		afterLoad: function(anchorLink, index) {//滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
			if(index == 1) {
			}
			if(index == 2) {
				var li_num = 0 ;
				var broad = true;
				$('.product li').each(function(i){
					productTime = setTimeout(function(){
						$('.product li').eq(i).addClass('animated fadeInUp').css('opacity',1);
						li_num++;
					},400*i+100);
				})
				$('.product li').hover(function(){
					console.log(li_num);
					$('.product li').removeClass('animated fadeInUp');
					if(li_num == $('.product li').length){
						$('.product li').removeClass('active');
						$(this).addClass('active');
					}
				},function(){
					$('.product li').removeClass('active');
				});
				if(broad == true){
					b_move();
				}
				$('.broadcast').hover(function(){
					clearInterval(timer);
				},function(){
					b_move();
				})
				$('.closeBroadcast').click(function(){
					$('.broadcast').remove();
					clearInterval(timer);
					broad = false;
				})

			}
			if(index == 3) {
				
				$('.goodLi').each(function(i){
					setTimeout(function(){
						if(i==0){
							$('.goodLi').eq(i).animate({'left':0,'opacity':1},300)
						}
						if(i==1){
							$('.goodLi').eq(i).animate({'left':110,'top':400,'opacity':1},300)
						}
						if(i==2){
							$('.goodLi').eq(i).animate({'top':490,'opacity':1},300)
						}
						if(i==3){
							$('.goodLi').eq(i).animate({'top':400,'right':110,'opacity':1},300)
						}
						if(i==4){
							$('.goodLi').eq(i).animate({'right':0,'opacity':1},300)
						}
						if(i==5){
							$('.goodLi').eq(i).animate({'right':0,'opacity':1},300)
						}
						
					},300*i+900);
				})
				$('.circleChart').remove();
				$('.barBox').append('<div class="circleChart" id="circle1"></div>');
				$('.barBox').fadeIn();
				$(".circleChart").circleChart({
					value: 75,
					startAngle: 300,
					speed: 4500,
					animation: "easeInOutCubic",
					background:  false,
					color: "#a4a4a4",
					size: 416,
					widthRatio: 0.02
				})
			}
			if(index == 4) {
			}
			if(index == 5) {
				
			}
		},
		onLeave: function(index, direction) {//滚动前的回调函数，index 是离开的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
			if(index == '1') {
			}
			if(index == '2') {
				clearInterval(timer);
				clearTimeout( productTime );
				$('.product li').removeClass('animated fadeInUp').css('opacity',0);
			}
			if(index == '3') {
				goodnessHide();
				$('.barBox').fadeOut();
			}
			if(index == '4') {
			}
			if(index == '5') {
			}
		}
    });
    
    
    $('.bigSlider').slick({
        arrows: false,
        asNavFor: '.smallSlider'
    });
    $('.rightContent').slick({
        arrows: false,
        fade:true
    });
    $('.smallSlider').slick({
    	autoplay:true,
        arrows: false,
        dots:true,
        asNavFor: '.bigSlider'
    });
	$('.big-content').slick({
        arrows: false,
		autoplay:true,
    });
	
    $('.smallSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.rightContent').slick('slickGoTo',nextSlide);
    });
    $('.bigSliderPlace,.rightContent').hover(function(){
    	$('.smallSlider').slick('slickPause');
    },function(){
    	$('.smallSlider').slick('slickPlay');
    })
	
    
    changePic($('.business .small').eq(0).find('img').eq(0));
    
    $('.business .small img').mouseover(function(){
    	changePic($(this));
    })
    
        
})

function changePic(obj){
	$('.business .bigPic').fadeOut(100,function(){
		$('.business .bigPic').css('background-image','url('+obj.attr("src")+')').fadeIn(300);
	});
	$('.business .description label').text(obj.parent('div').find('label').text());
	$('.business .description p').text(obj.parent('div').find('p').text());
}

function b_move(){
		clearInterval(timer);
		timer = setInterval(function() {
			$('.broadcast').css('left',$('.broadcast').offset().left - speed + 'px');
		}, 10);
}
function goodnessHide(){
	$('.goodLi').css('opacity',0);
	$('.goodLi').eq(0).css({'left':-100});
	$('.goodLi').eq(1).css({'left':75,'top':400});
	$('.goodLi').eq(2).css({'top':576});
	$('.goodLi').eq(3).css({'right':75,'top':400});
	$('.goodLi').eq(4).css({'right':-100});
	$('.goodLi').eq(5).css({'right':-100});
}
