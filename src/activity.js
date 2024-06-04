// page_id codes
    // ----------------------------------------
    // main nav - all pages
    // 1 - home
    // 2 - events
    // 3 - attractions
    // 4 - menus
    // 5 - auto return to home page
    // 6 - eyelook info modal

    // ----------------------------------------------------------
    // home page actions
    // 11 - more events nav to events page
    // 121 - lower level map
    // 122 - main level map
    // 123 - second level map
    // 124 - 20th floor map

    // ----------------------------------------------------------
    // attractions page actions
    // 31 - family freindly category
    // 32 - entertainment category
    // 33 - outdoors category

    // ----------------------------------------------------------
    // menu page actions
    // 41 - brunch menu button
    // 42 - breakfast menu button
    // 43 - dinner menu button
    // 44 - drink menu button

function writeAnalytics( page_id, action_id) {
  var formdata = new FormData();
    formdata.append("page_id", page_id);
    formdata.append("action_id", action_id);
  

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  // fetch("http://127.0.0.1:8000/api/analytics", requestOptions)
  fetch("https://team.eyelookmedia.net/DeltaLondonArmouries/api/analytics", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
