// Typing Animation


const typingText = document.getElementById("typing-text");

const words = [
    "ICT Undergraduate",
    "Web Developer",
    "Java Programmer",
    "UI/UX Enthusiast",
    "Software Engineering Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

            charIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

// Navbar Background on Scroll


window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.style.background = "#0F172A";
        navbar.style.transition = ".4s";

    } else {

        navbar.style.background = "rgba(15,23,42,.85)";

    }

});

// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
