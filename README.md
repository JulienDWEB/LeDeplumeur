# Le Déplumer

## Présentation

**Le Déplumer** est un jeu web inspiré du célèbre jeu du pendu, mais ici, c'est un poulet qui perd ses plumes à chaque mauvaise réponse ! Le but est de deviner un mot secret avant que le poulet ne soit complètement déplumé.

## Fonctionnement

### 1. Déroulement du jeu

- **Joueur 1** saisit un mot secret (entre 4 et 8 lettres) sur la page d'accueil. Ce mot est caché pour éviter que le joueur 2 ne le voie.
- Le mot est stocké dans le `localStorage` du navigateur.
- **Joueur 2** accède à la page de jeu et doit deviner le mot en proposant des lettres via le clavier.
- À chaque mauvaise lettre, le poulet perd une plume (l'image change).
- Le joueur gagne s'il trouve toutes les lettres avant que le poulet n'ait perdu toutes ses plumes (8 tentatives).
- Le joueur perd si toutes les plumes tombent avant d'avoir trouvé le mot.

### 2. Structure du projet

- `page1/index.html` : Page d'accueil, saisie du mot secret par le joueur 1.
- `page1/js.js` : Script de gestion de la saisie et du stockage du mot.
- `page1/page2/index2.html` : Page de jeu pour le joueur 2.
- `page1/page2/js.js` : Script principal du jeu (gestion des tentatives, affichage, logique de victoire/défaite).
- `page1/page2/img/` : Images du poulet et des plumes pour l'animation.
- `page1/_page1.scss`, `page1/page2/_page2.scss` : Styles SCSS pour chaque page.

### 3. Règles du jeu

- Le mot doit contenir entre 4 et 8 lettres.
- Les lettres déjà proposées sont affichées.
- Le nombre de tentatives restantes est affiché.
- Un bouton "Rejouer" permet de recommencer une partie.

## Installation et utilisation

1. Clone le dépôt ou télécharge les fichiers.
2. Ouvre `page1/index.html` dans ton navigateur (tu peux utiliser Live Server pour faciliter le développement).
3. Suis les instructions à l'écran !

## Technologies utilisées

- HTML5
- CSS3 / SCSS
- JavaScript (Vanilla)

## Auteur

Projet réalisé par [Sette Julien].

---

Amuse-toi bien avec Le Déplumer ! 🐔
