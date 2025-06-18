/* Page de démarrage 
Le joueur peut entrer un mot entre 4 a 8 caractères Max
Ce mot va ensuite etre dans une variable, que je 
vais placer dans le Local Storage.

Pour charger la 2ieme page (page de jeu) 
et pouvoir recuperer le mot sans qui sois effacer
a cause du rechargement de page 

*/

// initialisation des balise dans des variable grace a querySelector

const motValue = document.querySelector('.motentre')
const pageJeu = document.querySelector('.btnpage2')
const showMdp = document.querySelector('span')

// Oblige la saisie d'etre en Majuscule

motValue.addEventListener('input', () => {
  motValue.value = motValue.value.toUpperCase();
});

// quand tu click sur showMdp alors affiche le motdepasse en changeant le type de l'input
// "Password" cache le mot ; "text" affiche le mot 

showMdp.addEventListener('click', () => {
   if (motValue.type === 'password')  {
       motValue.type = "text"
   }else {
    motValue.type = "password"
   }
})

/* Condition du Mot avec lenght + on stock le mot saisie dans localStorage puis redirection page2 */

pageJeu.addEventListener('click', () => {
    const motPlayer1 = motValue.value
    if (motPlayer1.length < 4 || motPlayer1.length > 8) {
      alert('Le mot doit contenir entre 4 et 8 lettres !');
    } else {
      localStorage.setItem('mot', motPlayer1);
      window.location.href = "./page2/index2.html";
    }
 console.log(`Mot saisi : ${motPlayer1}`);
    console.log(`Nombre de lettres : ${motPlayer1.length}`);
})



