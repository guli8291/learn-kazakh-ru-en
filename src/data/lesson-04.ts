import { LessonData } from "@/lib/types";

import sourceReceiverImg from "@/assets/lesson-04/source-receiver.jpg";
import infoExamplesImg from "@/assets/lesson-04/info-examples.jpg";

import infoTypesVideo from "@/assets/lesson-04/videos/info-types.mp4.asset.json";
import sourceReceiverVideo from "@/assets/lesson-04/videos/source-receiver.mp4.asset.json";
import infoExamplesVideo from "@/assets/lesson-04/videos/info-examples.mp4.asset.json";
import teacherStudentVideo from "@/assets/lesson-04/videos/teacher-student.mp4.asset.json";

export const lesson04: LessonData = {
  id: "lesson-04",
  title: { kk: "Ақпараттың ұсынылу түрлері", ru: "Виды представления информации", en: "Types of Information Representation" },
  description: {
    kk: "Ақпараттың сандық, мәтіндік, графикалық, дыбыстық және бейне түрлерімен танысу",
    ru: "Знакомство с числовой, текстовой, графической, звуковой и видеоинформацией",
    en: "Learning about numeric, text, graphic, audio, and video information",
  },
  emoji: "📊",
  color: "from-purple-400 to-rose-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Ақпараттың ұсынылу түрлері", ru: "Виды представления информации", en: "Types of Information" },
      subtitle: {
        kk: "Ақпарат қандай түрде болады?",
        ru: "В каком виде бывает информация?",
        en: "What forms can information take?",
      },
      emoji: "📊",
      color: "from-purple-400 to-rose-500",
    },
    {
      type: "rules",
      title: { kk: "Ақпарат түрлері", ru: "Виды информации", en: "Information Types" },
      points: [
        { kk: "🔢 Сандық — сандар (мысалы: 1, 2, 3...)", ru: "🔢 Числовая — числа (например: 1, 2, 3...)", en: "🔢 Numeric — numbers (e.g.: 1, 2, 3...)" },
        { kk: "📝 Мәтіндік — әріптер мен сөздер", ru: "📝 Текстовая — буквы и слова", en: "📝 Text — letters and words" },
        { kk: "🎨 Графикалық — суреттер, сызбалар", ru: "🎨 Графическая — рисунки, схемы", en: "🎨 Graphic — pictures, drawings" },
        { kk: "🔊 Дыбыстық — музыка, дауыс", ru: "🔊 Звуковая — музыка, голос", en: "🔊 Audio — music, voice" },
        { kk: "🎬 Бейне — видеолар, мультфильмдер", ru: "🎬 Видео — видеоролики, мультфильмы", en: "🎬 Video — videos, cartoons" },
      ],
      emoji: "📋",
    },
    {
      type: "topic",
      title: { kk: "Ақпарат көзі мен қабылдаушысы", ru: "Источник и приёмник информации", en: "Source and Receiver of Information" },
      text: {
        kk: "Ақпарат көзі — ақпаратты беруші. Қабылдаушы — ақпаратты алушы. Арна — ақпаратты жіберу жолы. Мысалы: мұғалім (көз) → сөз (арна) → оқушы (қабылдаушы).",
        ru: "Источник — тот, кто передаёт информацию. Приёмник — тот, кто получает. Канал — путь передачи. Пример: учитель (источник) → речь (канал) → ученик (приёмник).",
        en: "Source — who sends information. Receiver — who gets it. Channel — the path of transmission. Example: teacher (source) → speech (channel) → student (receiver).",
      },
      image: sourceReceiverImg,
      videos: [sourceReceiverVideo.url, teacherStudentVideo.url, infoTypesVideo.url],
    },
    {
      type: "topic",
      title: { kk: "Мысалдар", ru: "Примеры", en: "Examples" },
      text: {
        kk: "Кітап — мәтіндік ақпарат. Сурет — графикалық ақпарат. Ән — дыбыстық ақпарат. Мультфильм — бейне ақпарат. Телефон нөмірі — сандық ақпарат.",
        ru: "Книга — текстовая информация. Рисунок — графическая. Песня — звуковая. Мультфильм — видео. Номер телефона — числовая.",
        en: "Book — text information. Drawing — graphic. Song — audio. Cartoon — video. Phone number — numeric.",
      },
      image: infoExamplesImg,
      videos: [infoExamplesVideo.url, infoTypesVideo.url],
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Сурет қандай ақпарат түрі?", ru: "К какому виду информации относится рисунок?", en: "What type of information is a drawing?" },
          options: [
            { kk: "Дыбыстық", ru: "Звуковая", en: "Audio" },
            { kk: "Графикалық", ru: "Графическая", en: "Graphic" },
            { kk: "Сандық", ru: "Числовая", en: "Numeric" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Мұғалім — ол кім?", ru: "Учитель — это кто?", en: "The teacher is what?" },
          options: [
            { kk: "Қабылдаушы", ru: "Приёмник", en: "Receiver" },
            { kk: "Арна", ru: "Канал", en: "Channel" },
            { kk: "Ақпарат көзі", ru: "Источник информации", en: "Source of information" },
          ],
          correctIndex: 2,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Сәйкестендіру ойыны", ru: "Игра на соответствие", en: "Matching Game" },
      items: [
        {
          type: "match",
          instruction: { kk: "Мысалды ақпарат түрімен сәйкестендір", ru: "Соедини пример с видом информации", en: "Match the example with information type" },
          pairs: [
            { left: { kk: "Кітап", ru: "Книга", en: "Book" }, right: { kk: "Мәтіндік", ru: "Текстовая", en: "Text" } },
            { left: { kk: "Ән", ru: "Песня", en: "Song" }, right: { kk: "Дыбыстық", ru: "Звуковая", en: "Audio" } },
            { left: { kk: "Сурет", ru: "Рисунок", en: "Drawing" }, right: { kk: "Графикалық", ru: "Графическая", en: "Graphic" } },
            { left: { kk: "5+3=8", ru: "5+3=8", en: "5+3=8" }, right: { kk: "Сандық", ru: "Числовая", en: "Numeric" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: sourceReceiverVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Ақпараттың 5 түрі бар: сандық, мәтіндік, графикалық, дыбыстық, бейне", ru: "Есть 5 видов информации: числовая, текстовая, графическая, звуковая, видео", en: "There are 5 types: numeric, text, graphic, audio, video" },
        { kk: "Ақпарат көзден қабылдаушыға арна арқылы жетеді", ru: "Информация идёт от источника к приёмнику по каналу", en: "Information goes from source to receiver through a channel" },
      ],
      emoji: "🎓",
    },
  ],
};
