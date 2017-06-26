$(document).on('ready', function(){
  
	var navMain = document.querySelectorAll('.main-nav-block');
	var navToggle = document.querySelectorAll('.main-nav__toggle');
	var start_pos = navMain[0].offsetTop + 100; 
  var FLAG_visible_scroll_menu = false;   
  //var filter = document.querySelector('#js-filter');
	


	$('.main-nav__toggle').click(function(event){
    event.preventDefault();
    if ($('.main-nav-block').hasClass('main-nav--opened')) {
      $('.tab-nav').removeClass('active'); 
      $('.main-nav--first').css('display', 'none');
      $('.main-nav--last').css('display', 'none');     
    }
    else {
      $('.js_nav-menu').toggleClass('active');
      $('.main-nav--first').css('display', 'block');
    }

    $('.main-nav-block').toggleClass('main-nav--closed');
    $('.main-nav-block').toggleClass('main-nav--opened');
    
		
	});

  $('.tab-nav').click(function(event){
    event.preventDefault();   
    if ($(this).hasClass('active')) return;
    if (!$('.js_nav-service').hasClass('active') && !$('.js_nav-menu').hasClass('active')) {
      $(this).addClass('active');
      $('.main-nav-block').toggleClass('main-nav--closed');
      $('.main-nav-block').toggleClass('main-nav--opened'); 



    } else {
      $('.js_nav-service').toggleClass('active');
      $('.js_nav-menu').toggleClass('active');
      if ($('.js_nav-menu').hasClass('active')) {
        $('.main-nav--first').css('display', 'block');
        $('.main-nav--last').css('display', 'none');
        $('.js_nav-service').removeClass('active')
      }

    }

    
   
    if ($('.js_nav-service').hasClass('active')) {
      $('.main-nav--first').css('display', 'none');
      $('.main-nav--last').css('display', 'block');
      return;
    } 
    if ($('.js_nav-menu').hasClass('active')) {
      $('.main-nav--first').css('display', 'block');
      $('.main-nav--last').css('display', 'none');
    }
    
  });


  



	$(window).scroll(function(){

    if ($(window).scrollTop() > start_pos && !FLAG_visible_scroll_menu) {
          if ($('.main-nav-scroll').hasClass('to_top')==false) {                        
                $('.main-nav-scroll').addClass('to_top');
                $('.main-nav-scroll').slideDown(400);
                FLAG_visible_scroll_menu = true;
                $('.main-nav-static').css('opacity','0');
          } 
    } 

    if ($(window).scrollTop() < start_pos && FLAG_visible_scroll_menu) {
                 $('.main-nav-scroll').slideUp(0, function() {
                    $('.main-nav-scroll').removeClass('to_top');               
                    FLAG_visible_scroll_menu = false;
                     $('.main-nav-static').css('opacity','1');
                 });
                
             
          };

  });      

      


});