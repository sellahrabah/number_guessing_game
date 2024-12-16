Voici une description concise et professionnelle pour votre dépôt Git :  

---

# Number Guessing Game 🎲

**Description :**  
Ce projet est un jeu de devinettes de nombres développé avec le framework **Symfony**. Il permet à plusieurs joueurs de deviner un nombre secret dans un nombre limité de tentatives. Chaque joueur alterne pour proposer une réponse, et des indices leur sont donnés (plus grand ou plus petit) pour les aider à trouver la solution.

---

## Fonctionnalités :
- 💡 **Multi-joueurs** : Chaque joueur a son propre tour pour deviner le nombre.
- 🏆 **Scores** : Les joueurs gagnent des points lorsqu'ils trouvent le nombre secret.
- 🔄 **Gestion des tentatives** : Chaque joueur dispose d'un nombre limité de tentatives.
- 🎯 **Indice dynamique** : Des indications "plus grand" ou "plus petit" sont fournies après chaque tentative.
- 🔄 **Options de jeu** : 
  - **Redémarrer** : Rejouer avec les mêmes joueurs et scores.
  - **Réinitialiser** : Recommencer un nouveau jeu à zéro.

---

## Prérequis :
- PHP >= 8.1  
- Composer  
- Symfony CLI  

---

## Installation :
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/number-guessing-game.git
   cd number-guessing-game
   ```
2. Installez les dépendances :
   ```bash
   composer install
   ```
3. Démarrez le serveur local Symfony :
   ```bash
   symfony server:start
   ```
4. Accédez au jeu via : `http://127.0.0.1:8000/game/number-guessing`.

---

## Structure du projet :
- **Backend :** Symfony pour la logique métier et la gestion des sessions.  
- **Frontend :** Bootstrap pour une interface utilisateur simple et réactive.  
- **Formulaires :** Gestion des propositions avec Symfony Forms.

---

## Améliorations possibles :
- Ajout d'une base de données pour enregistrer les scores à long terme.
- Ajout d'un mode solo avec un chronomètre.
- Génération dynamique du nombre secret pour chaque partie.

---

Ajoutez cette description dans le fichier `README.md` de votre projet pour le rendre professionnel et attractif sur Git. 😊