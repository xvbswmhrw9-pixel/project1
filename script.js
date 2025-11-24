document.addEventListener('DOMContentLoaded', function() {
    
    // --- FUNGSI 1: MENGAMBIL NAMA TAMU DARI URL ---
    function getGuestNameFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        // Diasumsikan parameter nama tamu adalah 'to' (contoh: ?to=Bapak+Budi)
        const guestName = urlParams.get('to');
        const guestNameDisplay = document.getElementById('guestName');
        
        if (guestName) {
            // Tampilkan nama tamu jika ada
            guestNameDisplay.innerHTML = `Kepada Yth.<br><strong>${decodeURIComponent(guestName.replace(/\+/g, ' '))}</strong>`;
        } else {
            // Jika tidak ada parameter nama, tampilkan umum
            guestNameDisplay.innerHTML = 'Kepada Tamu Undangan';
        }
    }
    
    getGuestNameFromUrl();


    // ... (Kode getGuestNameFromUrl() yang sudah ada) ...

    // --- FUNGSI 2: MENGELOLA LANDING PAGE ---
    const landingPage = document.getElementById('landing');
    const openBtn = document.getElementById('openBtn');
    const mainContent = document.getElementById('mainContent'); // Ambil elemen main content
    
    // Pastikan landing page terlihat saat DOM diload
    if (landingPage) {
        landingPage.classList.add('visible');
    }

    openBtn.addEventListener('click', function() {
        // 1. Hilangkan landing page dengan transisi (opacity)
        landingPage.classList.remove('visible');
        
        // 2. Tampilkan konten utama dan aktifkan scroll
        mainContent.style.display = 'block'; 
        document.body.style.overflowY = 'scroll';

        // 3. Setelah transisi landing page selesai, sembunyikan sepenuhnya elemen landing
        setTimeout(() => {
            landingPage.style.display = 'none';
        }, 800); // 800ms sesuai dengan transisi CSS

        // 4. Setelah membuka halaman, kita panggil ulang observer
        // Karena konten utama awalnya tersembunyi, Intersection Observer mungkin tidak bekerja
        // dengan baik. Kita panggil ulang pengamatan setelah konten ditampilkan.
        revealElements.forEach(element => {
            observer.observe(element);
        });

        // Opsional: Langsung mainkan musik/audio jika ada
        // playBackgroundMusic(); 
    });
    
    // Matikan scroll saat di landing page
    document.body.style.overflowY = 'hidden';

// ... (Kode Intersection Observer dan Form RSVP lainnya) ...


    // --- FUNGSI 3: CINEMATIC SCROLL ANIMATION (REVEAL) ---
    
    // 1. Dapatkan semua elemen yang akan dianimasikan
    const revealElements = document.querySelectorAll(
        '.reveal, .reveal-right, .reveal-left, .cinematic-text, .cinematic-image, .cinematic-form'
    );

    // 2. Opsi untuk Intersection Observer
    const observerOptions = {
        root: null, // Menggunakan viewport
        rootMargin: '0px 0px -15% 0px', // Animasi akan dipicu saat elemen masuk ke 85% bagian atas viewport
        threshold: 0.1 // Memicu saat 10% elemen terlihat
    };

    // 3. Buat Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'active' untuk memicu transisi
                entry.target.classList.add('active');
                
                // Hentikan pengamatan setelah dianimasikan
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Mulai mengamati setiap elemen
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    // --- FUNGSI 4: FORM RSVP ---
    const rsvpForm = document.querySelector('.rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Blessing submitted! (Integration with backend is required for actual data saving.)');
            rsvpForm.reset(); 
        });
    }
});
