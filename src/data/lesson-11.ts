import { LessonData } from "@/lib/types";

export const lesson11: LessonData = {
  id: "lesson-11",
  title: { kk: "Алгоритм түрлері", ru: "Виды алгоритмов", en: "Types of Algorithms" },
  description: {
    kk: "Сызықтық, тармақталған және циклдік алгоритмдер",
    ru: "Линейные, разветвлённые и циклические алгоритмы",
    en: "Linear, branching, and looping algorithms",
  },
  emoji: "🔀",
  color: "from-violet-400 to-purple-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Алгоритм түрлері", ru: "Виды алгоритмов", en: "Types of Algorithms" },
      subtitle: { kk: "Алгоритмдердің түрлерін білейік!", ru: "Узнаем виды алгоритмов!", en: "Let's learn the types of algorithms!" },
      emoji: "🔀",
      color: "from-violet-400 to-purple-500",
    },
    {
      type: "rules",
      title: { kk: "Алгоритм түрлері", ru: "Виды алгоритмов", en: "Types of Algorithms" },
      points: [
        { kk: "➡️ Сызықтық — қадамдар ретімен орындалады", ru: "➡️ Линейный — шаги выполняются по порядку", en: "➡️ Linear — steps execute in order" },
        { kk: "🔀 Тармақталған — шарт бойынша таңдау жасалады", ru: "🔀 Разветвлённый — выбор по условию", en: "🔀 Branching — choice based on condition" },
        { kk: "🔄 Циклдік — қадамдар қайталанады", ru: "🔄 Циклический — шаги повторяются", en: "🔄 Loop — steps repeat" },
      ],
      emoji: "📊",
    },
    {
      type: "topic",
      title: { kk: "Мысалдар", ru: "Примеры", en: "Examples" },
      text: {
        kk: "Сызықтық: ас ішу қадамдары. Тармақталған: жаңбыр жауса — қолшатыр ал, жаумаса — алма. Циклдік: мерекеде 10 рет «ура» деп айқайлау.",
        ru: "Линейный: шаги приёма пищи. Разветвлённый: если дождь — бери зонт, нет — не бери. Циклический: крикнуть «ура» 10 раз на празднике.",
        en: "Linear: steps to eat a meal. Branching: if rain — take umbrella, no rain — don't. Loop: shout 'hooray' 10 times at a party.",
      },
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Қадамдар ретімен орындалатын алгоритм қалай аталады?", ru: "Как называется алгоритм, где шаги идут по порядку?", en: "What is an algorithm where steps go in order called?" },
          options: [
            { kk: "Циклдік", ru: "Циклический", en: "Loop" },
            { kk: "Сызықтық", ru: "Линейный", en: "Linear" },
            { kk: "Тармақталған", ru: "Разветвлённый", en: "Branching" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "«Жаңбыр жауса қолшатыр ал» — қандай алгоритм?", ru: "«Если дождь — бери зонт» — какой алгоритм?", en: "'If rain, take umbrella' — what type?" },
          options: [
            { kk: "Сызықтық", ru: "Линейный", en: "Linear" },
            { kk: "Тармақталған", ru: "Разветвлённый", en: "Branching" },
            { kk: "Циклдік", ru: "Циклический", en: "Loop" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Алгоритм түрін тап", ru: "Определи вид алгоритма", en: "Find the Algorithm Type" },
      items: [
        {
          type: "match",
          instruction: { kk: "Мысалды алгоритм түрімен сәйкестендір", ru: "Соедини пример с видом алгоритма", en: "Match example with algorithm type" },
          pairs: [
            { left: { kk: "Ас ішу қадамдары", ru: "Шаги приёма пищи", en: "Eating steps" }, right: { kk: "Сызықтық", ru: "Линейный", en: "Linear" } },
            { left: { kk: "Жаңбыр жауса...", ru: "Если дождь...", en: "If rain..." }, right: { kk: "Тармақталған", ru: "Разветвлённый", en: "Branching" } },
            { left: { kk: "10 рет секіру", ru: "Прыгнуть 10 раз", en: "Jump 10 times" }, right: { kk: "Циклдік", ru: "Циклический", en: "Loop" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: "/video/lesson-11/video.mp4",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Сызықтық алгоритм — қадамдар ретімен", ru: "Линейный — шаги по порядку", en: "Linear — steps in order" },
        { kk: "Тармақталған — шарт бойынша таңдау", ru: "Разветвлённый — выбор по условию", en: "Branching — choice by condition" },
        { kk: "Циклдік — қайталанатын қадамдар", ru: "Циклический — повторяющиеся шаги", en: "Loop — repeating steps" },
      ],
      emoji: "🎓",
    },
  ],
};
