headerFixed = false;
var dots = "../../";

var compliments = ["Your smile is contagious.", "You have the best laugh.", "You're an awesome person.", "You're more helpful than you realize.", "Is that your picture next to charming in the dictionary?", "On a scale from 1 to 10, you're an 11.", "Your inside is even more beautiful than your outside.", "You're like sunshine on a rainy day.", "You bring out the best in other people.", "Being around you makes everything better.", "Jokes are funnier when you tell them.", "You're better than a triple-scoop ice cream cone. With sprinkles.", "You're inspiring.", "If you were a box of crayons, you'd be the big industrial name-brand one with a built-in sharpener.", "Our community is better because you're in it.", "You always know how to find that silver lining.", "Everyone gets knocked down sometimes; only people like you get back up again and keep going.", "You're more fun than bubble wrap.", "You're like a breath of fresh air.", "You're gorgeous... and that's the least interesting thing about you, too.", "When you make up your mind, nothing stands in your way.", "In high school I bet you were voted most likely to continue being awesome.", "You're even better than a unicorn, because you're real."];

$(document).ready(function() {
  $('.intro-image-header').css("background-position-y", "-50px");
  var number = Math.floor(Math.random()*37);
  $( window ).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#carousel-image-background').css("background-position-y", ((Math.floor(scroll/2))-150)+"px");
    $('.intro-image-header').css("background-position-y", ((Math.floor(scroll/2))-50)+"px");
    if(scroll >= 100) {
      if(headerFixed === false) {
        headerFixed = true;
        $('#header-top').addClass('fixed');
        // $('#hr1').css("margin-top", "200px");
        // window.scrollTo(0, 75);
      };
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
  })

  setTimeout(function() {
    $('#header-top-outer').addClass("background-img");
  }, 250);

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
  $("#compliment").html(compliments[Math.floor(Math.random()*compliments.length)]);
})


$(function() { // Smooth scrolling with the pages with the hashtag stuff. Idk why it works.
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
