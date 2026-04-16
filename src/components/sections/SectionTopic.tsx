import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import { useState } from "react";

export default function SectionTopic({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-6 p-4 md:p-8"
    >
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        {slide.image && !imgError && (
          <img
            src={slide.image}
            alt={t(slide.title, lang)}
            onError={() => setImgError(true)}
            className="h-auto w-full max-w-sm rounded-2xl object-cover shadow-lg md:w-1/2"
          />
        )}
        <div className="flex flex-1 flex-col gap-4">
          {slide.text && (
            <p className="text-lg leading-relaxed text-foreground/80">{t(slide.text, lang)}</p>
          )}
          {slide.text && <AudioButton text={slide.text} src={slide.audio} />}
        </div>
      </div>
    </motion.div>
  );
}
