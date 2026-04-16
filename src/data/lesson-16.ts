import { LessonData } from "@/lib/types";

export const lesson16: LessonData = {
  id: "lesson-16",
  title: { kk: "Логикалық ойлау", ru: "Логическое мышление", en: "Logical Thinking" },
  description: {
    kk: "Логикалық тапсырмалар мен ойлау дағдыларын дамыту",
    ru: "Развитие логического мышления и решение задач",
    en: "Developing logical thinking and problem-solving skills",
  },
  emoji: "🧩",
  color: "from-fuchsia-400 to-pink-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Логикалық ойлау", ru: "Логическое мышление", en: "Logical Thinking" },
      subtitle: { kk: "Ойлау қабілетіңді дамыт!", ru: "Развивай своё мышление!", en: "Develop your thinking skills!" },
      emoji: "🧩",
      color: "from-fuchsia-400 to-pink-500",
    },
    {
      type: "topic",
      title: { kk: "Логика дегеніміз не?", ru: "Что такое логика?", en: "What is Logic?" },
      text: {
        kk: "Логика — дұрыс ойлау ережелері. Логикалық ойлау заңдылықтарды табуға, салыстыруға, жіктеуге көмектеседі. Мысалы: қай зат артық? Қандай заңдылық бар?",
        ru: "Логика — правила правильного мышления. Логическое мышление помогает находить закономерности, сравнивать, классифицировать. Например: что лишнее? Какая закономерность?",
        en: "Logic is the rules of correct thinking. Logical thinking helps find patterns, compare, and classify. For example: what doesn't belong? What's the pattern?",
      },
    },
    {
      type: "rules",
      title: { kk: "Логикалық амалдар", ru: "Логические операции", en: "Logical Operations" },
      points: [
        { kk: "🔍 Салыстыру — екі затты салыстыру", ru: "🔍 Сравнение — сравнить два предмета", en: "🔍 Comparison — compare two things" },
        { kk: "📦 Жіктеу — заттарды топтарға бөлу", ru: "📦 Классификация — разделить на группы", en: "📦 Classification — divide into groups" },
        { kk: "🔗 Заңдылық — қайталанатын реттілікті табу", ru: "🔗 Закономерность — найти повторяющийся порядок", en: "🔗 Pattern — find a repeating order" },
        { kk: "❌ Артық затты табу — топқа сәйкес келмейтінді анықтау", ru: "❌ Найти лишнее — определить, что не подходит к группе", en: "❌ Find the odd one out — identify what doesn't belong" },
      ],
      emoji: "🧠",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Қайсысы артық: алма, алмұрт, көйлек, банан?", ru: "Что лишнее: яблоко, груша, платье, банан?", en: "What doesn't belong: apple, pear, dress, banana?" },
          options: [
            { kk: "Алма", ru: "Яблоко", en: "Apple" },
            { kk: "Көйлек", ru: "Платье", en: "Dress" },
            { kk: "Банан", ru: "Банан", en: "Banana" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Заңдылықты жалғастыр: 🔴🔵🔴🔵...?", ru: "Продолжи закономерность: 🔴🔵🔴🔵...?", en: "Continue the pattern: 🔴🔵🔴🔵...?" },
          options: [
            { kk: "🔵", ru: "🔵", en: "🔵" },
            { kk: "🔴", ru: "🔴", en: "🔴" },
            { kk: "🟢", ru: "🟢", en: "🟢" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Топтарға бөл", ru: "Раздели на группы", en: "Sort into Groups" },
      items: [
        {
          type: "match",
          instruction: { kk: "Затты топпен сәйкестендір", ru: "Соедини предмет с группой", en: "Match item with group" },
          pairs: [
            { left: { kk: "Алма", ru: "Яблоко", en: "Apple" }, right: { kk: "Жеміс 🍎", ru: "Фрукт 🍎", en: "Fruit 🍎" } },
            { left: { kk: "Көйлек", ru: "Платье", en: "Dress" }, right: { kk: "Киім 👗", ru: "Одежда 👗", en: "Clothing 👗" } },
            { left: { kk: "Ит", ru: "Собака", en: "Dog" }, right: { kk: "Жануар 🐾", ru: "Животное 🐾", en: "Animal 🐾" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Логика — дұрыс ойлау ережелері", ru: "Логика — правила правильного мышления", en: "Logic — rules of correct thinking" },
        { kk: "Салыстыру, жіктеу, заңдылық табу — логикалық амалдар", ru: "Сравнение, классификация, поиск закономерностей — логические операции", en: "Comparison, classification, finding patterns — logical operations" },
      ],
      emoji: "⭐",
    },
  ],
};
