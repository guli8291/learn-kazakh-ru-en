import { useLang, t, ui } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";

export default function SectionSummary({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-6 p-4 md:p-8"
    >
      {slide.emoji && (
        <motion.span
          className="text-6xl"
          animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3 }}
        >
          {slide.emoji}
        </motion.span>
      )}
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>
      <div className="flex w-full max-w-lg flex-col gap-3">
        {slide.points?.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex items-start gap-3 rounded-2xl bg-card p-4 card-shadow transition-shadow hover:shadow-md cursor-default"
          >
            <span className="text-2xl">✅</span>
            <p className="text-lg text-foreground/85">{t(point, lang)}</p>
          </motion.div>
        ))}
      </div>

      {/* Audio */}
      {slide.audio && (
        <AudioButton src={slide.audio} text={slide.title} />
      )}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-2xl font-bold text-primary"
      >
        {t(ui.wellDone, lang)}
      </motion.p>
    </motion.div>
  );
}
