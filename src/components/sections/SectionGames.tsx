import { useState, useCallback, useMemo } from "react";
import { useLang, t, ui } from "@/lib/language";
import { LessonSlide, MatchQuestion } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

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
      setTimeout(() => { setWrong(null); setSelectedLeft(null); }, 800);
    }
  };

  const allMatched = Object.keys(matches).length === item.pairs.length;

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 card-shadow">
      <h3 className="text-xl font-bold text-foreground">{t(item.instruction, lang)}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {item.pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => !(i in matches) && setSelectedLeft(i)}
              disabled={i in matches}
              className={`rounded-xl border-2 p-3 text-lg font-semibold transition-all ${
                i in matches
                  ? "border-success/50 bg-success/10 text-success opacity-60"
                  : selectedLeft === i
                  ? "border-primary bg-primary/10 text-primary"
                  : wrong?.left === i
                  ? "border-destructive bg-destructive/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {t(p.left, lang)}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {shuffledRight.map((r, i) => (
            <button
              key={i}
              onClick={() => handleRight(r.idx)}
              disabled={Object.values(matches).includes(r.idx)}
              className={`rounded-xl border-2 p-3 text-lg font-semibold transition-all ${
                Object.values(matches).includes(r.idx)
                  ? "border-success/50 bg-success/10 text-success opacity-60"
                  : wrong?.right === r.idx
                  ? "border-destructive bg-destructive/10"
                  : "border-border hover:border-secondary/50"
              }`}
            >
              {t(r, lang)}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {allMatched && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl bg-success/20 p-3 text-center text-lg font-bold text-success"
          >
            {t(ui.wellDone, lang)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SectionGames({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6 p-4 md:p-8">
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>
      {slide.items?.map((item, i) =>
        item.type === "match" ? <MatchGame key={i} item={item} /> : null
      )}
    </motion.div>
  );
}
