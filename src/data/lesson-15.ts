import { LessonData } from "@/lib/types";

export const lesson15: LessonData = {
  id: "lesson-15",
  title: { kk: "Файл және бума", ru: "Файл и папка", en: "File and Folder" },
  description: {
    kk: "Файл мен бума ұғымы, құру және атау",
    ru: "Понятие файла и папки, создание и именование",
    en: "Understanding files and folders, creating and naming them",
  },
  emoji: "📁",
  color: "from-yellow-400 to-orange-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Файл және бума", ru: "Файл и папка", en: "File and Folder" },
      subtitle: { kk: "Файлдар мен бумаларды үйренеміз!", ru: "Изучим файлы и папки!", en: "Let's learn about files and folders!" },
      emoji: "📁",
      color: "from-yellow-400 to-orange-500",
    },
    {
      type: "topic",
      title: { kk: "Файл дегеніміз не?", ru: "Что такое файл?", en: "What is a File?" },
      text: {
        kk: "Файл — компьютерде сақталатын ақпарат. Мысалы: сурет, мәтін, ән, видео — бәрі файл. Әр файлдың аты және кеңейтімі бар: surat.jpg, atym.txt.",
        ru: "Файл — это информация, хранящаяся в компьютере. Например: картинка, текст, песня, видео — всё это файлы. У каждого файла есть имя и расширение: risunok.jpg, imya.txt.",
        en: "A file is information stored on a computer. For example: a picture, text, song, video — all are files. Each file has a name and extension: picture.jpg, name.txt.",
      },
    },
    {
      type: "topic",
      title: { kk: "Бума дегеніміз не?", ru: "Что такое папка?", en: "What is a Folder?" },
      text: {
        kk: "Бума — файлдарды сақтайтын контейнер. Бума ішіне файлдар мен басқа бумалар салуға болады. Бума файлдарды реттеуге көмектеседі.",
        ru: "Папка — контейнер для хранения файлов. В папку можно положить файлы и другие папки. Папка помогает организовать файлы.",
        en: "A folder is a container for storing files. You can put files and other folders inside. Folders help organize files.",
      },
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Файл дегеніміз не?", ru: "Что такое файл?", en: "What is a file?" },
          options: [
            { kk: "Компьютердің бөлігі", ru: "Часть компьютера", en: "Part of computer" },
            { kk: "Сақталған ақпарат", ru: "Сохранённая информация", en: "Stored information" },
            { kk: "Ойын", ru: "Игра", en: "Game" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Бума не үшін керек?", ru: "Для чего нужна папка?", en: "What is a folder for?" },
          options: [
            { kk: "Ойын ойнау", ru: "Играть в игры", en: "Play games" },
            { kk: "Файлдарды реттеу", ru: "Организовать файлы", en: "Organize files" },
            { kk: "Сурет салу", ru: "Рисовать", en: "Draw" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Файл түрлерін сәйкестендір", ru: "Соедини типы файлов", en: "Match File Types" },
      items: [
        {
          type: "match",
          instruction: { kk: "Файл түрін мысалмен сәйкестендір", ru: "Соедини тип файла с примером", en: "Match file type with example" },
          pairs: [
            { left: { kk: "Сурет", ru: "Картинка", en: "Picture" }, right: { kk: "surat.jpg", ru: "risunok.jpg", en: "picture.jpg" } },
            { left: { kk: "Мәтін", ru: "Текст", en: "Text" }, right: { kk: "atym.txt", ru: "imya.txt", en: "name.txt" } },
            { left: { kk: "Ән", ru: "Песня", en: "Song" }, right: { kk: "muzyka.mp3", ru: "muzyka.mp3", en: "music.mp3" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: "/video/lesson-15/video.mp4",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Файл — компьютердегі ақпарат бірлігі", ru: "Файл — единица хранения информации", en: "File — a unit of stored information" },
        { kk: "Бума — файлдарды ұйымдастыру құралы", ru: "Папка — средство организации файлов", en: "Folder — a way to organize files" },
      ],
      emoji: "🎓",
    },
  ],
};
