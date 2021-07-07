$(document).ready(function(){
	$('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    touchDrag  : false,
    mouseDrag  : false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.new .owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText:["<span class='lnr lnr-chevron-left'></span>" ,"<span class='lnr lnr-chevron-right'></span>"],
    responsive:{
        0:{
            margin:15,
            items:2
        },
        600:{
            margin:30,
            items:2
        },
        1000:{
            margin:30,
            items:3
        }

    }
});


if ($(window).width() <= 767) {

    $(".addd_").addClass("owl-carousel");
    $(".addd_").removeClass("row");
    $('.addd_.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:false,
        touchDrag  : false,
        mouseDrag  : false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
        }
    })

};


});