// Configuration Firebase — à remplacer par les vraies valeurs de VOTRE projet.
//
// Comment les obtenir (gratuit, 5 minutes) :
// 1. https://console.firebase.google.com/ → "Ajouter un projet" (ex: "nos-prenoms").
// 2. Dans le projet : icône </> "Ajouter une application Web", donnez-lui un nom.
// 3. Firebase affiche un objet `firebaseConfig` : copiez ses valeurs ci-dessous.
// 4. Dans le menu de gauche : "Realtime Database" → "Créer une base de données"
//    (choisissez une région proche, mode "verrouillé" ou "test", peu importe :
//    les règles de sécurité ci-dessous/README les remplaceront de toute façon).
// 5. Enregistrez ce fichier et poussez-le sur GitHub (branche déployée par Pages).
//
// Voir le README pour le détail des règles de sécurité à coller dans
// Realtime Database > Règles.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA6KYJ4SV1kjMW6fS0TCljhyWULCJmhj3s",
  authDomain: "family-717da.firebaseapp.com",
  // ⚠️ À compléter : allez dans la console Firebase → "Realtime Database" →
  // "Créer une base de données". Une fois créée, Firebase affiche son URL
  // (ex. "https://family-717da-default-rtdb.europe-west1.firebasedatabase.app")
  // — collez-la ici à la place de REMPLACE_MOI. Sans ça, la synchro ne peut
  // pas démarrer (le SDK a besoin de savoir où se trouve la base).
  databaseURL: "https://REMPLACE_MOI-default-rtdb.firebaseio.com",
  projectId: "family-717da",
  storageBucket: "family-717da.firebasestorage.app",
  messagingSenderId: "162522176917",
  appId: "1:162522176917:web:2da7dd9649cf22c50d2a9c"
};
