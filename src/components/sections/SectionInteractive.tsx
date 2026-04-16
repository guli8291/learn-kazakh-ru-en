import { useState } from "react";
import { useLang, t, ui } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { ChoiceQuestion } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

function ChoiceQuiz({ item }: { item: ChoiceQuestion }) {
  const { lang } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === item.correctIndex;

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 card-shadow">
      <h3 className="text-xl font-bold text-foreground">{t(item.question, lang)}</h3>
      <div className="grid gap-2">
        {item.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => { if (!checked) setSelected(i); }}
            className={`rounded-xl border-2 p-3 text-left text-lg font-semibold transition-all ${
              selected === i
                ? checked
                  ? isCorrect
                    ? "border-success bg-success/10 text-success"
                    : "border-destructive bg-destructive/10 text-destructive"
                  : "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-primary/50"
            } ${checked && i === item.correctIndex ? "border-success bg-success/10 text-success" : ""}`}
          >
            {t(opt, lang)}
          </button>
        ))}
      </div>
      {!checked && selected !== null && (
        <button
          onClick={() => setChecked(true)}
          className="self-start rounded-xl bg-primary px-6 py-2 font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          {t(ui.check, lang)}
        </button>
      )}
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-xl p-3 text-center text-lg font-bold ${isCorrect ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"}`}
          >
            {isCorrect ? t(ui.correct, lang) : t(ui.incorrect, lang)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SectionInteractive({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6 p-4 md:p-8">
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>
      <div className="grid gap-6">
        {slide.items?.map((item, i) =>
          item.type === "choice" ? <ChoiceQuiz key={i} item={item} /> : null
        )}
      </div>
    </motion.div>
  );
}
