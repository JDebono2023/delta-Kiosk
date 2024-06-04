let eventData = JSON.parse(localStorage.getItem("events"));
console.log(eventData);

// select by display done in the api
// sort by date done in the api
let eventItem = document.getElementById("eventContent");

let n = 5;
let maxItems = eventData.slice(0, n);
// console.log(maxItems);

if (eventData.length == 0) {

  let noContent = document.createElement(`div`);
  noContent.innerHTML = `
  
  <div class="eventBoxMain" >
  <div class="eventName">Events Coming Soon</div>
  <div class="eventBoxBorder"></div>
</div>  
  `;

  eventItem.appendChild(noContent);
  
} else {
  // let eventItem = document.getElementById("eventContent");
maxItems.forEach((e) => {
 
  let date = new Date(e.starts_at);
  let hours = date.getHours();
  let hh = (hours % 12) || 12;
  let mm = date.getMinutes();
  let session = hours >= 12 ? "pm":"am";
  mm = (mm < 10) ? "0" + mm : mm;
  
  let eventHTML = `
        <div class="eventBoxMain" >
            <div class="eventName">${e.event_name}</div>
            <div class="eventDetails">
              <div>${hh + ":" + mm +  " " + session}<span class="detailSpacer">|</span>${e.room}<span class="detailSpacer">|</span>${e.floor}</div>
            </div>
            <div class="eventBoxBorder"></div>
        </div>        
           `;
  eventItem.innerHTML += eventHTML;
});
}




