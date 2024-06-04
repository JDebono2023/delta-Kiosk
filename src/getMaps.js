// const imageURL = "http://127.0.0.1:8000/storage/images/";
// const imageURL = "https://team.eyelookmedia.net/DeltaLondonArmouries/storage/images/"

// render the floor Maps 
let allMaps = JSON.parse(localStorage.getItem("maps"));
console.log(allMaps);


let mapImage = document.getElementById("mapImage");
allMaps.forEach((map) => {
  let mapHTML = `
        
  <div id="${map.floor_id}" class="${map.floor_id == 2 ? 'activeMap' : 'map' }">
  <img src="${
    imageURL + map.image
  }" alt="${map.image}"/>
</div>
        
            `;
  mapImage.innerHTML += mapHTML;
});

//  display maps buttons  
function openMap(mapName, buttonName) {
  var i;
  var x = document.getElementsByClassName("map");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("activeMap");
    // x[i].style.display = "none";
  }
  document.getElementById(mapName).classList.add("activeMap");
  // document.getElementById(mapName).style.display = "block";


  var b = document.getElementsByClassName("tabItem");
  for (i = 0; i < b.length; i++) {
    // b[i].style.backgroundColor = "#141c4c";
    b[i].classList.remove("activeTab");
  }
  document.getElementById(buttonName).classList.add("activeTab");
  // document.getElementById(buttonName).style.backgroundColor = "#1B4B95";
  
  // after 2 min set tabs and map back to main map
  // setTimeout(mapReturn, 15000);
  setTimeout(mapReturn, 120000);
}

function mapReturn(){
  openMap(2, 6)
}


