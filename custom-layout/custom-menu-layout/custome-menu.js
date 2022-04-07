$(function() {
    //Menu
    console.log( "Module: Menu ready!" );
    $(".wrapper-menu__bar").on('click', function(event){
        $( ".wrapper-menu__nav" ).toggleClass( "active" )
    });

    $(".wrapper-menu__nav__links__exit").on('click', function(event){
        $( ".wrapper-menu__nav" ).toggleClass( "active" )
    });
    
    $("#submenu-1").on('click', function(event){
        $(".submenu-1__links").toggleClass( "active" )
    });
});
