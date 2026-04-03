import { bbcVocabulary } from './bbc-words';

export const vocabulary = [
  // Günlük ve Sosyal İngilizce (British Slang & Daily)
  { word: "Cheers", phonetic: "[Çiyrz]", meaning: "Teşekkürler / Şerefe / Hoşça kal", example: "Cheers, mate! See you tomorrow.", context: "Günlük" },
  { word: "Mate", phonetic: "[Meyt]", meaning: "Arkadaş, dost (çok yaygın hitap)", example: "All right, mate?", context: "Günlük" },
  { word: "Brilliant", phonetic: "[Brilyınt]", meaning: "Harika, çok iyi, müthiş", example: "That's a brilliant idea.", context: "Günlük/İş" },
  { word: "Mind the gap", phonetic: "[Maynd dı gep]", meaning: "Metro ile peron arasındaki boşluğa dikkat edin", example: "Please mind the gap between the train and the platform.", context: "Seyahat" },
  { word: "Sorted", phonetic: "[Sortıd]", meaning: "Halledildi, ayarlandı, sorun çözüldü", example: "I've sent the email. It's all sorted.", context: "İş/Günlük" },
  { word: "Quid", phonetic: "[Kuid]", meaning: "Pound (£) için kullanılan yaygın argo (Çoğul eki almaz)", example: "That coffee cost me four quid.", context: "Günlük" },
  { word: "Fiver / Tenner", phonetic: "[Fayvır / Tenır]", meaning: "5 Pound / 10 Pound banknot", example: "Can you lend me a tenner?", context: "Günlük" },
  { word: "Posh", phonetic: "[Poş]", meaning: "Lüks, havalı veya üst sınıf", example: "We went to a very posh restaurant in Mayfair.", context: "Günlük" },
  { word: "Knackered", phonetic: "[Nekırd]", meaning: "Çok yorgun, bitkin, tükenmiş", example: "I was absolutely knackered after the long flight.", context: "Günlük" },
  { word: "Loo", phonetic: "[Luu]", meaning: "Tuvalet (Tuvalet nerede diye sorarken sıkça kullanılır)", example: "I just need to pop to the loo.", context: "Günlük" },
  { word: "Queue", phonetic: "[Kyu]", meaning: "Sıra, kuyruk", example: "Are you in the queue?", context: "Günlük" },
  { word: "Rubbish", phonetic: "[Rabiş]", meaning: "Çöp VEYA Saçmalık/Kötü", example: "The weather today is absolutely rubbish.", context: "Günlük" },
  { word: "Tube", phonetic: "[Tyuub]", meaning: "Londra Metrosu", example: "I'll take the tube to the office.", context: "Seyahat" },
  { word: "Cuppa", phonetic: "[Kapa]", meaning: "Bir fincan çay (Cup of tea'nin kısaltması)", example: "Fancy a cuppa?", context: "Günlük" },
  { word: "Fancy", phonetic: "[Fensi]", meaning: "İstemek, canı çekmek", example: "Do you fancy going to the pub after work?", context: "Günlük/Sosyal" },
  { word: "Gutted", phonetic: "[Gatıd]", meaning: "Çok üzgün, hayal kırıklığına uğramış", example: "I was gutted when my team lost the match.", context: "Günlük" },
  { word: "Dodgy", phonetic: "[Doci]", meaning: "Şüpheli, tekin olmayan, bozuk", example: "Don't eat that meat, it looks a bit dodgy.", context: "Günlük" },
  { word: "Chuffed", phonetic: "[Çaft]", meaning: "Çok memnun, gururlu", example: "I'm absolutely chuffed with my new job.", context: "Günlük" },
  { word: "Banter", phonetic: "[Bentır]", meaning: "Şakalaşma, takılma (İngiliz ofis kültürünün vazgeçilmezi)", example: "It's just a bit of office banter, don't take it seriously.", context: "İş/Sosyal" },
  { word: "Cheeky", phonetic: "[Çiiki]", meaning: "Yaramaz, arsız ama sevimli", example: "Let's go for a cheeky pint after work.", context: "Sosyal" },
  { word: "Gobsmacked", phonetic: "[Gobsmekt]", meaning: "Şok olmuş, ağzı açık kalmış", example: "I was gobsmacked when they offered me the promotion.", context: "Günlük" },
  { word: "Skint", phonetic: "[Skint]", meaning: "Parasız, meteliksiz", example: "I can't come out tonight, I'm completely skint until payday.", context: "Günlük" },
  { word: "Bloke", phonetic: "[Blouk]", meaning: "Adam, herif (guy kelimesinin İngilizcesi)", example: "He is a really nice bloke.", context: "Günlük" },
  // İş İngilizcesi
  { word: "Catch up", phonetic: "[Keç ap]", meaning: "Kısa görüşme / arayı kapatma", example: "Let's have a quick catch-up on Monday.", context: "İş" },
  { word: "To action", phonetic: "[Tu ekşın]", meaning: "Bir şeyi işleme almak", example: "Can you action this email by end of day?", context: "İş" },
  { word: "Touch base", phonetic: "[Taç beys]", meaning: "Kısa temas kurmak, durum değerlendirmek", example: "Let's touch base next week.", context: "İş" },
  { word: "Annual leave", phonetic: "[Enyuıl liiv]", meaning: "Yıllık izin", example: "I am on annual leave next week.", context: "İş" },
  { word: "Line manager", phonetic: "[Layn menıcır]", meaning: "İlk amir, doğrudan yönetici", example: "You need approval from your line manager.", context: "İş" },
  { word: "Sick leave", phonetic: "[Sik liiv]", meaning: "Hastalık izni", example: "John is on sick leave today.", context: "İş" },
  { word: "Payslip", phonetic: "[Peyslip]", meaning: "Maaş bordrosu", example: "You can view your payslip on the HR portal.", context: "İş" },
  { word: "CV", phonetic: "[Sii Vii]", meaning: "Özgeçmiş (İngiltere'de Resume yerine CV)", example: "Please send your updated CV.", context: "İş" },
  { word: "Probation", phonetic: "[Probeyşın]", meaning: "Deneme süresi", example: "There is a three-month probation period.", context: "İş" },
  { word: "Redundant", phonetic: "[Rıdandınt]", meaning: "Pozisyonun kapanmasıyla işten çıkarma", example: "50 staff were made redundant.", context: "İş" },
  // Amerikan vs İngiliz Farkları
  { word: "Lift", phonetic: "[Lift]", meaning: "Asansör (US: Elevator)", example: "Let's take the lift to the 5th floor.", context: "Farklar" },
  { word: "Flat", phonetic: "[Flet]", meaning: "Daire (US: Apartment)", example: "I rent a small flat in zone 2.", context: "Farklar" },
  { word: "Biscuit", phonetic: "[Biskit]", meaning: "Bisküvi/Kurabiye (US: Cookie)", example: "Would you like a biscuit with your tea?", context: "Farklar" },
  { word: "Chips", phonetic: "[Çips]", meaning: "Kalın patates kızartması (US: Fries)", example: "I'll have fish and chips.", context: "Farklar" },
  { word: "Crisps", phonetic: "[Krisps]", meaning: "Paket cips (US: Chips)", example: "Can you buy cheese and onion crisps?", context: "Farklar" },
  { word: "Pavement", phonetic: "[Peyvmınt]", meaning: "Kaldırım (US: Sidewalk)", example: "Don't ride your bike on the pavement.", context: "Farklar" },
  { word: "Rubbish bin", phonetic: "[Rabiş bin]", meaning: "Çöp kutusu", example: "Throw that in the rubbish bin.", context: "Farklar" },
  // BBC Words
  ...bbcVocabulary,
];

