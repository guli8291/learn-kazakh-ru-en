import { LessonData } from "@/lib/types";


import creativeProjectVideo from "@/assets/lesson-17/videos/creative-project.mp4.asset.json";
import projectIdeasVideo from "@/assets/lesson-17/videos/project-ideas.mp4.asset.json";
export const lesson17: LessonData = {
  id: "lesson-17",
  title: { kk: "Шығармашылық тапсырмалар", ru: "Творческие задания", en: "Creative Tasks" },
  description: {
    kk: "Scratch-те шығармашылық тапсырмаларды орындау",
    ru: "Выполнение творческих заданий в Scratch",
    en: "Completing creative tasks in Scratch",
  },
  emoji: "✨",
  color: "from-pink-400 to-rose-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Шығармашылық тапсырмалар", ru: "Творческие задания", en: "Creative Tasks" },
      subtitle: { kk: "Өз идеяларыңды жүзеге асыр!", ru: "Воплоти свои идеи!", en: "Bring your ideas to life!" },
      emoji: "✨",
      color: "from-pink-400 to-rose-500",
    },
    {
      type: "topic",
      title: { kk: "Шығармашылық жоба дегеніміз не?", ru: "Что такое творческий проект?", en: "What is a Creative Project?" },
      text: {
        kk: "Шығармашылық жоба — өз қиялыңнан жасалған Scratch жобасы. Сен өзің тақырып таңдайсың, спрайттар мен фон қосасың, анимация немесе ойын жасайсың. Бұл — бағдарламалаудағы шынайы шығармашылық!",
        ru: "Творческий проект — проект в Scratch, созданный по твоей фантазии. Ты сам выбираешь тему, добавляешь спрайты и фон, создаёшь анимацию или игру. Это настоящее творчество в программировании!",
        en: "A creative project is a Scratch project made from your imagination. You choose the topic, add sprites and backgrounds, create animations or games. This is real creativity in programming!",
      videos: [creativeProjectVideo.url, projectIdeasVideo.url],
      },
    },
    {
      type: "rules",
      title: { kk: "Шығармашылық жоба идеялары", ru: "Идеи для творческих проектов", en: "Creative Project Ideas" },
      points: [
        { kk: "🎬 Мультфильм — кейіпкерлер сөйлесетін анимация", ru: "🎬 Мультфильм — анимация с говорящими персонажами", en: "🎬 Cartoon — animation with talking characters" },
        { kk: "🎮 Қарапайым ойын — спрайтты басқару, ұпай жинау", ru: "🎮 Простая игра — управление спрайтом, набор очков", en: "🎮 Simple game — control sprite, collect points" },
        { kk: "🎵 Музыкалық жоба — дыбыстар мен ырғақ", ru: "🎵 Музыкальный проект — звуки и ритмы", en: "🎵 Music project — sounds and rhythms" },
        { kk: "📖 Интерактивті әңгіме — таңдау жасау арқылы оқиға", ru: "📖 Интерактивная история — сюжет с выбором", en: "📖 Interactive story — story with choices" },
      ],
      emoji: "💡",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Шығармашылық жобада нені өзің таңдайсың?", ru: "Что ты выбираешь сам в творческом проекте?", en: "What do you choose yourself in a creative project?" },
          options: [
            { kk: "Тек фонды", ru: "Только фон", en: "Only the backdrop" },
            { kk: "Тақырып, спрайт, фон, командалар — бәрін", ru: "Тему, спрайт, фон, команды — всё", en: "Topic, sprite, backdrop, commands — everything" },
            { kk: "Ештеңе", ru: "Ничего", en: "Nothing" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Мультфильм жобасында не болады?", ru: "Что есть в проекте-мультфильме?", en: "What does a cartoon project have?" },
          options: [
            { kk: "Тек сандар", ru: "Только числа", en: "Only numbers" },
            { kk: "Кейіпкерлер сөйлесетін анимация", ru: "Анимация с говорящими персонажами", en: "Animation with talking characters" },
            { kk: "Бос сахна", ru: "Пустая сцена", en: "Empty stage" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Жоба түрлерін сәйкестендір", ru: "Соедини типы проектов", en: "Match Project Types" },
      items: [
        {
          type: "match",
          instruction: { kk: "Жоба түрін сипаттамамен сәйкестендір", ru: "Соедини тип проекта с описанием", en: "Match project type with description" },
          pairs: [
            { left: { kk: "Мультфильм", ru: "Мультфильм", en: "Cartoon" }, right: { kk: "Кейіпкерлер сөйлеседі", ru: "Персонажи разговаривают", en: "Characters talk" } },
            { left: { kk: "Ойын", ru: "Игра", en: "Game" }, right: { kk: "Спрайтты басқару", ru: "Управление спрайтом", en: "Control sprite" } },
            { left: { kk: "Музыкалық", ru: "Музыкальный", en: "Musical" }, right: { kk: "Дыбыстар мен ырғақ", ru: "Звуки и ритмы", en: "Sounds and rhythms" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: creativeProjectVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Шығармашылық жоба — өз идеяңнан жасалған Scratch жобасы", ru: "Творческий проект — проект из твоей идеи в Scratch", en: "Creative project — a Scratch project from your idea" },
        { kk: "Мультфильм, ойын, музыка, интерактивті әңгіме — жоба түрлері", ru: "Мультфильм, игра, музыка, интерактивная история — виды проектов", en: "Cartoon, game, music, interactive story — project types" },
      ],
      emoji: "🎓",
    },
  ],
};
