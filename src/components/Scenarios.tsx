import React, { useState } from 'react';
import { scenarios } from '../data/content';
import { useProgress } from '../hooks/useProgress';

const Scenarios: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { completeScenario, state } = useProgress();

  const scenario = scenarios.find(s => s.id === selectedScenarioId);

  const handleScenarioSelect = (id: number) => {
    setSelectedScenarioId(id);
    setCurrentStep(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleOptionSelect = (index: number) => {
    if (showExplanation) return; // Prevent changing answer after submitted
    setSelectedOption(index);
    setShowExplanation(true);
  };

  const handleNextStep = () => {
    if (scenario && currentStep < scenario.dialogue.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else if (scenario) {
      completeScenario(scenario.id);
      setSelectedScenarioId(null);
    }
  };

  if (!selectedScenarioId || !scenario) {
    return (
      <div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Günlük Senaryolar</h2>
        {scenarios.map(s => {
          const isCompleted = state.scenariosCompleted.includes(s.id);
          return (
            <div key={s.id} className="card" style={{ cursor: 'pointer', opacity: isCompleted ? 0.7 : 1 }} onClick={() => handleScenarioSelect(s.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                {isCompleted && (
                  <span style={{ fontSize: '1.5rem' }}>✅</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Active Scenario View
  const dialogueHistory = scenario.dialogue.slice(0, currentStep + 1);
  const currentTurn = scenario.dialogue[currentStep];

  return (
    <div>
      <button 
        className="btn btn-secondary" 
        style={{ marginBottom: '1rem', padding: '0.5rem', width: 'auto' }}
        onClick={() => setSelectedScenarioId(null)}
      >
        ← Geri Dön
      </button>
      
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{scenario.title}</h2>

      <div className="chat-container">
        {dialogueHistory.map((turn, index) => {
          if (turn.speaker !== "You" || (index === currentStep && !showExplanation)) {
            // Sadece başkalarının sözlerini veya tamamlanmış "senin" sözlerini göster
            if (turn.speaker !== "You") {
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="chat-speaker">{turn.speaker}</span>
                  <div className="chat-bubble them">{turn.text}</div>
                </div>
              );
            }
            return null;
          }
          
          // Your completed turns
          return (
             <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span className="chat-speaker">You</span>
                <div className="chat-bubble you">
                  {turn.options ? turn.options[index === currentStep ? selectedOption! : turn.correctIndex!] : turn.text}
                </div>
             </div>
          );
        })}
      </div>

      {currentTurn.speaker === "You" && !showExplanation && (
        <div className="options-list">
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Ne cevap verirsin?</p>
          {currentTurn.options?.map((opt, index) => (
            <button 
              key={index} 
              className="option-btn"
              onClick={() => handleOptionSelect(index)}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {showExplanation && (
        <div>
          <div className="options-list">
            {currentTurn.options?.map((opt, index) => {
              let btnClass = "option-btn";
              if (index === currentTurn.correctIndex) btnClass += " correct";
              else if (index === selectedOption) btnClass += " wrong";
              
              return (
                <button key={index} className={btnClass} disabled>
                  {opt}
                </button>
              );
            })}
          </div>
          
          <div className="explanation">
            <strong>{selectedOption === currentTurn.correctIndex ? '✅ Doğru!' : '❌ Daha iyi bir seçenek var.'}</strong>
            <p style={{ marginTop: '0.5rem' }}>{currentTurn.explanation}</p>
          </div>
          
          <button className="btn" style={{ marginTop: '1.5rem' }} onClick={handleNextStep}>
            Devam Et
          </button>
        </div>
      )}

      {currentTurn.speaker !== "You" && (
        <button className="btn" style={{ marginTop: '1.5rem' }} onClick={handleNextStep}>
          Devam Et
        </button>
      )}

    </div>
  );
};

export default Scenarios;
