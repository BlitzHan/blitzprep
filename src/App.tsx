import { useState } from 'react';
import { BookOpen, MessageSquare, LayoutDashboard, MessageCircle, PencilLine, Brain, Trophy } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Vocabulary from './components/Vocabulary';
import Scenarios from './components/Scenarios';
import SentenceBuilder from './components/SentenceBuilder';
import Conversation from './components/Conversation';
import Grammar from './components/Grammar';
import Quiz from './components/Quiz';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Ana Sayfa', icon: LayoutDashboard },
    { id: 'vocabulary', label: 'Kelimeler', icon: BookOpen },
    { id: 'scenarios', label: 'Senaryolar', icon: MessageSquare },
    { id: 'sentences', label: 'Cümleler', icon: PencilLine },
    { id: 'conversation', label: 'Konuşma', icon: MessageCircle },
    { id: 'grammar', label: 'Gramer', icon: Brain },
    { id: 'quiz', label: 'Quiz', icon: Trophy },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'vocabulary':
        return <Vocabulary />;
      case 'scenarios':
        return <Scenarios />;
      case 'sentences':
        return <SentenceBuilder />;
      case 'conversation':
        return <Conversation />;
      case 'grammar':
        return <Grammar />;
      case 'quiz':
        return <Quiz />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      <header className="header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/logo.svg" alt="BlitzPrep" style={{ width: '36px', height: '36px' }} />
        <div>
          <h1>BlitzPrep</h1>
          <p>Hızlı İngilizce, Güçlü Başlangıç</p>
        </div>
      </header>

      <main className="content-area">
        {renderContent()}
      </main>

      <nav className="bottom-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default App;
