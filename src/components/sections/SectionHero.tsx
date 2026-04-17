import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { Sparkles, Rocket } from "lucide-react";

export default function SectionHero({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-6 gap-3 p-3 md:p-6 auto-rows-[minmax(140px,auto)]"
    >
      {/* MAIN hero tile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative md:col-span-6 overflow-hidden rounded-3xl bg-gradient-to-br ${slide.color || "from-primary to-secondary"} p-8 md:p-14 min-h-[44vh] flex flex-col items-center justify-center text-center shadow-2xl`}
      >
        {/* Animated bg shapes */}
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-white/15 blur-2xl"
          animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute h-72 w-72 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "5%", right: "10%" }}
        />

        {slide.emoji && (
          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 140, delay: 0.1 }}
            className="relative mb-4 text-7xl md:text-8xl drop-shadow-xl"
          >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              {slide.emoji}
            </motion.span>
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-3 text-4xl md:text-6xl font-bold text-primary-foreground drop-shadow-lg"
        >
          {t(slide.title, lang)}
        </motion.h1>
        {slide.subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative max-w-2xl text-lg md:text-2xl text-primary-foreground/95 font-medium"
          >
            {t(slide.subtitle, lang)}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white/25 backdrop-blur-md px-5 py-2 text-sm font-bold text-primary-foreground"
        >
          <Rocket className="h-4 w-4" /> Поехали!
        </motion.div>
      </motion.div>

      {/* Audio chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="md:col-span-3 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/40 p-4 flex items-center justify-between"
      >
        <span className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" /> Послушай вступление
        </span>
        {slide.title && <AudioButton text={slide.title} />}
      </motion.div>

      {/* Tip chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="md:col-span-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/15 border border-border/40 p-4 text-sm font-semibold text-foreground/80"
      >
        💡 Двигай мышкой — за тобой летят цветные следы!
      </motion.div>
    </motion.div>
  );
}
