# PRD — Jastipisy Website

## Problem Statement (original)
"saya punya jasa untuk war tiket namanya jastipisy dan udah ada ig nya @jastipisy. itu adalah jasa titip untuk beli tiket. buatkan websitenya."

Jastipisy adalah jasa titip (jastip) untuk membeli tiket yang selalu sold out — konser, festival, event olahraga. Website = landing page konversi yang mengarahkan calon pelanggan ke DM Instagram @jastipisy, plus form pesanan cepat.

## User Personas
1. **Pemburu tiket konser (18–30)** — panik tiap ada war tiket, butuh jasa yang siap di jam penjualan.
2. **Penonton festival/event olahraga** — tiket terbatas, ingin proses transparan dan aman.
3. **Pemilik Jastipisy** — ingin kanal order yang rapi selain DM IG.

## Core Requirements (static)
- Landing page satu halaman, Bahasa Indonesia, identitas @jastipisy.
- Kinetic hero + smooth scroll + marquee + section reveals (motion sebagai inti pengalaman).
- CTA utama: DM Instagram https://instagram.com/jastipisy.
- Form pesanan tersimpan ke backend (MongoDB) sebagai lead.
- Logo SVG orisinal + favlogo.

## Architecture
- Frontend: React (CRA) + Tailwind + framer-motion + lenis, komponen di src/components/jastipsy/.
- Backend: FastAPI (server.py), endpoint /api/orders (POST/GET), model Order (PyObjectId pattern).
- DB: MongoDB via MONGO_URL/DB_NAME env.

## Implemented (2026-10-13)
- Nav glassmorphism + menu mobile; Hero kinetik (masked line reveal, parallax, ticket stub 3D tilt).
- Marquee editorial lambat; Pillars (CEPAT/TERPERCAYA/AMAN); Cara Kerja 4 langkah.
- Bento layanan (konser/festival/olahraga + 3 info card) dengan foto konser duotone.
- Form pesanan → POST /api/orders → toast sonner; FAQ accordion; Final CTA; Footer wordmark raksasa.
- Favlogon/logo SVG; grain overlay; font Anton/Outfit/Space Mono.

## Keputusan Konten
- Tidak ada angka statistik/testimoni fiktif (aturan content integrity): band statistik diganti pilar layanan; fee dijelaskan "via DM" tanpa angka.

## Backlog (P0/P1/P2)
- P1: Admin mini untuk melihat/mengelola pesanan masuk (GET /api/orders sudah ada).
- P1: Daftar event yang sedang di-war (dikelola pemilik).
- P2: Testimoni asli + statistik riil (sekadar data dari pemilik).
- P2: Integrasi WhatsApp click-to-chat.
- P2: SEO OG image + deploy domain sendiri.

## Implemented (2026-11-05)
- Form pesanan kini mengarah ke WhatsApp: klik "Kirim Pesanan" → wa.me/6287782216584 terbuka dengan pesan terformat otomatis (nama, IG, kategori, event, tanggal, catatan); data tetap tersimpan ke MongoDB sebagai backup lead.
