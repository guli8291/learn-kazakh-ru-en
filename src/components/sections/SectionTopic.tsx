import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import TopicalVisual from "@/components/TopicalVisual";

export default function SectionTopic({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();

  // Split text into sentences for interleaving with visuals
  const fullText = slide.text ? t(slide.text, lang) : "";
  const sentences = fullText
    ? fullText.split(/(?<=[.!?])\s+/).filter(Boolean)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-5 p-4 md:p-8"
    >
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>

      {/* Always-on visual: real image or topical gradient fallback */}
      <TopicalVisual
        src={slide.image}
        title={slide.title}
        emoji={slide.emoji}
        color={slide.color}
      />

      {/* Text content with audio */}
      {sentences.length > 0 && (
        <div className="flex flex-col gap-4">
          {sentences.map((sentence, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card p-4 card-shadow"
            >
              <p className="text-lg leading-relaxed text-foreground/85">{sentence}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Audio button */}
      {slide.text && (
        <div className="flex items-center gap-3">
          <AudioButton text={slide.text} src={slide.audio} />
        </div>
      )}
    </motion.div>
  );
}
