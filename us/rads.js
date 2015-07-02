var Rad = function(num, name, photo1, photo2, college, medschool, internship, residency, fellowship, aoi, bio) {
  this.num = num;
  this.name = name;
  this.p1url = photo1;
  this.p2url = photo2;
  this.college = college;
  this.residency = residency;
  this.medschool = medschool;
  this.internship = internship;
  this.fellowship = fellowship;
  this.aoi = aoi;
  this.bio = bio;
}

//#0: Matthew H. Blomquist, MD
var r0 = new Rad(0, "Matthew H. Blomquist, MD",
"images/r01.jpg",
"images/r02.jpg",
"Wheaton College, Illinois",
"Boston University School of Medicine",
"The Graduate Hospital (University of Pennsylvania)",
"Pennsylvania State University Hospital",
"Body Imaging fellowship at University of Colorado School of Medicine",
"General Radiology with an interest in body imaging.",
"Dr. Blomquist is married to his beautiful and loving wife Ashley, and his interests outside of work include mountain biking, hiking, golfing, alpine skiing, and otherwise enjoying the beauty of the Colorado outdoors.");

//#1: Charles Bowles, MD
var r1 = new Rad(1, "Charles Bowles, MD",
"images/r11.jpg",
"images/r12.jpg",
"Stanford University",
"Vanderbilt University",
"",
"University of Colorado Heatlh Sciences Center",
"Cardiovascular and interventional radiology at Stanford University Hospital",
"Interests include treatment of varicose veins (RF, laser), vertebroplasty or kyphoplasty for compression fractures, uterine fibroid embolization, and percutaneous image-guided ablation of tumors.",
"Dr. Bowles has two children and enjoys skiing, bicycling, camping, rafting and kayaking. Dr. Bowles is a part-time jazz musician who has been advised to keep his day job.");


//#2 Richard Finer, MD
var r2 = new Rad(2, "Richard Finer, MD",
"images/r21.jpg",
"images/r22.jpg",
"University of Cincinnati",
"Ohio State University College of Medicine",
"Alton Ochnser Medical Foundation Hospital in New Orleans",
"Alton Ochnser Medical Foundation Hospital in New Orleans",
"Body imaging, including CT/MRI/Ultrasound at the University of California, Irvine",
"Interests include CT, MRI and ultrasound along with women's imaging. e has extra experience in image-guided biopsies and drainage procedures using CT and ultrasound. He is the head of CT imaging.",
"Outside of work Dr. Finer enjoys biking, hiking, snowboarding, tennis, and spending time with his wife and son." //TODO: make less crappy
);


//#3 Robert E. Helgans, MD
var r3 = new Rad(3, "Robert E. Helgans, MD",
"images/r31.jpg",
"images/r32.jpg",
"University of Pennsylvania",
"Robert Wood Johnson Medical School",
"University of Colorado Health Science Center",
"University of Colorado Health Science Center",
"Body imaging at University of Colorado Health Science Center",
"Oncologic and transplant imaging, with an ephasis on liver MRI and CT-guided procedures. He is head of ultrasound.",
"Dr. Helgans is an American College of Radiology certified radiologist now practicing general Diagnostic Imaging at Foothills Hospital.  He is very happy to be a part of the Medical Staff and the Boulder community." //TODO: Ask for a bio that doesn't suck
);


//#4 Gustavo L. Isuani, MD
var r4 = new Rad(4, "Gustavo L. Isuani, MD",
"images/r41.jpg",
"images/r42.jpg",
"", //TODO: Get college
"Baylor College of Medicine",
"Baylor College of Medicine",
"Pennsylvania", //TODO: Pennsylvania isn't a college.
"Neuroradiology at University of Maryland Medical System",
"General radiology and neuroradiology.", //TODO: get non-boring aoi's
"Gus is fluent in Spanish and is learning French. Gus, his wife and daughter enjoy hiking and traveling, but most particularly they love the scenery and weather in Colorado, which reminds them of their hometown of Mendoza, Argentina."
);

//#5 Paul D. King, MD
var r5 = new Rad(5, "Paul D. King, MD",
"images/r51.jpg",
"images/r52.jpg",
"",
"",
"",
"",
"",
"",
"",
""); //TODO: get this dude's bio and stuff

//#6 Jie Mao, MD
var r6 = new Rad(6, "Jie Mao, MD",
"images/r61.jpg",
"images/r62.jpg",
"University of Florida",
"University of Florida",
"University of Colorado Health Sciences Center in general surgery",
"University of Colorado Health Sciences Center",
"University of Colorado Health Sciences Center in vascular and interventional radiology",
"Interest are in noninvasive vascular imaging, uterine fibroid embolization for the treatment of symptomatic fibroids and endovascular graft placement for the treatment of abdominal aortic aneurysms, treating cancer in the liver with chemoembolization and performing minimally invasive breast biopsy, and talking with patients about interventional radiology procedures that may serve as an alternative to more invasive treatments.",
"Dr. Mao is married to Dr. David Gatof, who is a practicing member of Gastroenterology of the Rockies.  They both love the community of Boulder, and enjoy many outdoor activities such as biking, camping, hiking, and skiing.");


