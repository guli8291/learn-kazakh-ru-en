import { LessonData } from "@/lib/types";

export const lesson09: LessonData = {
  id: "lesson-09",
  title: { kk: "Фигуралармен орындалатын амалдар", ru: "Действия с фигурами", en: "Actions with Shapes" },
  description: {
    kk: "Фигураларды жылжыту, өзгерту, бұру және көшіру",
    ru: "Перемещение, изменение, поворот и копирование фигур",
    en: "Moving, resizing, rotating and copying shapes",
  },
  emoji: "🔄",
  color: "from-teal-400 to-emerald-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Фигуралармен амалдар", ru: "Действия с фигурами", en: "Actions with Shapes" },
      subtitle: {
        kk: "Фигураларды жылжыту, өзгерту, бұруды үйрен!",
        ru: "Научись перемещать, изменять и поворачивать фигуры!",
        en: "Learn to move, resize and rotate shapes!",
      },
      emoji: "🔄",
      color: "from-teal-400 to-emerald-500",
    },
    {
      type: "rules",
      title: { kk: "Фигуралармен не істеуге болады?", ru: "Что можно делать с фигурами?", en: "What Can You Do with Shapes?" },
      points: [
        { kk: "↔️ Жылжыту — фигураны басқа жерге ауыстыру", ru: "↔️ Переместить — передвинуть фигуру в другое место", en: "↔️ Move — drag the shape to another place" },
        { kk: "📏 Өлшемін өзгерту — үлкейту немесе кішірейту", ru: "📏 Изменить размер — увеличить или уменьшить", en: "📏 Resize — make bigger or smaller" },
        { kk: "🔁 Бұру — фигураны айналдыру", ru: "🔁 Повернуть — вращать фигуру", en: "🔁 Rotate — spin the shape" },
        { kk: "📋 Көшіру — фигураның көшірмесін жасау", ru: "📋 Копировать — сделать копию фигуры", en: "📋 Copy — make a duplicate" },
        { kk: "🗑️ Жою — фигураны алып тастау", ru: "🗑️ Удалить — убрать фигуру", en: "🗑️ Delete — remove the shape" },
      ],
      emoji: "🛠️",
    },
    {
      type: "topic",
      title: { kk: "Тәжірибе", ru: "Практика", en: "Practice" },
      text: {
        kk: "Tux Paint немесе басқа бағдарламада шаршы салып, оны жылжытып, көшіріп, бұрып көр. Әр фигурамен әр түрлі амал жасауға болады.",
        ru: "Нарисуй квадрат в Tux Paint и попробуй его переместить, скопировать, повернуть. С каждой фигурой можно делать разные действия.",
        en: "Draw a square in Tux Paint and try to move, copy, and rotate it. You can perform different actions with each shape.",
      },
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Фигураны басқа жерге қою — бұл қандай амал?", ru: "Поставить фигуру в другое место — это какое действие?", en: "Placing a shape in another spot is what action?" },
          options: [
            { kk: "Көшіру", ru: "Копировать", en: "Copy" },
            { kk: "Жылжыту", ru: "Переместить", en: "Move" },
            { kk: "Жою", ru: "Удалить", en: "Delete" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Фигураның көшірмесін жасау — бұл не?", ru: "Сделать копию фигуры — это что?", en: "Making a duplicate of a shape is what?" },
          options: [
            { kk: "Бұру", ru: "Повернуть", en: "Rotate" },
            { kk: "Жою", ru: "Удалить", en: "Delete" },
            { kk: "Көшіру", ru: "Копировать", en: "Copy" },
          ],
          correctIndex: 2,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Амалдарды сәйкестендір", ru: "Соедини действия", en: "Match the Actions" },
      items: [
        {
          type: "match",
          instruction: { kk: "Амалды сипаттамамен сәйкестендір", ru: "Соедини действие с описанием", en: "Match action with description" },
          pairs: [
            { left: { kk: "Жылжыту", ru: "Переместить", en: "Move" }, right: { kk: "Басқа жерге қою", ru: "Поставить в другое место", en: "Put elsewhere" } },
            { left: { kk: "Бұру", ru: "Повернуть", en: "Rotate" }, right: { kk: "Айналдыру", ru: "Вращать", en: "Spin" } },
            { left: { kk: "Көшіру", ru: "Копировать", en: "Copy" }, right: { kk: "Көшірмесін жасау", ru: "Сделать копию", en: "Make duplicate" } },
            { left: { kk: "Жою", ru: "Удалить", en: "Delete" }, right: { kk: "Алып тастау", ru: "Убрать", en: "Remove" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: "/video/lesson-09/video.mp4",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Фигураларды жылжытуға, көшіруге, бұруға, жоюға болады", ru: "Фигуры можно перемещать, копировать, вращать, удалять", en: "Shapes can be moved, copied, rotated, deleted" },
        { kk: "Бұл амалдар компьютерде суреттер жасауға көмектеседі", ru: "Эти действия помогают создавать картинки на компьютере", en: "These actions help create pictures on the computer" },
      ],
      emoji: "🎓",
    },
  ],
};
