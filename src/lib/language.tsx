import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "kk" | "ru" | "en";

export type Translatable = { kk: string; ru: string; en: string };

export function t(field: Translatable | undefined, lang: Lang): string {
  if (!field) return "";
  return field[lang] || field.kk || "";
}

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: "kk", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("app-lang");
    return (saved as Lang) || "kk";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("app-lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// UI translations
export const ui: Record<string, Translatable> = {
  home: { kk: "Басты бет", ru: "Главная", en: "Home" },
  lessons: { kk: "Сабақтар", ru: "Уроки", en: "Lessons" },
  next: { kk: "Келесі", ru: "Далее", en: "Next" },
  prev: { kk: "Артқа", ru: "Назад", en: "Back" },
  correct: { kk: "Дұрыс! 🎉", ru: "Правильно! 🎉", en: "Correct! 🎉" },
  incorrect: { kk: "Қате, қайталап көр! 😊", ru: "Неверно, попробуй ещё! 😊", en: "Wrong, try again! 😊" },
  check: { kk: "Тексеру", ru: "Проверить", en: "Check" },
  listen: { kk: "Тыңдау", ru: "Слушать", en: "Listen" },
  startLesson: { kk: "Сабақты бастау", ru: "Начать урок", en: "Start Lesson" },
  summary: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
  wellDone: { kk: "Жарайсың! 🌟", ru: "Молодец! 🌟", en: "Well done! 🌟" },
  selectAnswer: { kk: "Жауабын таңда", ru: "Выбери ответ", en: "Select an answer" },
  matchItems: { kk: "Сәйкестендір", ru: "Соедини пары", en: "Match items" },
  score: { kk: "Ұпай", ru: "Баллы", en: "Score" },
  of: { kk: "ішінен", ru: "из", en: "of" },
  slide: { kk: "Слайд", ru: "Слайд", en: "Slide" },
};
