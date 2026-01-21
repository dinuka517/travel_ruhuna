const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const cards = document.querySelectorAll('.destination-card');

let index = 0;

// Function to move the carousel
function moveCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
    track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Next Button Click
nextBtn.addEventListener('click', () => {
    // Prevent moving past the last card
    if (index < cards.length - 1) {
        index++;
        moveCarousel();
    } else {
        index = 0; // Loop back to start
        moveCarousel();
    }
});

// Previous Button Click
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        moveCarousel();
    } else {
        index = cards.length - 1; // Loop to end
        moveCarousel();
    }
});

// Automatic Slide (Optional)
setInterval(() => {
    nextBtn.click();
}, 6000); // Changes every 3 seconds
