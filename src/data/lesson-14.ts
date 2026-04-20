import { LessonData } from "@/lib/types";


import spritesVideo from "@/assets/lesson-14/videos/sprites.mp4.asset.json";
import addSpriteBgVideo from "@/assets/lesson-14/videos/add-sprite-bg.mp4.asset.json";
export const lesson14: LessonData = {
  id: "lesson-14",
  title: { kk: "Scratch-те спрайт және фон таңдау", ru: "Выбор спрайта и фона в Scratch", en: "Choosing Sprites and Backgrounds in Scratch" },
  description: {
    kk: "Scratch-те спрайт пен фон таңдауды үйрену",
    ru: "Учимся выбирать спрайт и фон в Scratch",
    en: "Learning to choose sprites and backgrounds in Scratch",
  },
  emoji: "🎨",
  color: "from-purple-400 to-indigo-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Scratch-те спрайт және фон таңдау", ru: "Выбор спрайта и фона в Scratch", en: "Choosing Sprites and Backgrounds" },
      subtitle: { kk: "Өз кейіпкеріңді және фоныңды таңда!", ru: "Выбери своего персонажа и фон!", en: "Choose your character and background!" },
      emoji: "🎨",
      color: "from-purple-400 to-indigo-500",
    },
    {
      type: "topic",
      title: { kk: "Спрайт дегеніміз не?", ru: "Что такое спрайт?", en: "What is a Sprite?" },
      text: {
        kk: "Спрайт — Scratch-тегі кейіпкер. Ол мысық, адам, жануар, зат бола алады. Scratch кітапханасынан дайын спрайттар таңдауға немесе өзің салуға болады. Әр спрайтқа бөлек команда беруге болады.",
        ru: "Спрайт — это персонаж в Scratch. Он может быть котом, человеком, животным, предметом. Из библиотеки Scratch можно выбрать готовые спрайты или нарисовать свой. Каждому спрайту можно дать отдельные команды.",
        en: "A sprite is a character in Scratch. It can be a cat, person, animal, or object. You can choose ready-made sprites from the Scratch library or draw your own. Each sprite can have its own commands.",
      videos: [spritesVideo.url, addSpriteBgVideo.url],
      },
    },
    {
      type: "rules",
      title: { kk: "Спрайт және фон қосу", ru: "Добавление спрайта и фона", en: "Adding Sprites and Backgrounds" },
      points: [
        { kk: "🐱 Спрайт қосу — «Спрайт таңдау» батырмасын бас", ru: "🐱 Добавить спрайт — нажми кнопку «Выбрать спрайт»", en: "🐱 Add sprite — click 'Choose a Sprite' button" },
        { kk: "🎨 Спрайтты салу — «Салу» батырмасын бас", ru: "🎨 Нарисовать спрайт — нажми кнопку «Нарисовать»", en: "🎨 Draw sprite — click 'Paint' button" },
        { kk: "🖼️ Фон таңдау — «Фон таңдау» батырмасын бас", ru: "🖼️ Выбрать фон — нажми кнопку «Выбрать фон»", en: "🖼️ Choose background — click 'Choose a Backdrop' button" },
        { kk: "📂 Файлдан жүктеу — компьютерден сурет қосу", ru: "📂 Загрузить из файла — добавить картинку с компьютера", en: "📂 Upload from file — add image from computer" },
        { kk: "🗑️ Спрайтты жою — оң батырмамен «Жою» таңда", ru: "🗑️ Удалить спрайт — правой кнопкой «Удалить»", en: "🗑️ Delete sprite — right-click 'Delete'" },
      ],
      emoji: "🛠️",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Scratch-те жаңа спрайт қалай қосасың?", ru: "Как добавить новый спрайт в Scratch?", en: "How do you add a new sprite in Scratch?" },
          options: [
            { kk: "Enter басу", ru: "Нажать Enter", en: "Press Enter" },
            { kk: "«Спрайт таңдау» батырмасын басу", ru: "Нажать кнопку «Выбрать спрайт»", en: "Click 'Choose a Sprite'" },
            { kk: "Тышқанды екі рет басу", ru: "Дважды кликнуть мышкой", en: "Double-click the mouse" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Фон дегеніміз не?", ru: "Что такое фон?", en: "What is a backdrop?" },
          options: [
            { kk: "Кейіпкер", ru: "Персонаж", en: "Character" },
            { kk: "Сахнаның артқы суреті", ru: "Картинка позади сцены", en: "Image behind the stage" },
            { kk: "Дыбыс", ru: "Звук", en: "Sound" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Scratch әрекеттерін сәйкестендір", ru: "Соедини действия в Scratch", en: "Match Scratch Actions" },
      items: [
        {
          type: "match",
          instruction: { kk: "Әрекетті нәтижемен сәйкестендір", ru: "Соедини действие с результатом", en: "Match action with result" },
          pairs: [
            { left: { kk: "Спрайт таңдау", ru: "Выбрать спрайт", en: "Choose sprite" }, right: { kk: "Жаңа кейіпкер қосылады", ru: "Добавится новый персонаж", en: "New character added" } },
            { left: { kk: "Фон таңдау", ru: "Выбрать фон", en: "Choose backdrop" }, right: { kk: "Сахна суреті өзгереді", ru: "Картинка сцены изменится", en: "Stage image changes" } },
            { left: { kk: "Спрайтты салу", ru: "Нарисовать спрайт", en: "Paint sprite" }, right: { kk: "Өзіңнің кейіпкерің пайда болады", ru: "Появится свой персонаж", en: "Your own character appears" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: addSpriteBgVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Спрайт — Scratch-тегі кейіпкер, оны таңдауға немесе салуға болады", ru: "Спрайт — персонаж в Scratch, его можно выбрать или нарисовать", en: "Sprite — character in Scratch, you can choose or draw one" },
        { kk: "Фон — сахнаның артқы суреті", ru: "Фон — задний план сцены", en: "Backdrop — background image of the stage" },
        { kk: "Scratch кітапханасында көптеген дайын спрайттар мен фондар бар", ru: "В библиотеке Scratch много готовых спрайтов и фонов", en: "Scratch library has many ready-made sprites and backdrops" },
      ],
      emoji: "🎓",
    },
  ],
};