export const scenarios = [
  {
    id: 1,
    title: "Pub'da İçecek Siparişi",
    description: "İş çıkışı arkadaşlarınla bir pub'a gittin.",
    dialogue: [
      { speaker: "Bartender", text: "What can I get you, mate?" },
      {
        speaker: "You",
        options: ["I want a beer.", "A pint of lager, please.", "Give me drink."],
        correctIndex: 1,
        explanation: "'A pint of lager, please' pub'larda en doğal ve kibar sipariş şeklidir. 'I want' çok kaba durabilir."
      },
      { speaker: "Bartender", text: "There you go. That's £5.50." },
      {
        speaker: "You",
        options: ["Here.", "Do you take contactless?", "I will give you cash."],
        correctIndex: 1,
        explanation: "'Do you take contactless?' veya 'Can I pay by card?' en doğal kalıptır."
      }
    ]
  },
  {
    id: 2,
    title: "Ofiste İlk Gün Tanışması",
    description: "Yeni ofisinde ilk günün ve bir iş arkadaşınla tanışıyorsun.",
    dialogue: [
      { speaker: "Colleague", text: "Hi, I'm Sarah from Marketing. You must be the new intern." },
      {
        speaker: "You",
        options: ["Yes. I am from Turkey.", "Hi Sarah, nice to meet you. I just started today.", "I am intern."],
        correctIndex: 1,
        explanation: "'Nice to meet you' ile başlamak profesyonel ve sıcak bir izlenim bırakır."
      },
      { speaker: "Colleague", text: "Welcome! How was your journey?" },
      {
        speaker: "You",
        options: ["The flight was good but I'm a bit jet-lagged.", "It was very long and boring.", "I don't know."],
        correctIndex: 0,
        explanation: "Small talk yaparken pozitif ama samimi olmak iyi bir izlenim bırakır."
      }
    ]
  },
  {
    id: 3,
    title: "Market Alışverişi",
    description: "Süpermarkette alışveriş yapıyorsun.",
    dialogue: [
      { speaker: "Cashier", text: "Good afternoon. Did you find everything okay?" },
      {
        speaker: "You",
        options: ["Yes, thanks.", "I need more shopping.", "Give me the things."],
        correctIndex: 0,
        explanation: "'Yes, thanks' veya 'Yes, everything is great' en doğal cevaptır."
      },
      { speaker: "Cashier", text: "That'll be £15.40. Would you like a bag?" },
      {
        speaker: "You",
        options: ["No, I have my own bag, thanks.", "Give bag.", "I don't want bag."],
        correctIndex: 0,
        explanation: "İngiltere'de kendi poşetini getirmek yaygın ve çevreci bir alışkanlık."
      }
    ]
  },
  {
    id: 4,
    title: "Tube (Metro) ile Ulaşım",
    description: "London metrosunda bilet alıyorsun.",
    dialogue: [
      { speaker: "Staff", text: "Where are you heading today?" },
      {
        speaker: "You",
        options: ["I'm going to King's Cross.", "I go King's Cross.", "Take me to King's Cross."],
        correctIndex: 0,
        explanation: "'I'm going to...' en doğal ve yaygın ifadedir."
      },
      { speaker: "Staff", text: "A single or a return?" },
      {
        speaker: "You",
        options: ["Single, please.", "One only.", "I don't know what you mean."],
        correctIndex: 0,
        explanation: "İngiltere'de 'single' = tek yön, 'return' = gidiş-dönüş. 'Single, please' en doğal kalıptır."
      }
    ]
  },
  {
    id: 5,
    title: "Restoran Siparişi",
    description: "Bir restoranda masa siparişi veriyorsun.",
    dialogue: [
      { speaker: "Waiter", text: "Are you ready to order?" },
      {
        speaker: "You",
        options: ["I want the chicken.", "Could I have the chicken, please?", "Give me chicken."],
        correctIndex: 1,
        explanation: "'Could I have...' restoranda sipariş verirken en kibar ve doğal kalıptır."
      },
      { speaker: "Waiter", text: "Would you like anything to drink?" },
      {
        speaker: "You",
        options: ["Water.", "Can I have a glass of water, please?", "Drink water."],
        correctIndex: 1,
        explanation: "'Can I have... please?' restoran ortamında en uygun ifadedir."
      }
    ]
  },
  {
    id: 6,
    title: "Doktor Randevusu (GP)",
    description: "İngiltere'de bir GP (Genel Pratisyen) muayenesine gittin.",
    dialogue: [
      { speaker: "Receptionist", text: "Good morning. How can I help you?" },
      {
        speaker: "You",
        options: ["I need a doctor.", "I'd like to see the doctor, please.", "Doctor now."],
        correctIndex: 1,
        explanation: "'I'd like to see the doctor, please' kibar ve net bir ifadedir."
      },
      { speaker: "Receptionist", text: "Are you registered with this practice?" },
      {
        speaker: "You",
        options: ["Yes, I registered last week.", "I registered.", "Yes registered me."],
        correctIndex: 0,
        explanation: "'I registered last week' doğal ve gramer olarak doğrudur."
      },
      { speaker: "Doctor", text: "So, what seems to be the problem?" },
      {
        speaker: "You",
        options: ["I have a bad headache and a sore throat.", "Head hurts and throat hurts.", "I am sick."],
        correctIndex: 0,
        explanation: "Doktora症状 belirtirken tam cümleler kullanmak daha profesyoneldir."
      }
    ]
  },
  {
    id: 7,
    title: "İş Toplantısında Fikir Belirtme",
    description: "Haftalık ekip toplantısındasın ve fikrini soruyorlar.",
    dialogue: [
      { speaker: "Manager", text: "What are your thoughts on this, Yelda?" },
      {
        speaker: "You",
        options: ["I think we should try the new approach.", "I am good idea.", "Maybe not bad."],
        correctIndex: 0,
        explanation: "'I think we should...' toplantıda fikir belirtirken en doğal kalıptır."
      },
      { speaker: "Manager", text: "That's interesting. Can you elaborate?" },
      {
        speaker: "You",
        options: ["Well, the new approach could save us time and money.", "Yes good because time money.", "It is good thing."],
        correctIndex: 0,
        explanation: "Toplantıda 'elaborate' = detaylandır demek. Net ve profesyonel cevap ver."
      }
    ]
  },
  {
    id: 8,
    title: "Apple Eğitiminde Tanışma",
    description: "Apple'daki eğitim programının ilk gününde grupla tanışıyorsun.",
    dialogue: [
      { speaker: "Trainer", text: "Welcome everyone! Let's go round the table — name and role, please." },
      {
        speaker: "You",
        options: [
          "Hi, I'm Yelda. I'm a developer from Turkey.",
          "Yelda, Turkey.",
          "My name Yelda. I come Turkey."
        ],
        correctIndex: 0,
        explanation: "'I'm [name]. I'm a [role] from [country]' en doğal ve profesyonel tanışma kalıbıdır."
      },
      { speaker: "Trainer", text: "Lovely to have you here, Yelda! What experience do you have with Swift?" },
      {
        speaker: "You",
        options: [
          "I'm still learning the basics, but I've completed several tutorials.",
          "I learning Swift.",
          "I am learning Swift basic."
        ],
        correctIndex: 0,
        explanation: "'I'm still learning the basics' samimi ve profesyonel. Seviyeni doğru ifade etmek önemli."
      }
    ]
  },
  {
    id: 9,
    title: "Otel Check-in",
    description: "Oteline vardın ve check-in yapıyorsun.",
    dialogue: [
      { speaker: "Receptionist", text: "Good afternoon! Checking in?" },
      {
        speaker: "You",
        options: ["Yes, I have a booking under Yelda.", "Yes check in me.", "I am stay here."],
        correctIndex: 0,
        explanation: "'I have a booking under [name]' otel check-in'de standart ve doğal ifadedir."
      },
      { speaker: "Receptionist", text: "Could I see your passport, please?" },
      {
        speaker: "You",
        options: ["Sure, here you go.", "Yes passport.", "Take it."],
        correctIndex: 0,
        explanation: "'Sure, here you go' veya 'Of course, here you are' belge verirken en doğal ifadedir."
      },
      { speaker: "Receptionist", text: "Your room is on the third floor. Breakfast is from 7 to 10. Anything else?" },
      {
        speaker: "You",
        options: ["That's all, thank you.", "Nothing more thanks.", "No. Bye."],
        correctIndex: 0,
        explanation: "'That's all, thank you' kibar ve doğal kapanıştır."
      }
    ]
  },
  {
    id: 10,
    title: "İngiliz Arkadaşınla Sohbet (Small Talk)",
    description: "İş çıkışı bir arkadașınla havadan sudan konuşuyorsun.",
    dialogue: [
      { speaker: "Friend", text: "How are you finding London so far?" },
      {
        speaker: "You",
        options: [
          "It's brilliant! A bit busy, but I love it.",
          "London good city.",
          "I am finding London well."
        ],
        correctIndex: 0,
        explanation: "'It's brilliant!' İngilizlerin çok kullandığı doğal bir olumlu ifadedir."
      },
      { speaker: "Friend", text: "Have you been to any good pubs around here?" },
      {
        speaker: "You",
        options: [
          "Not yet. Could you recommend one?",
          "I don't go pub.",
          "No pub for me."
        ],
        correctIndex: 0,
        explanation: "'Could you recommend...?' tavsiye isterken en kibar ve yaygın kalıptır."
      }
    ]
  },
  {
    id: 11,
    title: "Mağaza Açılışı (Store Opening)",
    description: "Sabah mağazayı açıyorsun ve ekibe günlük briefing veriyorsun.",
    dialogue: [
      { speaker: "You", text: "Good morning, team. Let's have a quick huddle before we open." },
      {
        speaker: "You",
        options: [
          "Today our focus is on customer experience. Let's aim for an NPS of 75.",
          "Today we sell many. Work hard.",
          "Today is good day. Let's go."
        ],
        correctIndex: 0,
        explanation: "Mağaza müdürü olarak net hedefler koymak önemlidir. NPS (Net Promoter Score) Apple'da kritik bir KPI'dır."
      },
      { speaker: "Team Member", text: "What's our main focus area today?" },
      {
        speaker: "You",
        options: [
          "We need to improve our attachment rate on Apple Care+ and drive Today at Apple sign-ups.",
          "We sell everything. All products.",
          "Just help customers."
        ],
        correctIndex: 0,
        explanation: "Apple'da 'attachment rate' (ek ürün satışı) ve 'Today at Apple' katılımı önemli metriklerdir."
      },
      { speaker: "Team Member", text: "Got it. Any updates on staffing?" },
      {
        speaker: "You",
        options: [
          "Sarah is on annual leave today, so we'll need extra coverage on the floor during lunch hours.",
          "Sarah not here. We work more.",
          "No Sarah today."
        ],
        correctIndex: 0,
        explanation: "Personel planlaması mağaza müdürünün temel sorumluluklarındandır."
      }
    ]
  },
  {
    id: 12,
    title: "Müşteri Şikayeti - Ürün İadesi",
    description: "Bir müşteri iPhone'unu iade etmek istiyor, oldukça kızgın.",
    dialogue: [
      { speaker: "Customer", text: "I've been waiting for 20 minutes! This is absolutely ridiculous. I want to return this iPhone — it keeps freezing." },
      {
        speaker: "You",
        options: [
          "I completely understand your frustration, and I'm really sorry for the wait. Let me help you right away.",
          "You need to wait. It's busy today.",
          "Calm down, please. We will help."
        ],
        correctIndex: 0,
        explanation: "Empati + özür + aksiyon = etkili müşteri şikayeti yönetimi. 'Calm down' demek durumu kötüleştirir."
      },
      { speaker: "Customer", text: "I bought it last week and it's already having issues. This is unacceptable." },
      {
        speaker: "You",
        options: [
          "I understand. Under our 14-day return policy, we can process a full refund or exchange. Let me take a look at the device first.",
          "You can return. Go to counter.",
          "It's not our fault. It's Apple problem."
        ],
        correctIndex: 0,
        explanation: "Apple'ın 14 günlük iade politikasını bilmek ve müşteriye net bilgi vermek önemlidir."
      },
      { speaker: "Customer", text: "Fine. I just want this sorted out." },
      {
        speaker: "You",
        options: [
          "Absolutely, I'll make sure we get this resolved for you today. Let me check the device and we'll go from there.",
          "OK wait here.",
          "We see. Wait."
        ],
        correctIndex: 0,
        explanation: "'I'll make sure we get this resolved' güven verir. 'Sorted' İngiliz İngilizcesinde 'halledildi' demektir."
      }
    ]
  },
  {
    id: 13,
    title: "1-on-1 Performans Görüşmesi",
    description: "Bir ekip üyesiyle birebir performans görüşmesi yapıyorsun.",
    dialogue: [
      { speaker: "You", text: "Thanks for making time. I'd like to check in on how things are going and discuss your goals." },
      {
        speaker: "Team Member",
        text: "Sure, happy to chat. How have I been doing?"
      },
      {
        speaker: "You",
        options: [
          "Overall, you've been doing really well. Your customer feedback scores are excellent. One area to develop is your attachment rate on services.",
          "You good but need sell more Apple Care.",
          "Your numbers are bad. Fix it."
        ],
        correctIndex: 0,
        explanation: "Apple kültüründe 'feedback sandwich' kullanılır: olumlu → gelişim alanı → olumlu."
      },
      { speaker: "Team Member", text: "That makes sense. What would you suggest I work on?" },
      {
        speaker: "You",
        options: [
          "I'd recommend focusing on understanding each customer's needs first, then naturally introducing Apple Care+ as a solution.",
          "You must sell Apple Care to every customer.",
          "Just ask everyone to buy Apple Care."
        ],
        correctIndex: 0,
        explanation: "Apple'da baskıcı satış yerine ihtiyaç bazlı danışmanlık yaklaşımı benimsenir."
      }
    ]
  },
  {
    id: 14,
    title: "KPI Hedef Belirleme",
    description: "Bölge müdürüyle haftalık KPI değerlendirmesi yapıyorsun.",
    dialogue: [
      { speaker: "Area Manager", text: "How did the store perform last week against targets?" },
      {
        speaker: "You",
        options: [
          "We exceeded our revenue target by 8%, but our NPS dropped slightly to 72. We're working on a recovery plan.",
          "We good. Everything fine.",
          "Revenue up. NPS down. We fix."
        ],
        correctIndex: 0,
        explanation: "KPI görüşmelerinde net rakamlar ve aksiyon planları sunmak profesyonellik göstergesidir."
      },
      { speaker: "Area Manager", text: "What's driving the NPS decline?" },
      {
        speaker: "You",
        options: [
          "The main feedback point is wait times during peak hours. We're adjusting our roster to ensure better floor coverage.",
          "Customers waiting too long. We change schedule.",
          "Too many customers. Not enough staff."
        ],
        correctIndex: 0,
        explanation: "Sorunu tanımlayıp çözüm sunmak mağaza müdürünün liderlik becerisini gösterir."
      }
    ]
  },
  {
    id: 15,
    title: "Genius Bar Koordinasyonu",
    description: "Genius Bar teknisyeni ile yoğun bir gün hakkında konuşuyorsun.",
    dialogue: [
      { speaker: "Genius Bar Tech", text: "Hey, we're completely backlogged today. There are 30 pending repairs and the queue keeps growing." },
      {
        speaker: "You",
        options: [
          "I can see that. Let me pull two specialists from the floor to help with diagnostics. Can you prioritise urgent cases?",
          "Just work faster. We need clear queue.",
          "It's not my problem. Handle it."
        ],
        correctIndex: 0,
        explanation: "Kaynak yönlendirmesi ve önceliklendirme mağaza müdürünün operasyonel becerileridir."
      },
      { speaker: "Genius Bar Tech", text: "That would help. Also, we need more replacement screens for iPhone 15." },
      {
        speaker: "You",
        options: [
          "I'll check the inventory and place an emergency order if needed. I'll get back to you within the hour.",
          "I check stock. Maybe order.",
          "We don't have screens."
        ],
        correctIndex: 0,
        explanation: "'Emergency order' ve 'inventory' Apple mağaza operasyonlarında sık kullanılan terimlerdir."
      }
    ]
  },
  {
    id: 16,
    title: "Yeni Çalışan Oryantasyonu",
    description: "İlk gününde yeni bir ekip üyesini karşılıyorsun.",
    dialogue: [
      { speaker: "You", text: "Welcome to the team! I'm Yelda, the store manager. How are you settling in?" },
      {
        speaker: "New Employee",
        text: "Thanks! It's a bit overwhelming but exciting."
      },
      {
        speaker: "You",
        options: [
          "That's completely normal. You'll be paired with James as your buddy for the first two weeks. Don't hesitate to ask any questions.",
          "It's normal. James help you. Ask questions.",
          "Don't worry. You learn fast."
        ],
        correctIndex: 0,
        explanation: "Apple'da 'buddy system' yaygındır. Yeni çalışanlara mentor atanır."
      },
      { speaker: "New Employee", text: "That sounds great. What should I focus on in my first week?" },
      {
        speaker: "You",
        options: [
          "Focus on learning our product range and customer engagement approach. The technical skills will come with practice.",
          "Learn products. Sell things. Talk customers.",
          "Just watch others and copy."
        ],
        correctIndex: 0,
        explanation: "Apple'da önce ürün bilgisi ve müşteri ilişkileri, sonra teknik beceriler öğrenilir."
      }
    ]
  },
  {
    id: 17,
    title: "Vardiya Planlaması (Rostering)",
    description: "Haftalık vardiya planını hazırlıyorsun.",
    dialogue: [
      { speaker: "Team Member", text: "Hi, I'd like to request next Friday off. I have a dentist appointment." },
      {
        speaker: "You",
        options: [
          "No problem, I'll put that in as annual leave. I'll make sure we have cover for the afternoon shift.",
          "OK you not come Friday.",
          "Friday is busy. You must come."
        ],
        correctIndex: 0,
        explanation: "Esneklik ve planlama mağaza müdürünün dengelemesi gereken iki önemli beceridir."
      },
      { speaker: "Team Member", text: "Thanks! Also, can I swap my shift with Sarah next Tuesday?" },
      {
        speaker: "You",
        options: [
          "As long as Sarah agrees and we maintain minimum floor coverage, that should be fine. Please confirm with her and update the roster.",
          "Maybe. I check.",
          "No swaps allowed."
        ],
        correctIndex: 0,
        explanation: "Apple'da vardiya değişimleri mümkündür ancak minimum personel gereksinimi karşılanmalıdır."
      }
    ]
  },
  {
    id: 18,
    title: "Lansman Günü Hazırlığı",
    description: "Yeni iPhone lansman günü öncesi ekip hazırlığı.",
    dialogue: [
      { speaker: "You", text: "Team, the new iPhone launches this Friday. We're expecting a busy weekend. Let's go through the plan." },
      {
        speaker: "Team Member",
        text: "Are we expecting a queue outside the store?"
      },
      {
        speaker: "You",
        options: [
          "Yes, we've had strong pre-order numbers. We'll have a dedicated launch team managing the queue and ensuring a great first impression.",
          "Yes many people. We open door morning.",
          "Maybe queue. We see."
        ],
        correctIndex: 0,
        explanation: "Apple lansmanlarında 'launch team' ve 'queue management' kritik operasyonel unsurlardır."
      },
      { speaker: "Team Member", text: "What about demo units? Are they all set up?" },
      {
        speaker: "You",
        options: [
          "All demo units are configured and running the latest software. The display team did a final check this morning.",
          "Yes all done. Demo ready.",
          "I think so. Maybe check."
        ],
        correctIndex: 0,
        explanation: "'Demo units' ve 'configured' Apple mağaza terminolojisinde sık kullanılan terimlerdir."
      }
    ]
  },
  {
    id: 19,
    title: "Today at Apple Etkinliği",
    description: "Mağazadaki 'Today at Apple' oturumunu yönetiyorsun.",
    dialogue: [
      { speaker: "Creative Pro", text: "The photography session is fully booked — 25 participants. Are we ready?" },
      {
        speaker: "You",
        options: [
          "Brilliant! The space is set up, iPads are charged, and we have enough accessories. Let's make it a great session.",
          "Yes ready. iPads charged. Good.",
          "I hope so. We try."
        ],
        correctIndex: 0,
        explanation: "'Brilliant' ve 'fully booked' İngiliz İngilizcesinde yaygın kullanılan ifadelerdir."
      },
      { speaker: "Creative Pro", text: "Should we prepare any handouts or materials?" },
      {
        speaker: "You",
        options: [
          "Yes, let's have the quick-start guides printed and ready. Also, make sure participants know how to sign up for future sessions.",
          "Yes print papers. Tell them sign up.",
          "Maybe print. Not sure."
        ],
        correctIndex: 0,
        explanation: "'Quick-start guides' ve 'sign up' Apple etkinliklerinde standart terimlerdir."
      }
    ]
  },
  {
    id: 20,
    title: "Acil Durum Yönetimi",
    description: "Mağazada elektrik kesintisi oldu, müşteriler ve ekip endişeli.",
    dialogue: [
      { speaker: "Team Member", text: "The power just went out! The till systems are down and we have customers waiting." },
      {
        speaker: "You",
        options: [
          "Stay calm, everyone. I'll contact building management right away. In the meantime, let's reassure customers and guide them safely.",
          "Don't panic! Everyone stay here.",
          "What happened? Fix it!"
        ],
        correctIndex: 0,
        explanation: "Acil durumlarda sakin kalmak ve net talimatlar vermek liderlik becerisinin göstergesidir."
      },
      { speaker: "Team Member", text: "Should we pause new entries and focus on the customers inside?" },
      {
        speaker: "You",
        options: [
          "Yes, that's the right call. Let's also switch to manual transaction mode for any urgent sales. I'll update you as soon as I hear from building management.",
          "Yes stop people coming in. We wait.",
          "OK do that."
        ],
        correctIndex: 0,
        explanation: "'Manual transaction mode' ve 'pause new entries' acil durum prosedürlerinde kullanılan ifadelerdir."
      }
    ]
  }
];

export const listeningPractices = [
  {
    id: 1,
    text: "Welcome aboard the Piccadilly Line service to Heathrow Terminals 2, 3 and 5. The next station is Earl's Court. Please mind the gap between the train and the platform.",
    question: "Metro hangi terminallere gidiyor?",
    options: ["Terminals 1, 2 and 3", "Terminals 2, 3 and 5", "Terminal 4 only"],
    correctIndex: 1
  },
  {
    id: 2,
    text: "Hi mate, just giving you a quick ring to say I'll be about 10 minutes late to the meeting. The traffic is absolutely mental today. See you in a bit. Cheers.",
    question: "Arayan kişi neden geç kalacak?",
    options: ["Uyuyakaldığı için", "Trafik çok kötü olduğu için", "Toplantı saatini unuttuğu için"],
    correctIndex: 1
  },
  {
    id: 3,
    text: "Good afternoon, this is a reminder that your GP appointment is scheduled for Friday the 14th at 10:30 AM at the Camden Health Centre. Please bring your NHS number and arrive 15 minutes early.",
    question: "Randevu hangi gün ve saatte?",
    options: ["Cuma, 10:30", "Pazartesi, 14:00", "Cuma, 14:30"],
    correctIndex: 0
  },
  {
    id: 4,
    text: "Hello and welcome to Tesco Express. Our store hours are 6 AM to 11 PM every day. We're currently running a special offer on tea and biscuits — buy one get one free on all brands this week.",
    question: "İndirim hangi ürünlerde var?",
    options: ["Meyve ve sebze", "Çay ve bisküvi", "Ekmek ve süt"],
    correctIndex: 1
  },
  {
    id: 5,
    text: "Right team, this week we're focusing on the user interface design for the new app. I want everyone to review the mock-ups before Thursday's stand-up meeting. Any questions, ping me on Slack.",
    question: "Cuma stand-up toplantısından önce ne yapılması gerekiyor?",
    options: ["Kod yazmak", "Mockup'ları gözden geçirmek", "Slack'ten mesaj göndermek"],
    correctIndex: 1
  },
  {
    id: 6,
    text: "Your train departing from Platform 4 at 11:45 to Manchester Piccadilly has been delayed by approximately 20 minutes due to signal failure. We apologise for the inconvenience.",
    question: "Tren neden gecikti?",
    options: ["Hava muhalefeti", "Sinyal arızası", "Personel grevi"],
    correctIndex: 1
  },
  {
    id: 7,
    text: "Hi, this is Jane from HR. Just a quick one — we've updated the company's remote working policy. You can now work from home up to three days a week. All the details are in the email I just sent.",
    question: "Artık haftada kaç gün evden çalışılabilecek?",
    options: ["Bir gün", "İki gün", "Üç gün"],
    correctIndex: 2
  },
  {
    id: 8,
    text: "Welcome to King's College Hospital. The A&E department is currently very busy with an average wait time of two hours. If your condition is not urgent, please consider visiting your local GP or pharmacy instead.",
    question: "Acil serviste ortalama bekleme süresi ne kadar?",
    options: ["30 dakika", "1 saat", "2 saat"],
    correctIndex: 2
  },
  {
    id: 9,
    text: "Today's forecast: mostly cloudy with scattered showers in the morning, clearing up by the afternoon. High of 12 degrees with a moderate westerly wind. Tomorrow looks brighter, with temperatures reaching 15 degrees.",
    question: "Yarın sıcaklık kaç derece olacak?",
    options: ["12 derece", "15 derece", "18 derece"],
    correctIndex: 1
  },
  {
    id: 10,
    text: "Welcome to the Apple Developer Training programme. Over the next five days, you'll be covering Swift fundamentals, Xcode workflow, and App Store guidelines. Please make sure your MacBook is updated to the latest macOS version before we begin.",
    question: "Eğitim kaç gün sürecek?",
    options: ["Üç gün", "Beş gün", "Yedi gün"],
    correctIndex: 1
  },
  {
    id: 11,
    text: "Excuse me sir, your Oyster card hasn't been tapped in properly. You need to make sure you touch the yellow card reader both when entering and exiting the station. It won't charge you a penalty fare if you tap correctly.",
    question: "Oyster kartı nasıl kullanılmalı?",
    options: [
      "Sadece girişte okutulmalı",
      "Giriş ve çıkışta sarı okuyucuya dokundurulmalı",
      "Sadece çıkışta okutulmalı"
    ],
    correctIndex: 1
  },
  {
    id: 12,
    text: "All right folks, the kitchen is closing in ten minutes. Last orders for food at ten. The bar stays open till eleven. Thank you for coming in tonight — hope to see you again soon.",
    question: "Bar saat kaçta kapanıyor?",
    options: ["22:00'de", "23:00'de", "23:30'da"],
    correctIndex: 1
  },
  {
    id: 13,
    text: "Good morning team, this is your store manager. Just a quick reminder — our morning briefing is at 9 AM sharp. We'll be covering today's targets, staffing updates, and the new iPhone display setup. Please be on the floor by 8:45.",
    question: "Sabah toplantısı saat kaçta?",
    options: ["08:45'te", "09:00'da", "09:30'da"],
    correctIndex: 1
  },
  {
    id: 14,
    text: "Hi, this is a message from the Genius Bar. Your iPhone screen repair is now complete. You can collect it from the Genius Bar desk at your convenience. The total cost for the repair was £129, which has been charged to your card on file.",
    question: "Tamir ücreti ne kadar?",
    options: ["£99", "£129", "£149"],
    correctIndex: 1
  },
  {
    id: 15,
    text: "Attention all staff: The new iOS update is now available. Before handing any demo devices to customers, please ensure they are updated to the latest version. The IT team has pushed the update overnight, so all devices should be ready.",
    question: "Demo cihazlar için ne yapılması gerekiyor?",
    options: [
      "Müşterilere hemen verilmeli",
      "En son sürüme güncellenmeli",
      "Kapatılmalı"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    text: "Team update: Our NPS score for this week is 76, up from 72 last week. Great work, everyone! Our attachment rate on Apple Care+ has also improved to 28%. Let's keep the momentum going and aim for 80 NPS by the end of the month.",
    question: "Apple Care+ ek satış oranı ne?",
    options: ["%22", "%26", "%28"],
    correctIndex: 2
  },
  {
    id: 17,
    text: "This is an urgent message for the store manager. The delivery for the new MacBook Pro stock has been delayed by 24 hours due to a logistics issue at the distribution centre. The new expected delivery is tomorrow at 2 PM instead of today.",
    question: "MacBook Pro teslimatı ne zaman gelecek?",
    options: ["Bugün", "Yarın saat 14:00'te", "Gelecek hafta"],
    correctIndex: 1
  },
  {
    id: 13,
    text: "Good morning team, this is your store manager. Just a quick reminder — our morning briefing is at 9 AM sharp. We'll be covering today's targets, staffing updates, and the new iPhone display setup. Please be on the floor by 8:45.",
    question: "Sabah toplantısı saat kaçta?",
    options: ["08:45'te", "09:00'da", "09:30'da"],
    correctIndex: 1
  },
  {
    id: 14,
    text: "Hi, this is a message from the Genius Bar. Your iPhone screen repair is now complete. You can collect it from the Genius Bar desk at your convenience. The total cost for the repair was £129, which has been charged to your card on file.",
    question: "Tamir ücreti ne kadar?",
    options: ["£99", "£129", "£149"],
    correctIndex: 1
  },
  {
    id: 15,
    text: "Attention all staff: The new iOS update is now available. Before handing any demo devices to customers, please ensure they are updated to the latest version. The IT team has pushed the update overnight, so all devices should be ready.",
    question: "Demo cihazlar için ne yapılması gerekiyor?",
    options: [
      "Müşterilere hemen verilmeli",
      "En son sürüme güncellenmeli",
      "Kapatılmalı"
    ],
    correctIndex: 1
  },
  {
    id: 16,
    text: "Team update: Our NPS score for this week is 76, up from 72 last week. Great work, everyone! Our attachment rate on Apple Care+ has also improved to 28%. Let's keep the momentum going and aim for 80 NPS by the end of the month.",
    question: "Apple Care+ ek satış oranı ne?",
    options: ["%22", "%26", "%28"],
    correctIndex: 2
  },
  {
    id: 17,
    text: "This is an urgent message for the store manager. The delivery for the new MacBook Pro stock has been delayed by 24 hours due to a logistics issue at the distribution centre. The new expected delivery is tomorrow at 2 PM instead of today.",
    question: "MacBook Pro teslimatı ne zaman gelecek?",
    options: ["Bugün", "Yarın saat 14:00'te", "Gelecek hafta"],
    correctIndex: 1
  },
];
