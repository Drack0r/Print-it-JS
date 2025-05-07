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

// Mise à jour de l'image du carousel
function updateCarouselImage() {
  bannerImage.setAttribute(
    "src",
    `./assets/images/slideshow/${slides[currentIndex].image}`
  );
}

// Mise à jour du texte du carousel
function updateCarouselText() {
  tagLine.innerHTML = slides[currentIndex].tagLine;
}

// Mise à jour des points de navigation du carousel
function updateCarouselDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

// Fonction pour mettre à jour l'affichage du carousel
function updateCarousel() {
  updateCarouselImage();
  updateCarouselText();
  updateCarouselDots();
}

// Manipulation de l'index pour naviguer dans le carousel
function increaseIndex() {
  currentIndex = (currentIndex + 1) % slides.length;
}

function decreaseIndex() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}

// Fonction pour aller à l'image suivante
function nextSlide() {
  increaseIndex();
  updateCarousel();
}

// Fonction pour aller à l'image précédente
function prevSlide() {
  decreaseIndex();
  updateCarousel();
}

// Ajout d'écouteurs d'événements sur les flèches de navigation
leftArrow.addEventListener("click", () => {
  prevSlide();
});

rightArrow.addEventListener("click", () => {
  nextSlide();
});

// Navigation avec les flèches du clavier
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    nextSlide();
  } else if (event.code === "ArrowLeft") {
    prevSlide();
  }
});

// Variable pour stocker l'ID de l'intervalle
let slideInterval;

// Fonction pour démarrer le défilement automatique
function startAutoSlide() {
  // Arrêt de tout intervalle existant pour éviter les doublons
  stopAutoSlide();

  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

// Fonction pour arrêter le défilement automatique
function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

// Pause du défilement automatique lors de l'interaction utilisateur
function handleUserInteraction() {
  stopAutoSlide();
  // Redémarrage après un délai d'inactivité
  setTimeout(startAutoSlide, 10000);
}

// Ajout des écouteurs pour mettre en pause le défilement
[leftArrow, rightArrow, dotsContainer].forEach((element) => {
  element.addEventListener("click", handleUserInteraction);
});

// Création dynamique des points de navigation
function createDots() {
  clearDotsContainer();
  slides.forEach((_, index) => {
    const dot = createDot(index);
    dotsContainer.appendChild(dot);
  });
}

// Nettoyage du conteneur de points
function clearDotsContainer() {
  dotsContainer.innerHTML = "";
}

// Création d'un point de navigation individuel
function createDot(index) {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  if (index === currentIndex) {
    dot.classList.add("dot_selected");
  }

  addDotClickListener(dot, index);
  return dot;
}

// Ajout d'un écouteur d'événement au point
function addDotClickListener(dot, index) {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
}

// Navigation vers une slide spécifique
function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}
