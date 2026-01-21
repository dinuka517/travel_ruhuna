const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let cards = document.querySelectorAll(".destination-card");

// Clone first & last
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

firstClone.classList.add("clone");
lastClone.classList.add("clone");

track.appendChild(firstClone);
track.insertBefore(lastClone, cards[0]);

cards = document.querySelectorAll(".destination-card");

const gap = 20;
let cardWidth = cards[0].offsetWidth + gap;

let index = 1;
let isAnimating = false;

// Initial position
track.style.transform = `translateX(${-cardWidth * index}px)`;

// Move function
function moveCarousel() {
    isAnimating = true;
    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(${-cardWidth * index}px)`;
}

// Next
nextBtn.addEventListener("click", () => {
    if (isAnimating) return;
    index++;
    moveCarousel();
});

// Prev
prevBtn.addEventListener("click", () => {
    if (isAnimating) return;
    index--;
    moveCarousel();
});

// 🔥 INSTANT LOOP FIX (no delay)
track.addEventListener("transitionend", () => {
    track.style.transition = "none";

    if (cards[index].classList.contains("clone")) {
        index = index === cards.length - 1 ? 1 : cards.length - 2;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                track.style.transform = `translateX(${-cardWidth * index}px)`;
            });
        });
    }

    isAnimating = false;
});

// Auto slide
setInterval(() => {
    nextBtn.click();
}, 6000);

// Resize fix
window.addEventListener("resize", () => {
    cardWidth = cards[0].offsetWidth + gap;
    track.style.transition = "none";
    track.style.transform = `translateX(${-cardWidth * index}px)`;
});
