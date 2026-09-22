$(document).ready(function(){
  // 메뉴바 좌에서 우로 펼쳐지기
  $(".menu_bar").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
  });


  //카테고리 펼쳐지기
  $("#category_btn").click(function(){
    $(".category_hide").toggleClass("category_show");
    $(".category_arrow").toggleClass("category_arrow_up");
  });



  //메인슬라이드
  const swiper = new Swiper(".main_product_list", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    mousewheel: true,

    //반응형
    breakpoints: {
      1100: {
        slidesPerView: 1.5,
        spaceBetween: 0.,
      },
      1300: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1721: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
    },
    
  });


  // 슬라이딩 할 때 subtitle 글자변경
  swiper.on('slideChange', function () {
    if (this.activeIndex === 2 || this.activeIndex === 3 ) {
      $(".header_subtitle").text("PALERMO");
    } else if (this.activeIndex === 4 || this.activeIndex === 5) {
      $(".header_subtitle").text("NITRO");
    } else if (this.activeIndex === 6 || this.activeIndex === 7) {
      $(".header_subtitle").text("OUTER");
    } else if (this.activeIndex === 8 || this.activeIndex === 9) {
      $(".header_subtitle").text("TOP");
    } else if (this.activeIndex === 10 || this.activeIndex === 11) {
      $(".header_subtitle").text("PANTS");
    } else {
      $(".header_subtitle").text("SPEEDCAT");
    }
  });

  // 모바일 슬라이드
  const swiper2 = new Swiper(".main_product_vertical", {
    direction: "vertical",  
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    mousewheel: true,
    breakpoints: {
      200: {
        slidesPerView: 1.6,
        spaceBetween: 0.,
      },
      390: {
        slidesPerView: 1.62,
        spaceBetween: 0.,
      },
      768: {
        slidesPerView: 1.7,
        spaceBetween: 0,
      },
      830: {
        slidesPerView: 1.73,
        spaceBetween: 0,
      },
    },
  });

  // 슬라이딩 할 때 subtitle 글자변경
  swiper2.on('slideChange', function () {
    if (this.activeIndex === 2 || this.activeIndex === 3 ) {
      $(".header_subtitle").text("PALERMO");
    } else if (this.activeIndex === 4 || this.activeIndex === 5) {
      $(".header_subtitle").text("NITRO");
    } else if (this.activeIndex === 6 || this.activeIndex === 7) {
      $(".header_subtitle").text("OUTER");
    } else if (this.activeIndex === 8 || this.activeIndex === 9) {
      $(".header_subtitle").text("TOP");
    } else if (this.activeIndex === 10 || this.activeIndex === 11) {
      $(".header_subtitle").text("PANTS");
    } else {
      $(".header_subtitle").text("SPEEDCAT");
    }
  });

  //카테고리 품목을 누르면 메뉴닫고 해당 상품슬라이드로 이동
  $("#prod1").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_about").hide();
    $(".header_help").hide();
    $(".header_subtitle").show();
    $("#main").show();
    swiper.slideTo(0,1000,false);
    swiper2.slideTo(0,1000,false);
  })
  $("#prod2").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_about").hide();
    $(".header_help").hide();
    $(".header_subtitle").show();
    $("#main").show();
    swiper.slideTo(2,1000,false);
    swiper2.slideTo(2,1000,false);
  })
  $("#prod3").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_about").hide();
    $(".header_help").hide();
    $(".header_subtitle").show();
    $("#main").show();
    swiper.slideTo(4,1000,false);
    swiper2.slideTo(4,1000,false);
  })
  $("#prod4").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_about").hide();
    $(".header_help").hide();
    $(".header_subtitle").show();
    $("#main").show();
    swiper.slideTo(6,1000,false);
    swiper2.slideTo(6,1000,false);
  })
  $("#prod5").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_about").hide();
    $(".header_help").hide();
    $(".header_subtitle").show();
    $("#main").show();
    swiper.slideTo(8,1000,false);
    swiper2.slideTo(8,1000,false);
  })
  $("#prod6").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_about").hide();
    $(".header_help").hide();
    $(".header_subtitle").show();
    $("#main").show();
    swiper.slideTo(10,1000,false);
    swiper2.slideTo(10,1000,false);
  })
  
  //help페이지 우측 탭 열리고 닫히기
  $(".txt_hide").hide();
  $(".help_text > .help_wrap").click(function(){
    $(this).find(".txt_hide").slideDown();
    $(this).siblings().find(".txt_hide").slideUp();
  })


  //about, help 화면 띄우기 
  $(".menu_about").click(function(){
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_subtitle").hide();
    $(".header_help").hide();
    $(".header_about").show();
    $("#about").show();
  });
  $(".menu_help").click(function () {
    $(".menu_bar").toggleClass("menu_bar_unfold");
    $(".menu_content_hide").toggleClass("menu_content_show");
    $("main").hide();
    $(".header_subtitle").hide();
    $(".header_about").hide();
    $(".header_help").show();
    $("#help").show();
  });

  $(".share_hide").hide();
  $(".share_wrap").click(function(){
    $(this).find(".share_hide").show();
  });
  $(".share_hide").mouseleave(function(){
    $(this).hide();
    $(".share_show").show();
  });
//  function Clipboardcopy(){
//     const dummy = document.createElement("textarea");
//     const text = window.location.href;

//     document.body.appendChild(dummy);
//     dummy.value = text;
//     dummy.select();
//     document.exeCommand("copy");
//     document.body.removeChild(dummy);
//  }

  // $(".share_wrap").click(function(){
  //   const text = window.location.href;
  //   console.log(text);
  // });


  // $(".sc_mid").click(function(){
  //   $("#sc_og").hide();
  //   $("#sc_mid").show();
  // });
  

});