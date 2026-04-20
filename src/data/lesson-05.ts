import { LessonData } from "@/lib/types";


import internetGlobeVideo from "@/assets/lesson-05/videos/internet-globe.mp4.asset.json";
import internetSafetyVideo from "@/assets/lesson-05/videos/internet-safety.mp4.asset.json";
export const lesson05: LessonData = {
  id: "lesson-05",
  title: { kk: "Интернет қауіпсіздігі", ru: "Безопасность в Интернете", en: "Internet Safety" },
  description: {
    kk: "Интернетті қауіпсіз пайдалану ережелері",
    ru: "Правила безопасного использования Интернета",
    en: "Rules for safe internet usage",
  },
  emoji: "🛡️",
  color: "from-blue-500 to-cyan-400",
  slides: [
    {
      type: "hero",
      title: { kk: "Интернет қауіпсіздігі", ru: "Безопасность в Интернете", en: "Internet Safety" },
      subtitle: {
        kk: "Интернетте өзіңді қалай қорғауды үйрен!",
        ru: "Научись защищать себя в Интернете!",
        en: "Learn how to protect yourself online!",
      },
      emoji: "🛡️",
      color: "from-blue-500 to-cyan-400",
    },
    {
      type: "topic",
      title: { kk: "Интернет дегеніміз не?", ru: "Что такое Интернет?", en: "What is the Internet?" },
      text: {
        kk: "Интернет — бүкіл әлемдегі компьютерлерді біріктіретін желі. Ол арқылы ақпарат іздеуге, ойын ойнауға, хабарлама жіберуге болады.",
        ru: "Интернет — это сеть, соединяющая компьютеры по всему миру. Через него можно искать информацию, играть в игры, отправлять сообщения.",
        en: "The Internet is a network connecting computers around the world. You can search for information, play games, and send messages through it.",
      videos: [internetGlobeVideo.url, internetSafetyVideo.url],
      },
    },
    {
      type: "rules",
      title: { kk: "Интернет қауіпсіздік ережелері", ru: "Правила безопасности в Интернете", en: "Internet Safety Rules" },
      points: [
        { kk: "Жеке мәліметтерді бөтен адамдарға бермеңіз", ru: "Не сообщай личные данные незнакомцам", en: "Don't share personal information with strangers" },
        { kk: "Белгісіз сілтемелерді баспаңыз", ru: "Не нажимай на незнакомые ссылки", en: "Don't click on unknown links" },
        { kk: "Ата-анаңа немесе мұғалімге хабарла", ru: "Сообщай родителям или учителю", en: "Tell your parents or teacher" },
        { kk: "Құпия сөзіңді ешкімге айтпа", ru: "Никому не говори свой пароль", en: "Never tell anyone your password" },
        { kk: "Тек сенімді сайттарды пайдалан", ru: "Используй только надёжные сайты", en: "Only use trusted websites" },
      ],
      emoji: "🔒",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: {
            kk: "Интернетте бейтаныс адамға нені айтуға болмайды?",
            ru: "Что нельзя говорить незнакомцу в Интернете?",
            en: "What shouldn't you tell a stranger online?",
          },
          options: [
            { kk: "Сүйікті түсіңді", ru: "Любимый цвет", en: "Your favorite color" },
            { kk: "Үй мекенжайыңды", ru: "Свой домашний адрес", en: "Your home address" },
            { kk: "Сүйікті мультфильміңді", ru: "Любимый мультфильм", en: "Your favorite cartoon" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: {
            kk: "Белгісіз сілтемені не істеу керек?",
            ru: "Что делать с незнакомой ссылкой?",
            en: "What should you do with an unknown link?",
          },
          options: [
            { kk: "Басу керек", ru: "Нажать", en: "Click on it" },
            { kk: "Баспау керек", ru: "Не нажимать", en: "Don't click on it" },
            { kk: "Достарға жіберу", ru: "Отправить друзьям", en: "Send it to friends" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Қауіпсіз бе, қауіпті ме?", ru: "Безопасно или опасно?", en: "Safe or Dangerous?" },
      items: [
        {
          type: "match",
          instruction: {
            kk: "Әрекетті дұрыс санатқа сәйкестендір",
            ru: "Соедини действие с правильной категорией",
            en: "Match the action with the correct category",
          },
          pairs: [
            { left: { kk: "Құпия сөзді айту", ru: "Сказать пароль", en: "Tell password" }, right: { kk: "Қауіпті ❌", ru: "Опасно ❌", en: "Dangerous ❌" } },
            { left: { kk: "Ата-анаға хабарлау", ru: "Рассказать родителям", en: "Tell parents" }, right: { kk: "Қауіпсіз ✅", ru: "Безопасно ✅", en: "Safe ✅" } },
            { left: { kk: "Мекенжайды жазу", ru: "Написать адрес", en: "Write address" }, right: { kk: "Қауіпті ❌", ru: "Опасно ❌", en: "Dangerous ❌" } },
          ],
        },
      ],
    },
    {
      type: "video",
      title: { kk: "Видео", ru: "Видео", en: "Video" },
      video: internetSafetyVideo.url,
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Интернетте жеке мәліметтерді бермеу керек", ru: "Нельзя сообщать личные данные в Интернете", en: "Don't share personal info online" },
        { kk: "Белгісіз сілтемелерді баспау керек", ru: "Не нажимай незнакомые ссылки", en: "Don't click unknown links" },
        { kk: "Қауіпті жағдайда ата-анаға айту керек", ru: "В опасной ситуации расскажи родителям", en: "Tell parents about dangerous situations" },
      ],
      emoji: "⭐",
    },
  ],
};
