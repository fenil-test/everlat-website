$('.mycollection').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '60px',
    prevArrow: '.slider-pre',
    nextArrow: '.slider-pre',
    
  })
  $('.single-item').slick();

  // $('.mycollection1').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerPadding: '60px',
  //   prevArrow: '.slider-pre',
  //   nextArrow: '.slider-pre',
    
  // })
  // $('.single-item').slick();


    function initializeSlider() {
      if (!$(".mycollection1").hasClass("slick-initialized")
  ) {
        setTimeout(() => {
          $('.mycollection1').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            centerPadding: '10px',
            prevArrow: $('.cart-slider-btn'),
            nextArrow: $('.cart-slider-btn1'),
          });
        }, 2000);
      }
    }
    initializeSlider();
  

    
  