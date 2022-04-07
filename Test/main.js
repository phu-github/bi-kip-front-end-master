$(function() {
    //Module: Menu
    console.log( "Module: Menu ready!" );
    $(".wrapper-menu__bar").on('click', function(event){
        $( ".wrapper-menu__nav" ).toggleClass( "active" )
    });

    $(".wrapper-menu__nav__links__exit").on('click', function(event){
        $( ".wrapper-menu__nav" ).toggleClass( "active" )
    });
    
    $("#submenu-1").on('click', function(event){
        console.log( "!!!!" );
        $(".submenu-1__links").toggleClass( "active" )
    });
    //Module: Back to top
    console.log( "Module: Back to top ready!" );
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.wrapper-goto-top').fadeIn();
        }else{
            $('.wrapper-goto-top').fadeOut();
        }
    });
    $('.wrapper-goto-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
