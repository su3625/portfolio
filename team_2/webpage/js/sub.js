$(document).ready(function(){
    //모두동의
    $(".agree_all #check_all").click(function(){
        if($(this).prop("checked")){
            $(".agree_list .select").prop("checked", true);
        } else {
            $(".agree_list .select").prop("checked", false);
        }
    });

    //눈아이콘 클릭시 비밀번호 보였다,안보였다.
    $(".eye1").click(function(){

        const x = document.getElementById("password1");
             
        if (x.type === "password") {
            x.type = "text";
            $(".eye1").toggleClass("visible");
        } else {
            x.type = "password";
            $(".eye1").toggleClass("visible");
        }
    });

    


    $(".eye2").click(function(){
        const x = document.getElementById("password2");
             
        if (x.type === "password") {
            x.type = "text";
            $(".eye2").toggleClass("visible");
        } else {
            x.type = "password";
            $(".eye2").toggleClass("visible");
        }
    });


});