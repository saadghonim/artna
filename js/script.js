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
    margin:10,
    nav:true,
    navText:["<span class='lnr lnr-chevron-left'></span>" ,"<span class='lnr lnr-chevron-right'></span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }

    }
})



});