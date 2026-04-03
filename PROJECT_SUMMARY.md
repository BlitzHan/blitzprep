# BlitzPrep — Proje Özeti

> **BlitzPrep** — Hızlı İngilizce, Güçlü Başlangıç
> İngilizce öğrenmek isteyenler için geliştirilmiş interaktif hazırlık uygulaması.

---

## 🛠️ Teknoloji Yığını

- **React 19** + **TypeScript**
- **Vite** (Build tool)
- **Lucide React** (İkonlar)
- **Speech Synthesis API** (British English en-GB seslendirme)
- **localStorage** (İlerleme takibi)
- **Brutalist/UK** tasarım teması

---

## 📁 Dosya Yapısı

```
src/
├── App.tsx                    # 7 tab, header tıklanabilir → anasayfa
├── App.css                    # Stil dosyası
├── main.tsx                   # Entry point
├── index.css                  # Reset + dot pattern + tüm stiller
├── hooks/
│   └── useProgress.ts         # İlerleme + Spaced Repetition (Leitner)
├── components/
│   ├── Dashboard.tsx          # Stats, streak, progress bar, hızlı erişim
│   ├── Vocabulary.tsx         # 804 kelime, Bildim/Bilemedim, due words, shuffle
│   ├── Scenarios.tsx          # 20 diyalog senaryosu
│   ├── SentenceBuilder.tsx    # ~150 cümle yazma pratiği
│   ├── Conversation.tsx       # 10 konuşma senaryosu
│   ├── Grammar.tsx            # 5 konu, ~57 soru
│   └── Quiz.tsx               # Kelime/Gramer/Karışık quiz
└── data/
    ├── bbc-words.ts           # 804 kelime (BBC 800 + Türkçe çeviriler)
    ├── content.ts             # 20 senaryo + 17 dinleme
    ├── sentences.ts           # ~150 cümle (5 kategori + 30 Apple Store)
    ├── conversations.ts       # 10 konuşma senaryosu
    └── grammar.ts             # 5 gramer konusu + ~57 soru
public/
└── logo.svg                   # ⚡ BlitzPrep şimşek logosu
```

---

## ✅ Temel Özellikler

### 1. İlerleme Takibi (useProgress hook)
- `localStorage` tabanlı
- **Leitner Sistemi**: Bildim → seviye +1 (max 5), Bilemedim → 0
- Tekrar aralıkları: 1dk → 5dk → 30dk → 24sa → 3gün → 7gün
- **Streak**: Her gün pratik = seri artar, 1 gün atlama = sıfırlanır
- **Günlük hedef**: Varsayılan 20 aktivite/gün

### 2. Kelime Kartları (Vocabulary)
- **804 kelime** (BBC 800 + British Slang + İş İngilizcesi)
- **Bildim** (sağda, yeşil) / **Bilemedim** (solda, kırmızı)
- Basınca 1.5sn sonra otomatik sonraki kelimeye geçiş
- **Ön yüz**: İngilizce kelime + İngilizce örnek cümle
- **Arka yüz**: Türkçe anlam + İngilizce cümle + Türkçe çeviri
- Varsayılan karışık sıralama (seeded shuffle)
- Due words filtresi (sadece tekrarı gerekenler)
- Seviye göstergesi (6 nokta)

### 3. Gramer (5 konu, ~57 soru)
- Tenses (12), Articles (10), Prepositions (12), Modals (10), Conditionals (10)
- 4 seçenek, doğru/yanlış + detaylı Türkçe açıklama
- Yanlış cevapta doğru cevap yeşil gösterilir

### 4. Quiz (3 mod)
- Kelime Quiz / Gramer Quiz / Karışık Quiz
- 10/20/30 soru seçenekleri
- Sonuç ekranı: skor, doğruluk %, tekrar dene

### 5. Senaryolar (20 diyalog)
- 10 günlük yaşam + 10 Apple Store yöneticisi
- Çoktan seçmeli diyalog + açıklama
- Tamamlanan senaryolarda ✅ badge

### 6. Cümle Kurucu (~150 cümle)
- 5 kategori: Günlük, İş, Apple, Seyahat, Sosyal
- Türkçe → İngilizce yazma pratiği
- Seviye seviye ipuçları, sesli okuma (en-GB)

### 7. Konuşma Pratiği (10 senaryo)
- 6 genel + 4 Apple Store
- Serbest yazma, anahtar kelime kontrolü

---

## 🎨 Arayüz
- **Header**: Logo (28px) + "BlitzPrep" (1.25rem), tıklanabilir → anasayfa
- **Bottom nav**: 7 öğe, yatay kaydırmalı tek satır (kompakt)
- **Content padding**: 4rem alt (nav çakışma önleme)
- Responsive (max-width: 600px)

---

## 📊 İçerik Özeti

| Modül | İçerik |
|-------|--------|
| Kelime Kartları | 804 kelime (BBC 800 + Slang + İş) |
| Senaryolar | 20 diyalog |
| Cümle Kurucu | ~150 cümle |
| Konuşma Pratiği | 10 senaryo |
| Gramer | 5 konu, ~57 soru |
| Quiz | 3 mod (kelime/gramer/karışık) |

---

## 🚀 Build & Deploy

```bash
npm install
npm run dev      # Geliştirme
npm run build    # Prod build → dist/ klasörü
npm run lint     # Lint kontrolü
```

- `dist/` klasöründeki tüm dosyalar statik hosting'e yüklenir
- `.htaccess` ile SPA routing (tüm istekler index.html'e)
- `vite.config.ts` → `base: './'` (göreceli yollar)

---

## 📝 Notlar

- Tüm veriler localStorage'da
- Speech Synthesis API ile British English (en-GB)
- Lint ve Build temiz ✅
- GitHub: https://github.com/BlitzHan/blitzprep

---

## 🚀 Gelecek Planlar (Öncelik Sırasıyla)

### Yüksek Öncelik
1. **PWA Desteği** — Offline çalışma, telefona yükleme
2. **Telaffuz Pratiği** — Speech Recognition API ile konuşma doğrulama
3. **Gramer Konularını Genişletme** — Passive voice, reported speech, relative clauses
4. **Apple Store İçeriğini Artırma** — Daha fazla senaryo, cümle, konuşma

### Orta Öncelik
5. **Seviye Sistemi** — A1, A2, B1, B2 seviye tespiti
6. **Haftalık Rapor** — Hangi konularda güçlü/zayıf olduğun
7. **Karanlık Mod** — Gece çalışması için dark theme

### Düşük Öncelik
8. **Sosyal Özellikler** — Arkadaşla yarışma, skor tablosu
9. **Sesli Komutlar** — "Sonraki", "Önceki" sesli kontrol
10. **İstatistik Grafikleri** — Haftalık/aylık ilerleme grafikleri
11. **Export/Import** — İlerleme yedekleme
