import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { Trophy, Star, Sparkles } from "lucide-react";

export default function SectionSummary({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const points = slide.points || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(120px,auto)]"
    >
      {/* HERO trophy */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="md:col-span-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary p-8 md:p-12 text-center shadow-2xl"
      >
        {/* floating stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200"
            style={{
              left: `${10 + (i * 11) % 80}%`,
              top: `${15 + (i * 23) % 70}%`,
            }}
            animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4], rotate: [0, 180, 360] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            <Star className="h-5 w-5 fill-current" />
          </motion.div>
        ))}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 140 }}
          className="relative mx-auto mb-4 inline-flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-3xl bg-white/30 backdrop-blur-md"
        >
          <Trophy className="h-10 w-10 md:h-14 md:w-14 text-yellow-100 drop-shadow-lg" />
        </motion.div>
        <h2 className="relative text-3xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg">
          {t(slide.title, lang)}
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mt-3 text-lg md:text-xl font-semibold text-primary-foreground/95"
        >
          🌟 Ты молодец! Ты выучил(а) этот урок 🌟
        </motion.p>
      </motion.div>

      {/* Audio + count chips */}
      {slide.audio && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/40 p-4 flex items-center justify-between gap-3"
        >
          <span className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> Слушай итог
          </span>
          <AudioButton src={slide.audio} text={slide.title} />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`${slide.audio ? "md:col-span-3" : "md:col-span-6"} rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 border border-border/40 p-4 flex items-center gap-3`}
      >
        <Star className="h-5 w-5 text-accent fill-current" />
        <span className="text-sm font-semibold text-foreground/80">
          {points.length} главных вывода
        </span>
      </motion.div>

      {/* Bento cards with takeaways */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.08 }}
          whileHover={{ scale: 1.03, y: -3 }}
          className="md:col-span-3 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 p-5 card-shadow flex items-start gap-3"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-lg shadow-md">
            ✅
          </span>
          <p className="text-base md:text-lg font-medium text-foreground/90 leading-snug">
            {t(point, lang)}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
