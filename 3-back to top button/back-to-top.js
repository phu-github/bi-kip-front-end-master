$(function() {
    //Module: Back to top
    console.log( "Module: Back to top ready!" );
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.wapper-goto-top').fadeIn();
        }else{
            $('.wapper-goto-top').fadeOut();
        }
    });
    $('.wapper-goto-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});