// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCohI5ncWLDfq1wlsnZkpSLA70aIlKQwHg",
  authDomain: "ict-guide-8c26e.firebaseapp.com",
  projectId: "ict-guide-8c26e",
  storageBucket: "ict-guide-8c26e.firebasestorage.app",
  messagingSenderId: "976999330071",
  appId: "1:976999330071:web:586d934de1e45011c60752"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };