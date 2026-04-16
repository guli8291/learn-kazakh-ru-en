import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";

export default function SectionHero({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex min-h-[60vh] flex-col items-center justify-center rounded-3xl bg-gradient-to-br ${slide.color || "from-primary to-secondary"} p-8 text-center`}
    >
      {slide.emoji && <span className="mb-4 text-7xl animate-bounce-soft">{slide.emoji}</span>}
      <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
        {t(slide.title, lang)}
      </h1>
      {slide.subtitle && (
        <p className="text-xl text-primary-foreground/90 md:text-2xl">
          {t(slide.subtitle, lang)}
        </p>
      )}
    </motion.div>
  );
}
