let links = document.querySelectorAll("header nav li a");
let lis = Array.from(links);
let linksTwo = document.querySelectorAll("ul.shuffle li");
let list = Array.from(linksTwo);
let btn = document.querySelector(".toggle_menu");
  
  function screenRotate() {
    let landing = document.querySelector(".landing");
    
    if (landing.clientHeight < 350) {
      document.querySelector(".landing .text").classList.add("unic_phone");
    } else {
      if (document.querySelector(".landing .text").classList.contains("unic_phone")) {
        document.querySelector(".landing .text").classList.remove("unic_phone");
      }else{
        if (landing.clientHeight < 500) {
          document.querySelector(".landing .text").classList.add("unic");
        } else {
          if (document.querySelector(".landing .text").classList.contains("unic")) {
            document.querySelector(".landing .text").classList.remove("unic");
          }
        }
      }
    }
    
    
    
  }
  
window.addEventListener("resize",()=>{
  screenRotate();
});
window.addEventListener("load", () => {
  screenRotate();
});

btn.addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("show");
});

ActiveSwitch(lis);
ActiveSwitch(list);

function test(Dcate) {
  if (Dcate === "All") {
    clearClass(document.querySelectorAll(".portfolio .imgs_container .box"),["filter","filter_S"]);
  }else{
    document.querySelectorAll(".portfolio .imgs_container .box").forEach(cate => {
      if (cate.querySelector("p").dataset.category !== Dcate) {
        cate.classList.remove("filter", "filter_S");
        cate.classList.add("filter");
      } else {
        cate.classList.remove("filter", "filter_S");
        cate.classList.add("filter_S");
      }
    });
  }
}

function ActiveSwitch (ArrList) {
      
ArrList.forEach(el => {
        
  el.onclick = function () {
    if (el.parentElement.classList.contains("shuffle") === true) {
      test(el.textContent);
    }
          
    clearClass(ArrList,["active"]);
          
    if (el.classList.contains("active") !== true){
      el.classList.add("active");
    }
          
  }
        
});
}
      
function clearClass(liis,theClass) {
  liis.forEach(i => {
    theClass.forEach(c => {
      i.classList.remove(c);
    });
  });
}


let images = [`url("images/landing.jpg")`,`url("images/shuffle-06.jpg")`,`url("images/shuffle-03.jpg")`];
let next = document.querySelector(".landing .next");
let previous = document.querySelector(".landing .previous");
let listBul = document.querySelectorAll(".landing .bullets li");
let landingPage = document.querySelector(".landing");

window.onload = function () {
  check();
  bulletsActive();
}





  previous.onclick = function () {
    landingPage.style.backgroundImage = images[images.indexOf(landingPage.style.backgroundImage) - 1];
    check();
    bulletsActive();
  }
  next.onclick = function() {
    landingPage.style.backgroundImage = images[images.indexOf(landingPage.style.backgroundImage) + 1];
    check();
    bulletsActive();
  }


function check() {
  if (images.indexOf(landingPage.style.backgroundImage) == 0) {
    previous.classList.add("hide");
  }else{
    previous.classList.remove("hide");
  }
  
  if (images.indexOf(landingPage.style.backgroundImage) == (images.length - 1)) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
}

function bulletsActive() {
  listBul.forEach((bul,index) => {
    if (images.indexOf(landingPage.style.backgroundImage) == index) {
      clearClass(listBul,["active"]);
      bul.classList.add("active");
    }
  });
}