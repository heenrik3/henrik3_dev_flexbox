document.title = 'Henrik3'.toUpperCase();

class Site {
  constructor() {
    this.body = document.getElementById("body")
    this.container = document.getElementById("container")
    this.logo = document.getElementById("logo")
    this.profilePicture = document.getElementById("profile-picture")
    this.textBox = document.getElementById("text-box")
    this.cards = document.querySelectorAll(".mdc-card")
    this.box = document.querySelectorAll(".hobbies-box")
    this.popupContent = document.getElementById("popup-content")
    this.card = document.getElementById("card")
    this.goUp = document.getElementById("go-up")

  }
}

class Popup {
  constructor(open, close) {
    this.popup = document.getElementById("popup")
    this.open = document.getElementById(open)
    this.close = document.getElementById(close)

    this.open.addEventListener("click", showPopup)
    this.close.addEventListener("click", hidePopup)
  }
}

class Theme {
  constructor() {
    this.isBlack = false;
    this.themeChooser = document.getElementById("theme-chooser");

    this.themeChooser.addEventListener("click", changeTheme)
  }
}

let site = new Site()
let PopUp = new Popup("popup-open", "popup-close");
let theme = new Theme();


function showPopup() {
  PopUp.popup.style.zIndex= 1;
  PopUp.popup.style.opacity = 1;
  PopUp.popup.style.visibility = 'visible';
}

function hidePopup() {
  PopUp.popup.style.zIndex= -1;
  PopUp.popup.style.opacity = 0;
  PopUp.popup.style.visibility = 'invisible';
}

document.getElementById("linkedin").addEventListener("click", opensNewTab)
document.getElementById("resume").addEventListener("click", opensNewTab)


function opensNewTab() {
  let resume = "https://resume.io/r/RnMWO7FlC"
  let linkedin = "https://www.linkedin.com/in/henrik3-dev/"

  switch (this.id) {
    case "resume":
    window.open(resume);
    break;
    case "linkedin":
    window.open(linkedin);
    break;
    default: break;
  }
}


function changeTheme() {

  if (theme.isBlack) {
    goesWhite()
  }
  else {
    goesBlack();
  }

  function goesBlack() {
    site.body.style.color = "#eee"
    site.body.style.backgroundColor = "#000"
    site.container.style.backgroundColor = "#444"
    site.logo.src = "drawables/logo-w.png"
    site.profilePicture.style.borderColor = "#eee"
    site.textBox.style.backgroundColor = "gray"
    site.popupContent.style.backgroundColor = "gray"
    site.card.style.backgroundColor = "darkgray"

    for (var i = 0; i < site.cards.length; i++) {
      site.cards[i].style.backgroundColor = "gray"
    }

    for (var i = 0; i < site.box.length; i++) {
      site.box[i].style.backgroundColor = "#444"
    }

    theme.isBlack = true;
  }

  function goesWhite() {
    let white = '#fff'

    site.body.style.color = "#333333"
    site.body.style.backgroundColor = "#e2e1e0"
    site.container.style.backgroundColor = white
    site.logo.src = "drawables/logo-b.png"
    site.profilePicture.style.borderColor = "#333333"
    site.textBox.style.backgroundColor = "#f0f0f0"
    site.popupContent.style.backgroundColor = white
    site.card.style.backgroundColor = white
    site.goUp.style.color = 'gray'

    for (var i = 0; i < site.cards.length; i++) {
      site.cards[i].style.backgroundColor = white
    }

    for (var i = 0; i < site.box.length; i++) {
      site.box[i].style.backgroundColor = white
    }

    theme.isBlack = false;
  }
}
