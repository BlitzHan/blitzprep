import { useState, useEffect, useCallback } from 'react';

interface WordProgress {
  word: string;
  correct: number;
  wrong: number;
  lastSeen: number;
  nextReview: number;
  level: number;
}

interface SentenceProgress {
  sentenceIndex: number;
  correct: number;
  wrong: number;
  lastSeen: number;
  nextReview: number;
  level: number;
}

interface DailyStats {
  date: string;
  wordsReviewed: number;
  wordsCorrect: number;
  sentencesReviewed: number;
  sentencesCorrect: number;
  scenariosCompleted: number;
  listeningCompleted: number;
  grammarCompleted: number;
  quizCompleted: number;
}

interface AppState {
  words: Record<string, WordProgress>;
  sentences: Record<number, SentenceProgress>;
  dailyStats: Record<string, DailyStats>;
  streak: number;
  lastActiveDate: string;
  totalCorrect: number;
  totalWrong: number;
  dailyGoal: number;
  scenariosCompleted: number[];
  listeningCompleted: number[];
  grammarCompleted: string[];
}

const STORAGE_KEY = 'uk-prep-progress';

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const state = JSON.parse(raw);
      const today = getToday();
      let streak = state.streak || 0;
      if (state.lastActiveDate && state.lastActiveDate !== today) {
        const last = new Date(state.lastActiveDate);
        const now = new Date(today);
        const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
          streak = 0;
        }
      }
      return {
        words: state.words || {},
        sentences: state.sentences || {},
        dailyStats: state.dailyStats || {},
        streak,
        lastActiveDate: state.lastActiveDate || '',
        totalCorrect: state.totalCorrect || 0,
        totalWrong: state.totalWrong || 0,
        dailyGoal: state.dailyGoal || 20,
        scenariosCompleted: state.scenariosCompleted || [],
        listeningCompleted: state.listeningCompleted || [],
        grammarCompleted: state.grammarCompleted || [],
      };
    }
  } catch {
    // ignore
  }
  return {
    words: {},
    sentences: {},
    dailyStats: {},
    streak: 0,
    lastActiveDate: '',
    totalCorrect: 0,
    totalWrong: 0,
    dailyGoal: 20,
    scenariosCompleted: [],
    listeningCompleted: [],
    grammarCompleted: [],
  };
}

function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

const INTERVALS = [1, 5, 30, 1440, 4320, 10080];

function getNextReviewTimestamp(level: number): number {
  const minutes = INTERVALS[Math.min(level, INTERVALS.length - 1)];
  return Date.now() + minutes * 60 * 1000;
}

function updateStreak(lastActive: string, current: string): number {
  if (!lastActive) return 1;
  if (lastActive === current) return 0;
  const last = new Date(lastActive);
  const now = new Date(current);
  const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 1) return 1;
  if (diffDays > 1) return 1;
  return 0;
}

