# PROJECT BOOKFLIX
Bookflix est mon ppremier projet personnel suite à ma formation pour devenir développeuse web eb javascript.
C'est une application dédiée à mes besoins personnels, et liée à ma passion pour a lecture. 

## Technologies utilisées

- Langage: Javascript
- Déploiement: Netlify
- Hébergement: Heroku
  
    ### Backend
    - Logiciel de plateforme: NodeJS
    - Gestionnaire de paquets: npm
    - Librairie: ExpressJS
    - SGBDR: PostgreSQL
    - Getionnaire de base de données: Sqitch

    ### Frontend 
    - Framework: ReactJS
    - Toolchain: Webpack
    - Framework CSS:

Ces outils sont nécessaires pour l'installation des outils de développement, mais aussi pour le bon fonctionnement de l'application lors de son développement.

## Installation
Installer les dépendances nécessaires avec le gestionnaire npm dans votre projet en local
    
    npm install

Créer les fichiers .env et sqitch.conf pour la configuration du serveur.
Créer ensuite la base de données postgreSQL, et déployer le projet dans celle-ci en utilisant sqitch

    createdb bookflix
    sqitch deploy db:pg:bookflix

On se met ensuite dans le fichier sur lequel on osuhaite travailler 

    cd client + npm run start
    cd server + npm start