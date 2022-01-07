$(function(){
 'use strict';

//  banner slider
$('#banner').slick({
    slidesToShow:1 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    dots: true,
  });

  //  service slider
  $('.service-slider').slick({
    slidesToShow:4 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });

  //  client-slider
  $('.client-slider').slick({
    slidesToShow:7 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });

  $('.bog').slick({
    slidesToShow:7 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
  $('#handleCounter').handleCounter()

  $('.zoom_right_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});















  
});
