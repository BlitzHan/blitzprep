import React, { useState } from 'react';
import { Check, X, Trophy, Clock, RotateCcw } from 'lucide-react';
import { vocabulary } from '../data/content';
import { sentences } from '../data/sentences';
import { grammarTopics } from '../data/grammar';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const Quiz: React.FC = () => {
  const [quizMode, setQuizMode] = useState<'vocab' | 'grammar' | 'mixed' | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);

  const generateQuestions = (): QuizQuestion[] => {
    const allQuestions: QuizQuestion[] = [];

    if (quizMode === 'vocab' || quizMode === 'mixed') {
      const vocabCount = quizMode === 'mixed' ? Math.floor(questionCount / 3) : questionCount;
      const shuffledVocab = [...vocabulary].sort(() => Math.random() - 0.5);
      shuffledVocab.slice(0, vocabCount).forEach(word => {
        const wrongOptions = vocabulary
          .filter(w => w.word !== word.word)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(w => w.meaning);
        const options = [...wrongOptions, word.meaning].sort(() => Math.random() - 0.5);
        allQuestions.push({
          question: `"${word.word}" ne demek?`,
          options,
          correctIndex: options.indexOf(word.meaning),
          explanation: `${word.word} = ${word.meaning}. Örnek: "${word.example}"`,
        });
      });
    }

    if (quizMode === 'grammar' || quizMode === 'mixed') {
      const grammarCount = quizMode === 'mixed' ? Math.floor(questionCount / 3) : questionCount;
      const allGrammarQuestions = grammarTopics.flatMap(t => t.questions);
      const shuffledGrammar = [...allGrammarQuestions].sort(() => Math.random() - 0.5);
      shuffledGrammar.slice(0, grammarCount).forEach(q => {
        allQuestions.push({
          question: q.question,
          options: q.options,
          correctIndex: q.correctIndex,
          explanation: q.explanation,
        });
      });
    }

    if (quizMode === 'mixed') {
      const sentenceCount = questionCount - allQuestions.length;
      const shuffledSentences = [...sentences].sort(() => Math.random() - 0.5);
      shuffledSentences.slice(0, sentenceCount).forEach(sentence => {
        const wrongOptions = sentences
          .filter(s => s.english !== sentence.english)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(s => s.english);
        const options = [...wrongOptions, sentence.english].sort(() => Math.random() - 0.5);
        allQuestions.push({
          question: `"${sentence.turkish}" İngilizcesi nedir?`,
          options,
          correctIndex: options.indexOf(sentence.english),
          explanation: `Doğru cevap: "${sentence.english}"`,
        });
      });
    }

    return allQuestions.slice(0, questionCount);
  };

  const startQuiz = () => {
    const qs = generateQuestions();
    setQuestions(qs);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setIsFinished(false);
    if (timer) {
      setTimeLeft(30);
    }
  };

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    const isCorrect = index === questions[currentQuestion].correctIndex;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
      if (timer) setTimeLeft(30);
    } else {
      setIsFinished(true);
    }
  };

  const resetToMenu = () => {
    setQuizMode(null);
    setQuestions([]);
    setIsFinished(false);
  };

  if (!quizMode || questions.length === 0) {
    return (
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Quiz Modu</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Karışık sorularla kendini test et.
        </p>

        <div className="card" onClick={() => { setQuizMode('vocab'); setQuestions([]); }} style={{ cursor: 'pointer' }}>
          <h3>📚 Kelime Quiz</h3>
          <p>Kelime bilgini test et. Türkçe anlamlarını bul.</p>
        </div>

        <div className="card" onClick={() => { setQuizMode('grammar'); setQuestions([]); }} style={{ cursor: 'pointer' }}>
          <h3>🧠 Gramer Quiz</h3>
          <p>Tenses, articles, prepositions, modals, conditionals.</p>
        </div>

        <div className="card" onClick={() => { setQuizMode('mixed'); setQuestions([]); }} style={{ cursor: 'pointer' }}>
          <h3>🎯 Karışık Quiz</h3>
          <p>Kelimeler, gramer ve cümleler bir arada.</p>
        </div>

        {quizMode && (
          <div className="card" style={{ marginTop: '1rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Soru Sayısı</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {[10, 20, 30].map(count => (
                <button
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '3px solid var(--border-color)',
                    background: questionCount === count ? 'var(--text-main)' : 'var(--card-bg)',
                    color: questionCount === count ? 'white' : 'var(--text-main)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                  }}
                >
                  {count}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                type="checkbox"
                id="timer-toggle"
                checked={!!timer}
                onChange={() => setTimer(timer ? null : 30)}
              />
              <label htmlFor="timer-toggle" style={{ fontWeight: 600 }}>
                <Clock size={16} style={{ display: 'inline', verticalAlign: 'middle' }} /> Süreli Mod (30sn/soru)
              </label>
            </div>
            <button className="btn" onClick={startQuiz}>
              Quiz'e Başla
            </button>
          </div>
        )}
      </div>
    );
  }

  if (isFinished) {
    const percent = questions.length > 0 ? Math.round((score.correct / questions.length) * 100) : 0;
    return (
      <div>
        <button
          className="btn btn-secondary"
          style={{ marginBottom: '1rem', padding: '0.5rem', width: 'auto' }}
          onClick={resetToMenu}
        >
          ← Ana Menü
        </button>

        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <Trophy size={64} color="var(--uk-blue)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            {percent >= 80 ? '🎉 Mükemmel!' : percent >= 60 ? '👍 İyi!' : '💪 Çalışmaya Devam!'}
          </h2>
          <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            <strong>{score.correct}/{questions.length}</strong> doğru
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Doğruluk: %{percent}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn" onClick={startQuiz} style={{ flex: 1 }}>
              <RotateCcw size={18} style={{ display: 'inline', verticalAlign: 'middle' }} /> Tekrar
            </button>
            <button className="btn btn-secondary" onClick={resetToMenu} style={{ flex: 1 }}>
              Ana Menü
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div>
      <button
        className="btn btn-secondary"
        style={{ marginBottom: '1rem', padding: '0.5rem', width: 'auto' }}
        onClick={resetToMenu}
      >
        ← Ana Menü
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Quiz</h2>
        <span style={{ color: 'var(--text-muted)', fontWeight: 'bold' }}>
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>

      {timer && (
        <div className="quiz-timer">
          <Clock size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
          {timeLeft}s
        </div>
      )}

      <div className="quiz-progress" style={{ marginBottom: '1.5rem' }}>
        {questions.map((_, i) => (
          <div
            key={i}
            className={`quiz-progress-dot ${
              i < currentQuestion
                ? score.correct > i * 0.5
                  ? 'correct'
                  : 'wrong'
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
          {currentQuestion < questions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Gör'}
        </button>
      )}
    </div>
  );
};

export default Quiz;
