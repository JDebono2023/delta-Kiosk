// const imageURL = "https://team.eyelookmedia.net/cgmcms/storage/images/";

const URLVER = "https://team.eyelookmedia.net/DeltaLondonArmouries/api/versiondata";
// const URLVER = "http://127.0.0.1:8000/api/versiondata";
fetch(URLVER)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Success:", data);
    localStorage.setItem("serverVersion", JSON.stringify(data));
    localStorage.setItem("localVersion", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error:", error);
  });


const URLB = "https://team.eyelookmedia.net/DeltaLondonArmouries/api/bannerdata";
// const URLB = "http://127.0.0.1:8000/api/bannerdata";
fetch(URLB)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Success:", data);
    localStorage.setItem("banners", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const URLMEN = "https://team.eyelookmedia.net/DeltaLondonArmouries/api/menudata";
// const URLMEN = "http://127.0.0.1:8000/api/menudata";
fetch(URLMEN)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Success:", data);
    localStorage.setItem("menus", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const URLMAP = "https://team.eyelookmedia.net/DeltaLondonArmouries/api/mapdata";
// const URLMAP = "http://127.0.0.1:8000/api/mapdata";

fetch(URLMAP)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Success:", data);
    localStorage.setItem("maps", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const URLEV = "https://team.eyelookmedia.net/DeltaLondonArmouries/api/eventdata";
// const URLEV = "http://127.0.0.1:8000/api/eventdata";

fetch(URLEV)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Success:", data);
    localStorage.setItem("events", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error:", error);
  });


const URLATT = "https://team.eyelookmedia.net/DeltaLondonArmouries/api/attractionsdata";
// const URLATT = "http://127.0.0.1:8000/api/attractionsdata";
fetch(URLATT)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Success:", data);
    localStorage.setItem("attractions", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error:", error);
  });



// const URLATCAT = 'http://127.0.0.1:8000/api/attractcatdata'
const URLATCAT = 'https://team.eyelookmedia.net/DeltaLondonArmouries/api/attractcatdata'
fetch(URLATCAT)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log("Success:", data);
    localStorage.setItem("attractCat", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  



