import { LessonData } from "@/lib/types";


import projectVideo from "@/assets/lesson-15/videos/project.mp4.asset.json";
import projectStepsVideo from "@/assets/lesson-15/videos/project-steps.mp4.asset.json";
export const lesson15: LessonData = {
  id: "lesson-15",
  title: { kk: "Менің алғашқы жобам", ru: "Мой первый проект", en: "My First Project" },
  description: {
    kk: "Scratch-те алғашқы жобаны жасау",
    ru: "Создание первого проекта в Scratch",
    en: "Creating your first project in Scratch",
  },
  emoji: "🚀",
  color: "from-green-400 to-emerald-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Менің алғашқы жобам", ru: "Мой первый проект", en: "My First Project" },
      subtitle: { kk: "Алғашқы бағдарламаңды жаса!", ru: "Создай свою первую программу!", en: "Create your first program!" },
      emoji: "🚀",
      color: "from-green-400 to-emerald-500",
    },
    {
      type: "topic",
      title: { kk: "Жоба дегеніміз не?", ru: "Что такое проект?", en: "What is a Project?" },
      text: {
        kk: "Жоба — Scratch-те жасалған бағдарлама. Жобада спрайттар, фон, блоктар (командалар) бар. Мысалы: мысық «Сәлем!» деп айтатын анимация — бұл қарапайым жоба. Жобаны сақтап, достарыңмен бөлісуге болады.",
        ru: "Проект — программа, созданная в Scratch. В проекте есть спрайты, фон и блоки (команды). Например: анимация, где кот говорит «Привет!» — это простой проект. Проект можно сохранить и поделиться с друзьями.",
        en: "A project is a program created in Scratch. It has sprites, backgrounds, and blocks (commands). For example: an animation where the cat says 'Hello!' — that's a simple project. You can save and share projects.",
      videos: [projectVideo.url, projectStepsVideo.url],
      },
    },
    {
      type: "rules",
      title: { kk: "Алғашқы жоба жасау қадамдары", ru: "Шаги создания первого проекта", en: "Steps to Create Your First Project" },
      points: [
        { kk: "1️⃣ Scratch-ты аш", ru: "1️⃣ Открой Scratch", en: "1️⃣ Open Scratch" },
        { kk: "2️⃣ Спрайт таңда (мысалы, мысық)", ru: "2️⃣ Выбери спрайт (например, кота)", en: "2️⃣ Choose a sprite (e.g., cat)" },
        { kk: "3️⃣ Фон таңда", ru: "3️⃣ Выбери фон", en: "3️⃣ Choose a backdrop" },
        { kk: "4️⃣ Блоктарды қос: «Жасыл жалауша басылғанда» → «Айту: Сәлем!»", ru: "4️⃣ Добавь блоки: «Когда нажат зелёный флажок» → «Сказать: Привет!»", en: "4️⃣ Add blocks: 'When green flag clicked' → 'Say: Hello!'" },
        { kk: "5️⃣ Жасыл жалаушаны бас — жобаңды тексер!", ru: "5️⃣ Нажми зелёный флажок — проверь проект!", en: "5️⃣ Click green flag — test your project!" },
      ],
      emoji: "📋",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Scratch-те жоба жасаудың бірінші қадамы не?", ru: "Каков первый шаг создания проекта в Scratch?", en: "What is the first step to create a project in Scratch?" },
          options: [
            { kk: "Ойын ойнау", ru: "Играть в игру", en: "Play a game" },
            { kk: "Scratch-ты ашу", ru: "Открыть Scratch", en: "Open Scratch" },
            { kk: "Компьютерді өшіру", ru: "Выключить компьютер", en: "Turn off computer" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "«Айту» блогы не істейді?", ru: "Что делает блок «Сказать»?", en: "What does the 'Say' block do?" },
          options: [
            { kk: "Спрайтты жояды", ru: "Удаляет спрайт", en: "Deletes the sprite" },
            { kk: "Спрайт мәтін көрсетеді", ru: "Спрайт показывает текст", en: "Sprite shows text" },
            { kk: "Фонды ауыстырады", ru: "Меняет фон", en: "Changes background" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Жоба қадамдарын сәйкестендір", ru: "Соедини шаги проекта", en: "Match Project Steps" },
      items: [
        {
          type: "match",
          instruction: { kk: "Қадамды әрекетпен сәйкестендір", ru: "Соедини шаг с действием", en: "Match step with action" },
          pairs: [
            { left: { kk: "1-қадам", ru: "Шаг 1", en: "Step 1" }, right: { kk: "Scratch-ты ашу", ru: "Открыть Scratch", en: "Open Scratch" } },
            { left: { kk: "2-қадам", ru: "Шаг 2", en: "Step 2" }, right: { kk: "Спрайт таңдау", ru: "Выбрать спрайт", en: "Choose sprite" } },
            { left: { kk: "3-қадам", ru: "Шаг 3", en: "Step 3" }, right: { kk: "Блоктарды қосу", ru: "Добавить блоки", en: "Add blocks" } },
            { left: { kk: "4-қадам", ru: "Шаг 4", en: "Step 4" }, right: { kk: "Жобаны тексеру", ru: "Проверить проект", en: "Test project" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: projectStepsVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Жоба — Scratch-тегі бағдарлама", ru: "Проект — программа в Scratch", en: "Project — a program in Scratch" },
        { kk: "Жоба жасау: спрайт + фон + блоктар", ru: "Создание проекта: спрайт + фон + блоки", en: "Creating a project: sprite + backdrop + blocks" },
        { kk: "Жасыл жалауша — жобаны іске қосу", ru: "Зелёный флажок — запуск проекта", en: "Green flag — run the project" },
      ],
      emoji: "🎓",
    },
  ],
};
