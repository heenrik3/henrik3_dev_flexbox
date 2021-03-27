let themeBlack = 0;

document.title = 'Henrik3'.toUpperCase();

document.getElementById("popup-call").addEventListener("click", showPopup)
document.getElementById("close-popup").addEventListener("click", hidePopup)
document.getElementById("theme-chooser").addEventListener("click", changeTheme)
document.getElementById("cv").addEventListener("click", openCV)
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

function openCV() {
  window.open("https://resume.io/r/RnMWO7FlC");
}

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
    let white = '#fff'

    document.getElementById("body").style.color = "#333333"
    document.getElementById("body").style.backgroundColor = "#e2e1e0"

    document.getElementById("container").style.backgroundColor = white
    document.getElementById('logo').src = "drawables/logo-b.svg"
    document.getElementById('profile-picture').style.borderColor = "#333333"
    document.getElementById("text-box").style.backgroundColor = "#f0f0f0"

    let cards = document.querySelectorAll(".mdc-card")
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = white
        //cards[i].style.boxShadow = "0 2px 1px -1px rgba(#fff,.2), 0 1px 1px 0 rgba(#fff,.14), 0 1px 3px 0 rgba(#fff,.12)"
    }

    let box = document.querySelectorAll(".hobbies-box")
    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = white
        //box[i].style.boxShadow = "0 2px 1px -1px rgba(#fff,.2), 0 1px 1px 0 rgba(#fff,.14), 0 1px 3px 0 rgba(#fff,.12)"
    }

    document.getElementById("popup-content").style.backgroundColor = white
    document.getElementById("card").style.backgroundColor = white
    document.getElementById("go-up").style.color = 'gray'

    themeBlack = 0;
  }
  else {
    document.getElementById("body").style.color = "#eee"
    document.getElementById("body").style.backgroundColor = "#000"


    document.getElementById("container").style.backgroundColor = "#444"
    document.getElementById('logo').src = "drawables/logo-w.svg"
    document.getElementById('profile-picture').style.borderColor = "#eee"
    document.getElementById("text-box").style.backgroundColor = "gray"

    let cards = document.querySelectorAll(".mdc-card")
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "gray"
    }

    let box = document.querySelectorAll(".hobbies-box")
    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = "#444"
        box[i].style.boxShadow = "0 2px 1px -1px rgba(#fff,.2), 0 1px 1px 0 rgba(#fff,.14), 0 1px 3px 0 rgba(#fff,.12)"
    }

    document.getElementById("popup-content").style.backgroundColor = "gray"
    document.getElementById("card").style.backgroundColor = "darkgray"
    
    themeBlack = 1;
  }

}
