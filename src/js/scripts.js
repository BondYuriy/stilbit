$(document).ready(function() {
  /* menu */

  $('.navbar-toggler').click(function() {
    $(this).toggleClass('open');
  });

  $(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 60) {
        $('body').addClass('sticky-header');
      } else {
        $('body').removeClass('sticky-header');
      }
    });
  });

  /* carousel */

  $('.home-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.btn-toggle-mobile').click(function() {
    $('.portfolio-inside-list').toggleClass('show-list-text');
  });
});

new WOW().init();
