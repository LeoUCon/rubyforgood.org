;(function ($) {
  'use strict'

  // mobile menu

  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '991'
  })

  // sticky

  var wind = $(window)
  var sticky = $('#sticky-header')
  wind.on('scroll', function () {
    var scroll = wind.scrollTop()
    if (scroll < 180) {
      sticky.removeClass('sticky')
    } else {
      sticky.addClass('sticky')
    }
  })

  // offcanvas menu

  $('.menu-tigger').on('click', function () {
    $('.offcanvas-menu,.offcanvas-overly').addClass('active')
    return false
  })
  $('.menu-close,.offcanvas-overly').on('click', function () {
    $('.offcanvas-menu,.offcanvas-overly').removeClass('active')
  })

  //   Slider activation

  function mainSlider() {
    var BasicSlider = $('.slider-active')
    BasicSlider.on('init', function () {
      var $firstAnimatingElements = $('.single-slider:first-child').find(
        '[data-animation]'
      )
      doAnimations($firstAnimatingElements)
    })
    BasicSlider.on('beforeChange', function (nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find('[data-animation]')
      doAnimations($animatingElements)
    })
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 20_000,
      fade: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="icofont-long-arrow-left"></i>Prev</button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="icofont-long-arrow-right"></i>Next</button>',
      arrows: false,
      dots: true,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    })

    function doAnimations(elements) {
      var animationEndEvents =
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
      elements.each(function () {
        var $this = $(this)
        var $animationDelay = $this.data('delay')
        var $animationType = 'animated ' + $this.data('animation')
        $this.css({
          animationDelay: $animationDelay,
          webkitAnimationDelay: $animationDelay
        })
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType)
        })
      })
    }
  }
  mainSlider()

  // slider-three
  // $(".slider-three-active").slick({
  //   infinite: true,
  //   autoplay: false,
  //   autoplaySpeed: 20000,
  //   speed: 400,
  //   dots: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow:
  //     '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
  //   nextArrow:
  //     '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });

  // isotope

  $('.portfolio-active').imagesLoaded(function () {
    var $grid = $('.portfolio-active').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth

        columnWidth: 1
      }
    })

    // filter items on button click

    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter')
      $grid.isotope({ filter: filterValue })
    })
  })

  //for menu active class

  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active')
    $(this).addClass('active')
    event.preventDefault()
  })

  // counterUp

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  })

  // testimonial

  $('.testimonial-active').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10_000,
    autoplaySpeed: 2000,
    margin: 10,
    autoHeight: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  // portfolio

  $('.portfolio-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth

      columnWidth: 1
    }
  })

  // popup

  $('.view').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  })

  $('.video-view').magnificPopup({
    type: 'iframe'
  })

  // clients

  $('.clients-active').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 2
      },
      320: {
        items: 2
      },
      480: {
        items: 3
      },
      767: {
        items: 4
      },
      991: {
        items: 4
      },
      1000: {
        items: 4
      }
    }
  })

  // $.scrollUp({
  //   scrollName: "scroll-up", // Element ID
  //   topDistance: "300", // Distance from top before showing element (px)
  //   topSpeed: 300, // Speed back to top (ms)
  //   animation: "fade", // Fade, slide, none
  //   animationInSpeed: 1000, // Animation in speed (ms)
  //   animationOutSpeed: 1000, // Animation out speed (ms)
  //   scrollText: '<span class="lnr lnr-chevron-up"></span>' // Text for element
  // });

  // if ($('#search-input').length > 0) {
  //   var sjs = SimpleJekyllSearch({
  //     searchInput: document.getElementById('search-input'),
  //     resultsContainer: document.getElementById('results-container'),
  //     json: '/search.json'
  //   });
  // }

  // project

  $('.project-slider-active').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10_000,
    autoplaySpeed: 2000,
    margin: 10,
    autoHeight: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})(jQuery)
