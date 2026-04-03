# UK Prep App — Yapılanlar & Yapılacaklar

## ✅ Tamamlananlar (2026-04-03)

### Faz 1: İlerleme Takibi + Spaced Repetition

#### 1. useProgress Hook Oluşturuldu
- **Dosya:** `src/hooks/useProgress.ts`
- **localStorage** tabanlı ilerleme takibi
- **Leitner Sistemi** (Spaced Repetition):
  - Seviye 0: 1 dakika → Seviye 1: 5dk → Seviye 2: 30dk → Seviye 3: 24sa → Seviye 4: 3gün → Seviye 5: 7gün
  - Bildim → seviye +1, Bilemedim → seviye 0'a sıfırlanır
- **Streak Sistemi**: Her gün pratik yapılırsa seri artar, 1 gün atlanırsa sıfırlanır
- **Günlük Hedef**: Varsayılan 20 aktivite/gün, değiştirilebilir

#### 2. Dashboard Güncellendi
- 🔥 Streak badge (seri gün sayısı)
- 📊 Günlük hedef progress bar (X/20)
- 🎯 Genel doğruluk oranı (%)
- 📚 Öğrenilen kelime sayısı
- Tüm modüller için hızlı erişim kartları (Cümleler, Konuşma, Gramer, Quiz eklendi)
- Tamamlanan senaryolar/dinlemeler için badge'ler

#### 3. Vocabulary (Kelime Kartları) Güncellendi
- ✅ **"Bildim"** (yeşil) / ❌ **"Bilemedim"** (kırmızı) butonları
- 🔀 **Karışık sıralama** toggle
- ⏰ **"Tekrar Zamanı Gelenler"** filtresi (sadece due words)
- 📊 Seviye göstergesi (6 nokta: ●●●○○○)
- Doğru/yanlış sayacı

#### 4. SentenceBuilder + Scenarios + Listening Güncellendi
- SentenceBuilder: `markSentence()` ile skor kaydetme
- Scenarios: Tamamlanınca `completeScenario()` + ✅ badge
- Listening: Tamamlanınca `completeListening()` + ✅ badge

### Faz 2: Gramer Alıştırmaları

#### 1. Gramer Verisi Oluşturuldu
- **Dosya:** `src/data/grammar.ts`
- **5 konu, toplam ~57 soru:**
  - **Tenses** (12 soru): Present Simple/Continuous, Past Simple, Future, Present Perfect
  - **Articles** (10 soru): a/an/the kullanımı
  - **Prepositions** (12 soru): in/on/at zaman ve yer
  - **Modal Verbs** (10 soru): can/could, should, must, may/might
  - **Conditionals** (10 soru): Type 0, 1, 2

#### 2. Gramer Modülü Oluşturuldu
- **Dosya:** `src/components/Grammar.tsx`
- Konu listesi ekranı (açıklama + soru sayısı + tamamlanma durumu)
- Quiz formatında sorular (4 seçenek)
- Her soru sonrası doğru/yanlış + detaylı açıklama
- Konu tamamlanınca skor özeti
- Tekrar dene seçeneği

### Faz 3: Quiz Modu

#### 1. Quiz Modülü Oluşturuldu
- **Dosya:** `src/components/Quiz.tsx`
- **3 mod:**
  - 📚 **Kelime Quiz**: Kelime → Türkçe anlam
  - 🧠 **Gramer Quiz**: Gramer soruları
  - 🎯 **Karışık Quiz**: Kelime + Gramer + Cümle bir arada
- **Soru sayısı:** 10 / 20 / 30 seçenekleri
- ⏱️ **Süreli mod** (opsiyonel, 30sn/soru)
- Sonuç ekranı: Skor, doğruluk oranı, tekrar dene

### Faz 4: Uygulama Yapısı Güncellendi

#### 1. App.tsx Güncellendi
- **8 sekmeye çıkarıldı:** Ana Sayfa | Kelimeler | Senaryolar | Cümleler | Konuşma | Dinleme | Gramer | Quiz
- Bottom nav: 4×2 grid layout (8 öğe)
- useProgress hook entegrasyonu

#### 2. CSS Güncellendi (`src/index.css`)
- `.streak-badge` — Streak göstergesi
- `.progress-bar` / `.progress-bar-fill` — İlerleme çubuğu
- `.stat-box` — İstatistik kutuları
- `.level-dots` / `.level-dot` — Seviye noktaları
- `.quiz-progress` / `.quiz-progress-dot` — Quiz ilerleme
- `.grammar-topic` — Gramer konu kartları
- `.quiz-timer` — Quiz süresi

---

## 📊 İçerik Özeti

| Modül | İçerik |
|-------|--------|
| Kelime Kartları | ~170 kelime (BBC 800 + British Slang) |
| Senaryolar | 20 diyalog senaryosu (10 günlük + 10 Apple Store) |
| Cümle Kurucu | ~150 cümle (5 kategori + 30 Apple Store) |
| Konuşma Pratiği | 10 konuşma senaryosu (6 genel + 4 Apple Store) |
| Dinleme | 17 alıştırma (12 genel + 5 Apple Store) |
| Gramer | 5 konu, ~57 soru |
| Quiz | Karışık (kelime + gramer + cümle) |

---

## 📁 Dosya Yapısı

```
src/
├── App.tsx                    # Ana uygulama (8 tab)
├── App.css                    # Stil dosyası
├── main.tsx                   # Entry point
├── index.css                  # Reset + dot pattern bg + yeni stiller
├── hooks/
│   └── useProgress.ts         # 🆕 İlerleme takibi + Spaced Repetition
├── components/
│   ├── Dashboard.tsx          # 🔄 Güncellendi (stats, streak, progress)
│   ├── Vocabulary.tsx         # 🔄 Güncellendi (bildim/bilemedim, due words)
│   ├── Scenarios.tsx          # 🔄 Güncellendi (completeScenario)
│   ├── Listening.tsx          # 🔄 Güncellendi (completeListening)
│   ├── SentenceBuilder.tsx    # 🔄 Güncellendi (markSentence)
│   ├── Conversation.tsx       # Serbest konuşma
│   ├── Grammar.tsx            # 🆕 Gramer alıştırmaları
│   └── Quiz.tsx               # 🆕 Quiz modu
└── data/
    ├── bbc-words.ts           # BBC kelimeleri
    ├── content.ts             # Senaryolar + Dinlemeler
    ├── sentences.ts           # Cümle verileri
    ├── conversations.ts       # Konuşma senaryoları
    └── grammar.ts             # 🆕 Gramer konuları + soruları
```

---

## 🎯 Özellikler

- ✅ localStorage ile kalıcı ilerleme takibi
- ✅ Leitner spaced repetition algoritması
- ✅ Günlük streak (seri) takibi
- ✅ Günlük hedef sistemi
- ✅ Bildim/Bilemedim butonları
- ✅ Due words (tekrarı gereken kelimeler) filtresi
- ✅ Karışık sıralama
- ✅ Gramer alıştırmaları (5 konu)
- ✅ Quiz modu (kelime, gramer, karışık)
- ✅ British English seslendirme (en-GB)
- ✅ Tamamlanan içerik badge'leri
- ✅ Responsive tasarım (max-width: 600px)
