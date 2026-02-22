// ================= SELECT DOM ELEMENTS =================

// Select all gallery images
const items = document.querySelectorAll('.item img');

// Lightbox elements
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Filter buttons
const filterButtons = document.querySelectorAll('.filters button');

// Store current image index for navigation
let currentIndex = 0;

// Convert NodeList into array for easier index handling
let images = Array.from(items);


// ================= OPEN LIGHTBOX =================

// Add click event to each image
items.forEach((img, index) => {
    img.addEventListener('click', () => {

        // Show lightbox
        lightbox.style.display = 'flex';

        // Set clicked image inside lightbox
        lightboxImg.src = img.src;

        // Store index for next/previous navigation
        currentIndex = index;
    });
});


// ================= CLOSE LIGHTBOX =================

closeBtn.onclick = () => {
    lightbox.style.display = 'none';
};


// ================= NEXT IMAGE =================

nextBtn.onclick = () => {

    // Move to next image (loop back if last)
    currentIndex = (currentIndex + 1) % images.length;

    // Update lightbox image
    lightboxImg.src = images[currentIndex].src;
};


// ================= PREVIOUS IMAGE =================

prevBtn.onclick = () => {

    // Move to previous image (loop to end if first)
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    // Update lightbox image
    lightboxImg.src = images[currentIndex].src;
};


// ================= FILTER FUNCTIONALITY =================

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        // Remove active class from previous button
        document.querySelector('.active').classList.remove('active');

        // Add active class to clicked button
        button.classList.add('active');

        // Get selected filter category
        const filter = button.getAttribute('data-filter');

        // Loop through all gallery items
        document.querySelectorAll('.item').forEach(item => {

            // Show items that match filter
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } 
            // Hide others
            else {
                item.style.display = 'none';
            }

        });
    });

});