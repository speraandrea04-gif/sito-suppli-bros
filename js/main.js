/* ============================================================
   SUPPLÌ BROS — interazioni
   ============================================================ */

// ---------- Navbar: sfondo allo scroll ----------
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Menu mobile ----------
const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// ---------- Reveal on scroll ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Hero video: fallback se il file non esiste ancora ----------
const heroVideo = document.getElementById("heroVideo");
const heroFallback = document.getElementById("heroFallback");
const activateFallback = () => {
  heroVideo.classList.add("is-missing");
  heroFallback.classList.add("is-active");
};
heroVideo.addEventListener("error", activateFallback, true);
heroVideo.querySelector("source").addEventListener("error", activateFallback);
// Safety net: se dopo 4s il video non ha dati, mostra il fallback
setTimeout(() => {
  if (heroVideo.readyState < 2) activateFallback();
}, 4000);

// ---------- Orari: badge "Aperto/Chiuso adesso" ----------
// ⚠️ SEGNAPOSTO: allineare questi orari a quelli reali mostrati in index.html
// Formato: per ogni giorno (0=Domenica ... 6=Sabato) un array di fasce [apertura, chiusura] in minuti
const WEEKLY_HOURS = {
  0: [[11 * 60, 22 * 60]],                              // Domenica 11:00–22:00
  1: [],                                                // Lunedì chiuso
  2: [[11 * 60, 15 * 60], [18 * 60, 22 * 60 + 30]],     // Martedì
  3: [[11 * 60, 15 * 60], [18 * 60, 22 * 60 + 30]],     // Mercoledì
  4: [[11 * 60, 15 * 60], [18 * 60, 22 * 60 + 30]],     // Giovedì
  5: [[11 * 60, 15 * 60], [18 * 60, 23 * 60 + 30]],     // Venerdì
  6: [[11 * 60, 23 * 60 + 30]],                         // Sabato
};

const statusEl = document.getElementById("openStatus");
if (statusEl) {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const isOpen = (WEEKLY_HOURS[day] || []).some(([from, to]) => minutes >= from && minutes < to);
  statusEl.textContent = isOpen ? "● Aperto adesso" : "● Chiuso adesso";
  statusEl.classList.add(isOpen ? "is-open" : "is-closed");
}

// Evidenzia il giorno corrente nella lista orari (lista parte da Lunedì)
const dayIndexFromMonday = (new Date().getDay() + 6) % 7;
const hourRows = document.querySelectorAll(".hours__list li");
if (hourRows[dayIndexFromMonday]) hourRows[dayIndexFromMonday].classList.add("is-today");

// ---------- Anno corrente nel footer ----------
document.getElementById("year").textContent = new Date().getFullYear();
