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

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const options = {
  threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

reveals.forEach(el => observer.observe(el));
