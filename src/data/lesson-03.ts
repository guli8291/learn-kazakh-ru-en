import { LessonData } from "@/lib/types";


import fiveSensesVideo from "@/assets/lesson-03/videos/five-senses.mp4.asset.json";
import signalMessageVideo from "@/assets/lesson-03/videos/signal-message.mp4.asset.json";
export const lesson03: LessonData = {
  id: "lesson-03",
  title: { kk: "Адамның ақпаратты қабылдау түрлері", ru: "Виды восприятия информации", en: "How We Perceive Information" },
  description: {
    kk: "Адам ақпаратты 5 сезім мүшесі арқылы қабылдайды",
    ru: "Человек воспринимает информацию через 5 органов чувств",
    en: "Humans perceive information through 5 senses",
  },
  emoji: "👁️",
  color: "from-orange-400 to-pink-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Ақпаратты қабылдау", ru: "Восприятие информации", en: "Perceiving Information" },
      subtitle: {
        kk: "Біз ақпаратты қалай қабылдаймыз?",
        ru: "Как мы воспринимаем информацию?",
        en: "How do we perceive information?",
      },
      emoji: "🧠",
      color: "from-orange-400 to-pink-500",
    },
    {
      type: "topic",
      title: { kk: "5 сезім мүшесі", ru: "5 органов чувств", en: "5 Senses" },
      text: {
        kk: "Адам ақпаратты 5 сезім мүшесі арқылы қабылдайды: көру, есту, иіс сезу, дәм сезу және сезу (жанасу).",
        ru: "Человек воспринимает информацию через 5 органов чувств: зрение, слух, обоняние, вкус и осязание.",
        en: "Humans perceive information through 5 senses: sight, hearing, smell, taste, and touch.",
      videos: [fiveSensesVideo.url, signalMessageVideo.url],
      },
      image: "/lessons/lesson-03/images/senses.jpg",
    },
    {
      type: "rules",
      title: { kk: "Сезім мүшелері", ru: "Органы чувств", en: "Sense Organs" },
      points: [
        { kk: "👁️ Көру — көз арқылы (суреттер, түстер)", ru: "👁️ Зрение — через глаза (картинки, цвета)", en: "👁️ Sight — through eyes (pictures, colors)" },
        { kk: "👂 Есту — құлақ арқылы (дыбыстар, музыка)", ru: "👂 Слух — через уши (звуки, музыка)", en: "👂 Hearing — through ears (sounds, music)" },
        { kk: "👃 Иіс сезу — мұрын арқылы (иістер)", ru: "👃 Обоняние — через нос (запахи)", en: "👃 Smell — through nose (smells)" },
        { kk: "👅 Дәм сезу — тіл арқылы (дәмдер)", ru: "👅 Вкус — через язык (вкусы)", en: "👅 Taste — through tongue (tastes)" },
        { kk: "✋ Сезу — тері арқылы (жылы, суық)", ru: "✋ Осязание — через кожу (тёплое, холодное)", en: "✋ Touch — through skin (warm, cold)" },
      ],
      emoji: "🧩",
    },
    {
      type: "topic",
      title: { kk: "Ақпарат, сигнал, хабар", ru: "Информация, сигнал, сообщение", en: "Information, Signal, Message" },
      text: {
        kk: "Ақпарат — бізді қоршаған орта туралы мәлімет. Сигнал — ақпаратты жеткізу тәсілі. Хабар — белгілі мағынасы бар ақпарат.",
        ru: "Информация — сведения об окружающем мире. Сигнал — способ передачи информации. Сообщение — информация с определённым смыслом.",
        en: "Information — data about the world around us. Signal — a way to transmit information. Message — information with a specific meaning.",
      },
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Адамда неше сезім мүшесі бар?", ru: "Сколько органов чувств у человека?", en: "How many senses does a human have?" },
          options: [
            { kk: "3", ru: "3", en: "3" },
            { kk: "5", ru: "5", en: "5" },
            { kk: "7", ru: "7", en: "7" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Музыканы қай мүше арқылы қабылдаймыз?", ru: "Каким органом мы воспринимаем музыку?", en: "Which organ perceives music?" },
          options: [
            { kk: "Көз", ru: "Глаза", en: "Eyes" },
            { kk: "Құлақ", ru: "Уши", en: "Ears" },
            { kk: "Мұрын", ru: "Нос", en: "Nose" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Сәйкестендіру ойыны", ru: "Игра на соответствие", en: "Matching Game" },
      items: [
        {
          type: "match",
          instruction: { kk: "Сезім мүшесін ақпарат түрімен сәйкестендір", ru: "Соедини орган чувств с типом информации", en: "Match the sense organ with information type" },
          pairs: [
            { left: { kk: "Көз", ru: "Глаза", en: "Eyes" }, right: { kk: "Суреттер", ru: "Картинки", en: "Pictures" } },
            { left: { kk: "Құлақ", ru: "Уши", en: "Ears" }, right: { kk: "Дыбыстар", ru: "Звуки", en: "Sounds" } },
            { left: { kk: "Мұрын", ru: "Нос", en: "Nose" }, right: { kk: "Иістер", ru: "Запахи", en: "Smells" } },
            { left: { kk: "Тіл", ru: "Язык", en: "Tongue" }, right: { kk: "Дәмдер", ru: "Вкусы", en: "Tastes" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: fiveSensesVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Адамда 5 сезім мүшесі бар", ru: "У человека 5 органов чувств", en: "Humans have 5 senses" },
        { kk: "Ақпарат — әлем туралы мәлімет", ru: "Информация — данные о мире", en: "Information — data about the world" },
        { kk: "Біз ақпаратты сигналдар арқылы аламыз", ru: "Мы получаем информацию через сигналы", en: "We receive information through signals" },
      ],
      emoji: "🌟",
    },
  ],
};
