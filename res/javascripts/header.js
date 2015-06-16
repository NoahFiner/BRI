headerFixed = false;
var dots = "../../";
$(document).ready(function() {
  var number = Math.floor(Math.random()*12);
  $( window ).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#carousel-image-background').css("background-position-y", (-(Math.floor(scroll/5))-150)+"px");
    if(scroll >= 100) {
      if(headerFixed === false) {
        headerFixed = true;
        $('#header-top').addClass('fixed');
        $('#hr1').css("margin-top", "200px");
        window.scrollTo(0, 75);
      };
    }
    if(scroll < 75) {
      if(headerFixed) {
        headerFixed = false;
        $('#header-top').removeClass('fixed');
        $('#hr1').css("margin-top", "225px");
        window.scrollTo(0, 100);
      }
    }
  })

  $('#about-link, #about-dropdown').hover(function() {
    $('#about-dropdown').addClass('shown');
  }, function() {
    $('#about-dropdown').removeClass('shown');
  });

  $('#about-link').click(function()  {
    $('#about-dropdown').addClass('shown');
  });

  $('#links-link, #links-dropdown').hover(function() {
    $('#links-dropdown').addClass('shown');
  }, function() {
    $('#links-dropdown').removeClass('shown');
  });

  $('#links-link').click(function()  {
    $('#links-dropdown').addClass('shown');
  });

  $('#us-link, #us-dropdown').hover(function() {
    $('#us-dropdown').addClass('shown');
  }, function() {
    $('#us-dropdown').removeClass('shown');
  });

  $('#us-link').click(function()  {
    $('#us-dropdown').addClass('shown');
  });

  $('#services-link, #services-dropdown').hover(function() {
    $('#services-dropdown').addClass('shown');
  }, function() {
    $('#services-dropdown').removeClass('shown');
  });

  $('#services-link').click(function()  {
    $('#services-dropdown').addClass('shown');
  });

  $('#contact-link, #contact-dropdown').hover(function() {
    $('#contact-dropdown').addClass('shown');
  }, function() {
    $('#contact-dropdown').removeClass('shown');
  });

  $('#contact-link').click(function()  {
    $('#contact-dropdown').addClass('shown');
  });

  $('#equipment-link, #equipment-dropdown').hover(function() {
    $('#equipment-dropdown').addClass('shown');
  }, function() {
    $('#equipment-dropdown').removeClass('shown');
  });

  $('#equipment-link').click(function()  {
    $('#equipment-dropdown').addClass('shown');
  });
  setTimeout(function() {$('.intro-image-header').css("background-image", "url('"+dots+"res/images/inspirational/i"+number+".jpg')");}, 10);
})
