$(document).ready(function() {
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	// вверх
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	$(".characteristics").on("click", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top - 130;
	    $('body,html').animate({scrollTop: top}, 500);
	});
	
	// шапка и первый слайдер при прокрутке
	$(window).on('load scroll', function() {
	    var height = $(window).height() - 100;
	    if($(this).scrollTop() > height) {
		$('#header').addClass('scroll');
	    } else {
		$('#header').removeClass('scroll');
	    }
	    
	    var height_main_slide = $('#main_slide').height();
	    $('#catalog').css('margin-top', height_main_slide);
	    
	});

	// класс меню с подменю
	$('.main_menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	// открытие подменю
	if ( window.innerWidth < 1451 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	};
	
	// закрытие подменю
	//$('body').click(function (event) {
	//    if ($(event.target).closest('.main_menu .submenu').length == 0 ) {
	//	$('.main_menu .submenu ul').slideUp(500);
	//	$('.main_menu .submenu').removeClass('show');
	//    }
	//});
	
	// показываем меню
	$('.menu_button').on('click', function(){
		$('.main_menu_wrap').addClass('show');
		$('.menu_close').addClass('show');
		$('.main_menu').css('left', '50%');
	});

	// скрываем меню, удаляем классы активности, возвращаем меню на исходную
	$('').on('click', function(){
		$('.submenu.active').removeClass('show');
		$('.submenu').removeClass('show');
		//$('.main_menu').css('left', '100%');
		$(this).removeClass('show');
		setTimeout(function(){
			$('.main_menu_wrap').removeClass('show');
		}, 300);
	});
	
	
	
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1020) {
			$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	$('.menu_button_mob').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		   $(this).removeClass('active');
		}else{
		   $('.main_menu').slideDown(500);
		   $(this).addClass('active');
		}
	});
	
	
	    if ( window.innerWidth>0 ) {
		    $('.main_section').toggleClass("hidden");
		    $('#index #header').addClass('hidden');
		    $('#main_slide').addClass('animated');
		    //$('#header').addClass('animated');
	    };
	    
	    setTimeout (function(){
		$('#index #header').addClass('animated');
		
		}, 1000); 
	
	
	
	$(window).on('load scroll', function(){
		$('.main_section').each(function(){
		    if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
			$(this).addClass('animated');
		    }	
		});
	});
	
	
	
	$('.tab_buttons .tab_but').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons .tab_but', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	$('.point .num').click(function(){
		if ($(this).parent().hasClass("active")) {
		    //$(this).parent().children('.info').slideUp(500);
		    $(this).parent().removeClass('active');
		}else{
		    //$('.info').slideUp(500);
		    $('.point').removeClass('active');
		    //$(this).parent().children('.info').slideDown(500);
		    $(this).parent().addClass('active');
		}
	});
	
	$('.services .serv_item').mouseover(function(){
	    $('.serv_item').removeClass('active');
	    $(this).addClass('active');
	});
	
	
	$('.more_text_link').html('Показать полностью');

	$('.more_text_link').on('click', function(e){
	  e.preventDefault();
	  
	  var
	    $this = $(this),
	    content = $(this).parents('.tab').find('.more_text_block');  
	  
	  
	  if(!$this.hasClass('trigger')){
	    $this.addClass('trigger');
	    $this.html('Показать меньше');
	    
	    content.slideDown();
	  } else {
	    $this.removeClass('trigger');
	    $this.html('Показать полностью');
	    
	    content.slideUp();
	  }
	});
	
	
	$(window).on('load resize', function(){
	    if ( window.innerWidth>1020 && $('.main_section .production_slider').hasClass('slick-initialized') ) {
		$('.main_section .production_slider').slick('unslick');
	    } else if ( window.innerWidth<=1020 && !$('.main_section .production_slider').hasClass('slick-initialized') ) {
		$('.main_section .production_slider').slick({
		    dots: false, //true,
		    arrows: true,
		    infinite: true,
		    speed: 1200,
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		    nextArrow: '<span class="slick-next">&nbsp;</span>',
		    responsive: [
			
		      {
			breakpoint: 801,
			settings: {
			  slidesToShow: 2,
			}
		      },
		      {
			breakpoint: 500,
			settings: {
			  slidesToShow: 1,
			}
		      }
		    ]
		});
	    };
	    
	    
	    if ( window.innerWidth>1020 && $('.main_section .goals_slider').hasClass('slick-initialized') ) {
		$('.main_section .goals_slider').slick('unslick');
	    } else if ( window.innerWidth<=1020 && !$('.main_section .goals_slider').hasClass('slick-initialized') ) {
		$('.main_section .goals_slider').slick({
		    dots: false, //true,
		    arrows: true,
		    infinite: true,
		    speed: 1200,
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		    nextArrow: '<span class="slick-next">&nbsp;</span>',
		    responsive: [
		      {
			breakpoint: 601,
			settings: {
			  slidesToShow: 1,
			}
		      }
		    ]
		});
	    };
	    
	    
	    if ( window.innerWidth>1020 && $(' .services').hasClass('slick-initialized') ) {
		$(' .services').slick('unslick');
	    } else if ( window.innerWidth<=1020 && !$(' .services').hasClass('slick-initialized') ) {
		$(' .services').slick({
		    dots: false, //true,
		    arrows: true,
		    infinite: false,
		    speed: 1200,
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    initialSlide: 1,
		    prevArrow: '<span class="slick-prev">&nbsp;</span>',
		    nextArrow: '<span class="slick-next">&nbsp;</span>',
		    responsive: [
		      {
			breakpoint: 651,
			settings: {
			  slidesToShow: 2,
			  initialSlide: 2,
			}
		      },
		      {
			breakpoint: 451,
			settings: {
			  slidesToShow: 1,
			  initialSlide: 2,
			}
		      }
		    ]
		});
	    };
	});
	
	$('.adv_slider').slick({
	    dots: true, 
	    arrows:true, //false,
	    infinite: false,
	    speed: 1200,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    initialSlide: 1,
	    centerMode: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	var timer = false;
	$('.adv_menu li').click(function(){
	  if(!timer){
	    timer = true;
	    var el = $(this);
	    if(!el.hasClass('active')){
	      var nextTab = el.index();
	      $('.adv_menu .active').removeClass('active');
	      $('.adv_slider').slick('slickGoTo', nextTab);
	      el.addClass('active');
	    }
	    setTimeout(function(){
	      timer = false;
	    }, 1000)
	  }
	  return false;
	})
	
	      
	$('.stocks_slider').slick({
		dots: true,
		arrows: true,
		//infinite: true,
		fade: true,
		speed: 1300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	
	$('.main_section .clients_wrap').slick({
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
            nextArrow: '<span class="slick-next">&nbsp;</span>',
	    //fade: true,
	    speed: 1500,
	    slidesToShow: 4,
	    //variableWidth: true,
	    responsive: [{
		breakpoint: 1301,
		settings: { 
		    slidesToShow: 3,
		}
	    },
	    {
		breakpoint: 1001,
		settings: { 
		    slidesToShow: 2,
		}
	    },
	    {
		breakpoint: 801,
		settings: { 
		    slidesToShow: 1,
		}
	    },
	    {
		breakpoint: 600,
		settings: { 
		    slidesToShow: 2,
		}
	    },
	    {
		breakpoint: 451,
		settings: { 
		    slidesToShow: 1,
		}
	    }]
	});
	
	$('.article_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		//centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1301,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  
		  {
		    breakpoint: 1021,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 701,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
	/*$('.main_img.slider').slick({
		dots: true,
		arrows: false,
		//infinite: true,
		speed: 1500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: '#production .left_block',
	});*/
	
	$('.galery .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.galery .small_images'
	  });
	  $('.galery .small_images').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.galery .main_img',
	    dots: true,
	    //centerMode: true,
	    vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1301,
		    settings: {
		      vertical: false,
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 350,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		]
	    
	});
	  
	  
	  
	$('.products_images .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.products_images .small_images'
	  });
	$('.products_images .small_images').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.products_images .main_img',
	    dots: false,
	    //centerMode: true,
	    vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1021,
		    settings: {
		      vertical: false,
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 350,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		]
	});
	  
	  
	$('.production.production_slider_inner').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		//centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1101,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 501,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
    
});

