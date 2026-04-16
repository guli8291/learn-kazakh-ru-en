import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

function ImageBlock({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-48 w-full items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/40"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="h-10 w-10" />
          <span className="text-sm font-medium">📌 Изображение</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="h-auto w-full rounded-2xl object-cover shadow-lg"
    />
  );
}

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

      {/* Image at top if available */}
      {slide.image && (
        <ImageBlock src={slide.image} alt={t(slide.title, lang)} />
      )}

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
