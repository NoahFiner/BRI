var Carousel = function(url, num) {
  this.url = url;
  this.num = num;
  this.h1 = '';
  this.text = '';
  this.setH1 = function(h1) {
    this.h1 = h1;
  }
  this.setText = function(text) {
    this.text = text;
  }
  this.add = function() {
    $('#carousel-text-div').append("<h1 class='carousel-text'>"+this.h1+"</h1>");
    $('#carousel-text-div').append("<p class='carousel-text'>"+this.text+"</p>");
    $('#carousel-image-background').css("background-image", "url('"+this.url+"')");
  }
}

var cars = []; //vroom vroom (actually not because this is for the carousel)
var carSelected = 1;

var selectCar = function(num) {
  $('.carousel-text').remove();
  cars[num - 1].add();
  $('.dot').removeClass('selected');
  $('#dot'+num).addClass('selected');
}

var slideShow = setInterval(function() {nextCar()}, 5000);

var nextCar = function() {
  carSelected += 1;
  if(carSelected === cars.length + 1) {
    carSelected = 1;
  }
  selectCar(carSelected);
}

$(document).ready(function() {
  $( window ).scroll(function() {
    $('#carousel-image-background').css("background-position-y", (Math.floor($(window).scrollTop()/5)-150)+"px");
  })
  car1 = new Carousel('res/images/car1.jpg', 1);
  car1.setH1("Hello!");
  car1.setText("We are cool people!");
  cars.push(car1);
  car2 = new Carousel('res/images/car2.jpg', 2);
  car2.setH1("Yo");
  car2.setText("How cool can we be?<br>ULTRA COOL!!!!!!!!");
  cars.push(car2);
  car3 = new Carousel('res/images/car3.jpg', 3);
  car3.setH1("Penis");
  car3.setText("penis penis penis penis penis");
  cars.push(car3);
  cars[0].add();
  $('#next-arr').click(function() {
    nextCar();
  })
  $('#back-arr').click(function() {
    carSelected -= 1;
    if(carSelected === 0) {
      carSelected = 3;
    }
    selectCar(carSelected);
  })
  $('.dot').click(function() {
    var id = $(this).attr('id');
    carSelected = Math.floor(id[3]);
    selectCar(carSelected);
  })
  setTimeout(function() {$('#carousel-text-div').removeClass('unactive');}, 500);

  $('#about-link, #about-dropdown').hover(function() {
    $('#about-dropdown').addClass('shown');
  }, function() {
    $('#about-dropdown').removeClass('shown');
  });

  $('#links-link, #links-dropdown').hover(function() {
    $('#links-dropdown').addClass('shown');
  }, function() {
    $('#links-dropdown').removeClass('shown');
  });

  $('#us-link, #us-dropdown').hover(function() {
    $('#us-dropdown').addClass('shown');
  }, function() {
    $('#us-dropdown').removeClass('shown');
  });

  $('#services-link, #services-dropdown').hover(function() {
    $('#services-dropdown').addClass('shown');
  }, function() {
    $('#services-dropdown').removeClass('shown');
  });

  $('#contact-link, #contact-dropdown').hover(function() {
    $('#contact-dropdown').addClass('shown');
  }, function() {
    $('#contact-dropdown').removeClass('shown');
  });

  $('#equipment-link, #equipment-dropdown').hover(function() {
    $('#equipment-dropdown').addClass('shown');
  }, function() {
    $('#equipment-dropdown').removeClass('shown');
  });

})
