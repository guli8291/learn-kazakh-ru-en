import { LessonData } from "@/lib/types";

export const lesson17: LessonData = {
  id: "lesson-17",
  title: { kk: "Кодтау және декодтау", ru: "Кодирование и декодирование", en: "Encoding and Decoding" },
  description: {
    kk: "Ақпаратты кодтау және декодтау тәсілдері",
    ru: "Способы кодирования и декодирования информации",
    en: "Methods of encoding and decoding information",
  },
  emoji: "🔐",
  color: "from-emerald-400 to-teal-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Кодтау және декодтау", ru: "Кодирование и декодирование", en: "Encoding and Decoding" },
      subtitle: { kk: "Құпия хабарлама жазуды үйрен!", ru: "Научись писать секретные послания!", en: "Learn to write secret messages!" },
      emoji: "🔐",
      color: "from-emerald-400 to-teal-500",
    },
    {
      type: "topic",
      title: { kk: "Кодтау дегеніміз не?", ru: "Что такое кодирование?", en: "What is Encoding?" },
      text: {
        kk: "Кодтау — ақпаратты бір түрден екінші түрге ауыстыру. Мысалы: бағдаршам — қызыл = тоқта, жасыл = жүр. Бұл кодтау! Декодтау — кодталған ақпаратты оқу.",
        ru: "Кодирование — преобразование информации из одной формы в другую. Например: светофор — красный = стой, зелёный = иди. Это кодирование! Декодирование — чтение закодированной информации.",
        en: "Encoding is transforming information from one form to another. Example: traffic light — red = stop, green = go. That's encoding! Decoding is reading encoded information.",
      },
    },
    {
      type: "rules",
      title: { kk: "Кодтау мысалдары", ru: "Примеры кодирования", en: "Encoding Examples" },
      points: [
        { kk: "🚦 Бағдаршам — түстер арқылы кодтау", ru: "🚦 Светофор — кодирование цветами", en: "🚦 Traffic light — encoding with colors" },
        { kk: "🔢 Сандар — мөлшерді кодтау", ru: "🔢 Числа — кодирование количества", en: "🔢 Numbers — encoding quantity" },
        { kk: "🎵 Нота — музыканы кодтау", ru: "🎵 Ноты — кодирование музыки", en: "🎵 Notes — encoding music" },
        { kk: "🏳️ Жалаулар — хабарларды кодтау", ru: "🏳️ Флаги — кодирование сообщений", en: "🏳️ Flags — encoding messages" },
      ],
      emoji: "📡",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Бағдаршамның қызыл түсі нені білдіреді?", ru: "Что означает красный цвет светофора?", en: "What does the red traffic light mean?" },
          options: [
            { kk: "Жүр", ru: "Иди", en: "Go" },
            { kk: "Тоқта", ru: "Стой", en: "Stop" },
            { kk: "Дайын бол", ru: "Приготовься", en: "Get ready" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Кодтау дегеніміз не?", ru: "Что такое кодирование?", en: "What is encoding?" },
          options: [
            { kk: "Ойын ойнау", ru: "Играть в игру", en: "Play a game" },
            { kk: "Ақпаратты бір түрден екіншіге ауыстыру", ru: "Преобразование информации из одной формы в другую", en: "Transforming info from one form to another" },
            { kk: "Суретті жою", ru: "Удалить рисунок", en: "Delete a picture" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Кодты тап", ru: "Найди код", en: "Find the Code" },
      items: [
        {
          type: "match",
          instruction: { kk: "Кодты мағынасымен сәйкестендір", ru: "Соедини код со значением", en: "Match code with meaning" },
          pairs: [
            { left: { kk: "🔴", ru: "🔴", en: "🔴" }, right: { kk: "Тоқта", ru: "Стой", en: "Stop" } },
            { left: { kk: "🟢", ru: "🟢", en: "🟢" }, right: { kk: "Жүр", ru: "Иди", en: "Go" } },
            { left: { kk: "🟡", ru: "🟡", en: "🟡" }, right: { kk: "Дайын бол", ru: "Приготовься", en: "Get ready" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Кодтау — ақпаратты басқа түрге ауыстыру", ru: "Кодирование — преобразование информации", en: "Encoding — transforming information" },
        { kk: "Декодтау — кодталған ақпаратты оқу", ru: "Декодирование — чтение закодированного", en: "Decoding — reading encoded info" },
      ],
      emoji: "🎓",
    },
  ],
};
