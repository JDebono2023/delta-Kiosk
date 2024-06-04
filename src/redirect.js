
//MAIN REDIRECT: set to 5 min timeout: 300 000
// MENU REDIRECT: set to 4 min timeout: 240 000 - MENUMODAL.JS
// MAP REDIRECT: set to 2 min timeout: 120 000 - GETMAPS.JS
// ELM MODAL REDIRECT: set to 1 min timeout: 60 000 - POPUP.JS
// DEV Testing set to 30 sec timeout: 30 000 or 15000

function startTimer() {
  let time;
  console.log('return timer main started')
  time = setTimeout(function () {
    window.location.href = "../main.html";
    writeAnalytics(5, 0);
  }, 300000);

  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.keyup = resetTimer;
  window.onscroll = resetTimer;

  function resetTimer() {
    clearTimeout(time);
    console.log('reset timer main started')
    time = setTimeout(function () {
      window.location.href = "../main.html";
      writeAnalytics(5, 0);
    }, 300000);
  }
};

window.onload = startTimer();

