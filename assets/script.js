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

// Flèches de navigation

// Récupérer les flèches dans le DOM
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

// Ajout d'event listener
leftArrow.addEventListener("click", (e) => {
  console.log("Clic sur la flèche de gauche");
});

rightArrow.addEventListener("click", (e) => {
  console.log("Clic sur la flèche de droite");
});
