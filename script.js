// JavaScript to toggle the mobile menu
document.getElementById('hamburger-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('mobile-menu').classList.toggle('open');
});




let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})






 filterSelection("bollywood");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gf-column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Highlight active button and current button
var btnContainer = document.getElementById("gf-BtnContainer");
var btns = btnContainer.getElementsByClassName("gf-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("gf-btn-active");
    current[0].className = current[0].className.replace(" gf-btn-active", "");
    this.className += " gf-btn-active";
  });
}



const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Optimisation des animations
        let lastScrollY = 0;
        let ticking = false;

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Ici vous pourriez ajouter d'autres animations en fonction du scroll
                    ticking = false;
                });

                ticking = true;
            }
        });

        // Chargement différé des éléments non critiques
        document.addEventListener('DOMContentLoaded', function () {
            if ('IntersectionObserver' in window) {
                const lazyElements = document.querySelectorAll('.lazy');

                const lazyObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const lazyElement = entry.target;
                            // Charger les éléments ici
                            lazyObserver.unobserve(lazyElement);
                        }
                    });
                });

                lazyElements.forEach((lazyElement) => {
                    lazyObserver.observe(lazyElement);
                });
            }
        });