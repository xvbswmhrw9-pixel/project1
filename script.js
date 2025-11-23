// --------------------- Transition Logic ---------------------
const openBtn = document.getElementById("openBtn");
const landing = document.getElementById("landing");
const mainMenu = document.getElementById("mainMenu");

openBtn.addEventListener("click", () => {
  landing.classList.remove("visible");
  landing.classList.add("hidden");

  setTimeout(() => {
    mainMenu.classList.remove("hidden");
    mainMenu.classList.add("visible");
  }, 900);
});

// --------------------- Dynamic Guest Name ---------------------
const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("to");

if (guest) {
  document.getElementById("guestName").textContent = `Dear ${guest},`;
}


// Dynamic guest name via URL: ?to=Name
(function(){
const params = new URLSearchParams(location.search);
const guest = params.get('to');
if(guest){
// insert a small guest greeting on top of first text if exists
const intro = document.querySelector('#bride .text .intro');
if(intro) intro.textContent = `Dear, ${decodeURIComponent(guest)} — We invite you to join our wedding`;
}
})();

// Scroll-trigger using IntersectionObserver with stagger
document.addEventListener('DOMContentLoaded', ()=>{
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
// add staggered class to children
const els = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right');
Array.from(els).forEach((el,i)=>{
setTimeout(()=> el.classList.add('show'), i*150);
});
observer.unobserve(entry.target);
}
});
},{threshold:0.18});

// observe each section
document.querySelectorAll('.page').forEach(section=> observer.observe(section));

// small parallax on scroll for polaroid
const polaroids = document.querySelectorAll('.polaroid img');
window.addEventListener('scroll', ()=>{
const sc = window.scrollY;
polaroids.forEach((img, idx)=>{
const depth = (idx%2===0?1:-1)*0.05;
img.style.transform = `translateY(${sc*depth}px)`;
});
});
});
