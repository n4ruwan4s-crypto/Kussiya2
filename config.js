const firebaseConfig = {
  apiKey: "AIzaSyBLtGfZnn34ecEz9bBgc5tawwUTPMLukHo",
  authDomain: "kussiya-lunch.firebaseapp.com",
  projectId: "kussiya-lunch",
  storageBucket: "kussiya-lunch.firebasestorage.app",
  messagingSenderId: "1032681220499",
  appId: "1:1032681220499:web:90d7eb2f3ef21df576e066"
};


// 2) Paste your EmailJS values here (from emailjs.com), see setup steps.
const EMAILJS_PUBLIC_KEY = "hcIuwffnSygMgQPca";
const EMAILJS_SERVICE_ID = "service_nzft1yd";
const EMAILJS_TEMPLATE_ID = "template_pc4qp9d";

// 3) Where order notification emails should land.
const ADMIN_NOTIFY_EMAIL = "n4ruwan4s@gmail.com";

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBLtGfZnn34ecEz9bBgc5tawwUTPMLukHo",
    authDomain: "kussiya-lunch.firebaseapp.com",
    projectId: "kussiya-lunch",
    storageBucket: "kussiya-lunch.firebasestorage.app",
    messagingSenderId: "1032681220499",
    appId: "1:1032681220499:web:90d7eb2f3ef21df576e066",
    measurementId: "G-VBL90KPW2G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