export function useProgress() {
  const [state, setState] = useState<AppState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const markWord = useCallback((word: string, correct: boolean) => {
    setState(prev => {
      const existing = prev.words[word] || { word, correct: 0, wrong: 0, lastSeen: 0, nextReview: 0, level: 0 };
      const newLevel = correct ? Math.min(existing.level + 1, 5) : 0;
      const today = getToday();
      const todayStats = prev.dailyStats[today] || {
        date: today, wordsReviewed: 0, wordsCorrect: 0, sentencesReviewed: 0,
        sentencesCorrect: 0, scenariosCompleted: 0, listeningCompleted: 0,
        grammarCompleted: 0, quizCompleted: 0,
      };
      const newStreakIncrement = updateStreak(prev.lastActiveDate, today);
      return {
        ...prev,
        words: {
          ...prev.words,
          [word]: {
            ...existing,
            correct: existing.correct + (correct ? 1 : 0),
            wrong: existing.wrong + (correct ? 0 : 1),
            lastSeen: Date.now(),
            nextReview: getNextReviewTimestamp(newLevel),
            level: newLevel,
          },
        },
        dailyStats: {
          ...prev.dailyStats,
          [today]: {
            ...todayStats,
            wordsReviewed: todayStats.wordsReviewed + 1,
            wordsCorrect: todayStats.wordsCorrect + (correct ? 1 : 0),
          },
        },
        streak: prev.streak + newStreakIncrement,
        lastActiveDate: today,
        totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
        totalWrong: prev.totalWrong + (correct ? 0 : 1),
      };
    });
  }, []);

  const markSentence = useCallback((sentenceIndex: number, correct: boolean) => {
    setState(prev => {
      const existing = prev.sentences[sentenceIndex] || { sentenceIndex, correct: 0, wrong: 0, lastSeen: 0, nextReview: 0, level: 0 };
      const newLevel = correct ? Math.min(existing.level + 1, 5) : 0;
      const today = getToday();
      const todayStats = prev.dailyStats[today] || {
        date: today, wordsReviewed: 0, wordsCorrect: 0, sentencesReviewed: 0,
        sentencesCorrect: 0, scenariosCompleted: 0, listeningCompleted: 0,
        grammarCompleted: 0, quizCompleted: 0,
      };
      const newStreakIncrement = updateStreak(prev.lastActiveDate, today);
      return {
        ...prev,
        sentences: {
          ...prev.sentences,
          [sentenceIndex]: {
            ...existing,
            correct: existing.correct + (correct ? 1 : 0),
            wrong: existing.wrong + (correct ? 0 : 1),
            lastSeen: Date.now(),
            nextReview: getNextReviewTimestamp(newLevel),
            level: newLevel,
          },
        },
        dailyStats: {
          ...prev.dailyStats,
          [today]: {
            ...todayStats,
            sentencesReviewed: todayStats.sentencesReviewed + 1,
            sentencesCorrect: todayStats.sentencesCorrect + (correct ? 1 : 0),
          },
        },
        streak: prev.streak + newStreakIncrement,
        lastActiveDate: today,
        totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
        totalWrong: prev.totalWrong + (correct ? 0 : 1),
      };
    });
  }, []);

  const completeScenario = useCallback((scenarioId: number) => {
    setState(prev => {
      const today = getToday();
      const todayStats = prev.dailyStats[today] || {
        date: today, wordsReviewed: 0, wordsCorrect: 0, sentencesReviewed: 0,
        sentencesCorrect: 0, scenariosCompleted: 0, listeningCompleted: 0,
        grammarCompleted: 0, quizCompleted: 0,
      };
      const newStreakIncrement = updateStreak(prev.lastActiveDate, today);
      return {
        ...prev,
        scenariosCompleted: prev.scenariosCompleted.includes(scenarioId)
          ? prev.scenariosCompleted
          : [...prev.scenariosCompleted, scenarioId],
        dailyStats: {
          ...prev.dailyStats,
          [today]: { ...todayStats, scenariosCompleted: todayStats.scenariosCompleted + 1 },
        },
        streak: prev.streak + newStreakIncrement,
        lastActiveDate: today,
      };
    });
  }, []);

  const completeListening = useCallback((listeningId: number) => {
    setState(prev => {
      const today = getToday();
      const todayStats = prev.dailyStats[today] || {
        date: today, wordsReviewed: 0, wordsCorrect: 0, sentencesReviewed: 0,
        sentencesCorrect: 0, scenariosCompleted: 0, listeningCompleted: 0,
        grammarCompleted: 0, quizCompleted: 0,
      };
      const newStreakIncrement = updateStreak(prev.lastActiveDate, today);
      return {
        ...prev,
        listeningCompleted: prev.listeningCompleted.includes(listeningId)
          ? prev.listeningCompleted
          : [...prev.listeningCompleted, listeningId],
        dailyStats: {
          ...prev.dailyStats,
          [today]: { ...todayStats, listeningCompleted: todayStats.listeningCompleted + 1 },
        },
        streak: prev.streak + newStreakIncrement,
        lastActiveDate: today,
      };
    });
  }, []);

  const completeGrammar = useCallback((topicId: string) => {
    setState(prev => {
      const today = getToday();
      const todayStats = prev.dailyStats[today] || {
        date: today, wordsReviewed: 0, wordsCorrect: 0, sentencesReviewed: 0,
        sentencesCorrect: 0, scenariosCompleted: 0, listeningCompleted: 0,
        grammarCompleted: 0, quizCompleted: 0,
      };
      const newStreakIncrement = updateStreak(prev.lastActiveDate, today);
      return {
        ...prev,
        grammarCompleted: prev.grammarCompleted.includes(topicId)
          ? prev.grammarCompleted
          : [...prev.grammarCompleted, topicId],
        dailyStats: {
          ...prev.dailyStats,
          [today]: { ...todayStats, grammarCompleted: todayStats.grammarCompleted + 1 },
        },
        streak: prev.streak + newStreakIncrement,
        lastActiveDate: today,
      };
    });
  }, []);

  const getDueWords = useCallback((allWords: string[]): string[] => {
    const now = Date.now();
    return allWords.filter(word => {
      const progress = state.words[word];
      if (!progress) return true;
      return progress.nextReview <= now;
    });
  }, [state.words]);

  const getTodayStats = useCallback((): DailyStats => {
    const today = getToday();
    return state.dailyStats[today] || {
      date: today, wordsReviewed: 0, wordsCorrect: 0, sentencesReviewed: 0,
      sentencesCorrect: 0, scenariosCompleted: 0, listeningCompleted: 0,
      grammarCompleted: 0, quizCompleted: 0,
    };
  }, [state.dailyStats]);

  const getAccuracy = useCallback((): number => {
    const total = state.totalCorrect + state.totalWrong;
    if (total === 0) return 0;
    return Math.round((state.totalCorrect / total) * 100);
  }, [state.totalCorrect, state.totalWrong]);

  const getWordProgress = useCallback((word: string) => {
    return state.words[word] || null;
  }, [state.words]);

  const setDailyGoal = useCallback((goal: number) => {
    setState(prev => ({ ...prev, dailyGoal: goal }));
  }, []);

  const resetProgress = useCallback(() => {
    const fresh = loadState();
    setState({
      words: {}, sentences: {}, dailyStats: {}, streak: 0, lastActiveDate: '',
      totalCorrect: 0, totalWrong: 0, dailyGoal: fresh.dailyGoal || 20,
      scenariosCompleted: [], listeningCompleted: [], grammarCompleted: [],
    });
  }, []);

  return {
    state, markWord, markSentence, completeScenario, completeListening,
    completeGrammar, getDueWords, getTodayStats, getAccuracy, getWordProgress,
    setDailyGoal, resetProgress,
  };
}
