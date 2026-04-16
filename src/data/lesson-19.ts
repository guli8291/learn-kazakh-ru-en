import { LessonData } from "@/lib/types";

export const lesson19: LessonData = {
  id: "lesson-19",
  title: { kk: "Жылдық қайталау", ru: "Годовое повторение", en: "Yearly Review" },
  description: {
    kk: "Жыл бойы өтілген тақырыптарды қайталау",
    ru: "Повторение всех тем, изученных за год",
    en: "Reviewing all topics learned throughout the year",
  },
  emoji: "🏆",
  color: "from-amber-400 to-red-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Жылдық қайталау", ru: "Годовое повторение", en: "Yearly Review" },
      subtitle: { kk: "Бүкіл жыл бойы не үйрендік?", ru: "Что мы узнали за весь год?", en: "What did we learn all year?" },
      emoji: "🏆",
      color: "from-amber-400 to-red-500",
    },
    {
      type: "rules",
      title: { kk: "Жыл бойғы тақырыптар", ru: "Темы за год", en: "Topics of the Year" },
      points: [
        { kk: "🏥 Денсаулық және компьютер", ru: "🏥 Здоровье и компьютер", en: "🏥 Health and Computer" },
        { kk: "🖥️ Компьютер құрылғылары", ru: "🖥️ Устройства компьютера", en: "🖥️ Computer Devices" },
        { kk: "👀 Ақпаратты қабылдау", ru: "👀 Восприятие информации", en: "👀 Perceiving Information" },
        { kk: "📊 Ақпарат түрлері", ru: "📊 Виды информации", en: "📊 Types of Information" },
        { kk: "🛡️ Интернет қауіпсіздігі", ru: "🛡️ Безопасность в Интернете", en: "🛡️ Internet Safety" },
        { kk: "🎨 Графикалық редактор", ru: "🎨 Графический редактор", en: "🎨 Graphics Editor" },
        { kk: "📝 Алгоритмдер", ru: "📝 Алгоритмы", en: "📝 Algorithms" },
        { kk: "🤖 Робототехника", ru: "🤖 Робототехника", en: "🤖 Robotics" },
      ],
      emoji: "📚",
    },
    {
      type: "interactive",
      title: { kk: "Үлкен викторина!", ru: "Большая викторина!", en: "Big Quiz!" },
      items: [
        {
          type: "choice",
          question: { kk: "Мониторға қанша қашықтықта отыру керек?", ru: "На каком расстоянии нужно сидеть от монитора?", en: "How far should you sit from the monitor?" },
          options: [
            { kk: "10 см", ru: "10 см", en: "10 cm" },
            { kk: "50-70 см", ru: "50-70 см", en: "50-70 cm" },
            { kk: "3 метр", ru: "3 метра", en: "3 meters" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Алгоритм дегеніміз не?", ru: "Что такое алгоритм?", en: "What is an algorithm?" },
          options: [
            { kk: "Ойын", ru: "Игра", en: "Game" },
            { kk: "Қадамдар тізбегі", ru: "Последовательность шагов", en: "Sequence of steps" },
            { kk: "Сурет", ru: "Рисунок", en: "Drawing" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Tux Paint-тегі көмекші кім?", ru: "Кто помощник в Tux Paint?", en: "Who is the helper in Tux Paint?" },
          options: [
            { kk: "Аю", ru: "Медведь", en: "Bear" },
            { kk: "Пингвин", ru: "Пингвин", en: "Penguin" },
            { kk: "Мысық", ru: "Кошка", en: "Cat" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Робот нені орындайды?", ru: "Что выполняет робот?", en: "What does a robot follow?" },
          options: [
            { kk: "Арман", ru: "Мечты", en: "Dreams" },
            { kk: "Командалар", ru: "Команды", en: "Commands" },
            { kk: "Тілектер", ru: "Желания", en: "Wishes" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Тақырыптарды сәйкестендір", ru: "Соедини темы", en: "Match the Topics" },
      items: [
        {
          type: "match",
          instruction: { kk: "Тақырыпты мысалмен сәйкестендір", ru: "Соедини тему с примером", en: "Match topic with example" },
          pairs: [
            { left: { kk: "Денсаулық", ru: "Здоровье", en: "Health" }, right: { kk: "Дұрыс отыру", ru: "Правильная посадка", en: "Correct posture" } },
            { left: { kk: "Ақпарат түрлері", ru: "Виды информации", en: "Info types" }, right: { kk: "Сурет = графикалық", ru: "Рисунок = графическая", en: "Drawing = graphic" } },
            { left: { kk: "Алгоритм", ru: "Алгоритм", en: "Algorithm" }, right: { kk: "Қадамдар тізбегі", ru: "Последовательность шагов", en: "Sequence of steps" } },
            { left: { kk: "Робот", ru: "Робот", en: "Robot" }, right: { kk: "Командаларды орындау", ru: "Выполнение команд", en: "Following commands" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Жыл бойы көп нәрсе үйрендік!", ru: "За год мы многому научились!", en: "We learned a lot this year!" },
        { kk: "Компьютер, ақпарат, алгоритм, робот — негізгі тақырыптар", ru: "Компьютер, информация, алгоритм, робот — основные темы", en: "Computer, information, algorithm, robot — main topics" },
        { kk: "Келесі жылы одан да қызықты болады! 🚀", ru: "В следующем году будет ещё интереснее! 🚀", en: "Next year will be even more exciting! 🚀" },
      ],
      emoji: "🏆",
    },
  ],
};
