import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";

export default function SectionRules({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6 p-4 md:p-8"
    >
      <div className="flex items-center gap-3">
        {slide.emoji && <span className="text-4xl">{slide.emoji}</span>}
        <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>
      </div>
      <div className="grid gap-3">
        {slide.points?.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 rounded-2xl bg-card p-4 card-shadow"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <p className="text-lg text-foreground/85">{t(point, lang)}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
