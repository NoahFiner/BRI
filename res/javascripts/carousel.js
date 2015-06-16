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
  clearInterval(slideShow);
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
  car1 = new Carousel('res/images/car1.jpg', 1);
  car1.setH1("Lorem");
  car1.setText("Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit");
  cars.push(car1);
  car2 = new Carousel('res/images/car2.jpg', 2);
  car2.setH1("Ipsum");
  car2.setText("Herp derpsum perp dee derp, mer herderder. Sherp berp derpler, herpem serp tee perper merpus terp dee. Sherpus berps herpsum herpler.");
  cars.push(car2);
  car3 = new Carousel('res/images/car3.jpg', 3);
  car3.setH1("Derp");
  car3.setText("Terp tee herpsum derpus der nerpy herpderpsmer dee. Merpus derp terp ner sherlamer. Derps herpler serp derpus.");
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
})
