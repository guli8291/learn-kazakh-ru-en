import { LessonData } from "@/lib/types";

export const lesson10: LessonData = {
  id: "lesson-10",
  title: { kk: "Алгоритм", ru: "Алгоритм", en: "Algorithm" },
  description: {
    kk: "Алгоритм ұғымы және күнделікті өмірдегі алгоритмдер",
    ru: "Понятие алгоритма и алгоритмы в повседневной жизни",
    en: "The concept of algorithm and algorithms in everyday life",
  },
  emoji: "📝",
  color: "from-amber-400 to-yellow-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Алгоритм", ru: "Алгоритм", en: "Algorithm" },
      subtitle: {
        kk: "Қадамдар тізбегін үйренеміз!",
        ru: "Научимся составлять последовательность шагов!",
        en: "Let's learn to create step-by-step instructions!",
      },
      emoji: "📝",
      color: "from-amber-400 to-yellow-500",
    },
    {
      type: "topic",
      title: { kk: "Алгоритм дегеніміз не?", ru: "Что такое алгоритм?", en: "What is an Algorithm?" },
      text: {
        kk: "Алгоритм — бір нәтижеге жету үшін орындалатын қадамдар тізбегі. Мысалы: таңертең тұру → бет жуу → тіс тазалау → киіну → мектепке бару.",
        ru: "Алгоритм — это последовательность шагов для достижения результата. Например: проснуться → умыться → почистить зубы → одеться → пойти в школу.",
        en: "An algorithm is a sequence of steps to achieve a result. Example: wake up → wash face → brush teeth → get dressed → go to school.",
      },
    },
    {
      type: "rules",
      title: { kk: "Алгоритм қасиеттері", ru: "Свойства алгоритма", en: "Properties of an Algorithm" },
      points: [
        { kk: "📋 Анықтылық — әр қадам түсінікті", ru: "📋 Определённость — каждый шаг понятен", en: "📋 Clarity — each step is clear" },
        { kk: "🔢 Реттілік — қадамдар ретпен орындалады", ru: "🔢 Последовательность — шаги идут по порядку", en: "🔢 Order — steps go in sequence" },
        { kk: "🏁 Нәтижелілік — алгоритмнің нәтижесі болады", ru: "🏁 Результативность — алгоритм даёт результат", en: "🏁 Result — algorithm produces an outcome" },
        { kk: "⏱️ Шектілік — қадамдар саны шектелген", ru: "⏱️ Конечность — число шагов ограничено", en: "⏱️ Finiteness — number of steps is limited" },
      ],
      emoji: "📌",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Алгоритм дегеніміз не?", ru: "Что такое алгоритм?", en: "What is an algorithm?" },
          options: [
            { kk: "Кездейсоқ әрекеттер", ru: "Случайные действия", en: "Random actions" },
            { kk: "Қадамдар тізбегі", ru: "Последовательность шагов", en: "Sequence of steps" },
            { kk: "Ойын", ru: "Игра", en: "Game" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "«Тіс тазалау» алгоритмінде бірінші қадам қандай?", ru: "Какой первый шаг в алгоритме «Чистка зубов»?", en: "What is the first step in 'Brushing teeth' algorithm?" },
          options: [
            { kk: "Пастаны жағу", ru: "Нанести пасту", en: "Apply toothpaste" },
            { kk: "Тіс щёткасын алу", ru: "Взять зубную щётку", en: "Take the toothbrush" },
            { kk: "Ауызды шаю", ru: "Прополоскать рот", en: "Rinse mouth" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Қадамдарды реттеу", ru: "Расставь шаги по порядку", en: "Order the Steps" },
      items: [
        {
          type: "match",
          instruction: { kk: "Таңертеңгі алгоритмді реттеп сәйкестендір", ru: "Расставь утренний алгоритм по порядку", en: "Match morning algorithm in order" },
          pairs: [
            { left: { kk: "1-қадам", ru: "Шаг 1", en: "Step 1" }, right: { kk: "Оянау", ru: "Проснуться", en: "Wake up" } },
            { left: { kk: "2-қадам", ru: "Шаг 2", en: "Step 2" }, right: { kk: "Бет жуу", ru: "Умыться", en: "Wash face" } },
            { left: { kk: "3-қадам", ru: "Шаг 3", en: "Step 3" }, right: { kk: "Киіну", ru: "Одеться", en: "Get dressed" } },
            { left: { kk: "4-қадам", ru: "Шаг 4", en: "Step 4" }, right: { kk: "Мектепке бару", ru: "Пойти в школу", en: "Go to school" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Алгоритм — қадамдар тізбегі", ru: "Алгоритм — последовательность шагов", en: "Algorithm — sequence of steps" },
        { kk: "Алгоритм анық, ретті, нәтижелі болуы керек", ru: "Алгоритм должен быть чётким, последовательным, результативным", en: "An algorithm must be clear, ordered, and produce a result" },
      ],
      emoji: "⭐",
    },
  ],
};
