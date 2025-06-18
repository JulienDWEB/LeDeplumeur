const motPlayer1 = localStorage.getItem("mot");
const motHidden = document.querySelector("span");
const container = document.querySelector(".container");
const containerTentative = document.querySelector(".container-tentative");
const listLetter = document.querySelector(".list-letter");
const imagePoulet = document.querySelector(".image-poulet");
const restartBtn = document.querySelector(".restart");

console.log("Mot récupéré :", motPlayer1);
console.log(`Longueur du mot : ${motPlayer1.length} caractère(s)`);

// Si le mot est vide ou non défini, affiche un message d'erreur

if (!motPlayer1 || motPlayer1.trim() === "") {
  console.error("Aucun mot trouvé !");
}

//btn au click --> Rejouer Une partie (redirection vers page de démarrage)

restartBtn.addEventListener("click", () => {
  window.location.href = "/page1/index.html";
});

const motSplit = motPlayer1.split("");
const underscores = [];

// Création des underscores forEach va compter chaque lettre du mot
// Pour creer le nombre d'underscore correspondant au mot

motSplit.forEach(() => {
  const motUnderscore = document.createElement("div");
  motUnderscore.textContent = "_";
  motUnderscore.classList.add("case-lettre");
  container.appendChild(motUnderscore);
  underscores.push(motUnderscore);
});

console.log("underscores :", underscores);

// Initialisation d'un tableau pour les lettres ratées et du nombre de tentatives
let lettresRatees = [];
let tentative = 8;
// Ajout de l’écouteur d'événement sur le clavier
document.addEventListener("keydown", (event) => {
  const lettre = event.key.toLowerCase();
  console.log(`Touche pressée : ${lettre}`);
  let bonneLettre = false;
  // Vérifie si la touche pressée est retrouvee dans le mot
  motSplit.forEach((char, index) => {
    if (char.toLowerCase() === lettre && underscores[index]) {
      underscores[index].textContent = lettre;
      bonneLettre = true;
    }
  });

  // Si le mot ne contient pas la lettre pressée
  // alors on ajoute la lettre dans le tableau lettresRatees
  // et on diminue le nombre de tentatives

  if (!bonneLettre && !lettresRatees.includes(lettre)) {
    lettresRatees.push(lettre);
    tentative--;

    const letterFalseText = document.createElement("li");
    letterFalseText.textContent = lettre;
    listLetter.appendChild(letterFalseText);

    console.log(`❌ Lettre ratée : ${lettre}`);

    // 🔄 Mise à jour dynamique de l'image du poulet
    imagePoulet.src = `./img/poulet-${8 - tentative}.png`;
    console.log(imagePoulet.src);
  }
  // Met à jour l’affichage
  const displayTentative = document.querySelector(".tentative");
  displayTentative.textContent = `Plumes restantes : ${tentative}`;
  // Vérifie si toutes les lettres ont été trouvées
  const victoire = underscores.every((el) => el.textContent !== "_");

  // Si condition de victoire est remplie alors affiche le message de victoire
  if (victoire) {
    motHidden.textContent = `🎉 Bravo, Tu a trouver le mot : ${motPlayer1}, tu repars avec le poulet vivant ! 🐓`;
  }
  // Si tentative et egal a 0 alors "vous avez perdu"
  if (tentative === 0) {
    motHidden.textContent = `J'espere t'aime le blanc poulet ! , le mot etait : ${motPlayer1} Vous avez perdu !`;
  }
});
