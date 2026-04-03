export interface ConversationScenario {
  id: number;
  title: string;
  description: string;
  category: 'daily' | 'work' | 'apple' | 'travel' | 'social';
  setup: string; // scenario context
  turns: ConversationTurn[];
}

export interface ConversationTurn {
  speaker: string;
  text: string;
  // Expected patterns for evaluating user response (keywords/phrases)
  expectedKeywords: string[];
  modelResponses: string[]; // sample good responses shown after user writes
  audioText?: string; // what speech synthesis should read for the bot
}

export const conversations: ConversationScenario[] = [
  {
    id: 1,
    title: "Kahve Siparişi",
    description: "Bir kafede sipariş veriyorsun.",
    category: 'daily',
    setup: "Bir kafeye girdin ve sipariş vermek için sıraya girdin.",
    turns: [
      {
        speaker: "Barista",
        text: "Hi there! What can I get for you today?",
        expectedKeywords: ['coffee', 'tea', 'latte', 'cappuccino', 'please', 'like'],
        modelResponses: [
          "Could I have a flat white, please?",
          "I'd like a cappuccino, please.",
          "Can I get a black coffee, please?",
        ],
      },
      {
        speaker: "Barista",
        text: "Sure. Would you like hot or iced?",
        expectedKeywords: ['hot', 'iced'],
        modelResponses: [
          "Hot, please.",
          "Iced, please.",
        ],
      },
      {
        speaker: "Barista",
        text: "Anything else for you?",
        expectedKeywords: ['that', 'all', 'enough', 'thanks', 'thank'],
        modelResponses: [
          "That's all, thanks.",
          "No, that's it. Thank you.",
        ],
      },
      {
        speaker: "Barista",
        text: "That'll be three pounds twenty. Contactless is here.",
        expectedKeywords: ['here', 'card', 'thanks', 'thank', 'sure'],
        modelResponses: [
          "Here you go. Thanks!",
          "Sure, thanks.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "İş Toplantısı - Gündem Belirleme",
    description: "Takım toplantısında gündemi belirliyorsunuz.",
    category: 'work',
    setup: "Sabah ekip toplantısındasınız. Manager sizden toplantı gündemini belirlemenizi istiyor.",
    turns: [
      {
        speaker: "Manager",
        text: "Morning Yelda. Shall we kick off? What would you like to cover first?",
        expectedKeywords: ['let', 'start', 'begin', 'first', 'agenda', 'topic', 'update', 'status'],
        modelResponses: [
          "Let's start with the project status update.",
          "I'd like to go through the sprint tasks first.",
          "Can we begin with the design review?",
        ],
      },
      {
        speaker: "Manager",
        text: "Good idea. How are you getting on with the login feature?",
        expectedKeywords: ['going', 'well', 'progress', 'almost', 'nearly', 'finished', 'working', 'issue', 'problem'],
        modelResponses: [
          "It's coming along well. I'm nearly done with the UI part.",
          "Progress is good, but there's a small issue with the API integration.",
          "Almost finished. Just need to do some testing.",
        ],
      },
      {
        speaker: "Manager",
        text: "Right, let me know if you need any support. What else is on the agenda?",
        expectedKeywords: ['review', 'discuss', 'feedback', 'next', 'sprint', 'planning', 'deadline', 'timeline'],
        modelResponses: [
          "I'd like to discuss the deadline for the next release.",
          "Can we review the feedback from the design team?",
          "Let's touch base on the sprint planning for next week.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Swift Workshop - Soru Sorma",
    description: "Apple eğitiminde eğitmene soru soruyorsun.",
    category: 'apple',
    setup: "Swift dersindesiniz. Yeni bir konu anlatıldı ve soru sorma vakti.",
    turns: [
      {
        speaker: "Trainer",
        text: "That covers the basics of optionals. Any questions so far?",
        expectedKeywords: ['what', 'how', 'why', 'when', 'difference', 'mean', 'understand', 'example'],
        modelResponses: [
          "Could you explain the difference between if-let and guard statements?",
          "What happens if I force-unwrap a nil optional?",
          "Can you give another example of optional chaining?",
        ],
      },
      {
        speaker: "Trainer",
        text: "Great question. Let me walk through that with a quick example...",
        expectedKeywords: ['thanks', 'understand', 'clear', 'got', 'see'],
        modelResponses: [
          "That makes sense now, thank you.",
          "Ah, I see. That's much clearer now.",
          "Got it. I think I was missing the key point earlier.",
        ],
      },
      {
        speaker: "Trainer",
        text: "Right, next up we'll look at closures. Follow along in the Xcode project I shared.",
        expectedKeywords: ['ready', 'ok', 'go', 'let', 'start'],
        modelResponses: [
          "Ready. Let's go.",
          "Great, I have the project open.",
          "OK, I'm following along.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Tren İstasyonu - Yardım İsteme",
    description: "İstasyondasın ve hangi trene bineceğinden emin değilsin.",
    category: 'travel',
    setup: "Victoria İstasyonundasın. Gatwick Havalimanı'na gitmen gerekiyor ama hangi platformdan olduğunu bilmiyorsun.",
    turns: [
      {
        speaker: "You",
        text: "Excuse me, which platform is the Gatwick Express from?",
        expectedKeywords: ['excuse', 'sorry', 'platform', 'Gatwick', 'help', 'where'],
        modelResponses: [
          "Excuse me, which platform is the Gatwick Express from?",
          "Sorry, could you tell me the platform for Gatwick?",
          "Excuse me, where should I catch the train to Gatwick?",
        ],
      },
      {
        speaker: "Staff",
        text: "Gatwick Express departs from Platform 14. Next train is in 12 minutes.",
        expectedKeywords: ['thanks', 'thank', 'great', 'ok', 'helpful'],
        modelResponses: [
          "Brilliant, thank you very much!",
          "Great, thanks for your help.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Arkadaşla Hafta Sonu Planı",
    description: "İngiliz bir arkadaşınla hafta sonu için plan yapıyorsunuz.",
    category: 'social',
    setup: "İngiliz arkadaşınla mesajlaşıyorsun. Hafta sonu planı yapmak istiyor.",
    turns: [
      {
        speaker: "Friend",
        text: "Hey! Any plans for the weekend? Weather is supposed to be nice.",
        expectedKeywords: ['not', 'yet', 'sure', 'want', 'like', 'fancy', 'go', 'do'],
        modelResponses: [
          "Not yet! Fancy going for a walk in the park?",
          "I haven't made any plans. What do you have in mind?",
          "I'd love to do something outdoors. Any suggestions?",
        ],
      },
      {
        speaker: "Friend",
        text: "How about a pub lunch on Saturday? There's a great one near Hampstead Heath.",
        expectedKeywords: ['sounds', 'great', 'brilliant', 'love', 'yes', 'happy', 'sure', 'when', 'time'],
        modelResponses: [
          "Sounds brilliant! What time shall we meet?",
          "That sounds great, I'm in. What time works for you?",
          "I'd love that. Let me know what time and I'll see you there.",
        ],
      },
      {
        speaker: "Friend",
        text: "Shall we say 12:30 outside the tube station?",
        expectedKeywords: ['works', 'perfect', 'see', 'great', 'see'],
        modelResponses: [
          "Works for me. See you Saturday!",
          "Perfect! See you at 12:30 then.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "IT Support Çağırma",
    description: "Ofiste bilgisayarında sorun var, IT'den yardım istiyorsun.",
    category: 'work',
    setup: "Ofiste çalışıyorsun ama bilgisayarın internete bağlanmıyor.",
    turns: [
      {
        speaker: "IT Support",
        text: "IT support, this is Tom. How can I help?",
        expectedKeywords: ['internet', 'wifi', 'connect', 'problem', 'issue', 'work', 'not'],
        modelResponses: [
          "Hi Tom, my computer won't connect to the office Wi-Fi.",
          "Hello, I'm having trouble with my internet connection.",
          "Hi, my laptop can't connect to the network.",
        ],
      },
      {
        speaker: "IT Support",
        text: "No worries. Have you tried turning the Wi-Fi off and on again?",
        expectedKeywords: ['yes', 'tried', 'did', 'not', 'still', 'didn', 'work', 'didn work'],
        modelResponses: [
          "Yes, I tried that but it's still not working.",
          "I did try that, unfortunately it didn't help.",
        ],
      },
      {
        speaker: "IT Support",
        text: "Alright. Let me check your network profile. What's your asset number on the laptop?",
        expectedKeywords: ['laptop', 'number', 'asset', 'tag', 'serial', 'check'],
        modelResponses: [
          "Let me check... it's IT-2024-0486.",
          "It's on the sticker on the bottom. One moment... it's IT-0486.",
        ],
      },
      {
        speaker: "IT Support",
        text: "Got it. I can see the issue — your profile needs refreshing. I'll come to your desk.",
        expectedKeywords: ['thanks', 'thank', 'great', 'appreciate'],
        modelResponses: [
          "Great, thanks Tom. I'll be at my desk.",
          "Thanks, I really appreciate the help.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Müşteri Şikayeti Çözme",
    description: "Kızgın bir müşteriyi sakinleştirip çözüm sunuyorsun.",
    category: 'apple',
    setup: "Mağazada bir müşteri iPhone sorunu nedeniyle çok kızgın. Onu sakinleştirmen ve çözüm sunman gerekiyor.",
    turns: [
      {
        speaker: "Customer",
        text: "This is the third time I've come in about this issue! Nobody seems to be able to help me!",
        expectedKeywords: ['sorry', 'understand', 'frustrating', 'help', 'resolve', 'apologise'],
        modelResponses: [
          "I'm really sorry to hear that. I completely understand how frustrating this must be. Let me personally look into this for you.",
          "I sincerely apologise for the inconvenience. I'll make sure we get this sorted out today.",
        ],
      },
      {
        speaker: "Customer",
        text: "Well, the screen keeps freezing and I've lost some important photos.",
        expectedKeywords: ['sorry', 'photos', 'backup', 'Genius', 'Bar', 'check', 'device'],
        modelResponses: [
          "I'm sorry about your photos. Let me take you to the Genius Bar right away so we can check the device and see if we can recover them.",
          "That's really concerning. Let's get this to our Genius Bar team immediately. They'll run diagnostics and check for data recovery options.",
        ],
      },
      {
        speaker: "Customer",
        text: "OK, but I need this fixed today. I have a trip next week.",
        expectedKeywords: ['understand', 'today', 'priority', 'urgent', 'assure'],
        modelResponses: [
          "I completely understand. I'll mark this as urgent and we'll do everything we can to have it ready today.",
          "Absolutely, I'll make this a priority. I'll personally follow up and keep you updated throughout the day.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Bölge Müdürü ile Toplantı",
    description: "Area Manager ile mağaza performansını değerlendiriyorsun.",
    category: 'apple',
    setup: "Area Manager mağazana geldi. Haftalık performansı ve aksiyon planını sunman gerekiyor.",
    turns: [
      {
        speaker: "Area Manager",
        text: "So Yelda, how's the store performing this quarter? Give me the highlights.",
        expectedKeywords: ['revenue', 'target', 'NPS', 'above', 'below', 'growth', 'performance'],
        modelResponses: [
          "We're 5% above our revenue target this quarter. NPS is stable at 74, and our attachment rate on services has improved by 3%.",
          "Revenue is strong — we're ahead of target. Our main focus area right now is improving NPS during peak hours.",
        ],
      },
      {
        speaker: "Area Manager",
        text: "Good numbers. What's your biggest challenge right now?",
        expectedKeywords: ['staffing', 'peak', 'hours', 'retention', 'training', 'recruitment'],
        modelResponses: [
          "Our biggest challenge is staffing during peak hours. We're actively recruiting and have three candidates in the pipeline.",
          "Retention is good, but recruitment for the holiday season is our main focus. We need 5 more specialists on the floor.",
        ],
      },
      {
        speaker: "Area Manager",
        text: "Right. What's your action plan for the iPhone launch weekend?",
        expectedKeywords: ['team', 'queue', 'management', 'preparation', 'staffing', 'demo', 'ready'],
        modelResponses: [
          "We have a dedicated launch team of 8 people. Queue management is planned, demo units are configured, and we've done a full dry run.",
          "Everything is in place. Extra staffing for the weekend, dedicated queue team, and all demo units are ready. We're expecting strong footfall.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Ekip Koçluğu (Coaching)",
    description: "Bir ekip üyesine koçluk veriyorsun, gelişim alanlarını konuşuyorsunuz.",
    category: 'apple',
    setup: "Bir ekip üyesi satış hedeflerinin altında kalıyor. Ona koçluk vererek gelişim planı oluşturuyorsun.",
    turns: [
      {
        speaker: "You",
        text: "Thanks for sitting down with me. I wanted to chat about your performance and how I can support you.",
        expectedKeywords: ['thanks', 'appreciate', 'open', 'discuss', 'goals', 'support'],
        modelResponses: [
          "Thanks for making time. I'd like to discuss how things are going and explore how I can best support you.",
          "I appreciate you coming in. I want to understand how you're feeling and where you might need extra support.",
        ],
      },
      {
        speaker: "Team Member",
        text: "Honestly, I've been struggling with the attachment rate targets. I find it hard to bring up Apple Care+ with customers.",
        expectedKeywords: ['understand', 'natural', 'conversation', 'needs', 'practice', 'role', 'play'],
        modelResponses: [
          "That's a common challenge. The key is to make it a natural part of the conversation by linking it to the customer's needs. Let's practise together.",
          "I understand. It feels awkward at first. Let me show you how I frame it — it's about protecting their investment, not selling.",
        ],
      },
      {
        speaker: "Team Member",
        text: "That would be really helpful. Can we do some role-play?",
        expectedKeywords: ['great', 'idea', 'sure', 'let', 'start', 'practice'],
        modelResponses: [
          "Great idea! Let's start with a scenario. I'll be the customer and you walk me through a MacBook purchase with Apple Care+.",
          "Absolutely, let's do it. I'll play a customer who's buying an iPad. Show me how you'd introduce Apple Care+ naturally.",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Genius Bar Randevu Yönetimi",
    description: "Yoğun bir günde Genius Bar randevularını yönetiyorsun.",
    category: 'apple',
    setup: "Genius Bar tamamen dolu ama walk-in müşteriler de var. Durumu yönetmen gerekiyor.",
    turns: [
      {
        speaker: "Genius Bar Tech",
        text: "We're fully booked until Thursday, but we've got 12 walk-ins already waiting. What should we do?",
        expectedKeywords: ['prioritise', 'urgent', 'triage', 'quick', 'diagnostics', 'wait', 'time'],
        modelResponses: [
          "Let's triage the walk-ins quickly. If it's a software issue, we can do a 10-minute fix. For hardware, we'll book them the next available slot.",
          "I'll assign one tech to do quick diagnostics on walk-ins. Anything under 15 minutes gets done now, the rest get booked.",
        ],
      },
      {
        speaker: "Genius Bar Tech",
        text: "One customer is really upset — their MacBook won't turn on and they have a deadline tomorrow.",
        expectedKeywords: ['priority', 'loan', 'device', 'express', 'urgent', 'data', 'recovery'],
        modelResponses: [
          "That's urgent. Let's do an express repair and offer a loan MacBook if we need more time. Their deadline is our priority.",
          "Mark this as high priority. Check if we can do a same-day repair, and if not, set them up with a loaner device immediately.",
        ],
      },
      {
        speaker: "Genius Bar Tech",
        text: "Got it. Should I also let the floor team know about expected wait times?",
        expectedKeywords: ['yes', 'communicate', 'wait', 'times', 'manage', 'expectations'],
        modelResponses: [
          "Yes, please. Let the floor team know current wait times are 2 hours so they can manage customer expectations.",
          "Definitely. Clear communication is key. Tell them to be upfront about the 2-hour wait and offer the callback option.",
        ],
      },
    ],
  },
];
