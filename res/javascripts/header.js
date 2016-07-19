headerFixed = false;
var dots = "../../";

$(document).ready(function() {
  $('.intro-image-header').css("background-position-y", "-50px");
  var number = Math.floor(Math.random()*37);
  $( window ).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 100) {
      if(headerFixed === false) {
        headerFixed = true;
        $('#header-top').addClass('fixed');
        // $('#hr1').css("margin-top", "200px");
        // window.scrollTo(0, 75);
      }
    }
    if(scroll >= 425) {
      $('#content-left').addClass("fixed");
    }
    if(scroll < 425) {
      $('#content-left').removeClass("fixed");
    }
    if(scroll < 100) {
      if(headerFixed) {
        headerFixed = false;
        $('#header-top').removeClass('fixed');
        // $('#hr1').css("margin-top", "225px");
        // window.scrollTo(0, 100);
      }
    }
  });

  var dropdownHideTimeout;
  var timeywimey = function(dropdownName) {
    clearTimeout(dropdownHideTimeout);
    dropdownHideTimeout = setTimeout(function() {$('#'+dropdownName+'-dropdown').removeClass("shown");}, 5000);
  };

  $('#about-link, #about-dropdown').hover(function() {
    $('#about-dropdown').addClass('shown');
    timeywimey('about');
  }, function() {
    $('#about-dropdown').removeClass('shown');
  });

  $('#about-link').click(function()  {
    $('#about-dropdown').addClass('shown');
    timeywimey('about');
  });

  $('#links-link, #links-dropdown').hover(function() {
    $('#links-dropdown').addClass('shown');
    timeywimey('links');
  }, function() {
    $('#links-dropdown').removeClass('shown');
  });

  $('#links-link').click(function()  {
    $('#links-dropdown').addClass('shown');
    timeywimey('links');
  });

  $('#us-link, #us-dropdown').hover(function() {
    $('#us-dropdown').addClass('shown');
    timeywimey('us');
  }, function() {
    $('#us-dropdown').removeClass('shown');
  });

  $('#us-link').click(function()  {
    $('#us-dropdown').addClass('shown');
    timeywimey('us');
  });

  $('#services-link, #services-dropdown').hover(function() {
    $('#services-dropdown').addClass('shown');
    timeywimey('services');
  }, function() {
    $('#services-dropdown').removeClass('shown');
  });

  $('#services-link').click(function()  {
    timeywimey('services');
    $('#services-dropdown').addClass('shown');
  });

  $('#contact-link, #contact-dropdown').hover(function() {
    $('#contact-dropdown').addClass('shown');
    timeywimey('contact');
  }, function() {
    $('#contact-dropdown').removeClass('shown');
  });

  $('#contact-link').click(function()  {
    $('#contact-dropdown').addClass('shown');
    timeywimey('contact');
  });

  $('#equipment-link, #equipment-dropdown').hover(function() {
    $('#equipment-dropdown').addClass('shown');
    timeywimey('equipment');
  }, function() {
    $('#equipment-dropdown').removeClass('shown');
  });

  $('#equipment-link').click(function()  {
    timeywimey('equipment');
    $('#equipment-dropdown').addClass('shown');
  });
  setTimeout(function() {$('.intro-image-header').css("background-image", "url('"+dots+"res/images/inspirational/i"+number+".jpg')");}, 10);
  if($('html').is(('.ie6, .ie7, .ie8'))) {
    ieWarning();
  }
});

var ieWarning = function() {
  alert("It appears you're using an outdated version of Internet Explorer to view this site. Unfortunately, Internet Explorer does not support a lot of this website's features. Try viewing this site on Google Chrome for a better experience.");
};



$(function() { // Smooth scrolling with the pages with the hashtag stuff. Idk why it works.
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});
