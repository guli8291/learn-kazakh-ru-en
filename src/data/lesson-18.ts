import { LessonData } from "@/lib/types";

export const lesson18: LessonData = {
  id: "lesson-18",
  title: { kk: "Робототехника негіздері", ru: "Основы робототехники", en: "Basics of Robotics" },
  description: {
    kk: "Роботтар туралы түсінік, роботтарды басқару",
    ru: "Понятие о роботах и управление роботами",
    en: "Understanding robots and how to control them",
  },
  emoji: "🤖",
  color: "from-cyan-400 to-blue-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Робототехника негіздері", ru: "Основы робототехники", en: "Basics of Robotics" },
      subtitle: { kk: "Роботтар әлеміне саяхат!", ru: "Путешествие в мир роботов!", en: "Journey into the world of robots!" },
      emoji: "🤖",
      color: "from-cyan-400 to-blue-500",
    },
    {
      type: "topic",
      title: { kk: "Робот дегеніміз не?", ru: "Что такое робот?", en: "What is a Robot?" },
      text: {
        kk: "Робот — адам берген командаларды орындайтын машина. Роботтар зауытта, үйде, ғарышта, медицинада жұмыс істейді. Роботқа алгоритм беріледі — ол сол бойынша жұмыс істейді.",
        ru: "Робот — машина, выполняющая команды человека. Роботы работают на заводах, дома, в космосе, в медицине. Роботу задают алгоритм — он работает по нему.",
        en: "A robot is a machine that follows human commands. Robots work in factories, homes, space, and medicine. A robot is given an algorithm — it works according to it.",
      },
    },
    {
      type: "rules",
      title: { kk: "Роботтар түрлері", ru: "Виды роботов", en: "Types of Robots" },
      points: [
        { kk: "🏭 Өндірістік — зауытта жұмыс істейді", ru: "🏭 Промышленные — работают на заводе", en: "🏭 Industrial — work in factories" },
        { kk: "🏠 Тұрмыстық — үйде көмектеседі (шаңсорғыш робот)", ru: "🏠 Бытовые — помогают дома (робот-пылесос)", en: "🏠 Household — help at home (robot vacuum)" },
        { kk: "🚀 Ғарыштық — ғарышты зерттейді", ru: "🚀 Космические — исследуют космос", en: "🚀 Space — explore space" },
        { kk: "🏥 Медициналық — операция жасауға көмектеседі", ru: "🏥 Медицинские — помогают в операциях", en: "🏥 Medical — help with surgeries" },
      ],
      emoji: "📋",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Робот нені орындайды?", ru: "Что выполняет робот?", en: "What does a robot follow?" },
          options: [
            { kk: "Тілектерді", ru: "Желания", en: "Wishes" },
            { kk: "Командаларды", ru: "Команды", en: "Commands" },
            { kk: "Арманды", ru: "Мечты", en: "Dreams" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Шаңсорғыш робот қай түрге жатады?", ru: "К какому виду относится робот-пылесос?", en: "What type is a robot vacuum?" },
          options: [
            { kk: "Ғарыштық", ru: "Космический", en: "Space" },
            { kk: "Тұрмыстық", ru: "Бытовой", en: "Household" },
            { kk: "Медициналық", ru: "Медицинский", en: "Medical" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Роботты тап", ru: "Найди робота", en: "Find the Robot" },
      items: [
        {
          type: "match",
          instruction: { kk: "Робот түрін жұмыс орнымен сәйкестендір", ru: "Соедини вид робота с местом работы", en: "Match robot type with workplace" },
          pairs: [
            { left: { kk: "Өндірістік", ru: "Промышленный", en: "Industrial" }, right: { kk: "Зауыт", ru: "Завод", en: "Factory" } },
            { left: { kk: "Тұрмыстық", ru: "Бытовой", en: "Household" }, right: { kk: "Үй", ru: "Дом", en: "Home" } },
            { left: { kk: "Ғарыштық", ru: "Космический", en: "Space" }, right: { kk: "Ғарыш", ru: "Космос", en: "Space" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Робот — командалар бойынша жұмыс істейтін машина", ru: "Робот — машина, работающая по командам", en: "Robot — machine that works by commands" },
        { kk: "Роботтар: өндірістік, тұрмыстық, ғарыштық, медициналық", ru: "Роботы: промышленные, бытовые, космические, медицинские", en: "Robots: industrial, household, space, medical" },
      ],
      emoji: "⭐",
    },
  ],
};
