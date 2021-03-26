let title = 'Henrik3';

document.title = title.toUpperCase();

document.getElementById("popup-call").addEventListener("click", showPopup);
document.getElementById("popup").addEventListener("click", hidePopup);
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
