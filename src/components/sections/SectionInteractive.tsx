import { useState } from "react";
import { useLang, t, ui } from "@/lib/language";
import { LessonSlide, ChoiceQuestion } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { ImageIcon, CheckCircle2, XCircle } from "lucide-react";

function ChoiceQuiz({ item }: { item: ChoiceQuestion }) {
  const { lang } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === item.correctIndex;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4 rounded-2xl bg-card p-6 card-shadow"
    >
      <h3 className="text-xl font-bold text-foreground">{t(item.question, lang)}</h3>
      <div className="grid gap-2">
        {item.options.map((opt, i) => {
          const isSelected = selected === i;
          const isAnswer = i === item.correctIndex;

          let classes = "border-border hover:border-primary/50 hover:bg-primary/5";
          if (isSelected && !checked) classes = "border-primary bg-primary/10 text-primary";
          if (checked && isAnswer) classes = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
          if (checked && isSelected && !isCorrect) classes = "border-destructive bg-destructive/10 text-destructive";

          return (
            <motion.button
              key={i}
              onClick={() => { if (!checked) setSelected(i); }}
              whileHover={!checked ? { scale: 1.02 } : {}}
              whileTap={!checked ? { scale: 0.98 } : {}}
              className={`flex items-center gap-3 rounded-xl border-2 p-3 text-left text-lg font-semibold transition-colors ${classes}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{t(opt, lang)}</span>
              {checked && isAnswer && <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />}
              {checked && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-destructive shrink-0" />}
            </motion.button>
          );
        })}
      </div>
      {!checked && selected !== null && (
        <motion.button
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setChecked(true)}
          className="self-start rounded-xl bg-primary px-6 py-2.5 font-bold text-primary-foreground shadow-md"
        >
          {t(ui.check, lang)}
        </motion.button>
      )}
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`flex items-center justify-center gap-2 rounded-xl p-4 text-lg font-bold ${
              isCorrect
                ? "bg-green-500/20 text-green-700 dark:text-green-400"
                : "bg-destructive/20 text-destructive"
            }`}
          >
            {isCorrect ? "🎉" : "😊"} {isCorrect ? t(ui.correct, lang) : t(ui.incorrect, lang)}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SectionInteractive({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-5 p-4 md:p-8">
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>

      {/* Image for the interactive section */}
      {slide.image && !imgError ? (
        <motion.img
          src={slide.image}
          alt={t(slide.title, lang)}
          onError={() => setImgError(true)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-auto w-full max-h-56 rounded-2xl object-cover shadow-lg"
        />
      ) : slide.image ? (
        <div className="flex h-40 w-full items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/40">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="h-8 w-8" />
            <span className="text-xs font-medium">📌 Изображение</span>
          </div>
        </div>
      ) : null}

      {/* Audio */}
      {slide.audio && (
        <AudioButton src={slide.audio} text={slide.title} />
      )}

      {/* Quiz items */}
      <div className="grid gap-5">
        {slide.items?.map((item, i) =>
          item.type === "choice" ? <ChoiceQuiz key={i} item={item} /> : null
        )}
      </div>
    </motion.div>
  );
}
