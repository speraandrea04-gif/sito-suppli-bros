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

## ✏️ Dati da sostituire (segnaposto)

Cercare `⚠️` in `index.html` per trovarli tutti:

| Dato | Dove | Segnaposto attuale |
|---|---|---|
| Menù e prezzi | sezione `#menu` | 6 supplì di esempio |
| Orari di apertura | sezione `#orari` | orari di esempio (aggiornare anche `WEEKLY_HOURS` in `js/main.js`) |
| Indirizzo | footer `#contatti` | Via Roma 1, 00100 Roma |
| Telefono | footer + card "Asporto" | +39 000 000 0000 |
| Email | footer | info@supplibros.it |
| **P.IVA** | footer | IT00000000000 |
| Link Just Eat / Glovo / Deliveroo | sezione `#ordina` + footer | `href="#"` |
| Social (Instagram, Facebook, TikTok) | footer | `href="#"` |

## Anteprima locale

```bash
python3 -m http.server 8080
# poi aprire http://localhost:8080
```
