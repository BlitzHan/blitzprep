import React from 'react';
import { BookOpen, MessageSquare, Award, Flame, Target, CheckCircle, PencilLine, MessageCircle, Brain, Trophy } from 'lucide-react';
import { vocabulary, scenarios } from '../data/content';
import { useProgress } from '../hooks/useProgress';

interface DashboardProps {
  onNavigate: (tabId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { state, getTodayStats, getAccuracy } = useProgress();
  const todayStats = getTodayStats();
  const accuracy = getAccuracy();
  const dailyTotal = todayStats.wordsReviewed + todayStats.sentencesReviewed + todayStats.scenariosCompleted + todayStats.grammarCompleted;
  const progressPercent = Math.min((dailyTotal / state.dailyGoal) * 100, 100);
  const knownWords = Object.values(state.words).filter(w => w.level >= 3).length;
  const completedScenarios = state.scenariosCompleted.length;

  return (
    <div>
      {/* Streak & Greeting */}
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--uk-red)', color: 'white', borderColor: 'var(--border-color)', boxShadow: '6px 6px 0px var(--border-color)' }}>
        <Award size={48} />
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem', color: 'white' }}>Harika Gidiyorsun!</h2>
          <p style={{ color: 'white', fontWeight: 600 }}>Bugün pratik yapmak için harika bir gün.</p>
        </div>
      </div>

      {/* Streak Badge */}
      {state.streak > 0 && (
        <div className="streak-badge">
          <Flame size={20} fill="#FF6B35" color="#FF6B35" />
          <span><strong>{state.streak}</strong> gün seri!</span>
        </div>
      )}

      {/* Daily Goal Progress */}
      <div className="card" style={{ padding: '1rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target size={20} color="var(--uk-blue)" />
            <strong>Günlük Hedef</strong>
          </div>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{dailyTotal}/{state.dailyGoal}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          {progressPercent >= 100 ? '🎉 Hedef tamamlandı!' : `${state.dailyGoal - dailyTotal} aktivite kaldı`}
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div className="stat-box">
          <CheckCircle size={24} color="var(--success)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{knownWords}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Öğrenilen</span>
        </div>
        <div className="stat-box">
          <Trophy size={24} color="var(--uk-blue)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{accuracy}%</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Doğruluk</span>
        </div>
        <div className="stat-box">
          <Brain size={24} color="var(--uk-red)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{state.totalCorrect + state.totalWrong}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Toplam</span>
        </div>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Nereden Başlamak İstersin?</h2>

      <div className="card" onClick={() => onNavigate('vocabulary')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: 'var(--uk-blue)', border: '2px solid var(--border-color)', color: 'white' }}>
            <BookOpen size={32} />
          </div>
          <div style={{ flex: 1 }}>
            <h3>Kelimeler & Deyimler</h3>
            <p>{vocabulary.length} kelime kartı seni bekliyor.</p>
          </div>
          {knownWords > 0 && (
            <span style={{ fontSize: '0.8rem', backgroundColor: 'var(--success)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '2px solid var(--border-color)' }}>
              {knownWords} öğrenildi
            </span>
          )}
        </div>
      </div>

      <div className="card" onClick={() => onNavigate('scenarios')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: 'var(--success)', border: '2px solid var(--border-color)', color: 'white' }}>
            <MessageSquare size={32} />
          </div>
          <div style={{ flex: 1 }}>
            <h3>Günlük Senaryolar</h3>
            <p>{scenarios.length} farklı senaryo ile pratik yap.</p>
          </div>
          {completedScenarios > 0 && (
            <span style={{ fontSize: '0.8rem', backgroundColor: 'var(--success)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '2px solid var(--border-color)' }}>
              {completedScenarios}/{scenarios.length}
            </span>
          )}
        </div>
      </div>

      <div className="card" onClick={() => onNavigate('sentences')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: 'var(--uk-blue)', border: '2px solid var(--border-color)', color: 'white' }}>
            <PencilLine size={32} />
          </div>
          <div>
            <h3>Cümle Kurucu</h3>
            <p>Türkçe → İngilizce cümle yazma pratiği.</p>
          </div>
        </div>
      </div>

      <div className="card" onClick={() => onNavigate('conversation')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#7C3AED', border: '2px solid var(--border-color)', color: 'white' }}>
            <MessageCircle size={32} />
          </div>
          <div>
            <h3>Konuşma Pratiği</h3>
            <p>Gerçek diyaloglar, serbest yazma.</p>
          </div>
        </div>
      </div>

      <div className="card" onClick={() => onNavigate('grammar')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#059669', border: '2px solid var(--border-color)', color: 'white' }}>
            <Brain size={32} />
          </div>
          <div>
            <h3>Gramer</h3>
            <p>Tenses, articles, prepositions, modals, conditionals.</p>
          </div>
        </div>
      </div>

      <div className="card" onClick={() => onNavigate('quiz')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '0.75rem', backgroundColor: '#D97706', border: '2px solid var(--border-color)', color: 'white' }}>
            <Trophy size={32} />
          </div>
          <div>
            <h3>Quiz</h3>
            <p>Karışık sorularla kendini test et.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
