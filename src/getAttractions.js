
// const imageURL = "http://127.0.0.1:8000/storage/images/";

// get all attraction categories
let allCategories = JSON.parse(localStorage.getItem("attractCat"));
console.log(allCategories);

// sort categories alphabetically
let sortedCategory = allCategories.sort(function (a, b) {
  var nameA = a.category; // ignore upper and lowercase
  var nameB = b.category; // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

// retrieve page elements for the content
let categoryLinks = document.getElementById("attractionNav");
let attractionItem = document.getElementById("attractionItem");

//create the category buttons
for (let category of sortedCategory) {
  let categoryLink = document.createElement("button");
  categoryLink.className = "categoryButton";
  categoryLink.id = `${category.id}`;
  categoryLink.innerHTML = `
           <span class="categoryButtonText">${category.category}</span>

        `;

  categoryLink.onclick = function () {
    let categoryToScrollTo = document.getElementById(`${category.id}`);

    //if a category button is selected, capture category page id with category ID
    let catId = `${3}`+category.id;
    console.log(catId);
    writeAnalytics(3, catId);

    clearSelected();

    categoryLink.classList.add("selected");

    // this is where we scroll to the category
      categoryToScrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  categoryLinks.appendChild(categoryLink);
}

function clearSelected() {
  let allCategoryLinks = document.getElementsByClassName("categoryButton");

  for (link of allCategoryLinks) {
    link.classList.remove("selected");
  }
}


// ******************************************  // 
// create category headers for each section
for (let category of sortedCategory) {
  let categoryElement = document.createElement(`div`);
  categoryElement.innerHTML = `
  
        <div id="${category.id}" class="attractionCategory">
          <img  src="${
            imageURL + category.image
          }" alt="${category.image}" />
        </div>
  `;

  attractionItem.appendChild(categoryElement);
  // console.log(categoryElement);

  
  // ******************************************  // 
  // get all attractions
  let allAttractions = JSON.parse(localStorage.getItem("attractions"));

  // sort attractions alphabetically
  let sortedAttraction = allAttractions.sort(function (a, b) {
    var nameA = a.attraction; // ignore upper and lowercase
    var nameB = b.attraction; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  // filter attractions by category
  let attractionByCategory = sortedAttraction.filter((a) =>
    a.attractcat_id == category.id );
  // console.log(attractionByCategory);

  // create the attraction item

  for (let a of attractionByCategory) {
    let attractionElement = document.createElement("div");
    // attractionElement.className = "vendors";
    attractionElement.id = `attr_${a.id}`;
    attractionElement.innerHTML = `
      <div class="attractionBox">
          <div class="boxUpper">
            <div class="boxHeader">
              <div class="boxName">${a.attraction}</div>
              <div class="boxDescription">${a.description}</div>
            </div>
            <div class="boxLogo">
              <img class="logoImg" " src="${imageURL}${a.image}"/></img>
            </div>
          </div>
          
          <div class="boxLower">
            <div class="boxDetails">
              <div>${a.address}<span class="textSpacer">|</span>${a.distance} away from hotel.</div>
              <div>${a.website}<span class="textSpacer"></span>${a.phone}</div>
            </div>
            <div id="boxQR" class="boxQR">
              <div id="qrcode${a.id}" value="${a.website}" class="qr"> </div>
            </div>
            
          </div>
      </div>      

        `;
    categoryElement.appendChild(attractionElement);

    let value = document.getElementById('qrcode'+ a.id).getAttribute('value');
    
    new QRCode(document.getElementById('qrcode'+ a.id), {
      text: value,
      width: 94,
      height: 94,
      colorDark: "#123368",
      colorLight: "#ffffff",
            //correctLevel: QRCode.CorrectLevel.H,
    });
    
  }
}




  
  
    
    
    
  
  
// });

