$(function() {
  "use strict";
  // Nice Scroll For Exam Sidebar
  $("body").niceScroll({
    cursorwidth: "12px",
    cursorcolor: "#2196F3",
    cursorborder: "1px solid #2196F3",
    cursorborderradius: 0,
    zindex: 99999,
    horizrailenabled: false
  });

  // Toggle Settings Box
  $(".settings-box .fa-gear").on("click", function() {
    $(this).toggleClass("fa-spin");
    $(this)
      .closest(".settings-box")
      .toggleClass("opened");
  });

  // Toggle App Colors
  $(".settings-box .colors-list li").on("click", function() {
    $("body")
      .removeClass()
      .addClass($(this).data("color") + "-theme");
  });

  // Go To Join Section
  $(".scroll-section").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $(".service-section").offset().top
      },
      1000
    );
  });

  // News Slick Slider
  $(".news-section .row .col-12").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    rtl: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //
  $(window).on("scroll", function() {
    if ($(window).width() > 991) {
      if ($(window).scrollTop() > 171) {
        $(".lower-nav").addClass("scrolling");
      } else {
        $(".lower-nav").removeClass("scrolling");
      }
    }
  });

  // Countdown
  function makeTimer() {
    var endTime = new Date("29 December 2019 9:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days span:eq(0)").html(days);
    $("#hours span:eq(0)").html(hours);
    $("#minutes span:eq(0)").html(minutes);
    $("#seconds span:eq(0)").html(seconds);
  }

  setInterval(function() {
    makeTimer();
  }, 1000);
});
