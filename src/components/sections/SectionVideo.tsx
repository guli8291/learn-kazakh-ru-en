import { useState } from "react";
import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import { Play, Eye, MessageCircle, BookOpen } from "lucide-react";
import AudioButton from "@/components/AudioButton";

const preVideoText = {
  kk: "Видеоны мұқият қарап, негізгі ойды байқа.",
  ru: "Внимательно посмотри видео и обрати внимание на главную мысль.",
  en: "Watch the video carefully and notice the main idea.",
};

const postVideoText = {
  kk: "Сен не байқадың? Не жаңа білдің?",
  ru: "Что ты заметил(а)? Что нового узнал(а)?",
  en: "What did you notice? What did you learn?",
};

const teacherNote = {
  kk: "🧑‍🏫 Мұғалімге: Видеодан кейін оқушылармен талқылау жүргізіңіз.",
  ru: "🧑‍🏫 Учителю: После видео обсудите увиденное с учениками.",
  en: "🧑‍🏫 Teacher: Discuss the video with students after watching.",
};

const placeholderText = {
  kk: "Видео осы жерге қойылады",
  ru: "Видео будет размещено здесь",
  en: "Video will be placed here",
};

export default function SectionVideo({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const [error, setError] = useState(false);
  const hasVideo = !!slide.video && !error;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-5 p-4 md:p-8">
      <h2 className="text-center text-3xl font-bold text-foreground">
        {t(slide.title || { kk: "Видео", ru: "Видео", en: "Video" }, lang)}
      </h2>

      {/* Pre-video instruction */}
      <div className="flex items-start gap-3 rounded-xl bg-yellow-50 border border-yellow-200 p-4 dark:bg-yellow-950/30 dark:border-yellow-800">
        <Eye className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600 dark:text-yellow-400" />
        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
          {t(preVideoText, lang)}
        </p>
      </div>

      {/* Topic image */}
      {slide.image && (
        <motion.img
          src={slide.image}
          alt={t(slide.title, lang)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-auto w-full max-h-56 rounded-2xl object-cover shadow-lg"
          loading="lazy"
        />
      )}

      {/* Video container */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        {hasVideo ? (
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <video
              src={slide.video}
              controls
              onError={() => setError(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center gap-4 bg-muted/50"
            style={{ aspectRatio: "16/9" }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Play className="h-10 w-10 text-primary" />
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              {t(placeholderText, lang)}
            </p>
          </div>
        )}
      </div>

      {/* Post-video reflection */}
      <div className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 p-4 dark:bg-green-950/30 dark:border-green-800">
        <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
        <p className="text-sm font-medium text-green-800 dark:text-green-200">
          {t(postVideoText, lang)}
        </p>
      </div>

      {/* Teacher note */}
      <div className="flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-200 p-4 dark:bg-blue-950/30 dark:border-blue-800">
        <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
          {t(teacherNote, lang)}
        </p>
      </div>
    </motion.div>
  );
}
