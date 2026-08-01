# Nos prénoms 🧸

Petite application pour voter à deux (chacun sur son téléphone) sur une liste
de prénoms, sans backend, sans base de données et sans déploiement à gérer —
juste une page statique hébergée par GitHub Pages.

## Mise en ligne (une seule fois, gratuit)

1. Sur GitHub : **Settings → Pages**.
2. Source : **Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. GitHub publie l'URL (ex. `https://<utilisateur>.github.io/family/`).

C'est le seul "déploiement" nécessaire : pas de serveur, pas d'API, pas de
build. Toute modification poussée sur `main` met à jour le site en quelques
secondes.

## Utilisation à deux, sur deux téléphones

Comme il n'y a pas de serveur, les votes de chacun restent **stockés
uniquement sur son propre téléphone** (localStorage). La synchronisation se
fait par un lien que l'on s'envoie soi-même, via n'importe quelle appli de
message (iMessage, WhatsApp, SMS…) :

1. Chaque personne ouvre l'URL GitHub Pages sur **son** téléphone et choisit
   son profil (Quentin / Anne‑Cha) — ce choix est mémorisé sur l'appareil.
2. Chacun vote la liste de prénoms (❤️ J'aime / 🤔 Pourquoi pas / ❌ Non).
3. Une fois ses votes terminés, on appuie sur **« Envoyer mes votes »** :
   l'app ouvre le partage natif du téléphone (ou copie un lien) contenant
   ses votes encodés dans l'URL (aucune donnée n'est envoyée à un serveur).
4. L'autre personne ouvre ce lien sur son téléphone : ses votes à elle sont
   importés automatiquement et fusionnés avec les siens.
5. Sur ce téléphone qui a les deux jeux de votes, on ouvre **« Voir nos
   résultats »** : l'app calcule les matchs communs et génère un résumé
   texte prêt à copier.
6. On colle ce résumé dans une conversation avec Claude ou ChatGPT pour
   obtenir une nouvelle sélection de prénoms plus proche de vos goûts.

Astuce : sur iPhone/Android, on peut « Ajouter à l'écran d'accueil » depuis
le navigateur pour que l'app ait l'air d'une vraie application.
