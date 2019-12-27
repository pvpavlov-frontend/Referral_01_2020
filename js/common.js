$(document).ready(function () {
  $('#countdown-container').ClassyCountdown({

    // until: liftoffTime,
    padZeroes: true,

    end: (new Date('2020-01-20T23:59:59')).getTime(),
    now: $.now(),
    labels: true,

    labelsOptions: {
      lang: {
        days: 'дней',
        hours: 'часов',
        minutes: 'минут',
        seconds: 'секунд'
      },
      style: 'font-size: 16px; line-height: 30px; color: #31150D; vertical-align: top;'
    },

    style: {
      // element: '',
      labels: true,
      days: {
        gauge: {
          thickness: 0.03,
          bgColor: '#F9F8F6',
          fgColor: '#F9A700',
          lineCap: 'butt'
        },
        textCSS: ''
      },
      hours: {
        gauge: {
          thickness: 0.03,
          bgColor: '#F9F8F6',
          fgColor: '#F9A700',
          lineCap: 'butt'
        },
        textCSS: ''
      },
      minutes: {
        gauge: {
          thickness: 0.03,
          bgColor: '#F9F8F6',
          fgColor: '#F9A700',
          lineCap: 'butt'
        },
        textCSS: ''
      },
      seconds: {
        gauge: {
          thickness: 0.03,
          bgColor: '#F9F8F6',
          fgColor: '#F9A700',
          lineCap: 'butt'
        },
        textCSS: ''
      }
    },
    onEndCallback: function () { }
  });

  // video
  $('.cover_video').click(function (e) {
    e.preventDefault();
    let url = $(this).data('url');
    $(this).hide();
    $(this).parent().find('iframe').attr('src', url + '?autoplay=1');
    $(this).parent().find('.embed-responsive-16by9').addClass('active');
  });

  $('.slick-slider').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
        }
      }
    ],
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
  });

  $('button.default-btn').click(function () {
    let url = $(this).data('url');
    if (url.length > 0) {
      window.open(
        url,
        '_blank'
      );
    }
  });
  // scroll to section
  $(".go_scroll").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      // setTimeout(function () { $(div).scrollTop(0) }, 500); 
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
        400,
        'linear', 
      
      function () {
        window.location.hash = hash;
      });
    }
  });
  

});