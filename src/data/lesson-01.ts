import { LessonData } from "@/lib/types";

export const lesson01: LessonData = {
  id: "lesson-01",
  title: { kk: "Денсаулық және компьютер", ru: "Здоровье и компьютер", en: "Health and Computer" },
  description: {
    kk: "Компьютермен жұмыс істеу кезінде денсаулықты сақтау ережелері",
    ru: "Правила сохранения здоровья при работе за компьютером",
    en: "Rules for staying healthy while using a computer",
  },
  emoji: "🏥",
  color: "from-green-400 to-teal-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Денсаулық және компьютер", ru: "Здоровье и компьютер", en: "Health and Computer" },
      subtitle: {
        kk: "Компьютермен дұрыс жұмыс істеуді үйренеміз!",
        ru: "Научимся правильно работать за компьютером!",
        en: "Let's learn to use the computer correctly!",
      },
      emoji: "💻",
      color: "from-green-400 to-teal-500",
    },
    {
      type: "topic",
      title: { kk: "Компьютер сыныбындағы ережелер", ru: "Правила в компьютерном классе", en: "Computer Classroom Rules" },
      text: {
        kk: "Компьютер сыныбында тәртіп сақтау өте маңызды. Ол сенің денсаулығыңды және құрылғыларды қорғайды.",
        ru: "Очень важно соблюдать правила в компьютерном классе. Это защитит твоё здоровье и оборудование.",
        en: "It's very important to follow rules in the computer classroom. It protects your health and the equipment.",
      },
      // ВАЖНО: Здесь должен быть путь к файлу изображения — "1-сурет"
      image: "/images/lesson-01/1.jpg",
      // ВАЖНО: Здесь должен быть путь к аудиофайлу — "1-сурет"
      audio: "/audio/lesson-01/5255898723647488.mp3",
    },
    {
      type: "rules",
      title: { kk: "Негізгі ережелер", ru: "Основные правила", en: "Main Rules" },
      points: [
        { kk: "Мұғалімнің рұқсатынсыз компьютерді қоспа", ru: "Не включай компьютер без разрешения учителя", en: "Don't turn on the computer without the teacher's permission" },
        { kk: "Мониторға 50-70 см қашықтықта отыр", ru: "Сиди на расстоянии 50-70 см от монитора", en: "Sit 50-70 cm away from the monitor" },
        { kk: "Арқаңды тік ұста", ru: "Держи спину прямо", en: "Keep your back straight" },
        { kk: "Әр 15 минут сайын көзіңе демалыс бер", ru: "Каждые 15 минут давай глазам отдых", en: "Rest your eyes every 15 minutes" },
        { kk: "Компьютерде тамақ ішпе", ru: "Не ешь за компьютером", en: "Don't eat at the computer" },
        { kk: "Сабақтан кейін қолыңды жу", ru: "После занятия вымой руки", en: "Wash your hands after class" },
      ],
      emoji: "📋",
      // ВАЖНО: Здесь должен быть путь к файлу изображения — "2-сурет"
      // image: "/images/lesson-01/2.jpg",
    },
    {
      type: "topic",
      title: { kk: "Дұрыс отыру", ru: "Правильная посадка", en: "Correct Posture" },
      text: {
        kk: "Компьютерде жұмыс істегенде дұрыс отыру өте маңызды. Арқаңды тік ұстап, аяғыңды еденге қой.",
        ru: "Правильная посадка очень важна при работе за компьютером. Держи спину прямо и поставь ноги на пол.",
        en: "Good posture is very important when working at the computer. Keep your back straight and feet on the floor.",
      },
      // ВАЖНО: Здесь должен быть путь к файлу изображения — "3-сурет"
      image: "/images/lesson-01/3.jpg",
      // ВАЖНО: Здесь должен быть путь к аудиофайлу — "Болашақтың қаласы"
      audio: "/audio/lesson-01/6101280793952256.mp3",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Мониторға қанша қашықтықта отыру керек?",
            ru: "На каком расстоянии нужно сидеть от монитора?",
            en: "How far should you sit from the monitor?",
          },
          options: [
            { kk: "10-20 см", ru: "10-20 см", en: "10-20 cm" },
            { kk: "50-70 см", ru: "50-70 см", en: "50-70 cm" },
            { kk: "2 метр", ru: "2 метра", en: "2 meters" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Әр неше минут сайын көзге демалыс беру керек?",
            ru: "Через сколько минут нужно давать отдых глазам?",
            en: "How often should you rest your eyes?",
          },
          options: [
            { kk: "5 минут", ru: "5 минут", en: "5 minutes" },
            { kk: "15 минут", ru: "15 минут", en: "15 minutes" },
            { kk: "60 минут", ru: "60 минут", en: "60 minutes" },
          ],
          correctIndex: 1,
        },
      ],
      // ВАЖНО: Здесь должен быть путь к файлу изображения для интерактивного раздела — "4-сурет"
      // image: "/images/lesson-01/4.jpg",
    },
    {
      type: "game",
      title: { kk: "Сәйкестендіру ойыны", ru: "Игра на соответствие", en: "Matching Game" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Ережелерді дұрыс сәйкестендір",
            ru: "Правильно соедини пары",
            en: "Match the pairs correctly",
          },
          pairs: [
            { left: { kk: "Арқа", ru: "Спина", en: "Back" }, right: { kk: "Тік ұстау", ru: "Держать прямо", en: "Keep straight" } },
            { left: { kk: "Көз", ru: "Глаза", en: "Eyes" }, right: { kk: "Демалыс беру", ru: "Давать отдых", en: "Give rest" } },
            { left: { kk: "Қол", ru: "Руки", en: "Hands" }, right: { kk: "Жуу", ru: "Мыть", en: "Wash" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      // ВАЖНО: Здесь должен быть путь к видеофайлу — "Болашақтың қаласы"
      // Доступные видеофайлы:
      // /video/lesson-01/6511797559754752.mp4 — для "Болашақтың қаласы"
      // /video/lesson-01/1.mp4 — для "1-сурет"
      video: "/video/lesson-01/6511797559754752.mp4",
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Компьютерде тәртіп сақтау маңызды", ru: "Важно соблюдать правила за компьютером", en: "It's important to follow computer rules" },
        { kk: "Дұрыс отыру — денсаулық кепілі", ru: "Правильная посадка — залог здоровья", en: "Good posture is key to health" },
        { kk: "Көзге тынығу беру керек", ru: "Нужно давать отдых глазам", en: "You need to rest your eyes" },
      ],
      emoji: "⭐",
    },
  ],
};
