// Firebase Realtime Database — Like/Dislike counter ("Do you Like My Website?").
// Loaded as an ES module: <script type="module" src="dist/js/firebase-like.js">
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  runTransaction,
  set,
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// Your web app's Firebase configuration (public client config)
const firebaseConfig = {
  apiKey: "AIzaSyDzb4O_VtanFnEV39OnN8z-Jd-J0ofK3ik",
  authDomain: "website-portfolio-3fa55.firebaseapp.com",
  databaseURL:
    "https://website-portfolio-3fa55-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "website-portfolio-3fa55",
  storageBucket: "website-portfolio-3fa55.appspot.com",
  messagingSenderId: "151703843007",
  appId: "1:151703843007:web:b036c890a60c087b2d560a",
  measurementId: "G-NEJ9X68VRT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// section likes
const satisfiedButton = document.getElementById("satisfiedButton");
const dislikeButton = document.getElementById("dislikeButton");
const likeCount = document.getElementById("likeCount");
const likeHeartIcon = document.getElementById("likeHeartIcon");
const dislikeHeartIcon = document.getElementById("dislikeHeartIcon");
const dislikeIconContainer = document.getElementById("dislikeIconContainer");
const feedbackToast = document.getElementById("feedbackToast");
const toastMessage = document.getElementById("toastMessage");
const closeToast = document.getElementById("closeToast");
const feedbackTags = document.querySelectorAll("#feedbackTags .tag-chip");

// Mendapatkan referensi ke Firebase Realtime Database
const likeCountRef = ref(database, "likeCount");
const dislikeCountRef = ref(database, "dislikeCount");

// status pilihan user secara lokal di browser via localStorage (untuk caching fresh tiap user)
let localIsLiked = localStorage.getItem("userHasLiked") === "true";
let localIsDisliked = localStorage.getItem("userHasDisliked") === "true";

// Helper: modern animated toast
function triggerToast(text) {
  if (!feedbackToast || !toastMessage) return;
  toastMessage.textContent = text;
  feedbackToast.classList.remove("hidden");
  feedbackToast.classList.add("flex");
}

closeToast?.addEventListener("click", () => {
  feedbackToast.classList.add("hidden");
  feedbackToast.classList.remove("flex");
});

// Helper: spawn floating heart particles around the click point
function spawnFloatingHearts(x, y) {
  const symbols = ["❤️", "💖", "✨", "🎉"];
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${x - 20 + (Math.random() * 40 - 20)}px`;
    heart.style.top = `${y - 20 + (Math.random() * 20 - 10)}px`;
    heart.style.position = "fixed";
    heart.style.fontSize = `${16 + Math.random() * 12}px`;
    heart.style.zIndex = "9999";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

// Mendapatkan jumlah like dari database
onValue(likeCountRef, (snapshot) => {
  const currentCount = snapshot.val();
  if (likeCount) {
    likeCount.textContent = currentCount ? currentCount.toString() : "0";
  }
});

// Update visual berdasarkan pilihan lokal saat halaman dimuat atau ketika status berubah
function updateReactionsUI() {
  // Update UI Love It
  if (localIsLiked) {
    if (likeHeartIcon) {
      likeHeartIcon.classList.remove("fa-regular");
      likeHeartIcon.classList.add("fa-solid");
    }
    satisfiedButton?.classList.add(
      "border-rose-200",
      "bg-rose-50/70",
      "shadow-glow-rose",
    );
  } else {
    if (likeHeartIcon) {
      likeHeartIcon.classList.remove("fa-solid");
      likeHeartIcon.classList.add("fa-regular");
    }
    satisfiedButton?.classList.remove(
      "border-rose-200",
      "bg-rose-50/70",
      "shadow-glow-rose",
    );
  }

  // Update UI Needs Work
  if (localIsDisliked) {
    if (dislikeHeartIcon) {
      dislikeHeartIcon.classList.add("text-primary");
    }
    if (dislikeIconContainer) {
      dislikeIconContainer.classList.remove(
        "bg-slate-100",
        "text-slate-500",
        "dark:bg-slate-700",
        "dark:text-slate-300",
      );
      dislikeIconContainer.classList.add("bg-primary/10", "text-primary");
    }
    dislikeButton?.classList.add(
      "border-primary/40",
      "bg-primary/10",
      "shadow-glow-brand",
    );
  } else {
    if (dislikeHeartIcon) {
      dislikeHeartIcon.classList.remove("text-primary");
    }
    if (dislikeIconContainer) {
      dislikeIconContainer.classList.add(
        "bg-slate-100",
        "text-slate-500",
        "dark:bg-slate-700",
        "dark:text-slate-300",
      );
      dislikeIconContainer.classList.remove("bg-primary/10", "text-primary");
    }
    dislikeButton?.classList.remove(
      "border-primary/40",
      "bg-primary/10",
      "shadow-glow-brand",
    );
  }
}

// Inisialisasi visual UI pertama kali dimuat
updateReactionsUI();

// Mengubah status isLiked dan jumlah like saat tombol "Suka" diklik
satisfiedButton?.addEventListener("click", (e) => {
  if (localIsLiked) {
    // KLIK KEDUA KALI: BATALKAN PILIHAN LOVE IT Lokal & Database
    runTransaction(likeCountRef, (currentCount) => {
      const count = currentCount || 0;
      return count > 0 ? count - 1 : 0;
    });
    localIsLiked = false;
    localStorage.setItem("userHasLiked", "false");
    updateReactionsUI();
    triggerToast("Your like has been removed. Thank you for voting!");
  } else {
    // KLIK PERTAMA KALI: SET PILIHAN LOVE IT Lokal & Database
    runTransaction(likeCountRef, (currentCount) => {
      return (currentCount || 0) + 1;
    });
    localIsLiked = true;
    localStorage.setItem("userHasLiked", "true");

    // Matikan status dislike jika sebelumnya aktif
    if (localIsDisliked) {
      localIsDisliked = false;
      localStorage.setItem("userHasDisliked", "false");
      runTransaction(dislikeCountRef, (currentCount) => {
        const count = currentCount || 0;
        return count > 0 ? count - 1 : 0;
      });
    }

    updateReactionsUI();
    spawnFloatingHearts(e.clientX, e.clientY);
    triggerToast(
      "Hooray! Thank you for the love! Aria appreciates your support.",
    );
  }
});

// Mengubah status isLiked dan jumlah like saat tombol "Tidak Suka" diklik
dislikeButton?.addEventListener("click", () => {
  if (localIsDisliked) {
    // KLIK KEDUA KALI: BATALKAN PILIHAN NEEDS WORK Lokal & Database
    runTransaction(dislikeCountRef, (currentCount) => {
      const count = currentCount || 0;
      return count > 0 ? count - 1 : 0;
    });
    localIsDisliked = false;
    localStorage.setItem("userHasDisliked", "false");
    updateReactionsUI();
    triggerToast(
      "Removed constructive feedback selection. Your voice matters!",
    );
  } else {
    // KLIK PERTAMA KALI: SET PILIHAN NEEDS WORK Lokal & Database
    runTransaction(dislikeCountRef, (currentCount) => {
      return (currentCount || 0) + 1;
    });
    localIsDisliked = true;
    localStorage.setItem("userHasDisliked", "true");

    // Matikan status like jika sebelumnya aktif
    if (localIsLiked) {
      localIsLiked = false;
      localStorage.setItem("userHasLiked", "false");
      runTransaction(likeCountRef, (currentCount) => {
        const count = currentCount || 0;
        return count > 0 ? count - 1 : 0;
      });
    }

    updateReactionsUI();
    triggerToast(
      "Thanks for the honesty! We are tweaking performance and UI daily.",
    );
  }
});

// Tag chips toggle behavior — pure UI feedback, not persisted anywhere
const tagChipInactiveClasses = [
  "bg-slate-100",
  "border-slate-200",
  "text-slate-600",
  "dark:bg-slate-800",
  "dark:border-slate-700",
  "dark:text-slate-300",
];
const tagChipActiveClasses = ["bg-primary", "border-primary", "text-white"];

feedbackTags.forEach((chip) => {
  chip.addEventListener("click", () => {
    const isActive = !chip.classList.contains("bg-primary");
    chip.classList.remove(
      ...(isActive ? tagChipInactiveClasses : tagChipActiveClasses),
    );
    chip.classList.add(
      ...(isActive ? tagChipActiveClasses : tagChipInactiveClasses),
    );
    triggerToast(`Noted! You highlighted: "${chip.textContent.trim()}"`);
  });
});
