$(function(){
    
    $('#btn1').on('click',function(){
        $('.box').addClass("start");
        $('.box').removeClass("stop");
    });

    $('#btn2').on('click',function(){
        $('.box').addClass("stop");
    
    });
});

