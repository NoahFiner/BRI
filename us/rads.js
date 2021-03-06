var Rad = function(num, name, photo1, college, medschool, internship, residency, fellowship, aoi, bio) {
  this.num = num;
  this.name = name;
  this.p1url = photo1;
  this.college = college;
  this.residency = residency;
  this.medschool = medschool;
  this.internship = internship;
  this.fellowship = fellowship;
  this.aoi = aoi;
  this.bio = bio;
  $("#image-preloader").css("background-image", "url('images/r"+this.num+".jpg')");
};

//#0: Matthew H. Blomquist, MD
var r0 = new Rad(0, "Matthew H. Blomquist, MD",
"images/r0.jpg",
"Wheaton College, Illinois",
"Boston University School of Medicine",
"The Graduate Hospital (Philadelphia, PA)",
"Pennsylvania State University Hospital",
"Body Imaging fellowship at University of Colorado School of Medicine",
"General Radiology with an interest in body imaging.",
"Dr. Blomquist and his wife are blessed with three lovely children. He enjoys family time and the beauty of everything Colorado has to offer. In his free time, he enjoys mountain biking, hiking, golfing, and skiing.");

var r1 = new Rad(10, "Thomas Fahrbach, MD",
"images/r10.jpg",
"",
"",
"",
"",
"",
"",
"");


//#2 Richard Finer, MD
var r2 = new Rad(2, "Richard Finer, MD",
"images/r2.jpg",
"University of Cincinnati",
"Ohio State University College of Medicine",
"Alton Ochnser Medical Foundation Hospital in New Orleans",
"Alton Ochnser Medical Foundation Hospital in New Orleans",
"Body imaging, including CT/MRI/Ultrasound at the University of California, Irvine",
"Interests include CT, MRI and ultrasound along with women's imaging. He has extra experience in image-guided biopsies and drainage procedures using CT and ultrasound. He is the head of CT imaging.",
"There is so much about Boulder that Dr. Finer appreciates.  Time with his wife and son biking and hiking in the mountains, snowboarding, and soaking up so many more days of sunshine than he ever experienced growing up in the midwest."
);


//#3 Robert E. Helgans, MD
var r3 = new Rad(3, "Robert E. Helgans, MD",
"images/r3.jpg",
"University of Pennsylvania",
"Robert Wood Johnson Medical School",
"University of Colorado Health Science Center",
"University of Colorado Health Science Center",
"Body imaging at University of Colorado Health Science Center",
"Oncologic and transplant imaging, with an ephasis on liver MRI and CT-guided procedures. He is head of ultrasound.",
"Dr. Helgans loves rising early in the morning to bike up flagstaff road before his busy family starts their day.  He feels lucky to come home sweaty from his early morning rides to his three energetic kids and wife who makes running their home seems so easy.  They all enjoy being out together in nature."
);


//#4 Gustavo L. Isuani, MD
var r4 = new Rad(4, "Gustavo L. Isuani, MD",
"images/r4.jpg",
"", //TODO: Get college
"Baylor College of Medicine",
"Baylor College of Medicine",
"Pennsylvania", //TODO: Pennsylvania isn't a college.
"Neuroradiology at University of Maryland Medical System",
"General radiology and neuroradiology.", //TODO: get non-boring aoi's
"Dr. Isuani is fluent in Spanish and is learning French.  He enjoys hiking and traveling with his wife and daughter, but most particularly they all love the scenery and weather in Colorado, which reminds them of their hometown of Mendoza, Argentina."
);

//#5 Paul D. King, MD
var r5 = new Rad(5, "Paul D. King, MD",
"images/r5.jpg",
"University of Colorado",
"University of Colorado Health Sciences",
"Presbyterian Denver Hospital",
"Presbyterian Denver Hospital",
"Neuroradiology fellowship at Strong Memorial Hospital, Rochester NY",
"Neuroradiology, woman's imaging, and general diagnostic radiology.",
"Dr. King lives happily in his empty nest with wife Clarissa and dog Wesley David. He enjoys outdoor activities, family time and travel.");

//#6 Jie Mao, MD
var r6 = new Rad(6, "Jie Mao, MD",
"images/r6.jpg",
"University of Florida",
"University of Florida",
"University of Colorado Health Sciences Center in general surgery",
"University of Colorado Health Sciences Center",
"University of Colorado Health Sciences Center in Vascular and Interventional Radiology",
"Interests are in noninvasive vascular imaging, uterine fibroid embolization for the treatment of symptomatic fibroids and endovascular graft placement for the treatment of abdominal aortic aneurysms, treating cancer in the liver with chemoembolization and performing minimally invasive breast biopsy, and talking with patients about interventional radiology procedures that may serve as an alternative to more invasive treatments.",
"Dr. Mao is married to Dr. David Gatof, a partner with Gastroenterology of the Rockies.   Together with their two children, they love the community of Boulder and all the outdoor activities offered here.  As a family, they can often be found biking, camping, hiking, and skiing together.");


//#7 Jason A. Mehling, MD, MHA
var r7 = new Rad(10, "Maher Salahi, MD",
"images/r10.jpg",
"",
"",
"",
"",
"",
"",
"");


