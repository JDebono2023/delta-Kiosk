// BRUNCH MODAL**********************************************************************
// **********************************************************************
const openBrunch = document.getElementById("open-brunch");
const brunchOverlay = document.getElementById("brunch-overlay");
const openBreakfast = document.getElementById("open-breakfast");
const breakfastOverlay = document.getElementById("breakfast-overlay");
const openDinner = document.getElementById("open-dinner");
const dinnerOverlay = document.getElementById("dinner-overlay");
const openDrinks = document.getElementById("open-drinks");
const drinksOverlay = document.getElementById("drinks-overlay");

const showBrunch = () => {
  brunchOverlay.style.display = "flex";
  breakfastOverlay.style.display = "none";
  dinnerOverlay.style.display = "none";
  drinksOverlay.style.display = "none";
  // startTimer();
};

openBrunch.addEventListener("click", showBrunch);

// BREAKFAST MODAL**********************************************************************
// **********************************************************************

const showBreakfast = () => {
  breakfastOverlay.style.display = "flex";
  brunchOverlay.style.display = "none";
  dinnerOverlay.style.display = "none";
  drinksOverlay.style.display = "none";
  startMenuTimer();
};

openBreakfast.addEventListener("click", showBreakfast);

// DINNER MODAL**********************************************************************
// **********************************************************************

const showDinner = () => {
  dinnerOverlay.style.display = "flex";
  brunchOverlay.style.display = "none";
  breakfastOverlay.style.display = "none";
  drinksOverlay.style.display = "none";
  startMenuTimer();
};

openDinner.addEventListener("click", showDinner);

// DRINKS MODAL**********************************************************************
// **********************************************************************

const showDrinks = () => {
  drinksOverlay.style.display = "flex";
  brunchOverlay.style.display = "none";
  breakfastOverlay.style.display = "none";
  dinnerOverlay.style.display = "none";
  startMenuTimer();
};

openDrinks.addEventListener("click", showDrinks);


// rest modal to start at brunch after 2 min of inactivity
function startMenuTimer() {
  let time;
  console.log('return timer started')
  // time = setTimeout(showBrunch, 15000);
  time = setTimeout(showBrunch, 240000);


  window.onload = resetMenuTimer;
  document.onmousemove = resetMenuTimer;
  document.keyup = resetMenuTimer;
  window.onscroll = resetMenuTimer;

  function resetMenuTimer() {
    clearTimeout(time);
    console.log('reset timer started')
    // time = setTimeout(showBrunch, 15000);
    time = setTimeout(showBrunch, 240000);
  }
};

// window.onload = startTimer();
