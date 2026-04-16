import { useState } from "react";
import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";

export default function SectionVideo({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [error, setError] = useState(false);

  if (!slide.video || error) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6 p-4 md:p-8">
      <h2 className="text-3xl font-bold text-foreground">{t(slide.title, lang)}</h2>
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <video
          src={slide.video}
          controls
          onError={() => setError(true)}
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
