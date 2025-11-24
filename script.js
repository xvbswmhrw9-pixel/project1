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
document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan semua elemen yang memiliki efek transisi cinematic
    const cinematicElements = document.querySelectorAll(
        '.cinematic-text, .cinematic-image, .cinematic-form'
    );

    // 2. Opsi untuk Intersection Observer
    // rootMargin: '0px 0px -10% 0px' berarti elemen akan dianggap terlihat
    // saat 10% dari bagian bawah viewport melewati elemen.
    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px 0px -10% 0px', 
        threshold: 0.1 // Memicu saat 10% elemen terlihat
    };

    // 3. Buat Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen sedang berpotongan dengan viewport
            if (entry.isIntersecting) {
                // Tambahkan kelas 'active' untuk memicu transisi di CSS
                entry.target.classList.add('active');
                
                // Opsional: Hentikan pengamatan setelah dianimasikan
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Mulai mengamati setiap elemen cinematic
    cinematicElements.forEach(element => {
        observer.observe(element);
    });

    // 5. Bonus: Logic untuk Form RSVP (hanya untuk mencegah refresh halaman)
    const rsvpForm = document.querySelector('.rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Wishes Sent! (In a real app, this data would be saved to a database.)');
            // Reset form setelah "terkirim"
            rsvpForm.reset(); 
        });
    }
});
