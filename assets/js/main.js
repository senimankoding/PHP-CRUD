$(document).ready(function(){

    /* Menu */
    $(".fa-bars").on('click', function(){
        $("#sidebar").css("height","150px");
        $(".menu").css("display","block");
        $(".fa-bars").css("display","none");
        $(".fa-times").css("display","block");
    });
    $(".fa-times").on('click', function(){
        $("#sidebar").css("height","60px");
        $(".menu").css("display","none");
        $(".fa-bars").css("display","block");
        $(".fa-times").css("display","none");
    });

    if (screen.width <= 1023 ) {
        $(".menu a").on('click', function () {
            $("#sidebar").css("height","60px");
            $(".menu").css("display","none");
            $(".fa-bars").css("display","block");
            $(".fa-times").css("display","none");
        });
    }

    /* End Menu */




});