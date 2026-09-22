$(document).ready(function(){

    //gnb에 마우스 오버시 sub올메뉴 나타남
    $(".gnb>li").mouseenter(function(){
        $(".gnb_depth1").slideDown();
    });
    $(".gnb_depth1").mouseleave(function(){
        $(this).hide();
    });

    $(".archive_list li").eq(0).mouseenter(function(){
        $(".archive_img a").hide();
        $(".archive_img a").eq(0).show();
    });
    $(".archive_list li").eq(1).mouseenter(function(){
        $(".archive_img a").hide();
        $(".archive_img a").eq(1).show();
    });
    $(".archive_list li").eq(2).mouseenter(function(){
        $(".archive_img a").hide();
        $(".archive_img a").eq(2).show();
    });





	// swiper_showcase 슬라이드
	const swiper_showcase = new Swiper('.swiper_showcase', {
        // Optional parameters
        loop: true,

        slidesPerView: 1,         // 다단 배열
        spaceBetween: 0,         // 다단 갭
  
        //자동 실행
	    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },                        
      
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
      
        // Navigation arrows 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // slideToClickedSlide: true,	//클릭 시 해당 슬라이드 위치로 이동
		// loopedSlides: swiperTopNum.length //loop 시 파라미터 duplicate 개수
      
    });

    // swiper_thumb 슬라이드 
	const swiper_thumb = new Swiper('.swiper_thumb', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,         // 다단 배열
        spaceBetween: 100,         // 다단 갭
          
        //자동 실행
	    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        }, 
        
        thumbs: {
            swiper: swiper_showcase,
        },

    });

   



    // swiper_main 슬라이드
	const swiper_main = new Swiper('.swiper_main', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,         // 다단 배열
        spaceBetween: 0,         // 다단 갭

        //자동 실행
	    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, 
      
        
    });

    // Swiper 슬라이드
	const swiper_sub = new Swiper('.swiper_sub', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,         // 다단 배열
        spaceBetween: 10,         // 다단 갭

        //자동 실행
	    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, 

        thumbs:{
            swiper: swiper_main 
        }
        
      
        
    });




});