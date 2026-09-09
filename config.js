const firebaseConfig = {
  apiKey: "AIzaSyBLtGfZnn34ecEz9bBgc5tawwUTPMLukHo",
  authDomain: "kussiya-lunch.firebaseapp.com",
  projectId: "kussiya-lunch",
  storageBucket: "kussiya-lunch.firebasestorage.app",
  messagingSenderId: "1032681220499",
  appId: "1:1032681220499:web:90d7eb2f3ef21df576e066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// 2) Paste your EmailJS values here (from emailjs.com), see setup steps.
const EMAILJS_PUBLIC_KEY = "hcIuwffnSygMgQPca";
const EMAILJS_SERVICE_ID = "service_nzft1yd";
const EMAILJS_TEMPLATE_ID = "template_pc4qp9d";

// 3) Where order notification emails should land.
const ADMIN_NOTIFY_EMAIL = "n4ruwan4s@gmail.com";

// 4) Google Analytics — the gtag.js snippet lives directly in index.html's <head>
// (measurement ID G-VBL90KPW2G), so nothing needed here.
