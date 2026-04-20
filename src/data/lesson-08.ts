import { LessonData } from "@/lib/types";


import drawPictureVideo from "@/assets/lesson-08/videos/draw-picture.mp4.asset.json";
import editPictureVideo from "@/assets/lesson-08/videos/edit-picture.mp4.asset.json";
export const lesson08: LessonData = {
  id: "lesson-08",
  title: { kk: "Суреттер салу және өңдеу", ru: "Рисование и редактирование картинок", en: "Drawing and Editing Pictures" },
  description: {
    kk: "Компьютерде суреттер салу және оларды өңдеу тәсілдері",
    ru: "Способы рисования и редактирования картинок на компьютере",
    en: "Ways to draw and edit pictures on the computer",
  },
  emoji: "🖼️",
  color: "from-rose-400 to-pink-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Суреттер салу және өңдеу", ru: "Рисование и редактирование", en: "Drawing and Editing Pictures" },
      subtitle: {
        kk: "Өз суретіңді сал және өңде!",
        ru: "Нарисуй и отредактируй свою картинку!",
        en: "Draw and edit your own picture!",
      },
      emoji: "🖼️",
      color: "from-rose-400 to-pink-500",
    },
    {
      type: "topic",
      title: { kk: "Суретті қалай салуға болады?", ru: "Как нарисовать картинку?", en: "How to Draw a Picture?" },
      text: {
        kk: "Tux Paint-те сурет салу үшін қылқалам, сызық, фигуралар құралдарын пайдаланасың. Түстерді таңдап, жұмыс аймағына саласың.",
        ru: "Чтобы нарисовать в Tux Paint, используй кисть, линии, фигуры. Выбирай цвета и рисуй на рабочей области.",
        en: "To draw in Tux Paint, use the brush, lines, and shapes. Choose colors and draw on the canvas.",
      videos: [drawPictureVideo.url, editPictureVideo.url],
      },
    },
    {
      type: "rules",
      title: { kk: "Суретті өңдеу тәсілдері", ru: "Способы редактирования", en: "Editing Methods" },
      points: [
        { kk: "↩️ Болдырмау — соңғы әрекетті кері қайтару", ru: "↩️ Отменить — вернуть последнее действие", en: "↩️ Undo — reverse last action" },
        { kk: "🔄 Қайтару — болдырмаған әрекетті қалпына келтіру", ru: "🔄 Повторить — вернуть отменённое действие", en: "🔄 Redo — restore undone action" },
        { kk: "✏️ Өшіргіш — қажетсіз бөлікті өшіру", ru: "✏️ Ластик — стереть ненужную часть", en: "✏️ Eraser — erase unwanted parts" },
        { kk: "💾 Сақтау — суретті сақтау", ru: "💾 Сохранить — сохранить картинку", en: "💾 Save — save your picture" },
        { kk: "🖨️ Басып шығару — суретті қағазға басу", ru: "🖨️ Печать — напечатать картинку", en: "🖨️ Print — print the picture" },
      ],
      emoji: "📝",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Соңғы әрекетті кері қайтару үшін не басасың?", ru: "Что нажать, чтобы отменить последнее действие?", en: "What do you press to undo the last action?" },
          options: [
            { kk: "Сақтау", ru: "Сохранить", en: "Save" },
            { kk: "Болдырмау", ru: "Отменить", en: "Undo" },
            { kk: "Басып шығару", ru: "Печать", en: "Print" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Суретті сақтау үшін қандай батырманы басасың?", ru: "Какую кнопку нажать для сохранения?", en: "Which button saves your picture?" },
          options: [
            { kk: "Жаңа", ru: "Новый", en: "New" },
            { kk: "Сақтау", ru: "Сохранить", en: "Save" },
            { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Әрекеттерді сәйкестендір", ru: "Соедини действия", en: "Match the Actions" },
      items: [
        {
          type: "match",
          instruction: { kk: "Батырманы әрекетпен сәйкестендір", ru: "Соедини кнопку с действием", en: "Match button with action" },
          pairs: [
            { left: { kk: "Болдырмау", ru: "Отменить", en: "Undo" }, right: { kk: "Кері қайтару", ru: "Вернуть назад", en: "Go back" } },
            { left: { kk: "Сақтау", ru: "Сохранить", en: "Save" }, right: { kk: "Файлды жазу", ru: "Записать файл", en: "Write file" } },
            { left: { kk: "Өшіргіш", ru: "Ластик", en: "Eraser" }, right: { kk: "Суретті тазалау", ru: "Стереть рисунок", en: "Clear drawing" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: drawPictureVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Tux Paint-те сурет салу және өңдеу мүмкін", ru: "В Tux Paint можно рисовать и редактировать", en: "You can draw and edit in Tux Paint" },
        { kk: "Болдырмау, сақтау, өшіргіш — негізгі өңдеу құралдары", ru: "Отмена, сохранение, ластик — основные инструменты", en: "Undo, save, eraser — basic editing tools" },
      ],
      emoji: "⭐",
    },
  ],
};
