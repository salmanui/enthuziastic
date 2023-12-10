const carouselInner = document.querySelector(".carousel-inner");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;

// Function to show next card in the carousel
const showNextCard = () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
};

// Function to show previous card in the carousel
const showPrevCard = () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
};

// Function to update the carousel position
const updateCarousel = () => {
  const width = window.innerWidth <= 768;
  const translateValue = width
    ? -currentIndex * 80 + "%"
    : -currentIndex * 10 + "%";
  carouselInner.style.transform = `translateX(${translateValue})`;
};

// Event listeners for carousel navigation
document.addEventListener("DOMContentLoaded", updateCarousel);
document
  .querySelector(".carousel-next")
  .addEventListener("click", showNextCard);
document
  .querySelector(".carousel-prev")
  .addEventListener("click", showPrevCard);
