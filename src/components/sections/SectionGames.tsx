import { useState, useCallback, useMemo } from "react";
import { useLang, t, ui } from "@/lib/language";
import { LessonSlide, MatchQuestion } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { Sparkles } from "lucide-react";

function MatchGame({ item }: { item: MatchQuestion }) {
  const { lang } = useLang();

  const shuffledRight = useMemo(() => {
    const arr = item.pairs.map((p, i) => ({ ...p.right, idx: i }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [item.pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [wrong, setWrong] = useState<{ left: number; right: number } | null>(null);

  const handleRight = (rightOrigIdx: number) => {
    if (selectedLeft === null) return;
    if (selectedLeft === rightOrigIdx) {
      setMatches((m) => ({ ...m, [selectedLeft]: rightOrigIdx }));
      setSelectedLeft(null);
    } else {
      setWrong({ left: selectedLeft, right: rightOrigIdx });
      setTimeout(() => { setWrong(null); setSelectedLeft(null); }, 700);
    }
  };

  const allMatched = Object.keys(matches).length === item.pairs.length;

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 card-shadow">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold text-foreground">{t(item.instruction, lang)}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {item.pairs.map((p, i) => {
            const matched = i in matches;
            const isSelected = selectedLeft === i;
            const isWrong = wrong?.left === i;

            return (
              <motion.button
                key={i}
                onClick={() => !matched && setSelectedLeft(i)}
                disabled={matched}
                animate={isWrong ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                transition={isWrong ? { duration: 0.4 } : {}}
                whileHover={!matched ? { scale: 1.03 } : {}}
                whileTap={!matched ? { scale: 0.97 } : {}}
                className={`rounded-xl border-2 p-3 text-lg font-semibold transition-all ${
                  matched
                    ? "border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400"
                    : isSelected
                    ? "border-primary bg-primary/10 text-primary shadow-md"
                    : isWrong
                    ? "border-destructive bg-destructive/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {t(p.left, lang)}
              </motion.button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {shuffledRight.map((r, i) => {
            const matched = Object.values(matches).includes(r.idx);
            const isWrong = wrong?.right === r.idx;

            return (
              <motion.button
                key={i}
                onClick={() => handleRight(r.idx)}
                disabled={matched}
                animate={isWrong ? { x: [0, -6, 6, -4, 4, 0] } : {}}
                transition={isWrong ? { duration: 0.4 } : {}}
                whileHover={!matched ? { scale: 1.03 } : {}}
                whileTap={!matched ? { scale: 0.97 } : {}}
                className={`rounded-xl border-2 p-3 text-lg font-semibold transition-all ${
                  matched
                    ? "border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400"
                    : isWrong
                    ? "border-destructive bg-destructive/10"
                    : "border-border hover:border-secondary/50"
                }`}
              >
                {t(r, lang)}
              </motion.button>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {allMatched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-500/20 p-4 text-center text-lg font-bold text-green-600 dark:text-green-400"
          >
            <Sparkles className="h-5 w-5" />
            {t(ui.wellDone, lang)}
            <Sparkles className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SectionGames({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-5 p-4 md:p-8">
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>

      {/* Audio */}
      {slide.audio && (
        <AudioButton src={slide.audio} text={slide.title} />
      )}

      {slide.items?.map((item, i) =>
        item.type === "match" ? <MatchGame key={i} item={item} /> : null
      )}
    </motion.div>
  );
}
