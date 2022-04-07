$(function() {
    //Custome slider primary
    let prevImage = "<img class='wapper-slider-1__prev'" +"src='./images/slide-arrow-prev.png'>";
    let nextImage = "<img class='wapper-slider-1__next'" +" src='./images/slide-arrow-next.png'>";
    $('.wapper-slider-1 .owl-carousel').owlCarousel({
        loop:true,
        margin:30, // marfin giữa các hình ảnh
        nav:true,  // Cho phép hiển thị pre/next button
        navText: [prevImage,nextImage],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        },
        dots: true,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    })
});
