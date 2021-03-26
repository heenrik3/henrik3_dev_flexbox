let themeBlack = 0;

document.title = 'Henrik3'.toUpperCase();

document.getElementById("popup-call").addEventListener("click", showPopup)
document.getElementById("close-popup").addEventListener("click", hidePopup)
document.getElementById("theme-chooser").addEventListener("click", changeTheme)
/*
class whiteTheme {
  constructor() {

  }
}

class blackTheme {
  constructor() {

  }
}
*/


function showPopup() {
  document.getElementById("popup").style.zIndex= 1;
  document.getElementById("popup").style.opacity = 1;
  document.getElementById("popup").style.visibility = 'visible';
}

function hidePopup() {
  document.getElementById("popup").style.zIndex= -1;
  document.getElementById("popup").style.opacity = 0;
  document.getElementById("popup").style.visibility = 'invisible';
}

function changeTheme() {

  if (themeBlack) {
    document.getElementById('logo').src = "drawables/logo-b.svg"
    document.getElementById("container").style.backgroundColor = "#fff"
    document.getElementById("body").style.color = "#333333"
    document.getElementById("body").style.backgroundColor = "#e2e1e0"
    themeBlack = 0;
  }
  else {
    document.getElementById('logo').src = "drawables/logo-w.svg"
    document.getElementById("container").style.backgroundColor = "#444"
    document.getElementById("body").style.color = "#eee"
    document.getElementById("body").style.backgroundColor = "#000"
    themeBlack = 1;
  }

}
