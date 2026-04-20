import { LessonData } from "@/lib/types";

import scratchIntroImg from "@/assets/lesson-13/scratch-intro.jpg";

import scratchIntroVideo from "@/assets/lesson-13/videos/scratch-intro.mp4.asset.json";
import scratchInterfaceVideo from "@/assets/lesson-13/videos/scratch-interface.mp4.asset.json";
import scratchCatWaveVideo from "@/assets/lesson-13/videos/scratch-cat-wave.mp4.asset.json";

export const lesson13: LessonData = {
  id: "lesson-13",
  title: { kk: "Scratch-пен танысу", ru: "Знакомство со Scratch", en: "Introduction to Scratch" },
  description: {
    kk: "Scratch бағдарламасымен алғашқы танысу",
    ru: "Первое знакомство с программой Scratch",
    en: "First introduction to the Scratch program",
  },
  emoji: "🐱",
  color: "from-orange-400 to-amber-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Scratch-пен танысу", ru: "Знакомство со Scratch", en: "Introduction to Scratch" },
      subtitle: { kk: "Бағдарламалау әлеміне қош келдің!", ru: "Добро пожаловать в мир программирования!", en: "Welcome to the world of programming!" },
      emoji: "🐱",
      color: "from-orange-400 to-amber-500",
    },
    {
      type: "topic",
      title: { kk: "Scratch дегеніміз не?", ru: "Что такое Scratch?", en: "What is Scratch?" },
      text: {
        kk: "Scratch — балаларға арналған бағдарламалау ортасы. Онда блоктарды біріктіріп, анимациялар, ойындар және әңгімелер жасауға болады. Scratch-те мысық — негізгі кейіпкер (спрайт).",
        ru: "Scratch — среда программирования для детей. В ней можно соединять блоки, чтобы создавать анимации, игры и истории. Кот в Scratch — главный персонаж (спрайт).",
        en: "Scratch is a programming environment for kids. You can connect blocks to create animations, games, and stories. The cat in Scratch is the main character (sprite).",
      },
      image: scratchIntroImg,
      videos: [scratchIntroVideo.url, scratchCatWaveVideo.url, scratchInterfaceVideo.url],
    },
    {
      type: "rules",
      title: { kk: "Scratch интерфейсі", ru: "Интерфейс Scratch", en: "Scratch Interface" },
      points: [
        { kk: "🎭 Сахна — спрайттар қозғалатын аймақ", ru: "🎭 Сцена — область, где двигаются спрайты", en: "🎭 Stage — area where sprites move" },
        { kk: "🧩 Блоктар тақтасы — командалар тізімі", ru: "🧩 Палитра блоков — список команд", en: "🧩 Block palette — list of commands" },
        { kk: "📝 Скрипт аймағы — блоктарды біріктіретін орын", ru: "📝 Область скриптов — место для соединения блоков", en: "📝 Script area — place to connect blocks" },
        { kk: "🐱 Спрайт — кейіпкер (мысық, адам, зат)", ru: "🐱 Спрайт — персонаж (кот, человек, предмет)", en: "🐱 Sprite — character (cat, person, object)" },
        { kk: "🟢 Жасыл жалауша — бағдарламаны іске қосу", ru: "🟢 Зелёный флажок — запуск программы", en: "🟢 Green flag — start the program" },
      ],
      emoji: "🖥️",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Scratch-те негізгі кейіпкер кім?", ru: "Кто главный персонаж в Scratch?", en: "Who is the main character in Scratch?" },
          options: [
            { kk: "Ит", ru: "Собака", en: "Dog" },
            { kk: "Мысық", ru: "Кот", en: "Cat" },
            { kk: "Құс", ru: "Птица", en: "Bird" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Scratch-те бағдарламаны не іске қосады?", ru: "Что запускает программу в Scratch?", en: "What starts the program in Scratch?" },
          options: [
            { kk: "Қызыл түйме", ru: "Красная кнопка", en: "Red button" },
            { kk: "Жасыл жалауша", ru: "Зелёный флажок", en: "Green flag" },
            { kk: "Көк жұлдыз", ru: "Синяя звезда", en: "Blue star" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Спрайт дегеніміз не?", ru: "Что такое спрайт?", en: "What is a sprite?" },
          options: [
            { kk: "Фон суреті", ru: "Фоновая картинка", en: "Background image" },
            { kk: "Кейіпкер немесе зат", ru: "Персонаж или предмет", en: "Character or object" },
            { kk: "Дыбыс файлы", ru: "Звуковой файл", en: "Sound file" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Scratch элементтерін сәйкестендір", ru: "Соедини элементы Scratch", en: "Match Scratch Elements" },
      items: [
        {
          type: "match",
          instruction: { kk: "Элементті оның қызметімен сәйкестендір", ru: "Соедини элемент с его функцией", en: "Match element with its function" },
          pairs: [
            { left: { kk: "Сахна", ru: "Сцена", en: "Stage" }, right: { kk: "Спрайттар қозғалады", ru: "Спрайты двигаются", en: "Sprites move here" } },
            { left: { kk: "Блоктар", ru: "Блоки", en: "Blocks" }, right: { kk: "Командалар тізімі", ru: "Список команд", en: "List of commands" } },
            { left: { kk: "Жасыл жалауша", ru: "Зелёный флажок", en: "Green flag" }, right: { kk: "Бағдарламаны іске қосу", ru: "Запуск программы", en: "Start program" } },
            { left: { kk: "Спрайт", ru: "Спрайт", en: "Sprite" }, right: { kk: "Кейіпкер", ru: "Персонаж", en: "Character" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: scratchIntroVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Scratch — балаларға арналған бағдарламалау ортасы", ru: "Scratch — среда программирования для детей", en: "Scratch — programming environment for kids" },
        { kk: "Сахна, блоктар, скрипт аймағы, спрайт — негізгі бөліктер", ru: "Сцена, блоки, область скриптов, спрайт — основные части", en: "Stage, blocks, script area, sprite — main parts" },
        { kk: "Жасыл жалауша — бағдарламаны бастау", ru: "Зелёный флажок — запуск программы", en: "Green flag — start the program" },
      ],
      emoji: "🎓",
    },
  ],
};
