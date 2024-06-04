let allBanners = JSON.parse(localStorage.getItem("banners"));
console.log(allBanners);

//only select banners listed for display on the kiosk  for central banner location
let banners = JSON.parse(localStorage.getItem("banners")).filter(
  (banner) => banner.banner_cat_id === 2
);
//console.log(banners);

//sort banners by selected order
let sorted = banners.sort(function (a, b) {
  const onA = a.visible;
  const onB = b.visible;
  if (onA < onB) {
    return -1;
  }
  if (onA > onB) {
    return 1;
  }
  // names must be equal
  return 0;
});
// console.log(sorted);

// single banner element
let bannerImage = document.getElementById("bannerImage");
// slideshow element
let sliderImage = document.getElementById("sliderImage");

// show banners - if more than 1, trigger the slideshow, else, only show one banner
if (banners.length > 1 ) {
  
  banners.forEach((banner) => {
    let bannerHTML = `
      <img class="slide-image" src="${imageURL + banner.image}" alt="${banner.image}">
             `;
    sliderImage.innerHTML += bannerHTML;
  });
  
  showSlides();

} else {

  banners.forEach((banner) => {
    let bannerHTML = `
      <img class="single-image" src="${imageURL + banner.image}" alt="${banner.image}">
            `;
    bannerImage.innerHTML += bannerHTML;
  });
  
  
}

// showSlides();
// slides function
function showSlides() {
// run the slider & dots
const sliders = document.querySelectorAll(".slider");
const interval = 5000;
const animDuration = 600;

for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");
    const sliderImgs = slider.querySelectorAll(".slide-image");

    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;

    // Creates dots and add listeners to them
    for (let i = 0; i < sliderImgs.length; ++i) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      dot.addEventListener("click", dotClick.bind(null, i), false);
    }

    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
      animateSlider();
      sliderImgs[0].style.left = "";
      intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);   

    /**
     * Animates images
     * @param {number} [nextImg] - index of next image to show
     * @param {boolean} [right = false] - animate to right
     */
    function animateSlider(nextImg, right) {
      if (!nextImg)
          nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

      --nextImg;
      sliderImgs[prevImg].style.animationName = "";

      if (!right) {
          sliderImgs[nextImg].style.animationName = "leftNext";
          sliderImgs[currImg].style.animationName = "leftCurr";
      } 
      else {
          sliderImgs[nextImg].style.animationName = "rightNext";
          sliderImgs[currImg].style.animationName = "rightCurr";
      }

      prevImg = currImg;
      currImg = nextImg;

      currDot = allDots[currImg];
      currDot.classList.add("active-dot");
      prevDot = allDots[prevImg];
      prevDot.classList.remove("active-dot");
    }

    /**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} num - index of clicked dot
     */
    function dotClick(num) {
      if (num === currImg)
          return false;

      clearTimeout(timeout);
      clearInterval(intrvl);

      if (num > currImg)
          animateSlider(num + 1);
      else
          animateSlider(num + 1, true);

      intrvl = setInterval(animateSlider, interval);
    }
}
}