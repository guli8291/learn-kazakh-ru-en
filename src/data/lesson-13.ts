import { LessonData } from "@/lib/types";

export const lesson13: LessonData = {
  id: "lesson-13",
  title: { kk: "Пернетақта", ru: "Клавиатура", en: "Keyboard" },
  description: {
    kk: "Пернетақтамен танысу және негізгі перне топтары",
    ru: "Знакомство с клавиатурой и основные группы клавиш",
    en: "Introduction to the keyboard and key groups",
  },
  emoji: "⌨️",
  color: "from-gray-500 to-slate-600",
  slides: [
    {
      type: "hero",
      title: { kk: "Пернетақта", ru: "Клавиатура", en: "Keyboard" },
      subtitle: { kk: "Пернетақтамен жұмыс істеуді үйрен!", ru: "Научись работать с клавиатурой!", en: "Learn to use the keyboard!" },
      emoji: "⌨️",
      color: "from-gray-500 to-slate-600",
    },
    {
      type: "topic",
      title: { kk: "Пернетақта дегеніміз не?", ru: "Что такое клавиатура?", en: "What is a Keyboard?" },
      text: {
        kk: "Пернетақта — компьютерге мәтін, сандар және командалар енгізуге арналған құрылғы. Онда әріптер, сандар, таңбалар және арнайы пернелер бар.",
        ru: "Клавиатура — устройство для ввода текста, цифр и команд в компьютер. На ней есть буквы, цифры, символы и специальные клавиши.",
        en: "A keyboard is a device for entering text, numbers, and commands into a computer. It has letters, numbers, symbols, and special keys.",
      },
    },
    {
      type: "rules",
      title: { kk: "Перне топтары", ru: "Группы клавиш", en: "Key Groups" },
      points: [
        { kk: "🔤 Әріптер пернелері — мәтін жазу үшін", ru: "🔤 Буквенные клавиши — для набора текста", en: "🔤 Letter keys — for typing text" },
        { kk: "🔢 Сандар пернелері — сандар енгізу үшін", ru: "🔢 Цифровые клавиши — для ввода чисел", en: "🔢 Number keys — for entering numbers" },
        { kk: "⏎ Enter — растау пернесі", ru: "⏎ Enter — клавиша подтверждения", en: "⏎ Enter — confirmation key" },
        { kk: "⌫ Backspace — соңғы таңбаны өшіру", ru: "⌫ Backspace — удалить последний символ", en: "⌫ Backspace — delete last character" },
        { kk: "⬆️ Shift — бас әріп жазу", ru: "⬆️ Shift — написать заглавную букву", en: "⬆️ Shift — type capital letter" },
        { kk: "Пробел — бос орын қою", ru: "Пробел — вставить пробел", en: "Space — insert a space" },
      ],
      emoji: "🔑",
    },
    {
      type: "interactive",
      title: { kk: "Білімді тексер!", ru: "Проверь знания!", en: "Test Your Knowledge!" },
      items: [
        {
          type: "choice",
          question: { kk: "Бас әріп жазу үшін қай пернені басасың?", ru: "Какую клавишу нажать для заглавной буквы?", en: "Which key do you press for a capital letter?" },
          options: [
            { kk: "Enter", ru: "Enter", en: "Enter" },
            { kk: "Shift", ru: "Shift", en: "Shift" },
            { kk: "Backspace", ru: "Backspace", en: "Backspace" },
          ],
          correctIndex: 1,
        },
        {
          type: "choice",
          question: { kk: "Backspace пернесі не істейді?", ru: "Что делает клавиша Backspace?", en: "What does Backspace do?" },
          options: [
            { kk: "Жаңа жол ашады", ru: "Открывает новую строку", en: "Opens new line" },
            { kk: "Соңғы таңбаны өшіреді", ru: "Удаляет последний символ", en: "Deletes last character" },
            { kk: "Бос орын қояды", ru: "Ставит пробел", en: "Inserts a space" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "game",
      title: { kk: "Пернелерді сәйкестендір", ru: "Соедини клавиши", en: "Match the Keys" },
      items: [
        {
          type: "match",
          instruction: { kk: "Пернені оның қызметімен сәйкестендір", ru: "Соедини клавишу с её функцией", en: "Match key with function" },
          pairs: [
            { left: { kk: "Enter", ru: "Enter", en: "Enter" }, right: { kk: "Растау", ru: "Подтвердить", en: "Confirm" } },
            { left: { kk: "Shift", ru: "Shift", en: "Shift" }, right: { kk: "Бас әріп", ru: "Заглавная", en: "Capital" } },
            { left: { kk: "Backspace", ru: "Backspace", en: "Backspace" }, right: { kk: "Өшіру", ru: "Удалить", en: "Delete" } },
            { left: { kk: "Пробел", ru: "Пробел", en: "Space" }, right: { kk: "Бос орын", ru: "Пробел", en: "Space" } },
          ],
        },
      ],
    },
    {
      type: "summary",
      title: { kk: "Қорытынды", ru: "Итоги", en: "Summary" },
      points: [
        { kk: "Пернетақта — мәтін, сан, команда енгізу құрылғысы", ru: "Клавиатура — устройство для ввода текста, цифр, команд", en: "Keyboard — device for entering text, numbers, commands" },
        { kk: "Enter, Shift, Backspace, Пробел — негізгі пернелер", ru: "Enter, Shift, Backspace, Пробел — основные клавиши", en: "Enter, Shift, Backspace, Space — basic keys" },
      ],
      emoji: "🎓",
    },
  ],
};
