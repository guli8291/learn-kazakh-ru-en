import { LessonData } from "@/lib/types";

export const lesson06: LessonData = {
  id: "lesson-06",
  title: { kk: "Tux Paint графикалық редакторы", ru: "Графический редактор Tux Paint", en: "Tux Paint Graphics Editor" },
  description: {
    kk: "Tux Paint бағдарламасымен танысу және сурет салу",
    ru: "Знакомство с программой Tux Paint и рисование",
    en: "Introduction to Tux Paint program and drawing",
  },
  emoji: "🎨",
  color: "from-pink-400 to-orange-400",
  slides: [
    {
      type: "hero",
      title: { kk: "Tux Paint графикалық редакторы", ru: "Графический редактор Tux Paint", en: "Tux Paint Graphics Editor" },
      subtitle: {
        kk: "Компьютерде сурет салуды үйренеміз!",
        ru: "Научимся рисовать на компьютере!",
        en: "Let's learn to draw on the computer!",
      },
      emoji: "🎨",
      color: "from-pink-400 to-orange-400",
    },
    {
      type: "topic",
      title: { kk: "Tux Paint дегеніміз не?", ru: "Что такое Tux Paint?", en: "What is Tux Paint?" },
      text: {
        kk: "Tux Paint — балаларға арналған тегін графикалық редактор. Онда сурет салуға, бояуға, мөр қоюға болады. Пингвин Tux көмекші ретінде бағдарлайды.",
        ru: "Tux Paint — бесплатный графический редактор для детей. В нём можно рисовать, раскрашивать, ставить штампы. Пингвин Такс подсказывает.",
        en: "Tux Paint is a free drawing program for kids. You can draw, paint, and use stamps. Tux the penguin helps you along the way.",
      },
    },
    {
      type: "rules",
      title: { kk: "Tux Paint құралдары", ru: "Инструменты Tux Paint", en: "Tux Paint Tools" },
      points: [
        { kk: "🖌️ Қылқалам — еркін сурет салу", ru: "🖌️ Кисть — свободное рисование", en: "🖌️ Brush — free drawing" },
        { kk: "🔲 Мөр — дайын суреттерді қою", ru: "🔲 Штамп — вставка готовых картинок", en: "🔲 Stamp — insert ready-made pictures" },
        { kk: "📐 Сызық — түзу сызық салу", ru: "📐 Линия — рисование прямой линии", en: "📐 Line — draw a straight line" },
        { kk: "🪣 Толтыру — аймақты бояу", ru: "🪣 Заливка — закрасить область", en: "🪣 Fill — paint an area" },
        { kk: "✏️ Өшіргіш — салынған суретті өшіру", ru: "✏️ Ластик — стереть нарисованное", en: "✏️ Eraser — erase what you drew" },
        { kk: "🪄 Сиқыр — арнайы эффекттер", ru: "🪄 Магия — специальные эффекты", en: "🪄 Magic — special effects" },
      ],
      emoji: "🛠️",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Tux Paint-те аймақты бояу үшін қандай құрал қолданылады?",
            ru: "Какой инструмент в Tux Paint используется для закраски области?",
            en: "Which Tux Paint tool is used to fill an area with color?",
          },
          options: [
            { kk: "Қылқалам", ru: "Кисть", en: "Brush" },
            { kk: "Толтыру", ru: "Заливка", en: "Fill" },
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Tux Paint-тегі көмекші кейіпкер кім?",
            ru: "Кто помощник-персонаж в Tux Paint?",
            en: "Who is the helper character in Tux Paint?",
          },
          options: [
            { kk: "Аю", ru: "Медведь", en: "Bear" },
            { kk: "Пингвин Tux", ru: "Пингвин Такс", en: "Tux the Penguin" },
            { kk: "Мысық", ru: "Кошка", en: "Cat" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Құралдарды сәйкестендір", ru: "Соедини инструменты", en: "Match the Tools" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Құралды оның қызметімен сәйкестендір",
            ru: "Соедини инструмент с его функцией",
            en: "Match the tool with its function",
          },
          pairs: [
            { left: { kk: "Қылқалам", ru: "Кисть", en: "Brush" }, right: { kk: "Еркін салу", ru: "Свободно рисовать", en: "Free draw" } },
            { left: { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" }, right: { kk: "Суретті өшіру", ru: "Стереть рисунок", en: "Erase drawing" } },
            { left: { kk: "Мөр", ru: "Штамп", en: "Stamp" }, right: { kk: "Дайын сурет қою", ru: "Вставить картинку", en: "Insert picture" } },
            { left: { kk: "Толтыру", ru: "Заливка", en: "Fill" }, right: { kk: "Аймақты бояу", ru: "Закрасить область", en: "Paint area" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: "/video/lesson-06/video.mp4",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Tux Paint — балаларға арналған графикалық редактор", ru: "Tux Paint — графический редактор для детей", en: "Tux Paint is a drawing program for kids" },
        { kk: "Оның құралдары: қылқалам, мөр, толтыру, өшіргіш", ru: "Его инструменты: кисть, штамп, заливка, ластик", en: "Its tools: brush, stamp, fill, eraser" },
        { kk: "Пингвин Tux — бағдарламаның көмекшісі", ru: "Пингвин Такс — помощник программы", en: "Tux the penguin is the program's helper" },
      ],
      emoji: "🎓",
    },
  ],
};
