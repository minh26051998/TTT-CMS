var navItems = document.querySelectorAll(".nav-item");
var navLinks = document.querySelectorAll(".nav-link");

var currentIndex = 0;
navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", function() { 
        navLinks[currentIndex].style.fontWeight = 400;
        if(currentIndex != index) {
            currentIndex = index;
            navLinks[index].style.fontWeight = 900;
        }else {
            navLinks[index].style.fontWeight = 400;
            currentIndex = 0;
        }
    })
})


// var icon = document.getElementById("menu");
// var menu = document.getElementById("nav-show");
// icon.addEventListener("click", function() {
//     menu.classList.add("active");
// })

// var close = document.getElementById("close");
// close.addEventListener("click", function() {
//     menu.classList.remove("active");
// })

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "../register.html", true);
    xhttp.send();
  }
