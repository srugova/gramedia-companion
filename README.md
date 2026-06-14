# Gramedia Companion (Web / PWA)

Ebook discovery feed — 460 ebooks dari data sales Gramedia, tema merah Gramedia, drives traffic ke ebooks.gramedia.com dengan UTM tracking.

Bisa di-install ke homescreen iPhone/Android sebagai PWA — feels like a native app, tanpa App Store.

## Deploy ke Vercel (paling gampang)

### 1. Push ke GitHub
```bash
cd gramedia-companion-web
git init
git add .
git commit -m "init: gramedia companion web"
```
Buat repo baru di github.com (misal `srugova/gramedia-companion`), lalu:
```bash
git remote add origin https://github.com/srugova/gramedia-companion.git
git branch -M main
git push -u origin main
```

### 2. Deploy
- Buka [vercel.com](https://vercel.com) → New Project
- Import repo `srugova/gramedia-companion`
- Vercel auto-detect Next.js — klik **Deploy**
- Selesai! Dapat URL seperti `gramedia-companion.vercel.app`

## Cara akses dari HP (Install as App)
1. Buka URL Vercel di Safari (iPhone) atau Chrome (Android)
2. iPhone: tap **Share** → **Add to Home Screen**
3. Android: tap menu (⋮) → **Add to Home screen** / **Install app**
4. Icon muncul di homescreen, fullscreen, terasa seperti app asli

## Untuk demo Innoverse
Generate QR code dari URL Vercel (pakai qr-code-generator.com atau sejenis), 
juri scan → langsung kebuka di HP mereka.

## Local development
```bash
npm install
npm run dev
```
Buka http://localhost:3000

## Update data
Edit `data/ebooks.ts` langsung, lalu push ulang ke GitHub — Vercel auto-redeploy.

## UTM Tracking
Tombol "Beli Ebook" otomatis append:
`?utm_source=gramedia_companion&utm_medium=web&utm_campaign=ebook_feed`