//#8 Roger D. Nichols, MD
var r8 = new Rad(8, "Roger D. Nichols, MD",
"images/r8.jpg",
"University of Iowa",
"University of Iowa College of Medicine",
"University of Nebraska Medical Center",
"University of Nebraska Medical Center",
"MRI at Johns Hopkins Hospital",
"Interests include imagery of the injured athlete, diagnosis and treatment of cardiovascular disease, and oncology care. He is head of MRI at Boulder Community Health.",
"Dr. Nichols was honored to hold the position of Boulder Community Health Medical Staff President.  The longer he lives in Boulder, the more activities he discovers to enjoy with his three children.  From biking together, to skiing and tennis matches, he finds endless ways to fill his free time.");


//#9 Christopher A. Nusser, MD
var r9 = new Rad(9, "Christopher A. Nusser, MD",
"images/r9.jpg",
"United States Airforce Academy in Colorado Springs",
"University of Kansas Medical School",
"",
"University of Oklahoma Health Science Center",
"United States Airforce Academy additional training in musculoskeletal radiology and cross-sectional imaging.",
"He has additional experience in musculoskeletal radiology with an emphasis in sports injuries, along with experience and skill in a wide range of diagnostic radiology, including image guided biopsies.",
"Dr. Nusser lives with his wife and daughter on a farm in Longmont.  After moving on from the Air Force, his love of the outdoors kept him in Colorado.  Together with his family, they love time on their farm, caring for their horses and all their animals.  He is an avid mountain biker and skier.");


//#10 David A. Oppenheimer, MD
var r10 = new Rad(10, "David A. Oppenheimer, MD",
"images/r101",
"Northwestern University",
"Northwestern University Medical School",
"",
"Stanford University",
"Research fellowship Stanford University",
"He is president of Boulder Radiologists, Inc. He practices all facets of diagnostic imaging. He has a special interest in woman's imaging, including mammography, minimally invasive breast biopsy, bone density testing (DEXA), and breast MRI. He is certified by the American College of Radiology, FDA, and the International Society of Clinical Densitometry.  He has served and currently serves on hospital committees and is the medical director of the Imaging Department.",
"Dr. Oppenheimer has been the devoted president of Boulder Radiologists, Inc. for many years.  He enjoys all the time he spends with his wife and two children and was thrilled to recently welcome his first grandchild into the family.  He loves to take advantage of the wonderful things about living in Boulder, including bicycling, skiing, gardening, as well as relaxing in front of a movie.");

//#11 Nicholas Wickersham, MD
var r11 = new Rad(11, "Nicholas Wickersham, MD",
"images/r11.jpg",
"",
"",
"",
"",
"",
"",
"",
""); //TODO: get this dude's bio and stuff

var rads = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11];


setInfo = function(num) {
  rad = rads[num];
  $('#profile-image-main').css('background-image', "url('images/r"+rad.num+".jpg')");
  $('#name-title').html(rad.name);
  $('#college-p').html("<span class='info-fixed'>College: </span>"+rad.college);
  if(rad.college === "") {
    $('#college-p').html("");
  }
  $('#medschool-p').html("<span class='info-fixed'>Medical School: </span>"+rad.medschool);
  if(rad.medschool === "") {
    $('#medschool-p').html("");
  }
  $('#internship-p').html("<span class='info-fixed'>Internship: </span>"+rad.internship);
  if(rad.internship === "") {
    $('#internship-p').html("");
  }
  $('#residency-p').html("<span class='info-fixed'>Residency: </span>"+rad.residency);
  if(rad.residency === "") {
    $('#residency-p').html("");
  }
  $('#fellowship-p').html("<span class='info-fixed'>Fellowship: </span>"+rad.fellowship);
  if(rad.fellowship === "") {
    $('#fellowship-p').html("");
  }
  $('#bio').html("<span class='info-fixed'>Personal Interests: </span>"+rad.bio);
  if(rad.bio === "") {
    $('#bio').html("");
  }
  var aoilength = rad.aoi.length;
  $('#aoi-p').css("font-size", "15px");
  if(aoilength < 500) {
    $('#aoi-p').css("font-size", "15px");
  }
  if(aoilength < 250) {
    $('#aoi-p').css("font-size", "25px");
  }
  if(aoilength < 100) {
    $('#aoi-p').css("font-size", "30px");
  }
  $('#aoi-p').html(rad.aoi);
  if(rad.aoi === "") {
    $('#aoi-p').html("");
  }
};

var hidePhotos;
$(document).ready(function() {
  for(var i = 0; i < 12; i++) {
    $("#pp-"+i).css("top", ((50*i)-50)+"px");
  }
  $('.nav-link').hover(function() {
    var id = $(this).attr("id").toString();
    var num = id.substr(5);
    clearTimeout(hidePhotos);
    $("#pp-"+num).addClass("visible");
    var that = this;
    hidePhotos = setTimeout(function() {$("#pp-"+num).removeClass("visible");}, 4000);
  }, function() {
    var id = $(this).attr("id").toString();
    var num = id.substr(5);
    $("#pp-"+num).removeClass("visible");
  });
  $('.nav-link').click(function() {
    $('.nav-link').removeClass("selected");
    $(this).addClass('selected');
  });
  $('.left-nav-us').scroll(function() {
    var scrollio = $('.left-nav-us').scrollTop();
    $('.photo-preview').css("margin-top", -100-scrollio+"px");
  });

  setInfo(0);

  $(".nav-link").click(function() {
    var id = $(this).attr("id");
    setInfo(parseInt(id.substr(5, id.length)));
  });
});
