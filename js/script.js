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
// Scroll To Top Button


const topButton = document.createElement("button");

topButton.innerHTML = "<i class='fas fa-arrow-up'></i>";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563EB";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400)

        topButton.style.display = "block";

    else

        topButton.style.display = "none";

});

topButton.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// Fade In Animation


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

const hiddenElements = document.querySelectorAll(
    ".skill-card,.project-card,.timeline-item,.card"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});



// Contact Form Validation


const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            input.style.border = "2px solid red";

            valid = false;

        } else {

            input.style.border = "2px solid #14B8A6";

        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent.");

        form.reset();

    }

});


// Smooth Scrolling


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});



// Floating Profile Animation


const profile = document.querySelector(".profile-img");

let position = 0;

setInterval(() => {

    position = position === 0 ? -12 : 0;

    profile.style.transform =
        `translateY(${position}px)`;

}, 1800);

// Console Message

console.log("Portfolio Loaded Successfully!");

// Dark / Light Mode

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    themeButton.innerHTML =
    "<i class='fas fa-sun'></i>";

}

themeButton.addEventListener("click",function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeButton.innerHTML =
        "<i class='fas fa-sun'></i>";

        localStorage.setItem("theme","dark");

    }
    else{

        themeButton.innerHTML =
        "<i class='fas fa-moon'></i>";

        localStorage.setItem("theme","light");

    }

});

//Animated Skills Progress Bars

const skillSection = document.querySelector("#skills");

const bars = document.querySelectorAll(".progress-bar");

let skillAnimated = false;

window.addEventListener("scroll", () => {

    const sectionTop = skillSection.offsetTop - 300;

    if (window.scrollY > sectionTop && !skillAnimated) {

        bars.forEach(bar => {

            let width = bar.getAttribute("data-width");

            bar.style.width = width + "%";

        });

        skillAnimated = true;
    }

});

// Glass Navbar Scroll Effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(15,23,42,0.75)";
        navbar.style.backdropFilter = "blur(25px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
        navbar.style.padding = "10px 0";

    }
    else{

        navbar.style.background = "rgba(255,255,255,0.08)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 8px 32px rgba(0,0,0,.20)";
        navbar.style.padding = "15px 0";

    }

});
