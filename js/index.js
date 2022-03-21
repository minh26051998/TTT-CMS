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


// var pageSpreads = document.querySelectorAll(".page-spread");
// var manageHovers = document.querySelectorAll(".manage-hover");
// var spreadActive = document.getElementsByClassName("page-spread");

// var active = true;
// pageSpreads.forEach((pageSpread, index) => {
//     pageSpread.addEventListener("click", function() {
//         // manageHovers[index].style.display = 'block';
//         if(active) {
//             manageHovers[index].classList.add("active");
//             active = !active;
//         }else {
//             manageHovers[index].classList.remove("active");
//             active = !active;
//         }
//     })
// });
