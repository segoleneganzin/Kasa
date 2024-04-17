# Kasa

## Développez une application Web avec React et React Router

Projet 11 du parcours "**Développeur d'application** - JavaScript React" d'OpenClassrooms

### 📚 Contexte

En tant que développeuse front-end freelance, **Kasa** m'a recruté pour développer sa nouvelle plateforme web.<br><br>
Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

### 🧍‍♂️ La demande client

Refonte totale du site actuel pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. <br>
L'équipe back-end n'étant pas encore formée, les données sont stockées dans un fichier JSON

### 💡 Outils et technos

[![My Skills](https://skillicons.dev/icons?i=html,react,sass,vite,figma,github,pnpm)](https://skillicons.dev)

### ⚙ Contraintes techniques

**➡ React** <br>

<ul>
  <li>Aucune librairie externe</li>
  <li>Découpage en composants modulaires et réutilisables</li>
  <li>Un composant par fichier</li>
  <li>Structure logique des différents fichiers</li>
  <li>Utilisation des props entre les composants</li>
  <li>Utilisation du state dans les composants quand c'est nécessaire</li>
  <li>Gestion des événements</li>
  <li>Utilisation de composants fonctionnels</li>
</ul><br>

**➡ React Router** <br>

<ul>
  <li>Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement</li>
  <li>Il existe une page par route</li>
  <li>La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées</li>
  <li>La logique du routeur est réunie dans un seul fichier</li>
  <li>Le code ne doit pas produire d'erreur ou de warning dans la console</li>
</ul><br>

**➡ UX** <br>
Gallery :

<ul>
  <li>Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image</li>
  <li>Si l'utilisateur se trouve à la dernière image et qu'il clique sur "Image suivante", la galerie affiche la première image</li>
  <li>S'il n'y a qu'une seule image, les flèches ainsi que la numérotation n'apparaissent pas</li>
</ul>

Collapse :

<ul>
  <li>Par défaut, les Collapses sont fermés à l'initialisation de la page</li>
  <li>Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer</li>
  <li>Si le Collapse est fermé, le clic de l'utilisateur permet de l'ouvrir</li>
</ul>

### 🏆 Compétences évaluées

➡ Créer des composants avec React<br>

➡ Développer les routes d'une application web avec React Router <br>

➡ Initialiser une application web avec un framework<br>

### 🔨 Installation du projet

➡ Télécharger le dossier ducode et le dézipper<br>
➡ Ouvrir le dossier dans VSCode (ou tout autre IDE)<br>
➡ Installer les nodes-modules : `pnpm install`<br>
➡ Lancer l'application : `pnpm run dev`<br>
