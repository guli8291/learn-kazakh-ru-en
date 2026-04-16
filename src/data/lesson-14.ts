import { LessonData } from "@/lib/types";

export const lesson14: LessonData = {
  id: "lesson-14",
  title: { kk: "Мәтін теру", ru: "Набор текста", en: "Typing Text" },
  description: {
    kk: "Компьютерде мәтін теруді үйрену",
    ru: "Обучение набору текста на компьютере",
    en: "Learning to type text on the computer",
  },
  emoji: "📄",
  color: "from-lime-400 to-green-500",
  slides: [
    {
      type: "hero",
      title: { kk: "Мәтін теру", ru: "Набор текста", en: "Typing Text" },
      subtitle: { kk: "Компьютерде мәтін жазуды үйрен!", ru: "Научись набирать текст!", en: "Learn to type on the computer!" },
      emoji: "📄",
      color: "from-lime-400 to-green-500",
    },
    {
      type: "topic",
      title: { kk: "Мәтін қалай жазылады?", ru: "Как набирается текст?", en: "How Do You Type Text?" },
      text: {
        kk: "Мәтін теру үшін мәтіндік редакторды ашасың, курсорды қойып, пернетақтадан әріптерді басасың. Сөздер арасына бос орын (пробел) қоясың.",
        ru: "Для набора текста открой текстовый редактор, поставь курсор и нажимай буквы на клавиатуре. Между словами ставь пробел.",
        en: "To type text, open a text editor, place the cursor, and press letters on the keyboard. Put spaces between words.",
      },
    },
    {
      type: "rules",
      title: { kk: "Мәтін теру ережелері", ru: "Правила набора текста", en: "Typing Rules" },
      points: [
        { kk: "🔠 Сөйлем бас әріппен басталады — Shift басу", ru: "🔠 Предложение начинается с заглавной — нажми Shift", en: "🔠 Sentences start with capital — press Shift" },
        { kk: "⬜ Сөздер арасына бос орын қой", ru: "⬜ Ставь пробел между словами", en: "⬜ Put spaces between words" },
        { kk: "⏎ Жаңа жол үшін Enter бас", ru: "⏎ Для новой строки нажми Enter", en: "⏎ Press Enter for a new line" },
        { kk: "⌫ Қате жазсаң — Backspace бас", ru: "⌫ Ошибся — нажми Backspace", en: "⌫ If you make a mistake — press Backspace" },
      ],
      emoji: "✍️",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Сөйлемді бас әріппен бастау үшін не басасың?", ru: "Что нажать, чтобы начать предложение с заглавной буквы?", en: "What do you press to start a sentence with a capital letter?" },
          options: [
            { kk: "Пробел", ru: "Пробел", en: "Space" },
            { kk: "Shift + әріп", ru: "Shift + буква", en: "Shift + letter" },
            { kk: "Backspace", ru: "Backspace", en: "Backspace" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Мәтін теру ережелерін сәйкестендір", ru: "Соедини правила набора", en: "Match Typing Rules" },
      items: [
        {
          type: "match",
          instruction: { kk: "Жағдайды пернемен сәйкестендір", ru: "Соедини ситуацию с клавишей", en: "Match situation with key" },
          pairs: [
            { left: { kk: "Бас әріп жазу", ru: "Заглавная буква", en: "Capital letter" }, right: { kk: "Shift", ru: "Shift", en: "Shift" } },
            { left: { kk: "Қате жою", ru: "Удалить ошибку", en: "Delete mistake" }, right: { kk: "Backspace", ru: "Backspace", en: "Backspace" } },
            { left: { kk: "Жаңа жол", ru: "Новая строка", en: "New line" }, right: { kk: "Enter", ru: "Enter", en: "Enter" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Мәтін мәтіндік редакторда теріледі", ru: "Текст набирается в текстовом редакторе", en: "Text is typed in a text editor" },
        { kk: "Shift, Backspace, Enter, Пробел — маңызды пернелер", ru: "Shift, Backspace, Enter, Пробел — важные клавиши", en: "Shift, Backspace, Enter, Space — important keys" },
      ],
      emoji: "⭐",
    },
  ],
};
