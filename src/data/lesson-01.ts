import { LessonData } from "@/lib/types";

import computerLabImg from "@/assets/lesson-01/computer-lab.jpg";
import classroomRulesImg from "@/assets/lesson-01/classroom-rules.jpg";
import correctPostureImg from "@/assets/lesson-01/correct-posture.jpg";
import prohibitedActionsImg from "@/assets/lesson-01/prohibited-actions.jpg";
import safetyTipsImg from "@/assets/lesson-01/safety-tips.jpg";
import quizTimeImg from "@/assets/lesson-01/quiz-time.jpg";
import futureCityImg from "@/assets/lesson-01/future-city.jpg";

import computerLabVideo from "@/assets/lesson-01/videos/computer-lab.mp4.asset.json";
import correctPostureVideo from "@/assets/lesson-01/videos/correct-posture.mp4.asset.json";
import prohibitedActionsVideo from "@/assets/lesson-01/videos/prohibited-actions.mp4.asset.json";
import eyeRestVideo from "@/assets/lesson-01/videos/eye-rest.mp4.asset.json";

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
      title: {
        kk: "Жаңа білім",
        ru: "Новые знания",
        en: "New Knowledge",
      },
      text: {
        kk: "Суретте информатика кабинеті бейнеленген. Кабинетте әр оқушының жеке отырып жұмыс істеуі үшін компьютерлер қойылған. Цифрлық сауаттылық сабағы информатика кабинетінде өтеді.",
        ru: "На рисунке изображена компьютерная комната. В комнате установлены компьютеры для работы каждого ученика отдельно. Урок цифровой грамотности проходит в компьютерной комнате.",
        en: "The picture shows a computer lab. Computers are set up for each student to work individually. The digital literacy lesson takes place in the computer lab.",
      },
      image: computerLabImg,
    },
    {
      type: "rules",
      title: {
        kk: "1-ереже. Кабинетке кіру тәртібі",
        ru: "Правило 1. Порядок входа в кабинет",
        en: "Rule 1. Entering the classroom",
      },
      points: [
        { kk: "Кабинетке мұғалімнің рұқсатынсыз кіруге болмайды", ru: "Входить в кабинет без разрешения учителя запрещено", en: "Entering the classroom without the teacher's permission is prohibited" },
        { kk: "Мониторға 50-70 см қашықтықта отыр", ru: "Сиди на расстоянии 50-70 см от монитора", en: "Sit 50-70 cm away from the monitor" },
        { kk: "Арқаңды тік ұста", ru: "Держи спину прямо", en: "Keep your back straight" },
        { kk: "Әр 15 минут сайын көзіңе демалыс бер", ru: "Каждые 15 минут давай глазам отдых", en: "Rest your eyes every 15 minutes" },
        { kk: "Компьютерде тамақ ішпе", ru: "Не ешь за компьютером", en: "Don't eat at the computer" },
        { kk: "Сабақтан кейін қолыңды жу", ru: "После занятия вымой руки", en: "Wash your hands after class" },
      ],
      emoji: "📋",
      image: classroomRulesImg,
    },
    {
      type: "topic",
      title: {
        kk: "Компьютердің алдында дұрыс отыру",
        ru: "Правильная посадка за компьютером",
        en: "Correct Posture at the Computer",
      },
      text: {
        kk: "Компьютерде жұмыс істегенде дұрыс отыру өте маңызды. Арқаңды тік ұстап, аяғыңды еденге қой. Компьютердің алдында дұрыс отырған оқушыны белгіле.",
        ru: "Правильная посадка очень важна при работе за компьютером. Держи спину прямо и поставь ноги на пол. Найдите ученика, который правильно сидит за компьютером.",
        en: "Good posture is very important when working at the computer. Keep your back straight and feet on the floor. Find the student who is sitting correctly.",
      },
      image: correctPostureImg,
    },
    {
      type: "topic",
      title: {
        kk: "Тыйым салынған әрекеттер",
        ru: "Запрещенные действия",
        en: "Prohibited Actions",
      },
      text: {
        kk: "Компьютермен жұмыс барысында не істеуге болмайды? Себебін түсіндір.",
        ru: "Что нельзя делать во время работы с компьютером? Объясните причину.",
        en: "What can't you do while working with a computer? Explain why.",
      },
      image: prohibitedActionsImg,
    },
    {
      type: "topic",
      title: {
        kk: "Компьютермен жұмыс істегенде есіңде сақта!",
        ru: "Запомни при работе с компьютером!",
        en: "Remember when working with a computer!",
      },
      text: {
        kk: "Информатика кабинетінің мектептегі басқа кабинеттерден қандай айырмашылығы бар? Информатика кабинетіндегі тәртіп ережелерін сақтауды үйренесің.",
        ru: "Чем отличается компьютерный класс от других кабинетов школы? Ты научишься соблюдать правила поведения в компьютерном классе.",
        en: "How is the computer lab different from other classrooms? You will learn to follow the rules in the computer lab.",
      },
      image: safetyTipsImg,
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      image: quizTimeImg,
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
    },
    {
      type: "game",
      title: { kk: "Қауіпсіздік ережелерін сәйкестендір", ru: "Соедини правила безопасности", en: "Match Safety Rules" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Компьютермен жұмыс кезіндегі қауіпсіздік ережелерін дұрыс сәйкестендір",
            ru: "Правильно соедини правила безопасности при работе с компьютером",
            en: "Correctly match the safety rules when working with a computer",
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
      title: { kk: "Болашақтың қаласы", ru: "Город будущего", en: "Future City" },
      image: futureCityImg,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Компьютерде тәртіп сақтау маңызды", ru: "Важно соблюдать правила за компьютером", en: "It's important to follow computer rules" },
        { kk: "Дұрыс отыру — денсаулық кепілі", ru: "Правильная посадка — залог здоровья", en: "Good posture is key to health" },
        { kk: "Көзге тынығу беру керек", ru: "Нужно давать отдых глазам", en: "You need to rest your eyes" },
        { kk: "Информатика кабинетіндегі тәртіп ережелерін сақтауды үйренесің", ru: "Ты научишься соблюдать правила поведения в компьютерном классе", en: "You will learn to follow the rules in the computer lab" },
      ],
      emoji: "⭐",
    },
  ],
};
