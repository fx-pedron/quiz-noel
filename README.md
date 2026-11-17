# Le grand quiz de l'Avent

Un quiz de culture française pour décembre 2026 : 5 questions par jour du 1er au 23, puis 24 questions sur Noël le 24.

- **La télé** ouvre la page : calendrier, questions, explications et score.
- **Le téléphone** scanne le QR code (bouton « Connecter le téléphone ») et sert de manette : quatre boutons A, B, C, D.

Les deux appareils se parlent directement (WebRTC, via [PeerJS](https://peerjs.com/)). Il n'y a ni serveur ni compte. Le score est enregistré dans le navigateur de la télé.

## Mise en ligne

Dans le dépôt GitHub : **Settings → Pages → Build and deployment**, Source : *Deploy from a branch*, branche `main`, dossier `/ (root)`. Le site est alors servi sur `https://fx-pedron.github.io/quiz-noel/`.

## Astuces

- Chaque jour se débloque à sa date (selon l'horloge de la télé).
- `#apercu` à la fin de l'adresse ouvre tous les jours, pour tester. Les réponses données en test sont gardées par le navigateur : teste dans une fenêtre de navigation privée.
- Sans téléphone, on peut répondre sur la télé, à la souris ou avec les touches 1 à 4 puis Entrée.

## Fichiers

- `index.html` : la page et les styles
- `app.js` : la logique (mode télé et mode manette)
- `questions.js` : les 139 questions
