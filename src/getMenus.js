// const imageURL = "http://127.0.0.1:8000/storage/images/";
// const imageURL = "https://team.eyelookmedia.net/DeltaLondonArmouries/storage/images/"

let brunch = JSON.parse(localStorage.getItem("menus")).filter((f) => f.type_id == 1);
console.log(brunch)

// BRUNCH MENU SLIDESHOW**********************************************************************
//
let brunchMenu = document.getElementById("brunch");
let brunchDots = document.getElementById("dotBrunch");
brunch.forEach((menus) => {

  let brunchDiv = document.createElement("div");
  brunchDiv.id = `${menus.type_id}`;
  brunchDiv.className = "mySlides fade slides1";
  brunchMenu.appendChild(brunchDiv);
  
  let brunchImg = document.createElement("img");
  brunchImg.style.width = "100%";
  brunchImg.src = imageURL + menus.image;
  brunchDiv.appendChild(brunchImg);

  let dot1 = document.createElement("div");
    dot1.className = "dot dots1";
    brunchDots.appendChild(dot1);
  
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides1");
  let dots = document.getElementsByClassName("dots1");

  if (n > slides.length) {slideIndex = 1}    

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// BREAKFAST MENU SLIDESHOW**********************************************************************
//

let breakfastMenus = JSON.parse(localStorage.getItem("menus")).filter((f) => f.type_id == 2);
console.log(breakfastMenus)

let breakfastDiv = document.getElementById("breakfast");
let breakfastDots = document.getElementById("dotBreakfast");
breakfastMenus.forEach((menus) => {

  let breakDiv = document.createElement("div");
  breakDiv.id = `${menus.type_id}`;
  breakDiv.className = "mySlides fade slides2";
  breakfastDiv.appendChild(breakDiv);
  
  let breakImg = document.createElement("img");
  breakImg.style.width = "100%";
  breakImg.src = imageURL + menus.image;
  breakDiv.appendChild(breakImg);

  let p0 = document.createElement("div");
    p0.className = "dot dots2";
    breakfastDots.appendChild(p0);

  
});

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("slides2");
  let dots2 = document.getElementsByClassName("dots2");
// console.log(slides2)
  if (n > slides2.length) {slideIndex2 = 1}    

  if (n < 1) {slideIndex2 = slides2.length}

  for (i = 0; i < slides2.length; i++) {
    
    slides2[i].style.display = "none";  
  }

  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}

// DINNER MENU SLIDESHOW**********************************************************************
//
let dinnerMenus = JSON.parse(localStorage.getItem("menus")).filter((f) => f.type_id == 3);
console.log(dinnerMenus)

let dinnerMenuDiv = document.getElementById("dinner");
let dinnerDots = document.getElementById("dotDinner");

dinnerMenus.forEach((menus) => {

  let dinnerDiv = document.createElement("div");
  dinnerDiv.id = `${menus.type_id}`;
  dinnerDiv.className = "mySlides fade slides3";
  dinnerMenuDiv.appendChild(dinnerDiv);
  
  let dinnerImg = document.createElement("img");
  dinnerImg.style.width = "100%";
  dinnerImg.src = imageURL + menus.image;
  dinnerDiv.appendChild(dinnerImg);

  let dd = document.createElement("div");
    dd.className = "dot dots3";
    dinnerDots.appendChild(dd);
  
});

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("slides3");
  let dots3 = document.getElementsByClassName("dots3");

  if (n > slides3.length) {slideIndex3 = 1}    

  if (n < 1) {slideIndex3 = slides3.length}

  for (i = 0; i < slides3.length; i++) {
    
    slides3[i].style.display = "none";  
  }

  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active";
}

// DRINKS MENU SLIDESHOW**********************************************************************
//
let drinkMenus = JSON.parse(localStorage.getItem("menus")).filter((f) => f.type_id == 4);
console.log(drinkMenus)

let drinkMenuDiv = document.getElementById("drinks");
let drinkDots = document.getElementById("dotDrinks");

drinkMenus.forEach((menus) => {

  let drinkDiv = document.createElement("div");
  drinkDiv.id = `${menus.type_id}`;
  drinkDiv.className = "mySlides fade slides4";
  drinkMenuDiv.appendChild(drinkDiv);
  
  let drinkImg = document.createElement("img");
  drinkImg.style.width = "100%";
  drinkImg.style.height = "1203px";
  drinkImg.src = imageURL + menus.image;
  drinkDiv.appendChild(drinkImg);

  let drd = document.createElement("div");
    drd.className = "dot dots4";
    drinkDots.appendChild(drd);
  
});

let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("slides4");
  let dots4 = document.getElementsByClassName("dots4");

  if (n > slides4.length) {slideIndex4 = 1}    

  if (n < 1) {slideIndex4 = slides4.length}

  for (i = 0; i < slides4.length; i++) {
    
    slides4[i].style.display = "none";  
  }

  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";  
  dots4[slideIndex4-1].className += " active";
}