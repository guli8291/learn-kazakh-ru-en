import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import TopicalVisual from "@/components/TopicalVisual";
import MicroVideo from "@/components/MicroVideo";

export default function SectionTopic({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();

  const fullText = slide.text ? t(slide.text, lang) : "";
  const sentences = fullText
    ? fullText.split(/(?<=[.!?])\s+/).filter(Boolean)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-6 p-4 md:p-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-foreground"
      >
        {t(slide.title, lang)}
      </motion.h2>

      {/* Animated opening visual — introduces the topic emotionally */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      >
        <TopicalVisual
          src={slide.image}
          title={slide.title}
          emoji={slide.emoji}
          color={slide.color}
        />
      </motion.div>

      {/* Audio button at top */}
      {slide.text && (
        <div className="flex items-center gap-3">
          <AudioButton text={slide.text} src={slide.audio} />
        </div>
      )}

      {/* Text → Micro Video → Text → Micro Video pattern */}
      {sentences.length > 0 && (
        <div className="flex flex-col gap-5">
          {sentences.map((sentence, i) => (
            <div key={i} className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="rounded-xl bg-card/80 backdrop-blur-sm p-4 card-shadow border border-border/40"
              >
                <p className="text-lg leading-relaxed text-foreground/85">{sentence}</p>
              </motion.div>

              {/* Micro explanation video for THIS sentence */}
              <MicroVideo index={i} />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
