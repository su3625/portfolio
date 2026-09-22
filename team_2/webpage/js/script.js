$(document).ready(function(){

 
    
    // Swiper 슬라이드
	const swiper_function = new Swiper('.swiper_function', {
        // Optional parameters
        speed: 5000,
        loop: true,
        loopAdditionalSlides: 1, // 추가 슬라이드 복제 → 마지막 슬라이드에서 멈칫하는 현상 방지
        slidesPerView: 1,         // 다단 배열
        spaceBetween: 0,         // 다단 갭
        //반응형
        breakpoints: {
            430: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 20,
            },
            1025: {
            slidesPerView: 4,
            spaceBetween: 30,
            },
        },

        //자동 실행
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },    

    });


    //AOS스크롤애니메이션
    AOS.init();
    $(window).on(load,function(){
        AOS.refresh();
    });
    

});