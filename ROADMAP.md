# BlitzPrep — Proje Yol Haritası

> **BlitzPrep** — Hızlı İngilizce, Güçlü Başlangıç
> İngiltere'ye gidecek bir Apple Store Müdürü için İngilizce hazırlık uygulaması.

---

## ✅ Tamamlanan Özellikler

### 1. İlerleme Takibi & Spaced Repetition
- `useProgress` hook ile localStorage tabanlı ilerleme kaydı
- **Leitner Sistemi**: Bildim → seviye +1 (max 5), Bilemedim → seviye 0
- Tekrar aralıkları: 1dk → 5dk → 30dk → 24sa → 3gün → 7gün
- **Streak sistemi**: Her gün pratik = seri artar, 1 gün atlama = sıfırlanır
- **Günlük hedef**: Varsayılan 20 aktivite/gün, değiştirilebilir
- Dashboard'da streak badge, progress bar, doğruluk oranı, öğrenilen kelime sayısı

### 2. Kelime Kartları (Vocabulary)
- ~170 kelime (BBC 800 temelli + British Slang)
- **Bildim / Bilemedim** butonları (Bilemedim solda, Bildim sağda)
- Butona basınca 1.5sn sonra otomatik sonraki kelimeye geçiş
- Tıklandığında kelimenin altında **Türkçe çeviri + örnek cümle** gösterimi
- **Karışık sıralama** (varsayılan açık, seeded shuffle)
- **Due words filtresi**: Sadece tekrarı gereken kelimeler
- Seviye göstergesi (6 nokta: ●●●○○○)
- Doğru/yanlış sayacı

### 3. Gramer Alıştırmaları
- **5 konu, ~57 soru:**
  - Tenses (12 soru): Present Simple/Continuous, Past Simple, Future, Present Perfect
  - Articles (10 soru): a/an/the kullanımı
  - Prepositions (12 soru): in/on/at zaman ve yer
  - Modal Verbs (10 soru): can/could, should, must, may/might
  - Conditionals (10 soru): Type 0, 1, 2
- Her soru: 4 seçenek, doğru/yanlış + detaylı Türkçe açıklama
- Yanlış cevapta doğru cevap yeşil renkte gösterilir
- Konu tamamlanınca skor özeti + tekrar dene

### 4. Quiz Modu
- **3 mod:** Kelime Quiz, Gramer Quiz, Karışık Quiz
- Soru sayısı: 10 / 20 / 30 seçenekleri
- İlerleme noktaları, sonuç ekranı (skor, doğruluk %)
- Yanlış cevapta doğru cevap gösterimi

### 5. Senaryolar (Scenarios)
- **20 diyalog senaryosu:**
  - 10 günlük yaşam: Pub, ofis, market, tube, restoran, GP, toplantı, Apple eğitim, otel, small talk
  - 10 Apple Store: Mağaza açılışı, müşteri şikayeti, 1-on-1, KPI, Genius Bar, oryantasyon, vardiya, lansman, Today at Apple, acil durum
- Her senaryo: çoktan seçmeli diyalog + açıklama
- Tamamlanan senaryolarda ✅ badge

### 6. Cümle Kurucu (Sentence Builder)
- **~150 cümle** (5 kategori: Günlük, İş, Apple, Seyahat, Sosyal)
- **30 Apple Store spesifik cümle:** Mağaza yönetimi, ekip liderliği, müşteri ilişkileri, Apple terminolojisi
- Türkçe → İngilizce yazma pratiği
- Seviye seviye kelime ipuçları
- Doğru cevap sesli okunur (British English en-GB)
- Skor takibi

### 7. Konuşma Pratiği (Conversation)
- **10 konuşma senaryosu** (6 genel + 4 Apple Store)
- Apple Store: Müşteri şikayeti, bölge müdürü toplantısı, ekip koçluğu, Genius Bar
- Serbest yazma, anahtar kelime kontrolü, doğal örnek cevaplar
- Alt menü ile çakışma önlemek için padding-bottom eklendi

### 8. Arayüz & UX
- **BlitzPrep** markası + ⚡ şimşek logosu (SVG favicon + header)
- **7 öğeli bottom nav** (4+3 grid): Ana Sayfa, Kelimeler, Senaryolar, Cümleler, Konuşma, Gramer, Quiz
- Content-area padding-bottom: 6rem (alt menü ile çakışma önleme)
- Brutalist/UK tasarım teması
- Responsive tasarım (max-width: 600px)
- British English seslendirme (en-GB)

---

## 📊 Mevcut İçerik Özeti

| Modül | İçerik |
|-------|--------|
| Kelime Kartları | ~170 kelime |
| Senaryolar | 20 diyalog |
| Cümle Kurucu | ~150 cümle |
| Konuşma Pratiği | 10 senaryo |
| Gramer | 5 konu, ~57 soru |
| Quiz | 3 mod (kelime/gramer/karışık) |

---

## 📁 Dosya Yapısı

```
src/
├── App.tsx                    # Ana uygulama (7 tab, BlitzPrep)
├── App.css                    # Stil dosyası
├── main.tsx                   # Entry point
├── index.css                  # Reset + dot pattern + yeni stiller
├── hooks/
│   └── useProgress.ts         # İlerleme + Spaced Repetition
├── components/
│   ├── Dashboard.tsx          # Stats, streak, progress, hızlı erişim
│   ├── Vocabulary.tsx         # Kelime kartları (bildim/bilemedim, due words)
│   ├── Scenarios.tsx          # Diyalog senaryoları (20 adet)
│   ├── SentenceBuilder.tsx    # Cümle kurma (~150 cümle)
│   ├── Conversation.tsx       # Serbest konuşma (10 senaryo)
│   ├── Grammar.tsx            # Gramer alıştırmaları (5 konu)
│   └── Quiz.tsx               # Quiz modu (3 mod)
└── data/
    ├── bbc-words.ts           # BBC kelimeleri
    ├── content.ts             # Senaryolar + Dinlemeler
    ├── sentences.ts           # Cümle verileri
    ├── conversations.ts       # Konuşma senaryoları
    └── grammar.ts             # Gramer konuları + soruları
public/
└── logo.svg                   # BlitzPrep şimşek logosu
```

---

## 🚀 Gelecek Planlar (Öncelik Sırasıyla)

### Yüksek Öncelik
1. **PWA Desteği** — Offline çalışma, telefona yükleme
2. **Telaffuz Pratiği** — Speech Recognition API ile konuşma doğrulama
3. **Gramer Konularını Genişletme** — Passive voice, reported speech, relative clauses
4. **Apple Store İçeriğini Artırma** — Daha fazla senaryo, cümle, konuşma

### Orta Öncelik
5. **Kelime Kategorileri** — BBC 800 kelimenin tamamını ekleme
6. **Seviye Sistemi** — A1, A2, B1, B2 seviye tespiti
7. **Haftalık Rapor** — Hangi konularda güçlü/zayıf olduğun
8. **Karanlık Mod** — Gece çalışması için dark theme

### Düşük Öncelik
9. **Sosyal Özellikler** — Arkadaşla yarışma, skor tablosu
10. **Sesli Komutlar** — "Sonraki", "Önceki" sesli kontrol
11. **İstatistik Grafikleri** — Haftalık/aylık ilerleme grafikleri
12. **Export/Import** — İlerleme yedekleme

---

## 📝 Notlar

- Tüm veriler localStorage'da saklanıyor
- Speech Synthesis API ile British English (en-GB) seslendirme
- React 19 + TypeScript + Vite
- Lint ve Build temiz ✅
