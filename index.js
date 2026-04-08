const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Toggle class 'active' pada hamburger dan menu
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Opsional: Tutup menu jika salah satu link diklik
document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));


   // 1. Ambil elemen h1
        const judul = document.getElementById('judulBunyi');
        
        // 2. Buat objek audio (ganti 'suara.mp3' dengan nama file Anda)
        const audio = new Audio('audio.wav');

        // 3. Tambahkan event listener saat diklik
        judul.addEventListener('click', function() {
            audio.play(); // Mainkan suara
        });