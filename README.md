# 🏡 Tjana Homestay – Landing Page

Landing page modern & minimalis untuk **Tjana Homestay**, sebuah homestay yang berlokasi di **Sanur, Bali**.  
Website ini dibangun sebagai **one-page landing website** dengan fokus pada pengalaman pengguna yang halus, desain premium, dan kemudahan booking melalui WhatsApp.

---

## ✨ Fitur Utama

- ⚡ Built with **Next.js App Router**
- 🎨 Styling menggunakan **Tailwind CSS**
- 🧭 **Smooth scroll navigation** (one-page)
- 🖼️ **Hero image slider** interaktif
- 🏨 **Tipe kamar** (AC & Kipas) dengan card & image carousel
- 🏍️ **Penyewaan motor** dengan promo harga
- 📍 **Destinasi terdekat** (Pantai Sanur, Renon, Kuta)
- ⭐ **Review tamu (Google Review – static)**
- ❓ **FAQ accordion**
- 🗺️ **Google Maps embed** (lokasi akurat)
- 📱 Fully responsive (mobile & desktop)
- ✨ Scroll animation halus & premium

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Image Optimization:** next/image
- **Deployment:** Vercel / Netlify ready

---

## 📂 Struktur Folder

```
src/
├─ app/
│  └─ page.tsx
├─ components/
│  ├─ Navbar.tsx
│  ├─ HeroSlider.tsx
│  ├─ FacilityCard.tsx
│  ├─ RoomCard.tsx
│  ├─ MotorSection.tsx
│  ├─ DestinationCard.tsx
│  ├─ ReviewSlider.tsx
│  ├─ FAQSection.tsx
│  ├─ ContactSection.tsx
│  └─ Footer.tsx
├─ data/
│  ├─ facilities.ts
│  ├─ rooms.ts
│  ├─ destinations.ts
│  ├─ reviews.ts
│  └─ faqs.ts
└─ public/
   └─ images/
```

---

## 🚀 Cara Menjalankan Project

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/tjana-homestay.git
cd tjana-homestay
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Jalankan Development Server
```bash
npm run dev
```

Buka di browser:
```
http://localhost:3000
```

---

## 🧭 Navigasi Section (One Page)

- `#home` → Hero
- `#facilities` → Fasilitas
- `#rooms` → Tipe Kamar
- `#motor` → Sewa Motor
- `#destinations` → Destinasi Terdekat
- `#contact` → Kontak & Lokasi

---

## 📍 Lokasi

**Tjana Homestay – Sanur, Bali**  
Lokasi ditampilkan menggunakan Google Maps embed dengan pin resmi homestay.

---

## ⚠️ Catatan Penting

- Review Google ditampilkan secara **static**
- Booking diarahkan langsung ke **WhatsApp**
- Semua data bersifat **static**

---

## 📌 Rencana Pengembangan

- [ ] Scroll-spy navbar
- [ ] Halaman detail kamar
- [ ] SEO meta & Open Graph
- [ ] Multi bahasa

---

## 📄 Lisensi

Project ini dibuat untuk kebutuhan website homestay dan bebas dimodifikasi.

---

## 👤 Author

**Andi Suartika**  
Frontend Developer – Next.js & Tailwind CSS
