import React, { useState } from 'react';
import { listeningPractices } from '../data/content';
import { Play, CheckCircle } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

const Listening: React.FC = () => {
  const [selectedPracticeId, setSelectedPracticeId] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const { completeListening, state } = useProgress();

  const practice = listeningPractices.find(p => p.id === selectedPracticeId);

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // British English
      utterance.rate = 0.9; // Biraz yavaşlat
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Tarayıcınız seslendirme özelliğini desteklemiyor.");
    }
  };

  const handlePracticeSelect = (id: number) => {
    setSelectedPracticeId(id);
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    if (practice) {
      completeListening(practice.id);
    }
  };

  if (!selectedPracticeId || !practice) {
    return (
      <div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Dinleme Pratiği</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
          Cihazınızın sesini açın. Sistem İngiliz aksanıyla (en-GB) okuma yapacaktır.
        </p>
        
        {listeningPractices.map((p, index) => {
          const isCompleted = state.listeningCompleted.includes(p.id);
          return (
            <div key={p.id} className="card" style={{ cursor: 'pointer', opacity: isCompleted ? 0.7 : 1 }} onClick={() => handlePracticeSelect(p.id)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: '#fef2f2', borderRadius: '50%', color: 'var(--danger)' }}>
                  <Play size={20} fill="currentColor" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3>Alıştırma {index + 1}</h3>
                  <p>Dinle ve soruyu cevapla</p>
                </div>
                {isCompleted && (
                  <CheckCircle size={24} color="var(--success)" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <button 
        className="btn btn-secondary" 
        style={{ marginBottom: '1rem', padding: '0.5rem', width: 'auto' }}
        onClick={() => {
          setSelectedPracticeId(null);
          window.speechSynthesis.cancel(); // Durdur
        }}
      >
        ← Geri Dön
      </button>

      <div className="card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <button 
          className="btn" 
          style={{ width: '80px', height: '80px', borderRadius: '50%', padding: 0, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}
          onClick={() => playAudio(practice.text)}
        >
          <Play size={32} fill="currentColor" />
        </button>
        <h3 style={{ marginBottom: '0.5rem' }}>Dinlemek için dokun</h3>
        <p style={{ color: 'var(--text-muted)' }}>İstediğin kadar dinleyebilirsin.</p>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>{practice.question}</h3>
        
        <div className="options-list">
          {practice.options.map((opt, index) => {
            let btnClass = "option-btn";
            if (showResult) {
              if (index === practice.correctIndex) btnClass += " correct";
              else if (index === selectedOption) btnClass += " wrong";
            }
            
            return (
              <button 
                key={index} 
                className={btnClass}
                onClick={() => handleOptionSelect(index)}
                disabled={showResult}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {showResult && (
        <div className="explanation" style={{ marginTop: '1.5rem' }}>
          <strong>{selectedOption === practice.correctIndex ? '✅ Doğru!' : '❌ Yanlış Cevap.'}</strong>
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Okunan Metin: "{practice.text}"
          </p>
        </div>
      )}

    </div>
  );
};

export default Listening;
