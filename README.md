# My Web App

## Descrizione
Un'applicazione web che consente agli utenti di effettuare il login, visualizzare una dashboard, gestire macchine, inventario, ordini e analisi dei costi. L'applicazione è composta da un backend realizzato con Node.js.

## Struttura delle Cartelle
```
my-web-app/
│
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── services/
│   │   └── authService.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── config/
│   │   └── db.js
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── LoginForm.jsx
│   │   ├── pages/
│   │   │   └── LoginPage.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── .babelrc
│
├── .gitignore
├── README.md
└── package.json
```

## Avvio dell'Applicazione

### Backend
1. Naviga nella cartella `backend`.
2. Installa le dipendenze con `npm install`.
3. Avvia il server con `npm start`.

### Frontend
1. Naviga nella cartella `frontend`.
2. Installa le dipendenze con `npm install`.
3. Avvia l'applicazione con `npm start`.