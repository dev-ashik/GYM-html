// toggle button
const nav = document.querySelector(".nav");
const toggleBtn = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav-link");

toggleBtn.onclick = () => {
    nav.classList.toggle("show-menu");
}

// close when click menu
function linkAction() {
    console.log("clicked")
    // const navMenu = document.querySelector(".nav");
    nav.classList.remove("show-menu");
}
navLink.forEach(n =>  n.addEventListener('click', linkAction));

// change color Link
function colorLink() {
    if(navLink) {
        navLink.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }
}
navLink.forEach(l => l.addEventListener('click', colorLink));