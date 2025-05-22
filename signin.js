// signin.js import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"; import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Replace this with your actual config or load it from firebase-config.js const firebaseConfig = { apiKey: "AIzaSyAeUhQBUJQR18nITsQG2SrNly0ZhbiyWSU", authDomain: "licensemerge.firebaseapp.com", projectId: "licensemerge", storageBucket: "licensemerge.appspot.com", messagingSenderId: "1034849401898", appId: "1:1034849401898:web:da2f46ec79f0e6e86a9753", measurementId: "G-68PBWLB727" };

const app = initializeApp(firebaseConfig); const auth = getAuth(app);

// Email/Password login const form = document.getElementById("signin-form"); const errorBox = document.getElementById("signin-error"); const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => { e.preventDefault(); const email = form.email.value; const password = form.password.value;

signInWithEmailAndPassword(auth, email, password) .then(() => { window.location.href = "dashboard.html"; }) .catch((error) => { errorBox.style.display = "flex"; errorMsg.textContent = error.message; }); });

// Google Sign-In document.getElementById("google-signin").addEventListener("click", () => { const provider = new GoogleAuthProvider(); signInWithPopup(auth, provider) .then(() => { window.location.href = "dashboard.html"; }) .catch((error) => { errorBox.style.display = "flex"; errorMsg.textContent = error.message; }); });

