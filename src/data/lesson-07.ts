import { LessonData } from "@/lib/types";


import basicShapesVideo from "@/assets/lesson-07/videos/basic-shapes.mp4.asset.json";
import drawShapesVideo from "@/assets/lesson-07/videos/draw-shapes.mp4.asset.json";
export const lesson07: LessonData = {
  id: "lesson-07",
  title: { kk: "Фигуралар", ru: "Фигуры", en: "Shapes" },
  description: {
    kk: "Геометриялық фигураларды танып, компьютерде салу",
    ru: "Распознавание геометрических фигур и рисование на компьютере",
    en: "Recognizing geometric shapes and drawing them on the computer",
  },
  emoji: "🔷",
  color: "from-indigo-400 to-blue-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Фигуралар", ru: "Фигуры", en: "Shapes" },
      subtitle: {
        kk: "Геометриялық фигураларды үйренеміз!",
        ru: "Изучим геометрические фигуры!",
        en: "Let's learn about geometric shapes!",
      },
      emoji: "🔷",
      color: "from-indigo-400 to-blue-500",
    },
    {
      type: "rules",
      title: { kk: "Негізгі фигуралар", ru: "Основные фигуры", en: "Basic Shapes" },
      points: [
        { kk: "🟥 Шаршы — 4 тең қабырғасы бар", ru: "🟥 Квадрат — 4 равные стороны", en: "🟥 Square — 4 equal sides" },
        { kk: "🟦 Тіктөртбұрыш — қарама-қарсы қабырғалар тең", ru: "🟦 Прямоугольник — противоположные стороны равны", en: "🟦 Rectangle — opposite sides are equal" },
        { kk: "🔺 Үшбұрыш — 3 қабырғасы бар", ru: "🔺 Треугольник — 3 стороны", en: "🔺 Triangle — 3 sides" },
        { kk: "⭕ Дөңгелек — қабырғасы жоқ, дөңгелек пішін", ru: "⭕ Круг — нет сторон, округлая форма", en: "⭕ Circle — no sides, round shape" },
        { kk: "🔶 Ромб — 4 тең қабырға, бұрыштары тік емес", ru: "🔶 Ромб — 4 равные стороны, углы не прямые", en: "🔶 Rhombus — 4 equal sides, not right angles" },
      ],
      emoji: "📐",
    },
    {
      type: "topic",
      title: { kk: "Компьютерде фигура салу", ru: "Рисование фигур на компьютере", en: "Drawing Shapes on the Computer" },
      text: {
        kk: "Tux Paint бағдарламасында «Фигуралар» құралын таңдап, шаршы, тіктөртбұрыш, үшбұрыш, дөңгелек салуға болады. Фигураны таңдап, тышқанмен сүйреп саласың.",
        ru: "В Tux Paint выбери инструмент «Фигуры» и рисуй квадрат, прямоугольник, треугольник, круг. Выбери фигуру и нарисуй мышкой.",
        en: "In Tux Paint, select the 'Shapes' tool to draw squares, rectangles, triangles, circles. Pick a shape and drag with the mouse.",
      videos: [drawShapesVideo.url, basicShapesVideo.url],
      },
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Қай фигураның 3 қабырғасы бар?", ru: "У какой фигуры 3 стороны?", en: "Which shape has 3 sides?" },
          options: [
            { kk: "Шаршы", ru: "Квадрат", en: "Square" },
            { kk: "Үшбұрыш", ru: "Треугольник", en: "Triangle" },
            { kk: "Дөңгелек", ru: "Круг", en: "Circle" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Дөңгелектің неше қабырғасы бар?", ru: "Сколько сторон у круга?", en: "How many sides does a circle have?" },
          options: [
            { kk: "4", ru: "4", en: "4" },
            { kk: "0", ru: "0", en: "0" },
            { kk: "1", ru: "1", en: "1" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Фигура мен қасиет", ru: "Фигура и свойство", en: "Shape and Property" },
      items: [
        {
          type: "match",
          instruction: { kk: "Фигураны қасиетімен сәйкестендір", ru: "Соедини фигуру со свойством", en: "Match shape with property" },
          pairs: [
            { left: { kk: "Шаршы", ru: "Квадрат", en: "Square" }, right: { kk: "4 тең қабырға", ru: "4 равные стороны", en: "4 equal sides" } },
            { left: { kk: "Үшбұрыш", ru: "Треугольник", en: "Triangle" }, right: { kk: "3 қабырға", ru: "3 стороны", en: "3 sides" } },
            { left: { kk: "Дөңгелек", ru: "Круг", en: "Circle" }, right: { kk: "Қабырғасы жоқ", ru: "Нет сторон", en: "No sides" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: drawShapesVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Негізгі фигуралар: шаршы, үшбұрыш, дөңгелек, тіктөртбұрыш", ru: "Основные фигуры: квадрат, треугольник, круг, прямоугольник", en: "Basic shapes: square, triangle, circle, rectangle" },
        { kk: "Компьютерде фигура салу үшін Tux Paint пайдаланамыз", ru: "Для рисования фигур используем Tux Paint", en: "We use Tux Paint to draw shapes" },
      ],
      emoji: "🎓",
    },
  ],
};
