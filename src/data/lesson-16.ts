import { LessonData } from "@/lib/types";

export const lesson16: LessonData = {
  id: "lesson-16",
  title: { kk: "Scratch-те жоба құру", ru: "Создание проекта в Scratch", en: "Creating a Project in Scratch" },
  description: {
    kk: "Scratch-те толық жоба құру: сызықтық алгоритм, қозғалыс, дыбыс",
    ru: "Создание полного проекта в Scratch: линейный алгоритм, движение, звук",
    en: "Creating a full project in Scratch: linear algorithm, movement, sound",
  },
  emoji: "🎮",
  color: "from-blue-400 to-cyan-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Scratch-те жоба құру", ru: "Создание проекта в Scratch", en: "Creating a Project in Scratch" },
      subtitle: { kk: "Өз ойыныңды немесе анимацияңды жаса!", ru: "Создай свою игру или анимацию!", en: "Create your own game or animation!" },
      emoji: "🎮",
      color: "from-blue-400 to-cyan-500",
    },
    {
      type: "topic",
      title: { kk: "Жоба құру принциптері", ru: "Принципы создания проекта", en: "Principles of Creating a Project" },
      text: {
        kk: "Scratch-те жоба құру — бұл сызықтық алгоритм. Блоктар ретімен орындалады: алдымен бір команда, содан кейін келесі. Спрайтты қозғалтуға, дыбыс шығаруға, сөйлетуге, костюмін ауыстыруға болады.",
        ru: "Создание проекта в Scratch — это линейный алгоритм. Блоки выполняются по порядку: сначала одна команда, потом следующая. Спрайт можно двигать, озвучивать, заставить говорить, менять костюм.",
        en: "Creating a project in Scratch is a linear algorithm. Blocks execute in order: first one command, then the next. You can move sprites, add sounds, make them talk, and change costumes.",
      },
    },
    {
      type: "rules",
      title: { kk: "Негізгі блоктар", ru: "Основные блоки", en: "Main Blocks" },
      points: [
        { kk: "🟢 «Жасыл жалауша басылғанда» — бастау блогы", ru: "🟢 «Когда нажат зелёный флажок» — блок старта", en: "🟢 'When green flag clicked' — start block" },
        { kk: "➡️ «10 адым жылжу» — спрайтты қозғалту", ru: "➡️ «Переместиться на 10 шагов» — двигать спрайт", en: "➡️ 'Move 10 steps' — move sprite" },
        { kk: "💬 «Сәлем! деп 2 секунд айту» — сөйлету", ru: "💬 «Сказать Привет! 2 секунды» — говорить", en: "💬 'Say Hello! for 2 seconds' — speak" },
        { kk: "🔊 «Дыбыс шығару» — дыбыс қосу", ru: "🔊 «Воспроизвести звук» — добавить звук", en: "🔊 'Play sound' — add sound" },
        { kk: "👗 «Келесі костюмге ауысу» — сыртқы түрін өзгерту", ru: "👗 «Сменить костюм» — изменить внешний вид", en: "👗 'Next costume' — change appearance" },
      ],
      emoji: "🧩",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "«10 адым жылжу» блогы не істейді?", ru: "Что делает блок «Переместиться на 10 шагов»?", en: "What does 'Move 10 steps' do?" },
          options: [
            { kk: "Дыбыс шығарады", ru: "Воспроизводит звук", en: "Plays sound" },
            { kk: "Спрайтты жылжытады", ru: "Двигает спрайт", en: "Moves the sprite" },
            { kk: "Фонды ауыстырады", ru: "Меняет фон", en: "Changes backdrop" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Сызықтық алгоритмде блоктар қалай орындалады?", ru: "Как выполняются блоки в линейном алгоритме?", en: "How do blocks execute in a linear algorithm?" },
          options: [
            { kk: "Кездейсоқ", ru: "Случайно", en: "Randomly" },
            { kk: "Ретімен", ru: "По порядку", en: "In order" },
            { kk: "Кері ретпен", ru: "В обратном порядке", en: "In reverse" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Блоктарды сәйкестендір", ru: "Соедини блоки", en: "Match the Blocks" },
      items: [
        {
          type: "match",
          instruction: { kk: "Блокты оның қызметімен сәйкестендір", ru: "Соедини блок с его функцией", en: "Match block with function" },
          pairs: [
            { left: { kk: "10 адым жылжу", ru: "Переместиться на 10 шагов", en: "Move 10 steps" }, right: { kk: "Қозғалыс", ru: "Движение", en: "Movement" } },
            { left: { kk: "Сәлем! деп айту", ru: "Сказать Привет!", en: "Say Hello!" }, right: { kk: "Сөйлеу", ru: "Речь", en: "Speech" } },
            { left: { kk: "Дыбыс шығару", ru: "Воспроизвести звук", en: "Play sound" }, right: { kk: "Дыбыс", ru: "Звук", en: "Sound" } },
            { left: { kk: "Костюмді ауыстыру", ru: "Сменить костюм", en: "Next costume" }, right: { kk: "Сыртқы түр", ru: "Внешний вид", en: "Appearance" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: "/video/lesson-16/video.mp4",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Scratch-те жоба — сызықтық алгоритм", ru: "Проект в Scratch — линейный алгоритм", en: "Scratch project — linear algorithm" },
        { kk: "Негізгі блоктар: қозғалыс, сөйлеу, дыбыс, костюм", ru: "Основные блоки: движение, речь, звук, костюм", en: "Main blocks: movement, speech, sound, costume" },
      ],
      emoji: "⭐",
    },
  ],
};
