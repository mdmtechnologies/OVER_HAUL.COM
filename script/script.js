const menu = document.querySelector("#menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Navbar background on scroll
window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
    header.style.background="#062b66";
}
else{
    header.style.background="#0d47a1";
}

});

// Smooth active menu
document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});