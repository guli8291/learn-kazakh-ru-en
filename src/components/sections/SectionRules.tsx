import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

function ImagePlaceholder() {
  return (
    <div className="flex h-40 w-full items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted/40">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <ImageIcon className="h-8 w-8" />
        <span className="text-xs font-medium">📌 Изображение</span>
      </div>
    </div>
  );
}

export default function SectionRules({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-5 p-4 md:p-8"
    >
      <div className="flex items-center gap-3">
        {slide.emoji && <span className="text-4xl">{slide.emoji}</span>}
        <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>
      </div>

      {/* Image block */}
      {slide.image && !imgError ? (
        <motion.img
          src={slide.image}
          alt={t(slide.title, lang)}
          onError={() => setImgError(true)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="h-auto w-full max-h-64 rounded-2xl object-cover shadow-lg"
        />
      ) : slide.image ? (
        <ImagePlaceholder />
      ) : null}

      {/* Rules list with staggered animation */}
      <div className="grid gap-3">
        {slide.points?.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex items-start gap-3 rounded-2xl bg-card p-4 card-shadow cursor-default transition-shadow hover:shadow-md"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <p className="text-lg text-foreground/85">{t(point, lang)}</p>
          </motion.div>
        ))}
      </div>

      {/* Audio button */}
      {slide.audio && (
        <div className="flex items-center gap-3 pt-1">
          <AudioButton src={slide.audio} text={slide.title} />
        </div>
      )}
    </motion.div>
  );
}
