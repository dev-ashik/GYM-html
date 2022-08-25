// toggle button
const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav-link");

toggleBtn.onclick = () => {
  nav.classList.toggle("show-menu");
};

// close when click menu
function linkAction() {
  console.log("clicked");
  // const navMenu = document.querySelector(".nav");
  nav.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// change color Link
function colorLink() {
  if (navLink) {
    navLink.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
navLink.forEach((l) => l.addEventListener("click", colorLink));

// -- home-slider Swiper --
var swiper = new Swiper(".home-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// -- time-imgs Swiper --
var swiper = new Swiper(".time-imgs", {
  loop: true,
  spaceBetween: 0,
  grapCursor: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    }
  }
});


// change header Background when scroll
const header = document.querySelector(".header");

window.addEventListener('scroll' , ()=> {
  if(window.scrollY >= 70){
    header.classList.add('header-shadow');
  }else {
    header.classList.remove('header-shadow');
  }
})

// scroll to up 

const upBtn = document.querySelector('.up');
window.onscroll = () => {
  upBtn.classList.toggle('show', window.scrollY > 560);
}


upBtn.onclick = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: '0'
  })
}