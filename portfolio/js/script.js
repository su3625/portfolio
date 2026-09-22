$(document).ready(function(){
    //메뉴바 x만들기
    $(".menu_btn").click(function(){
        $(".menu_btn>span:nth-child(1)").toggleClass("rotate01");
        $(".menu_btn>span:nth-child(2)").toggleClass("rotate02");
    });

    //메뉴토글
    $(".menu_btn").click(function(){
        $(".menu").toggleClass("menu_show");
    });

    //메뉴클릭시 해당섹션으로 이동
    // $(".menu>a, .page_btn>a").click(function(){
    //     $("html, body").stop().animation({scrollTop:$(this.hash).offset().top},0);
    //     $(".menu").removeClass("menu_show");
    //     $(".menu_btn").removeClass("menu_show");
    // });

    $(".title, .menu_title, .menu li a, .page_btn a").click(function(){
        $(".menu").removeClass("menu_show");
        $(".menu_btn").removeClass("menu_show");
        $(".menu_btn>span:nth-child(1)").removeClass("rotate01");
        $(".menu_btn>span:nth-child(2)").removeClass("rotate02");
    });

    //기본이벤트 제거
    window.addEventListener("wheel", function(e){
	    e.preventDefault();
    },{passive : false});

    //페이지선언
    var $html = $("html");
    var page = 1;
    var lastPage = $(".content").length;

    $html.animate({scrollTop:0},10);

    //휠 이벤트
    $(window).on("wheel", function(e){
 
        if($html.is(":animated")) return;
    
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
    
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
    
            page--;
        }
        var posTop = (page-1) * $(window).height();
 
        $html.animate({scrollTop : posTop});
    });


    // 모든 .content 요소의 상단 위치를 배열에 저장
    var contentTops = [];
    $(".content").each(function(){
        contentTops.push($(this).offset().top);
    });

    // 초기 로드 시 첫 번째 버튼에 "on" 클래스 적용 (최상단일 경우)
    if ($(window).scrollTop() < contentTops[0] + 100) { // 첫 페이지 진입 시점에 따라 조절
        $(".p_btn").eq(0).addClass("on");
    }


    // 스크롤 이벤트 리스너는 한 번만 등록
    $(window).on("scroll", function(){
        var wTop = $(window).scrollTop(); // 현재 스크롤 위치

        // 각 .content 요소의 위치와 현재 스크롤 위치를 비교
        $(".content").each(function(index){
            var thisTop = $(this).offset().top;
            var thisHeight = $(this).outerHeight(); // 해당 섹션의 높이까지 고려

            // 스크롤 위치가 현재 섹션의 시작점 - 100px 부터 섹션의 끝점까지 있을 때
            // 이 100px는 스크롤 전에 버튼이 활성화되도록 조절하는 값입니다.
            if (wTop >= thisTop - 100 && wTop < thisTop + thisHeight - 100) {
                $(".p_btn").eq(index).addClass("on").siblings().removeClass("on");
                return false; // 해당 섹션에 "on"이 적용되면 더 이상 루프를 돌 필요 없음 (최적화)
            }
        });

        // 최상단 (첫 번째 섹션)에 있을 때 첫 번째 버튼이 활성화되도록 추가 로직
        if (wTop < contentTops[0] - 100) { // 첫 번째 섹션 진입 전
            $(".p_btn").removeClass("on"); // 모든 버튼 비활성화
            $(".p_btn").eq(0).addClass("on"); // 첫 번째 버튼 활성화
        }
    });



});