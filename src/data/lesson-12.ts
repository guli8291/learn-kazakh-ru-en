import { LessonData } from "@/lib/types";

import executorsImg from "@/assets/lesson-12/executors.jpg";

import executorVideo from "@/assets/lesson-12/videos/executor.mp4.asset.json";
import executorExamplesVideo from "@/assets/lesson-12/videos/executor-examples.mp4.asset.json";
import robotCommandsVideo from "@/assets/lesson-12/videos/robot-commands.mp4.asset.json";

export const lesson12: LessonData = {
  id: "lesson-12",
  title: { kk: "Орындаушы", ru: "Исполнитель", en: "Executor" },
  description: {
    kk: "Алгоритм орындаушысы және оның командалар жүйесі",
    ru: "Исполнитель алгоритма и его система команд",
    en: "Algorithm executor and its command system",
  },
  emoji: "🤖",
  color: "from-sky-400 to-blue-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Орындаушы", ru: "Исполнитель", en: "Executor" },
      subtitle: { kk: "Алгоритмді кім орындайды?", ru: "Кто выполняет алгоритм?", en: "Who executes the algorithm?" },
      emoji: "🤖",
      color: "from-sky-400 to-blue-500",
    },
    {
      type: "topic",
      title: { kk: "Орындаушы дегеніміз не?", ru: "Что такое исполнитель?", en: "What is an Executor?" },
      text: {
        kk: "Орындаушы — алгоритмді орындайтын адам, жануар немесе құрылғы. Мысалы: аспаз — тағам дайындау алгоритмінің орындаушысы. Компьютер — бағдарлама алгоритмінің орындаушысы.",
        ru: "Исполнитель — человек, животное или устройство, выполняющее алгоритм. Например: повар — исполнитель алгоритма приготовления еды. Компьютер — исполнитель программы.",
        en: "An executor is a person, animal, or device that performs an algorithm. Example: a chef executes a cooking algorithm. A computer executes a program.",
      },
      image: executorsImg,
      videos: [executorVideo.url, executorExamplesVideo.url, robotCommandsVideo.url],
    },
    {
      type: "rules",
      title: { kk: "Орындаушылар мысалдары", ru: "Примеры исполнителей", en: "Examples of Executors" },
      points: [
        { kk: "👨‍🍳 Аспаз — тағам дайындайды", ru: "👨‍🍳 Повар — готовит еду", en: "👨‍🍳 Chef — cooks food" },
        { kk: "🤖 Робот — командаларды орындайды", ru: "🤖 Робот — выполняет команды", en: "🤖 Robot — follows commands" },
        { kk: "💻 Компьютер — бағдарламаны іске асырады", ru: "💻 Компьютер — выполняет программу", en: "💻 Computer — runs a program" },
        { kk: "🐕 Ит — иесінің бұйрықтарын орындайды", ru: "🐕 Собака — выполняет команды хозяина", en: "🐕 Dog — follows owner's commands" },
      ],
      emoji: "👥",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Тағам дайындау алгоритмінің орындаушысы кім?", ru: "Кто исполнитель алгоритма приготовления еды?", en: "Who executes a cooking algorithm?" },
          options: [
            { kk: "Компьютер", ru: "Компьютер", en: "Computer" },
            { kk: "Аспаз", ru: "Повар", en: "Chef" },
            { kk: "Робот", ru: "Робот", en: "Robot" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Орындаушы мен алгоритм", ru: "Исполнитель и алгоритм", en: "Executor and Algorithm" },
      items: [
        {
          type: "match",
          instruction: { kk: "Орындаушыны алгоритммен сәйкестендір", ru: "Соедини исполнителя с алгоритмом", en: "Match executor with algorithm" },
          pairs: [
            { left: { kk: "Аспаз", ru: "Повар", en: "Chef" }, right: { kk: "Тағам дайындау", ru: "Готовить еду", en: "Cook food" } },
            { left: { kk: "Оқушы", ru: "Ученик", en: "Student" }, right: { kk: "Есеп шығару", ru: "Решить задачу", en: "Solve problem" } },
            { left: { kk: "Компьютер", ru: "Компьютер", en: "Computer" }, right: { kk: "Бағдарлама іске асыру", ru: "Запустить программу", en: "Run program" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: executorVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Орындаушы — алгоритмді орындайтын субъект", ru: "Исполнитель — тот, кто выполняет алгоритм", en: "Executor — who performs the algorithm" },
        { kk: "Адам, жануар, робот, компьютер — орындаушы бола алады", ru: "Человек, животное, робот, компьютер — могут быть исполнителями", en: "People, animals, robots, computers can be executors" },
      ],
      emoji: "⭐",
    },
  ],
};
