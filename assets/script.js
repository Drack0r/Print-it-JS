const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments du DOM
const bannerImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

// Index de l'image actuelle
let currentIndex = 0;

// Fonction pour mettre à jours l'affichage du carousel
function updateCarousel() {
  // Mise à jour de l'image
  bannerImage.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[currentIndex].image}`
  );

  // Mise à jour du texte
  tagLine.innerHTML = slides[currentIndex].tagLine;

  // Mise à jour des points de navigation
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

// Fonction pour aller à l'image suivante
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
  console.log(`Vous passez à l'image ${currentIndex + 1}`);
}

// Fonction pour aller à l'image précédente
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
  console.log(`Vous passez à l'image ${currentIndex + 1}`);
}

// Ajout d'écouteurs d'événements sur les flèches
leftArrow.addEventListener("click", () => {
  console.log("Clic sur la flèche de gauche");
  prevSlide();
});

rightArrow.addEventListener("click", () => {
  console.log("Clic sur la flèche de droite");
  nextSlide();
});

// Création dynamique des points de navigation
function createDots() {
  dotsContainer.innerHTML = ""; // Nettoyage du conteneur

  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    }

    // Optionnel: ajouter un écouteur sur chaque point
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });

    dotsContainer.appendChild(dot);
  });
}

// Initialisation du carousel
createDots();
updateCarousel();
