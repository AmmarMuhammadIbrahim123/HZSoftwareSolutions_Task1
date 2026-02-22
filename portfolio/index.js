// ===============================
// 1️⃣ MOBILE MENU TOGGLE
// ===============================

// Select menu button and navigation links
const menuBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

// Show / Hide menu when clicking menu button
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// ===============================
// 2️⃣ SMOOTH SCROLLING
// ===============================

// Select all navigation links
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function (event) {
        event.preventDefault(); // Stop default jump behavior

        // Get section ID from href
        const sectionId = this.getAttribute("href");
        const section = document.querySelector(sectionId);

        // Scroll smoothly to that section
        section.scrollIntoView({
            behavior: "smooth"
        });

        // Close mobile menu after click
        navMenu.classList.remove("active");
    });

});


// ===============================
// 3️⃣ SCROLL REVEAL EFFECT
// ===============================

// Select elements that should appear on scroll
const revealItems = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    revealItems.forEach(function (item) {

        const windowHeight = window.innerHeight;
        const itemTop = item.getBoundingClientRect().top;

        // If element is visible
        if (itemTop < windowHeight - 100) {
            item.classList.add("active");
        }

    });

});


// ===============================
// 4️⃣ CONTACT FORM
// ===============================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    alert("Message sent successfully!");

    form.reset(); // Clear form fields
});