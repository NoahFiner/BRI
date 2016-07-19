var Carousel = function(url, num) {
  this.url = url;
  this.num = num;
  $('#image-preloader').css("background-image", "url('"+this.url+"')");
  this.h1 = '';
  this.text = '';
  this.setH1 = function(h1) {
    this.h1 = h1;
  };
  this.setText = function(text) {
    this.text = text;
  };
  this.add = function() {
    $('#carousel-text-div').append("<h1 class='carousel-text'>"+this.h1+"</h1>");
    $('#carousel-text-div').append("<p class='carousel-text'>"+this.text+"</p>");
    $('#carousel-image-background').css("background-image", "url('"+this.url+"')");
  };
};

var cars = [];
var carSelected = 1;

var selectCar = function(num) {
  $('.carousel-text').remove();
  cars[num - 1].add();
  $('.dot').removeClass('selected');
  $('#dot'+num).addClass('selected');
};

var slideShow = setInterval(function() {nextCar();}, 5000);

var nextCar = function() {
  carSelected += 1;
  if(carSelected === cars.length + 1) {
    carSelected = 1;
  }
  selectCar(carSelected);
};

$(document).ready(function() {
  car1 = new Carousel('res/images/car1.jpg', 1);
  car1.setH1("BRI");
  car1.setText("Welcome to the Boulder Radiologists, Inc. website.");
  cars.push(car1);
  car2 = new Carousel('res/images/car2.jpg', 2);
  car2.setH1("We Are");
  car2.setText("Devoted to optimizing your healthcare experience.");
  cars.push(car2);
  car3 = new Carousel('res/images/car3.jpg', 3);
  car3.setH1("Quality");
  car3.setText("We provide the highest level of care.");
  cars.push(car3);
  car4 = new Carousel('res/images/car4.jpg', 4);
  car4.setH1("MIC");
  car4.setText("This is the MIC hospital you should come here thanks u scrubs");
  cars.push(car4);
  car5 = new Carousel('res/images/car5.jpg', 5);
  car5.setH1("CMC");
  car5.setText("It's pronounced cuh-mum-mum-inity hawsh-pee-tilt");
  cars.push(car5);
  car6 = new Carousel('res/images/car6.jpg', 6);
  car6.setH1("Cancer");
  car6.setText("Try not to get this.");
  cars.push(car6);
  cars[0].add();
  $('#next-arr').click(function() {
    clearInterval(slideShow);
    nextCar();
  });
  $('#back-arr').click(function() {
    clearInterval(slideShow);
    carSelected -= 1;
    if(carSelected === 0) {
      carSelected = 3;
    }
    selectCar(carSelected);
  });
  $('.dot').click(function() {
    clearInterval(slideShow);
    var id = $(this).attr('id');
    carSelected = Math.floor(id[3]);
    selectCar(carSelected);
  });
});