//#7 Jason A. Mehling, MD, MHA
var r7 = new Rad(7, "Jason A. Mehling, MD, MHA",
"images/r71.jpg",
"images/r72.jpg",
"University of Minnesota",
"University of Minnesota Medical School",
"University of Minnesota for surgery",
"University of Colorado Health and Science Center",
"University of Colorado Health Sciences Center in vascular and interventional radiology",
"All aspects of vascular interventional radiology with special interest in oncologic treatments",
"I enjoy being a father to my two daughters. I am an avid cyclist (road and mountain). I coach my daughter's hockey team and play on an adult league hockey team. I also enjoy cooking and traveling. I recently went on my first medical mission to Kijabi, Kenya in July 2014. I look forward to joining Boulder Radiologists in January, 2016");


//#8 Roger D. Nichols, MD
var r8 = new Rad(8, "Roger D. Nichols, MD",
"images/r81.jpg",
"images/r82.jpg",
"University of Iowa",
"University of Iowa College of Medicine",
"University of Nebraska Medical Center",
"University of Nebraska Medical Center",
"In MRI at Johns Hopkins Hospital",
"Interests include imagery of the injured athlete, diagnosis and treatment of cardiovascular disease, and oncology care. He is head of MRI at Boulder Community Health.",
"Dr. Nichols has three wonderful children. His outdoor hobbies include cycling, skiing, and watching his children play soccer.");


//#9 Christopher A. Nusser, MD
var r9 = new Rad(9, "Christopher A. Nusser, MD",
"images/r91.jpg",
"images/r92.jpg",
"United States Airforce Academy in Garden City, Kansas",
"University of Kansas Medical School",
"University of Oklahoma Health Science Center",
"University of Oklahoma Health Science Center",
"United States Airforce Academy fellowship in musculoskeletal radiology and cross-sectional imaging.",
"He gained addition experience in musculoskeletal radiology with an emphasis in sports injuries. In addition, he has experience and skill in a wide range of diagnostic radiology, including image guided biopsies.",
"Dr. Nusser is married and has one daughter.  Their love of the outdoors is what kept them in Colorado after separating from the AF.  Hobbies include skiing, mountain biking, fly-fishing, hiking, farming, horses, and music.");


//#10 David A. Oppenheimer, MD
var r10 = new Rad(10, "David A. Oppenheimer, MD",
"images/r101",
"images/r102",
"Northwestern University",
"Northwestern University Medical School",
"",
"Stanford University",
"Research fellowship Stanford University",
"He is president of Boulder Radiologists, Inc. He practices all facets of diagnostic imaging. He has a special interest in woman's imaging, including mammography, minimally invasive breast biopsy, bone density testing (DEXA), and breast MRI. He is certified by the American College of Radiology, FDA, and the International Society of Clinical Densitometry.  He has served and currently serves on hospital committees and is the medical director of the Imaging Department.",
"His hobbies include bicycling, skiing, gardening, and watching movies. He is married and has 2 children and has just become a grandfather.");

//#11 Nicholas Wickersham, MD
var r11 = new Rad(11, "Nicholas Wickersham, MD",
"images/r111.jpg",
"images/r112.jpg",
"",
"",
"",
"",
"",
"",
"",
""); //TODO: spam this dude with emails to get his bio

var rads = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11];


setInfo = function(num) {
  rad = rads[num];
  $('#right-background-image').css("background-image", "url('images/r"+rad.num+"2.jpg')");
  $('#profile-image-main').css('background-image', "url('images/r"+rad.num+"1.jpg')");
  $('#name-title').html(rad.name);
  $('#bio').html(rad.bio);
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
  $('#aoi-p').html("<span class='info-fixed'>Areas of Interest: </span>"+rad.aoi);
  if(rad.aoi === "") {
    $('#aoi-p').html("");
  }
}


$(document).ready(function() {
  $('.nav-link').hover(function() {
    $(this).children().addClass("visible");
  }, function() {
    $(this).children().removeClass("visible");
  });
  $('.nav-link').click(function() {
    $('.nav-link').removeClass("selected");
    $(this).addClass('selected');
  })
  $('.left-nav-us').scroll(function() {
    var scrollio = $('.left-nav-us').scrollTop();
    $('.photo-preview').css("margin-top", -100-scrollio+"px");
  })

  setInfo(0);

  //oh boy, here's clicking each radiologist. :(

  $('#link-0').click(function() {
    setInfo(0);
  });
  $('#link-1').click(function() {
    setInfo(1);
  });
  $('#link-2').click(function() {
    setInfo(2);
  });
  $('#link-3').click(function() {
    setInfo(3);
  });
  $('#link-4').click(function() {
    setInfo(4);
  });
  $('#link-5').click(function() {
    setInfo(5);
  });
  $('#link-6').click(function() {
    setInfo(6);
  });
  $('#link-7').click(function() {
    setInfo(7);
  });
  $('#link-8').click(function() {
    setInfo(8);
  });
  $('#link-9').click(function() {
    setInfo(9);
  });
  $('#link-10').click(function() {
    setInfo(10);
  });
  $('#link-11').click(function() {
    setInfo(11);
  });


});
