// Nav Bar Collapsing while Scrolling
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (this.prevScrollPos > currentScrollPos) {
    this.document.getElementById("navbar").style.top = "0";
  } else {
    if (window.innerWidth > 426) {
      this.document.getElementById("navbar").style.top = "-70px";
    } else {
      this.document.getElementById("navbar").style.top = "-160px";
    }
  }
  this.prevScrollPos = currentScrollPos;
};

// Remove functionality of submit button.
document.getElementById("submit").addEventListener("click", event => {
  event.preventDefault();
});
