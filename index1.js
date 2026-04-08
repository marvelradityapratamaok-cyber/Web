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
