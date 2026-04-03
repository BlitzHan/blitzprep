import React, { useState, useRef, useEffect } from 'react';
import { Send, Volume2, RotateCcw } from 'lucide-react';
import { conversations } from '../data/conversations';

type ChatMessage = {
  speaker: string;
  text: string;
  isBot: boolean;
};

const Conversation: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [filter, setFilter] = useState<'all' | 'daily' | 'work' | 'apple' | 'travel' | 'social'>('all');
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = filter === 'all' ? conversations : conversations.filter(c => c.category === filter);
  const scenario = conversations.find(c => c.id === selectedId);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, feedback]);

  const categoryLabels: Record<string, string> = {
    daily: 'Günlük',
    work: 'İş',
    apple: 'Apple',
    travel: 'Seyahat',
    social: 'Sosyal',
  };

  const filters = [
    { key: 'all', label: 'Tümü' },
    { key: 'daily', label: 'Günlük' },
    { key: 'work', label: 'İş' },
    { key: 'apple', label: 'Apple' },
    { key: 'travel', label: 'Seyahat' },
    { key: 'social', label: 'Sosyal' },
  ];

  const startScenario = (id: number) => {
    setSelectedId(id);
    setCurrentTurn(0);
    setUserInput('');
    setFeedback(null);
    setIsFinished(false);
    const s = conversations.find(c => c.id === id)!;
    const firstTurn = s.turns[0];

    if (firstTurn.speaker === 'You') {
      setMessages([{ speaker: 'Sahne', text: s.setup, isBot: true }]);
    } else {
      setMessages([
        { speaker: 'Sahne', text: s.setup, isBot: true },
        { speaker: firstTurn.speaker, text: firstTurn.text, isBot: true },
      ]);
    }

    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const checkResponse = (input: string, turn: { expectedKeywords: string[] }): boolean => {
    if (!input.trim()) return false;
    const lower = input.toLowerCase();
    return turn.expectedKeywords.some(kw => lower.includes(kw.toLowerCase()));
  };

  const handleSubmit = () => {
    if (scenario && currentTurn < scenario.turns.length && !feedback) {
      const turn = scenario.turns[currentTurn];

      // If this turn is for "You" (first turn), just add user message and move on
      if (turn.speaker === 'You') {
        setMessages(prev => [...prev, { speaker: 'You', text: userInput, isBot: false }]);
      }

      const isGood = checkResponse(userInput, turn);
      const response = userInput;

      setMessages(prev => [...prev, { speaker: isGood ? 'You' : 'You', text: response, isBot: false }]);

      setFeedback(isGood
        ? null
        : '💡 İpucu: Doğal bir cevap şöyle olabilir: "' + turn.modelResponses[Math.floor(Math.random() * turn.modelResponses.length)] + '"'
      );

      // Bot responds after a short delay
      setTimeout(() => {
        const nextTurn = currentTurn + 1;
        if (nextTurn < scenario.turns.length) {
          const next = scenario.turns[nextTurn];

          if (next.speaker !== 'You') {
            setMessages(prev => [...prev, { speaker: next.speaker, text: next.text, isBot: true }]);
          }
          setCurrentTurn(nextTurn);
        } else {
          setIsFinished(true);
          setMessages(prev => [...prev, { speaker: 'Sahne', text: '🎉 Senaryo tamamlandı!', isBot: true }]);
          playAudio('Well done! Scenario complete.');
        }
        setFeedback(null);
        setUserInput('');
      }, 800);

      setFeedback(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !feedback) {
      handleSubmit();
    }
  };

  // Scenario selection screen
  if (!selectedId) {
    return (
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Konuşma Pratiği</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Kendi cevabını YAZ. Seçenek yok, gerçek konuşma gibi. Cevabının anahtar kelimeler içerip içermediği kontrol edilir.
        </p>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as typeof filter)}
              style={{
                padding: '0.4rem 0.8rem',
                border: '2px solid var(--border-color)',
                background: filter === f.key ? 'var(--text-main)' : 'var(--card-bg)',
                color: filter === f.key ? 'white' : 'var(--text-main)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.map(s => (
          <div key={s.id} className="card" style={{ cursor: 'pointer' }} onClick={() => startScenario(s.id)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <span style={{
                padding: '0.2rem 0.5rem',
                background: 'var(--uk-red)',
                color: 'white',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                border: '2px solid var(--border-color)',
                textTransform: 'uppercase',
              }}>
                {categoryLabels[s.category]}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Active conversation
  return (
    <div style={{ paddingBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button
          className="btn"
          style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '1rem' }}
          onClick={() => setSelectedId(null)}
        >
          ← Geri
        </button>
        <button
          style={{
            padding: '0.5rem 1rem',
            border: '2px solid var(--border-color)',
            background: 'var(--card-bg)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 600,
          }}
          onClick={() => startScenario(selectedId)}
        >
          <RotateCcw size={16} /> Başa Dön
        </button>
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
        {scenario?.title}
      </h3>

      {/* Chat area */}
      <div
        ref={chatRef}
        className="chat-container"
        style={{
          minHeight: 300,
          maxHeight: '50vh',
          overflowY: 'auto',
          marginBottom: '1rem',
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.isBot ? 'flex-start' : 'flex-end',
          }}>
            <span className="chat-speaker">{msg.speaker}</span>
            <div className={`chat-bubble ${msg.isBot ? 'them' : 'you'}`}
              style={msg.speaker === 'Sahne' ? { background: '#f0f0f0', color: '#333', borderStyle: 'dashed' } : {}}>
              {msg.text}
              {msg.isBot && (
                <button
                  onClick={() => playAudio(msg.text)}
                  style={{
                    marginLeft: '0.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.2rem',
                    verticalAlign: 'middle',
                  }}
                >
                  <Volume2 size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="explanation" style={{ marginBottom: '1rem', borderLeftColor: 'var(--uk-red)' }}>
          {feedback}
        </div>
      )}

      {/* Input */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Cevabını İngilizce yaz..."
          disabled={!!feedback || isFinished}
          style={{
            flex: 1,
            padding: '1rem 1.2rem',
            fontSize: '1rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            border: '3px solid var(--border-color)',
            boxShadow: '4px 4px 0px var(--border-color)',
            background: 'var(--card-bg)',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={!!feedback || isFinished || !userInput.trim()}
          className="btn"
          style={{
            width: 'auto',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Conversation;
