import React, { useState, useRef } from 'react';
import { Check, X, Lightbulb, Volume2 } from 'lucide-react';
import { sentences } from '../data/sentences';
import { useProgress } from '../hooks/useProgress';

const SentenceBuilder: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [filter, setFilter] = useState<'all' | 'daily' | 'work' | 'apple' | 'travel' | 'social'>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const { markSentence } = useProgress();

  const filtered = filter === 'all' ? sentences : sentences.filter(s => s.category === filter);
  const current = filtered[currentIndex % filtered.length];

  if (!filtered.length) {
    return <div>Bu kategoride cümle yok.</div>;
  }

  const normalizeText = (text: string): string => {
    return text.toLowerCase().replace(/[^\w\s']/g, '').replace(/\s+/g, ' ').trim();
  };

  const handleSubmit = () => {
    if (showResult) return;
    if (!userInput.trim()) return;

    const correct = normalizeText(userInput) === normalizeText(current.english);
    setIsCorrect(correct);
    setShowResult(true);
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));
    markSentence(filtered.indexOf(current), correct);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filtered.length);
    setUserInput('');
    setShowResult(false);
    setIsCorrect(false);
    setHintLevel(0);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (showResult) {
        handleNext();
      } else {
        handleSubmit();
      }
    }
  };

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(current.english);
      utterance.lang = 'en-GB';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const shownHints = hintLevel > 0 ? current.hints.slice(0, hintLevel).join(' ... ') + (hintLevel >= current.hints.length ? '' : ' ...') : '';

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

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Cümle Kurucu</h2>
        <span style={{ color: 'var(--text-muted)', fontWeight: 'bold', fontSize: '0.9rem' }}>
          {score.correct}/{score.total}
        </span>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => { setFilter(f.key as typeof filter); setCurrentIndex(0); setUserInput(''); setShowResult(false); setHintLevel(0); }}
            style={{
              padding: '0.4rem 0.8rem',
              border: '2px solid var(--border-color)',
              background: filter === f.key ? 'var(--text-main)' : 'var(--card-bg)',
              color: filter === f.key ? 'white' : 'var(--text-main)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Counter */}
      <div style={{ textAlign: 'right', color: 'var(--text-muted)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
        {(currentIndex % filtered.length) + 1} / {filtered.length}
      </div>

      {/* Turkish sentence */}
      <div className="card" style={{ textAlign: 'center', padding: '2rem 1rem', marginBottom: '1.5rem' }}>
        <span style={{
          display: 'inline-block',
          padding: '0.2rem 0.6rem',
          background: current.difficulty === 'easy' ? 'var(--success)' : current.difficulty === 'medium' ? 'var(--uk-blue)' : 'var(--uk-red)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          border: '2px solid var(--border-color)',
          marginBottom: '0.75rem',
        }}>
          {categoryLabels[current.category]} &middot; {current.difficulty === 'easy' ? 'Kolay' : current.difficulty === 'medium' ? 'Orta' : 'Zor'}
        </span>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0' }}>{current.turkish}</h3>
      </div>

      {/* Hints */}
      {hintLevel > 0 && (
        <div style={{
          padding: '0.75rem 1rem',
          background: 'var(--card-bg)',
          border: '2px solid var(--border-color)',
          borderLeft: '6px solid var(--uk-blue)',
          marginBottom: '1rem',
          fontSize: '1rem',
          fontFamily: 'var(--font-display)',
          letterSpacing: '0.05em',
        }}>
          İpucu: {shownHints}
        </div>
      )}

      {/* Input */}
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="İngilizce cevabınızı yazın..."
          disabled={showResult}
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            fontSize: '1.1rem',
            fontFamily: 'var(--font-body)',
            border: '3px solid var(--border-color)',
            boxShadow: '4px 4px 0px var(--border-color)',
            background: 'var(--card-bg)',
            fontWeight: 600,
            outline: 'none',
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
        {!showResult ? (
          <button className="btn" onClick={handleSubmit} style={{ flex: 1 }}>
            Kontrol Et
          </button>
        ) : (
          <button className="btn" onClick={handleNext} style={{ flex: 1 }}>
            Sonraki
          </button>
        )}
        {!showResult && hintLevel < current.hints.length && (
          <button
            onClick={() => setHintLevel(hintLevel + 1)}
            style={{
              padding: '1rem',
              border: '3px solid var(--border-color)',
              background: 'var(--card-bg)',
              boxShadow: '4px 4px 0px var(--border-color)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Lightbulb size={24} />
          </button>
        )}
      </div>

      {/* Result */}
      {showResult && (
        <div className="card" style={{
          borderColor: isCorrect ? 'var(--success)' : 'var(--uk-red)',
          boxShadow: isCorrect ? '6px 6px 0px var(--success)' : '6px 6px 0px var(--uk-red)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {isCorrect ? <Check size={28} color="var(--success)" /> : <X size={28} color="var(--uk-red)" />}
            <strong style={{ fontSize: '1.2rem' }}>
              {isCorrect ? 'Doğru!' : 'Yanlış!'}
            </strong>
          </div>
          <p style={{ marginBottom: '0.5rem' }}>
            Doğru cevap: <strong>{current.english}</strong>
          </p>
          {!isCorrect && userInput.trim() && (
            <p style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
              Senin cevabın: <span style={{ textDecoration: 'line-through' }}>{userInput}</span>
            </p>
          )}
          <button
            onClick={playAudio}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'var(--uk-blue)',
              color: 'white',
              border: '2px solid var(--border-color)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              marginTop: '0.5rem',
            }}
          >
            <Volume2 size={16} /> Dinle
          </button>
        </div>
      )}
    </div>
  );
};

export default SentenceBuilder;
