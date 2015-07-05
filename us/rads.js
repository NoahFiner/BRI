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
"Dr. Blomquist is married to his beautiful wife Ashley and blessed with three lovely children.  He enjoys family time and the beauty of everything Colorado has to offer.  He tries to fit in time to get on his mountain bike, hike, golf and ski.");

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
"Dr. Bowles cannot get enough of the outdoors.  He loves spending time with his two kids and on his days off you will most often find him skiing, bicycling, camping, rafting or kayaking. He is a part-time jazz musician who has been advised to keep his day job.");


//#2 Richard Finer, MD
var r2 = new Rad(2, "Richard Finer, MD",
"images/r21.jpg",
"images/r22.jpg",
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
"images/r31.jpg",
"images/r32.jpg",
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
"images/r41.jpg",
"images/r42.jpg",
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
"images/r51.jpg",
"images/r52.jpg",
"University of Colorado",
"University of Colorado Health Sciences",
"Presbyterian Denver Hospital",
"Presbyterian Denver Hospital",
"Neuroradiology fellowship at Strong Memorial Hospital, Rochester NY",
"Neuroradiology, woman's imaging, and general diagnostic radiology.",
"Dr. King, outside of work, enjoys travelling and outdoor activities."); //TODO: spam this dude with emails to get his bio

//#6 Jie Mao, MD
var r6 = new Rad(6, "Jie Mao, MD",
"images/r61.jpg",
"images/r62.jpg",
"University of Florida",
"University of Florida",
"University of Colorado Health Sciences Center in general surgery",
"University of Colorado Health Sciences Center",
"University of Colorado Health Sciences Center in Vascular and Interventional Radiology",
"Interest are in noninvasive vascular imaging, uterine fibroid embolization for the treatment of symptomatic fibroids and endovascular graft placement for the treatment of abdominal aortic aneurysms, treating cancer in the liver with chemoembolization and performing minimally invasive breast biopsy, and talking with patients about interventional radiology procedures that may serve as an alternative to more invasive treatments.",
"Dr. Mao is married to Dr. David Gatof, a partner with Gastroenterology of the Rockies.   Together with their two children, they love the community of Boulder and all the outdoor activities offered here.  As a family, they can often be found biking, camping, hiking, and skiing together.");


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
"Dr. Mehling is so excited about relocating to Boulder from Minnesota.  He is looking forward to exploring everything about Boulder with his wife and two daughters from the bike trails to the hiking trails as well as finding a hockey league for his entire family.  In July 2014, he went on his first medical mission to Kijabi, Kenya in July 2014.");


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
"Dr. Nichols was honored to hold the position of Boulder Community Health Medical Staff President.  The longer he lives in Boulder, the more activities he discovers to enjoy with his three children.  From biking together, to skiing and tennis matches, he finds endless ways to fill his free time.");


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
"Dr. Nusser lives with his wife and daughter on a farm in Longmont.  After moving on from the Air Force, his love of the outdoors kept him in Colorado.  Together with his family, they love time on their farm, caring for their horses and all their animals.  He is an avid mountain biker and skier.");


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
"Dr. Oppenheimer has been the devoted president of Boulder Radiologists, Inc. for many years.  He enjoys all the time he spends with his wife and two children and was thrilled to recently welcome his first grandchild into the family.  He loves to take advantage of the wonderful things about living in Boulder, including bicycling, skiing, gardening, as well as relaxing in front of a movie.");

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
""); //TODO: get this dude's bio and stuff

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

var hidePhotos;
$(document).ready(function() {
  $('.nav-link').hover(function() {
    clearTimeout(hidePhotos);
    $(this).children().addClass("visible");
    var that = this;
    hidePhotos = setTimeout(function() {$(that).children().removeClass("visible")}, 2000);
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
