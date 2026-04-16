import { LessonData } from "@/lib/types";

export const lesson02: LessonData = {
  id: "lesson-02",
  title: { kk: "Компьютер құрылғылары", ru: "Устройства компьютера", en: "Computer Devices" },
  description: {
    kk: "Компьютердің негізгі бөліктерімен танысу",
    ru: "Знакомство с основными частями компьютера",
    en: "Getting to know the main parts of a computer",
  },
  emoji: "🖥️",
  color: "from-blue-400 to-indigo-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Компьютер құрылғылары", ru: "Устройства компьютера", en: "Computer Devices" },
      subtitle: {
        kk: "Компьютердің бөліктерін білейік!",
        ru: "Узнаем части компьютера!",
        en: "Let's learn the parts of a computer!",
      },
      emoji: "🖥️",
      color: "from-blue-400 to-indigo-500",
    },
    {
      type: "topic",
      title: { kk: "Монитор", ru: "Монитор", en: "Monitor" },
      text: {
        kk: "Монитор — компьютердің экраны. Ол бізге суреттер, мәтін және видео көрсетеді. Монитор — теледидарға ұқсайды.",
        ru: "Монитор — это экран компьютера. Он показывает нам картинки, текст и видео. Монитор похож на телевизор.",
        en: "The monitor is the computer screen. It shows us pictures, text, and video. The monitor looks like a TV.",
      },
      image: "/lessons/lesson-02/images/monitor.jpg",
    },
    {
      type: "topic",
      title: { kk: "Пернетақта және тышқан", ru: "Клавиатура и мышь", en: "Keyboard and Mouse" },
      text: {
        kk: "Пернетақта — мәтін жазуға арналған құрылғы. Тышқан — экрандағы нысандарды басуға арналған. Бұлар негізгі енгізу құрылғылары.",
        ru: "Клавиатура — устройство для ввода текста. Мышь — для нажатия на объекты на экране. Это основные устройства ввода.",
        en: "The keyboard is for typing text. The mouse is for clicking objects on screen. These are main input devices.",
      },
      image: "/lessons/lesson-02/images/keyboard-mouse.jpg",
    },
    {
      type: "topic",
      title: { kk: "Жүйелік блок", ru: "Системный блок", en: "System Unit" },
      text: {
        kk: "Жүйелік блок — компьютердің «миы». Оның ішінде процессор, жад және басқа маңызды бөліктер бар.",
        ru: "Системный блок — «мозг» компьютера. Внутри него процессор, память и другие важные части.",
        en: "The system unit is the computer's \"brain\". Inside it are the processor, memory, and other important parts.",
      },
      image: "/lessons/lesson-02/images/system-unit.jpg",
    },
    {
      type: "rules",
      title: { kk: "Компьютерді қосу және өшіру", ru: "Включение и выключение", en: "Turning On and Off" },
      points: [
        { kk: "Қосу: жүйелік блоктағы батырманы бас", ru: "Включение: нажми кнопку на системном блоке", en: "Turn on: press the button on the system unit" },
        { kk: "Жүктелуін күт", ru: "Подожди загрузки", en: "Wait for it to load" },
        { kk: "Өшіру: «Пуск» → «Өшіру» бас", ru: "Выключение: «Пуск» → «Выключить»", en: "Turn off: Start → Shut down" },
        { kk: "Ешқашан сымнан суырма!", ru: "Никогда не выдёргивай из розетки!", en: "Never unplug from the outlet!" },
      ],
      emoji: "🔌",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Монитор нені көрсетеді?", ru: "Что показывает монитор?", en: "What does the monitor show?" },
          options: [
            { kk: "Дыбыс", ru: "Звук", en: "Sound" },
            { kk: "Сурет, мәтін, видео", ru: "Картинки, текст, видео", en: "Pictures, text, video" },
            { kk: "Иіс", ru: "Запах", en: "Smell" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Компьютердің «миы» қалай аталады?", ru: "Как называется «мозг» компьютера?", en: "What is the computer's \"brain\" called?" },
          options: [
            { kk: "Монитор", ru: "Монитор", en: "Monitor" },
            { kk: "Тышқан", ru: "Мышь", en: "Mouse" },
            { kk: "Жүйелік блок", ru: "Системный блок", en: "System unit" },
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
          instruction: { kk: "Құрылғыны қызметімен сәйкестендір", ru: "Соедини устройство с его функцией", en: "Match the device with its function" },
          pairs: [
            { left: { kk: "Монитор", ru: "Монитор", en: "Monitor" }, right: { kk: "Көрсету", ru: "Показывать", en: "Display" } },
            { left: { kk: "Пернетақта", ru: "Клавиатура", en: "Keyboard" }, right: { kk: "Жазу", ru: "Печатать", en: "Type" } },
            { left: { kk: "Тышқан", ru: "Мышь", en: "Mouse" }, right: { kk: "Басу", ru: "Нажимать", en: "Click" } },
            { left: { kk: "Жүйелік блок", ru: "Сист. блок", en: "System unit" }, right: { kk: "Есептеу", ru: "Вычислять", en: "Compute" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: "/video/lesson-02/video.mp4",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Монитор — экран, ол ақпаратты көрсетеді", ru: "Монитор — экран, показывает информацию", en: "Monitor — screen that shows information" },
        { kk: "Пернетақта мен тышқан — енгізу құрылғылары", ru: "Клавиатура и мышь — устройства ввода", en: "Keyboard and mouse — input devices" },
        { kk: "Жүйелік блок — компьютердің негізі", ru: "Системный блок — основа компьютера", en: "System unit — the core of the computer" },
      ],
      emoji: "🏆",
    },
  ],
};
