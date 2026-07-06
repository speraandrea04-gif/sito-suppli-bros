# Supplì Bros — Sito web

Landing page premium per **Supplì Bros**, locale di street food romano specializzato in supplì.

Sito statico (HTML + CSS + JS puro), pronto per essere pubblicato su GitHub Pages, Netlify, Vercel o qualsiasi hosting statico.

## Struttura

```
index.html          → pagina unica (hero video, menù, storia, delivery, orari, contatti)
css/style.css       → stile del sito
js/main.js          → animazioni, menu mobile, badge "Aperto/Chiuso adesso", fallback video
assets/img/         → poster del video hero
assets/video/       → qui va il video hero (suppli-hero.mp4)
```

## 🎬 Video hero (Higgsfield)

La hero è progettata per un video di un supplì che viene aperto con la mozzarella filante,
generato con **Higgsfield**. Quando il video è pronto:

1. Salvarlo come `assets/video/suppli-hero.mp4` (16:9, consigliato 1080p, ~10 secondi).
2. Fine: il sito lo riproduce automaticamente in loop.

Finché il file non esiste, il sito mostra un **fondale animato di fallback** (nessuna pagina rotta).

> ⚠️ Al momento la generazione non è stata possibile: l'account Higgsfield collegato è sul
> piano **free con 0 crediti** e i modelli video richiedono almeno il piano Basic (~15 crediti
> per una clip 10s). Dopo l'upgrade basta rilanciare la generazione e salvare l'MP4.

## ✏️ Dati reali già inseriti

- Menù completo (5 categorie) con prezzi da leggimenu.it
- Orari: lun 18:30–24:00, mar–dom 18:00–24:00 (anche in `WEEKLY_HOURS` in `js/main.js`)
- Telefono: +39 366 822 7327
- Instagram: instagram.com/supplibros

## ⚠️ Dati ancora segnaposto (cercare `⚠️` in `index.html`)

| Dato | Dove | Segnaposto attuale |
|---|---|---|
| Prezzo Nuggets di pollo | sezione `#menu` | assente |
| Indirizzo | footer `#contatti` + JSON-LD | Via Roma 1, 00100 Roma |
| Email | footer | info@supplibros.it |
| **P.IVA** | footer | IT00000000000 |
| Link Just Eat / Glovo / Deliveroo | sezione `#ordina` + footer | `href="#"` |
| Facebook / TikTok | footer | `href="#"` |

## Anteprima locale

```bash
python3 -m http.server 8080
# poi aprire http://localhost:8080
```
