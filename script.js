// Auto-hide Header on Scroll
let lastScrollY = window.scrollY;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.style.top = "-80px"; // Hide on scroll down
    } else {
        header.style.top = "0"; // Show on scroll up
    }
    lastScrollY = window.scrollY;
});

// Hamburger Menu Toggle
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Animations on Scroll
const sections = document.querySelectorAll(".animate");

const revealOnScroll = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let denyButton = document.querySelector("button[data-testid='deny-button']");
        if (denyButton) {
            denyButton.click();
        }
    }, 2000); // Wait 2 seconds for Calendly to load
});


// Add this to existing script.js

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Mobile Menu Close on Click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('show');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
