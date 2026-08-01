# Nos prénoms 🧸

Petite application pour voter à deux (chacun sur son téléphone) sur une liste
de prénoms. Hébergement 100% statique via **GitHub Pages**, synchronisation
des votes en temps réel via **Firebase Realtime Database** (gratuit).

## 1. Mise en ligne de la page (GitHub Pages, gratuit)

1. Sur GitHub : **Settings → Pages**.
2. Source : **Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. GitHub publie l'URL (ex. `https://<utilisateur>.github.io/family/`).

C'est le seul hébergement nécessaire pour la page elle-même : pas de serveur
à louer, pas de build. Chaque `git push` sur `main` met à jour le site en
quelques secondes.

## 2. Créer la petite base de données partagée (Firebase, gratuit)

Sans ça, l'app fonctionne quand même (chaque téléphone garde ses votes en
local) mais rien n'est partagé entre vous deux — un bandeau ⚠️ vous le
rappelle tant que ce n'est pas fait.

1. Allez sur https://console.firebase.google.com/ et créez un projet (ex.
   `nos-prenoms`). Pas besoin d'activer Analytics.
2. Dans le projet, cliquez l'icône **`</>`** ("Ajouter une application Web"),
   donnez-lui un nom, validez. Firebase affiche un objet `firebaseConfig`.
3. Copiez ces valeurs dans le fichier **`firebase-config.js`** de ce repo, à
   la place des `"REMPLACE_MOI"`.
4. Dans le menu de gauche : **Build → Realtime Database → Créer une base de
   données** (choisissez une région proche, peu importe le mode de démarrage
   proposé : les règles ci-dessous les remplacent).
5. Onglet **Règles** de la Realtime Database, remplacez par :

   ```json
   {
     "rules": {
       "prenoms-quentin-annecha": {
         ".read": true,
         ".write": true
       },
       "$other": {
         ".read": false,
         ".write": false
       }
     }
   }
   ```

   Ça limite la base à ce seul petit "dossier" (celui utilisé par l'app) et
   bloque tout le reste. Comme le contenu (des prénoms de bébé) n'a rien de
   sensible, l'accès en lecture/écriture ouvert sur ce chemin est un
   compromis raisonnable pour rester simple à deux.
6. Commitez et poussez `firebase-config.js` sur `main` — GitHub Pages se met
   à jour automatiquement.

Le tout reste dans l'offre gratuite ("Spark") de Firebase, très largement
suffisante pour quelques kilo-octets de votes.

## 3. Utilisation à deux, sur deux téléphones

1. Chaque personne ouvre l'URL GitHub Pages sur **son** téléphone et choisit
   son profil (Quentin / Anne‑Cha) — mémorisé sur l'appareil.
2. Chacun vote la liste de prénoms (❤️ J'aime / 🤔 Pourquoi pas / ❌ Non).
3. Les votes se synchronisent **automatiquement et en temps réel** entre les
   deux téléphones dès qu'ils sont connectés à internet — rien à envoyer, rien
   à coller. Un badge en haut de l'écran indique l'état de la synchro (🟢
   synchronisé / 🔴 hors ligne / ⚠️ Firebase non configuré).
4. Dès que les deux ont voté, ouvrez **« Voir nos résultats »** sur n'importe
   lequel des deux téléphones : l'app calcule les matchs communs et génère un
   résumé texte prêt à copier.
5. Collez ce résumé dans une conversation avec Claude ou ChatGPT pour obtenir
   une nouvelle sélection de prénoms plus proche de vos goûts.

Astuce : sur iPhone/Android, on peut « Ajouter à l'écran d'accueil » depuis
le navigateur pour que l'app ait l'air d'une vraie application.
