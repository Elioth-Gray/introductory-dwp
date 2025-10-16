# E-Commerce Pulsa & Paket Data (Prototype)

Aplikasi prototype e-commerce untuk menampilkan daftar pulsa dan paket data dengan berbagai provider Indonesia. Dibangun menggunakan React + TypeScript, Material-UI, dan JSON Server sebagai mock backend untuk menampilkan data statis.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Kredensial Akun](#kredensial-akun)
- [Nomor Telepon untuk Testing](#nomor-telepon-untuk-testing)
- [Provider yang Didukung](#provider-yang-didukung)
- [Struktur Proyek](#struktur-proyek)
- [API Endpoints](#api-endpoints)

## ✨ Fitur

- **Autentikasi User**: Login/logout dengan validasi
- **Deteksi Provider**: Otomatis mendeteksi operator berdasarkan nomor telepon
- **Validasi Nomor**: Hanya nomor yang terdaftar di database yang dapat digunakan
- **Daftar Pulsa**: Menampilkan berbagai nominal pulsa untuk semua operator
- **Daftar Paket Data**: Menampilkan beragam paket internet dengan masa aktif berbeda
- **Riwayat Transaksi**: Menampilkan history transaksi dengan filter dan pagination
- **Filter & Search**: Filter berdasarkan provider, status, dan tipe transaksi
- **Desktop Design**: Tampilan dioptimalkan untuk desktop
- **Skeleton Loading**: Loading state yang user-friendly

## 🛠 Teknologi yang Digunakan

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: Material-UI (MUI)
- **State Management**: Zustand
- **HTTP Client**: Axios, TanStack Query (React Query)
- **Routing**: React Router v6
- **Backend Mock**: JSON Server
- **Styling**: CSS-in-JS (Material-UI)

## 📋 Prasyarat

Pastikan Anda telah menginstall:

- **Node.js** (versi 16 atau lebih tinggi)
- **npm** atau **yarn**
- **Git**
- **Desktop/Laptop**: Aplikasi dioptimalkan untuk tampilan desktop

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone <repository-url>
cd e-commerce
```

### 2. Install Dependencies

```bash
npm install
```

atau jika menggunakan yarn:

```bash
yarn install
```

## 🏃‍♂️ Menjalankan Aplikasi

Aplikasi ini memerlukan 2 server yang berjalan bersamaan:

### 1. Jalankan JSON Server (Backend Mock)

Buka terminal pertama dan jalankan:

```bash
npm run server
```

atau

```bash
npx json-server db.json
```

JSON Server akan berjalan di: `http://localhost:3000` (port default dan tidak bisa diubah)

### 2. Jalankan Vite Development Server (Frontend)

Buka terminal kedua dan jalankan:

```bash
npm run dev
```

atau

```bash
npx vite
```

Aplikasi akan berjalan di: `http://localhost:5173`

### 3. Build untuk Production

```bash
npm run build
```

## 🔐 Kredensial Akun

Gunakan salah satu akun berikut untuk login:

### Akun 1 (Utama)

- **Email**: `pilemon@gmail.com`
- **Password**: `pilemon123`
- **Nama**: Pilemon Barimbing

### Akun 2

- **Email**: `javier@example.com`
- **Password**: `javier123`
- **Nama**: Javier Elsyera

### Akun 3

- **Email**: `sarah@gmail.com`
- **Password**: `sarah123`
- **Nama**: Sarah Maharani

### Akun 4

- **Email**: `budi@example.com`
- **Password**: `budi123`
- **Nama**: Budi Santoso

### Akun 5

- **Email**: `dewi@gmail.com`
- **Password**: `dewi123`
- **Nama**: Dewi Sartika

## 📱 Nomor Telepon untuk Testing

⚠️ **PENTING**: Hanya nomor telepon yang terdaftar di `db.json` yang dapat digunakan untuk testing. Aplikasi akan memvalidasi nomor telepon berdasarkan data yang tersimpan di database.

Berikut adalah daftar nomor telepon yang tersedia, dikelompokkan berdasarkan provider:

### Telkomsel (081x, 082x)

- `08123416792`
- `08123456789`
- `08213456789`
- `08121234567`
- `08139876543`
- `08223456789`

### Indosat (085x, 086x, 087x)

- `08563456789`
- `08573456789`
- `08583456789`
- `08551234567`
- `08569876543`
- `08591234567`

### XL Axiata (081x, 087x, 088x)

- `08173456789`
- `08783456789`
- `08793456789`
- `08771234567`
- `08789876543`
- `08181234567`

### Smartfren (088x, 089x)

- `08983456789`
- `08883456789`
- `08871234567`
- `08889876543`
- `08991234567`

### By-U (089x, 096x, 097x)

- `08963456789`
- `08953456789`
- `08951234567`
- `08969876543`
- `08971234567`

### IM3 (085x, 086x)

- `08563789123`
- `08573789123`
- `08561234567`
- `08579876543`
- `08581234567`

## 🏢 Provider yang Didukung

| Provider  | Prefix                       | Fitur                     |
| --------- | ---------------------------- | ------------------------- |
| Telkomsel | 0812, 0813, 0821, 0822       | Daftar Pulsa & Paket Data |
| Indosat   | 0855, 0856, 0857, 0858, 0859 | Daftar Pulsa & Paket Data |
| XL Axiata | 0817, 0818, 0877, 0878, 0879 | Daftar Pulsa & Paket Data |
| Smartfren | 0881-0889, 0998, 0999        | Daftar Pulsa & Paket Data |
| By-U      | 0895, 0896, 0897             | Daftar Pulsa & Paket Data |
| IM3       | 0856, 0857, 0858             | Daftar Pulsa & Paket Data |

## 📂 Struktur Proyek

```
e-commerce/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── auth/banner.png
│   │   ├── home/hero.png
│   │   └── providers/
│   │       ├── telkomsel.png
│   │       ├── indosat.png
│   │       ├── xl-axiata.png
│   │       ├── smartfren.png
│   │       ├── by-u.png
│   │       └── im3.png
├── src/
│   ├── components/
│   │   ├── auth/LoginForm.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PhoneNumberSection.tsx
│   │   │   ├── CreditsListSection.tsx
│   │   │   ├── PacketDataSection.tsx
│   │   │   └── BannerSection.tsx
│   │   ├── history/HistorySection.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/api/
│   │   ├── auth.api.ts
│   │   ├── credits.api.ts
│   │   ├── packetData.api.ts
│   │   ├── phoneNumber.api.ts
│   │   └── history.api.ts
│   ├── middleware/AuthGuard.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Home.tsx
│   │   └── History.tsx
│   ├── schemas/
│   │   ├── auth.schema.ts
│   │   └── phoneNumber.schema.ts
│   ├── store/
│   │   ├── auth.store.ts
│   │   └── phoneNumber.store.ts
│   ├── types/
│   │   ├── auth.type.ts
│   │   ├── credit.type.ts
│   │   ├── packetData.type.ts
│   │   ├── phoneNumber.type.ts
│   │   └── history.type.ts
│   ├── utils/
│   │   ├── helper.ts
│   │   └── urlHelpers.ts
│   ├── theme/theme.ts
│   ├── constant/index.ts
│   └── main.tsx
├── db.json
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🔌 API Endpoints

JSON Server menyediakan endpoints berikut di `http://localhost:3000`:

### Users

- `GET /users` - Daftar semua user
- `GET /users/:id` - Detail user
- `POST /users` - Buat user baru

### Credits (Pulsa)

- `GET /credits` - Daftar paket pulsa
- `GET /credits?operator={provider}` - Filter berdasarkan operator
- `GET /credits?_limit={number}` - Limit jumlah data

### Packet Data

- `GET /packetdata` - Daftar paket data
- `GET /packetdata?operator={provider}` - Filter berdasarkan operator

### Phone Numbers

- `GET /phonenumber` - Daftar nomor telepon
- `GET /phonenumber?operator={provider}` - Filter berdasarkan operator

### Purchase History

- `GET /purchase_history` - Riwayat transaksi (data statis)
- `GET /purchase_history?userId={id}` - Filter berdasarkan user
- `GET /purchase_history?status={status}` - Filter berdasarkan status (`completed`, `pending`, `failed`)
- `GET /purchase_history?type={type}` - Filter berdasarkan tipe (`credit`, `packet_data`)
- `GET /purchase_history?operator={provider}` - Filter berdasarkan operator

## 🎯 Cara Menggunakan

### 1. Login

- Buka aplikasi di `http://localhost:5173`
- Gunakan salah satu kredensial yang tersedia
- Klik "Sign In"

### 2. Pilih Nomor Telepon

- Di halaman home, masukkan nomor telepon
- Sistem akan otomatis mendeteksi provider
- Nomor akan tersimpan untuk transaksi selanjutnya

### 3. Lihat Daftar Pulsa

- Scroll ke section "Paket Pulsa Terbaik"
- Lihat berbagai nominal yang tersedia
- Informasi harga dan provider akan ditampilkan

### 4. Lihat Daftar Paket Data

- Scroll ke section paket data
- Lihat berbagai paket yang tersedia dengan kuota dan masa aktif
- Informasi harga dan provider akan ditampilkan

### 5. Lihat Riwayat Transaksi

- Klik avatar/nama user di header
- Pilih "Riwayat Pembelian"
- Gunakan filter untuk mencari transaksi tertentu
- Riwayat menampilkan transaksi yang sudah ada di database

### JSON Server Configuration

File `db.json` berisi:

- 5 user accounts
- 12 paket pulsa dengan berbagai nominal (untuk ditampilkan)
- 16 paket data dengan berbagai kuota (untuk ditampilkan)
- 33 nomor telepon untuk testing
- 25 transaksi sample (data statis untuk ditampilkan di riwayat)

## 🐛 Troubleshooting

### Port sudah digunakan

```bash
# JSON Server berjalan di port 3000 (default) dan tidak bisa diubah
# Jika port 3000 sudah digunakan, hentikan aplikasi yang menggunakan port tersebut
# atau gunakan command berikut untuk melihat aplikasi yang menggunakan port 3000:
netstat -ano | findstr :3000

# Untuk Vite (jika port 5173 sudah digunakan)
npm run dev -- --port 5174
```

### Error saat install dependencies

```bash
# Hapus node_modules dan package-lock.json
rm -rf node_modules package-lock.json
npm install
```

### JSON Server tidak bisa diakses

- Pastikan file `db.json` ada di root directory
- Pastikan port 3000 tidak digunakan aplikasi lain
- Check firewall/antivirus tidak memblokir

### Aplikasi tidak bisa detect provider

- Pastikan nomor telepon dimulai dengan 08
- **Gunakan HANYA nomor dari daftar di db.json yang tersedia**
- Nomor telepon harus terdaftar di database untuk bisa digunakan
- Check console browser untuk error

## 📱 Fitur Testing

### Status Transaksi

- **Completed**: Transaksi berhasil (hijau)
- **Pending**: Transaksi sedang diproses (kuning)
- **Failed**: Transaksi gagal (merah)

### Filter Riwayat

- Filter berdasarkan tipe: Pulsa atau Paket Data
- Filter berdasarkan provider: Semua atau spesifik
- Filter berdasarkan status: Semua, Berhasil, Pending, Gagal
- Reset filter untuk melihat semua transaksi

### Pagination

- Menampilkan 5 transaksi per halaman
- Navigasi dengan tombol First, Previous, Next, Last
- Informasi jumlah data dan halaman aktif

## 🎨 UI/UX Features

- **Desktop Design**: Dioptimalkan untuk tampilan desktop
- **Skeleton Loading**: Loading state yang smooth
- **Smooth Scrolling**: Navigasi antar section yang halus
- **Hover Effects**: Interactive button dan card
- **Color Coding**: Status transaksi dengan warna berbeda
- **Provider Icons**: Logo operator yang mudah dikenali
- **⚠️ Note**: Design belum responsive, hanya untuk desktop dikarenakan keterbatasan waktu

## 📝 Development Notes

- Menggunakan TypeScript untuk type safety
- Zustand untuk state management yang ringan
- React Query untuk data fetching dan caching
- Material-UI untuk consistent design system
- JSON Server untuk rapid prototyping
- Vite untuk development experience yang cepat
- **Catatan**: Ini adalah aplikasi prototype yang menampilkan data statis, bukan sistem pembelian yang sesungguhnya
- **Limitation**: Design hanya dioptimalkan untuk desktop, belum responsive untuk mobile dikarenakan keterbatasan waktu pengembangan

**Dibuat dengan ❤️ menggunakan React + TypeScript + Vite**

```

```
