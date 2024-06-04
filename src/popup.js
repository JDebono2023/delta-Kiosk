"use strict";


// ELMMODAL**********************************************************************
// **********************************************************************
const openModalButtonE = document.getElementById("open-modalE");
const modalWindowOverlayE = document.getElementById("modal-overlayE");

const showModalWindowE = () => {
  modalWindowOverlayE.style.display = "flex";
  writeAnalytics(6, 0);
};

openModalButtonE.addEventListener("click", showModalWindowE);

const closeModalButtonE = document.getElementById("close-modalE");

const hideModalWindowE = () => {
  modalWindowOverlayE.style.display = "none";
};

//close modals: by click on X, click on screen, auto close after 1 min
closeModalButtonE.addEventListener("click", hideModalWindowE);

const hideModalWindowOnBlurE = (e) => {
  if (e.target === e.currentTarget) {
    hideModalWindowE();
  }
};

modalWindowOverlayE.addEventListener("click", hideModalWindowOnBlurE);

// setTimeout(hideModalWindowE, 15000);
setTimeout(hideModalWindowE, 60000);
