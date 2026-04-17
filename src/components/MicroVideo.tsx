import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { useLang, t, Translatable } from "@/lib/language";

const placeholderLabel: Translatable = {
  kk: "Қысқа түсіндіру видеосы осы жерде болады",
  ru: "Короткое видео-объяснение будет здесь",
  en: "Short explanation video will be here",
};

interface MicroVideoProps {
  src?: string;
  caption?: Translatable;
  index?: number;
}

/**
 * Micro explanation video block (~4–6s).
 * Renders a real <video> if `src` is provided, otherwise an animated placeholder
 * that reserves the same layout/size and signals "video coming here".
 */
export default function MicroVideo({ src, caption, index = 0 }: MicroVideoProps) {
  const { lang } = useLang();
  const [error, setError] = useState(false);
  const hasVideo = !!src && !error;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.05, type: "spring", stiffness: 120, damping: 18 }}
      className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm shadow-lg"
    >
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {hasVideo ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            controls
            onError={() => setError(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15">
            {/* Floating decorative shapes */}
            <motion.div
              className="absolute h-24 w-24 rounded-full bg-primary/20 blur-2xl"
              animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "20%", left: "15%" }}
            />
            <motion.div
              className="absolute h-20 w-20 rounded-full bg-accent/25 blur-2xl"
              animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: "15%", right: "20%" }}
            />

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/40"
            >
              <Play className="h-7 w-7 text-primary" fill="currentColor" />
            </motion.div>
            <div className="relative z-10 flex items-center gap-2 px-4 text-center">
              <Film className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-semibold text-muted-foreground">
                {t(placeholderLabel, lang)}
              </p>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <div className="border-t border-border/40 bg-card/60 px-4 py-2">
          <p className="text-xs font-medium text-muted-foreground">{t(caption, lang)}</p>
        </div>
      )}
    </motion.div>
  );
}
