import React, { useState, useMemo, useCallback } from 'react';
import { vocabulary } from '../data/content';
import { ArrowLeft, ArrowRight, RotateCw, Check, X, Shuffle, Filter } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

const Vocabulary: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [dueOnly, setDueOnly] = useState(false);
  const [randomOrder, setRandomOrder] = useState(true);
  const [shuffleSeed, setShuffleSeed] = useState(() => Math.floor(Math.random() * 1000000));
  const { markWord, getDueWords } = useProgress();

  const allWordStrings = vocabulary.map(w => w.word);
  const dueWordStrings = getDueWords(allWordStrings);

  const shuffleArray = useCallback((arr: typeof vocabulary, seed: number) => {
    const shuffled = [...arr];
    let s = seed;
    for (let i = shuffled.length - 1; i > 0; i--) {
      s = (s * 16807 + 0) % 2147483647;
      const j = s % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const filteredList = useMemo(() => {
    let list = vocabulary;
    if (dueOnly) {
      list = list.filter(w => dueWordStrings.includes(w.word));
    }
    if (randomOrder) {
      list = shuffleArray(list, shuffleSeed);
    }
    return list;
  }, [dueOnly, randomOrder, dueWordStrings, shuffleSeed, shuffleArray]);

  const safeIndex = currentIndex % Math.max(filteredList.length, 1);
  const currentWord = filteredList[safeIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setShowResult(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(filteredList.length, 1));
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setShowResult(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + Math.max(filteredList.length, 1)) % Math.max(filteredList.length, 1));
    }, 150);
  };

  const handleKnown = (known: boolean) => {
    if (!currentWord) return;
    markWord(currentWord.word, known);
    setShowResult(true);
    setTimeout(() => {
      setIsFlipped(false);
      setShowResult(false);
      setCurrentIndex((prev) => (prev + 1) % Math.max(filteredList.length, 1));
    }, 1500);
  };

  if (filteredList.length === 0) {
    return (
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Kelime Kartları</h2>
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <p>{dueOnly ? 'Tüm kelimeleri öğrendin! Tekrar zamanı gelince geri gelecekler.' : 'Bu filtrede kelime yok.'}</p>
          <button className="btn btn-secondary" onClick={() => { setDueOnly(false); setRandomOrder(false); }} style={{ marginTop: '1rem', width: 'auto', padding: '0.75rem 1.5rem' }}>
            Tüm Kelimeleri Göster
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Kelime Kartları</h2>
        <span style={{ color: 'var(--text-muted)', fontWeight: 'bold' }}>{safeIndex + 1} / {filteredList.length}</span>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button
          onClick={() => { setDueOnly(!dueOnly); setCurrentIndex(0); }}
          style={{
            padding: '0.4rem 0.8rem',
            border: '2px solid var(--border-color)',
            background: dueOnly ? 'var(--uk-blue)' : 'var(--card-bg)',
            color: dueOnly ? 'white' : 'var(--text-main)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <Filter size={14} /> Tekrar Zamanı Gelenler
        </button>
        <button
          onClick={() => { setRandomOrder(!randomOrder); setCurrentIndex(0); setShuffleSeed(prev => prev + 1); }}
          style={{
            padding: '0.4rem 0.8rem',
            border: '2px solid var(--border-color)',
            background: randomOrder ? 'var(--text-main)' : 'var(--card-bg)',
            color: randomOrder ? 'white' : 'var(--text-main)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          <Shuffle size={14} /> Karışık
        </button>
      </div>

      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={() => !showResult && setIsFlipped(!isFlipped)}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1rem', backgroundColor: 'var(--uk-red)', color: 'white', padding: '0.25rem 0.5rem', fontWeight: 'bold', border: '2px solid var(--border-color)' }}>
              {currentWord.context}
            </span>

            <h2>{currentWord.word}</h2>
            {'phonetic' in currentWord && currentWord.phonetic && (
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 'bold' }}>
                {currentWord.phonetic}
              </p>
            )}

            <p style={{ marginTop: '1.5rem', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 500, textAlign: 'center', lineHeight: 1.4 }}>
              "{currentWord.example}"
            </p>

            {showResult && (
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', padding: '0.75rem 1rem', backgroundColor: 'var(--uk-blue)', color: 'white', borderRadius: '8px', border: '2px solid var(--border-color)' }}>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{currentWord.meaning}</p>
              </div>
            )}

            {!showResult && (
              <p style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <RotateCw size={14} /> Çevirmek için dokun
              </p>
            )}
          </div>
          <div className="flashcard-back">
            <h3>{currentWord.meaning}</h3>
            {'exampleTr' in currentWord && currentWord.exampleTr ? (
              <>
                <p style={{ fontSize: '1rem', marginBottom: '0.5rem', opacity: 0.85 }}>"{currentWord.example}"</p>
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', borderTop: '2px solid rgba(255,255,255,0.3)', paddingTop: '0.75rem' }}>"{currentWord.exampleTr}"</p>
              </>
            ) : (
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginTop: '1rem', opacity: 0.85 }}>"{currentWord.example}"</p>
            )}
          </div>
        </div>
      </div>

      {!showResult ? (
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
          <button
            className="btn"
            style={{ flex: 1, backgroundColor: 'var(--uk-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            onClick={() => handleKnown(false)}
          >
            <X size={20} /> Bilemedim
          </button>
          <button
            className="btn"
            style={{ flex: 1, backgroundColor: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            onClick={() => handleKnown(true)}
          >
            <Check size={20} /> Bildim
          </button>
        </div>
      ) : (
        <div className="flashcard-controls">
          <button className="btn btn-secondary" onClick={handlePrev} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={20} /> Önceki
          </button>
          <button className="btn" onClick={handleNext} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            Sonraki <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Vocabulary;
