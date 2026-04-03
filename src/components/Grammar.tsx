import React, { useState } from 'react';
import { Check, X, Brain, CheckCircle } from 'lucide-react';
import { grammarTopics } from '../data/grammar';
import { useProgress } from '../hooks/useProgress';

const Grammar: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const { completeGrammar, state } = useProgress();

  const topic = grammarTopics.find(t => t.id === selectedTopic);
  const isCompleted = (topicId: string) => state.grammarCompleted.includes(topicId);

  const handleTopicSelect = (id: string) => {
    setSelectedTopic(id);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setIsFinished(false);
  };

  const handleOptionSelect = (index: number) => {
    if (showResult || !topic) return;
    setSelectedOption(index);
    setShowResult(true);
    const isCorrect = index === topic.questions[currentQuestion].correctIndex;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (!topic) return;
    if (currentQuestion < topic.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
      completeGrammar(topic.id);
    }
  };

  if (!selectedTopic) {
    return (
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Gramer Alıştırmaları</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          İngilizce gramer konularını interaktif alıştırmalarla öğren.
        </p>

        {grammarTopics.map(t => (
          <div
            key={t.id}
            className={`card grammar-topic ${isCompleted(t.id) ? 'completed' : ''}`}
            onClick={() => handleTopicSelect(t.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Brain size={24} color="var(--uk-blue)" />
                  <h3>{t.title}</h3>
                </div>
                <p>{t.description}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  {t.questions.length} soru
                </p>
              </div>
              {isCompleted(t.id) && (
                <CheckCircle size={28} color="var(--success)" />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isFinished && topic) {
    const percent = Math.round((score.correct / score.total) * 100);
    return (
      <div>
        <button
          className="btn btn-secondary"
          style={{ marginBottom: '1rem', padding: '0.5rem', width: 'auto' }}
          onClick={() => setSelectedTopic(null)}
        >
          ← Konulara Dön
        </button>

        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {percent >= 80 ? '🎉 Harika!' : percent >= 60 ? '👍 İyi!' : '💪 Tekrar Dene!'}
          </h2>
          <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            <strong>{score.correct}/{score.total}</strong> doğru
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Doğruluk: %{percent}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn" onClick={() => handleTopicSelect(topic.id)} style={{ flex: 1 }}>
              Tekrar Dene
            </button>
            <button className="btn btn-secondary" onClick={() => setSelectedTopic(null)} style={{ flex: 1 }}>
              Konulara Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!topic) return null;

  const question = topic.questions[currentQuestion];

  return (
    <div>
      <button
        className="btn btn-secondary"
        style={{ marginBottom: '1rem', padding: '0.5rem', width: 'auto' }}
        onClick={() => setSelectedTopic(null)}
      >
        ← Konulara Dön
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{topic.titleEn}</h2>
        <span style={{ color: 'var(--text-muted)', fontWeight: 'bold' }}>
          {currentQuestion + 1}/{topic.questions.length}
        </span>
      </div>

      <div className="quiz-progress" style={{ marginBottom: '1.5rem' }}>
        {topic.questions.map((_, i) => (
          <div
            key={i}
            className={`quiz-progress-dot ${
              i < currentQuestion
                ? 'correct'
                : i === currentQuestion
                ? 'current'
                : ''
            }`}
          />
        ))}
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0' }}>{question.question}</h3>
      </div>

      <div className="options-list">
        {question.options.map((opt, index) => {
          let btnClass = 'option-btn';
          if (showResult) {
            if (index === question.correctIndex) btnClass += ' correct';
            else if (index === selectedOption) btnClass += ' wrong';
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

      {showResult && (
        <div className="explanation">
          <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            {selectedOption === question.correctIndex ? (
              <><Check size={20} color="var(--success)" /> Doğru!</>
            ) : (
              <><X size={20} color="var(--uk-red)" /> Yanlış!</>
            )}
          </strong>
          {selectedOption !== question.correctIndex && (
            <p style={{ marginBottom: '0.5rem', fontWeight: 600, color: 'var(--success)' }}>
              Doğru cevap: {question.options[question.correctIndex]}
            </p>
          )}
          <p>{question.explanation}</p>
        </div>
      )}

      {showResult && (
        <button className="btn" style={{ marginTop: '1.5rem' }} onClick={handleNext}>
          {currentQuestion < topic.questions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
        </button>
      )}
    </div>
  );
};

export default Grammar;
