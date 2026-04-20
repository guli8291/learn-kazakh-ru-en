import { useLang, t } from "@/lib/language";
import { LessonSlide } from "@/lib/types";
import { motion } from "framer-motion";
import AudioButton from "@/components/AudioButton";
import MicroVideo from "@/components/MicroVideo";
import { Sparkles } from "lucide-react";

/**
 * Bento-grid topic slide. Eliminates "lonely text" — every sentence
 * is paired with a visual or micro-video tile in an asymmetric grid.
 */
export default function SectionTopic({ slide }: { slide: LessonSlide }) {
  const { lang } = useLang();
  const fullText = slide.text ? t(slide.text, lang) : "";
  const sentences = fullText
    ? fullText.split(/(?<=[.!?])\s+/).filter(Boolean)
    : [];

  const heroImg = slide.image;
  const gradient = slide.color || "from-primary to-secondary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 lg:gap-8 p-3 md:p-6 lg:p-8"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3 lg:gap-4">
          {slide.emoji && <span className="text-4xl lg:text-6xl">{slide.emoji}</span>}
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
            {t(slide.title, lang)}
          </h2>
        </div>
        {slide.text && <AudioButton text={slide.text} src={slide.audio} />}
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(140px,auto)] lg:auto-rows-[minmax(180px,auto)] gap-3 lg:gap-5">
        {/* HERO TILE: image + first sentence overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 90 }}
          className={`relative md:col-span-4 md:row-span-2 overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} shadow-xl min-h-[260px] md:min-h-[340px] lg:min-h-[460px]`}
        >
          {heroImg ? (
            <img src={heroImg} alt={t(slide.title, lang)} className="absolute inset-0 h-full w-full object-cover" />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white mb-2">
              <Sparkles className="h-3 w-3" /> {t(slide.title, lang)}
            </div>
            {sentences[0] && (
              <p className="text-white text-lg md:text-2xl font-bold leading-snug drop-shadow-lg max-w-2xl">
                {sentences[0]}
              </p>
            )}
          </div>
          {/* floating emoji */}
          {slide.emoji && (
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 160 }}
              className="absolute top-4 right-4 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md text-3xl md:text-4xl"
            >
              {slide.emoji}
            </motion.div>
          )}
        </motion.div>

        {/* SIDE micro-video tile (1st video) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="md:col-span-2 md:row-span-2 min-h-[200px] md:min-h-[340px]"
        >
          <div className="h-full">
            <MicroVideo src={slide.videos?.[0]} index={0} />
          </div>
        </motion.div>

        {/* Remaining sentences paired with micro-videos */}
        {sentences.slice(1).map((sentence, i) => {
          const idx = i + 1;
          const video = slide.videos?.[idx];
          // alternate: text(span 4) + video(span 2), then video(span 2) + text(span 4)
          const flipped = i % 2 === 1;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              className="md:col-span-6 grid grid-cols-1 md:grid-cols-6 gap-3"
            >
              <div
                className={`md:col-span-4 rounded-2xl bg-card/90 backdrop-blur-sm p-5 md:p-6 card-shadow border border-border/40 flex items-center ${flipped ? "md:order-2" : ""}`}
              >
                <p className="text-base md:text-xl leading-relaxed text-foreground/90 font-medium">
                  <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {idx + 1}
                  </span>
                  {sentence}
                </p>
              </div>
              <div className={`md:col-span-2 ${flipped ? "md:order-1" : ""}`}>
                <MicroVideo src={video} index={idx} />
              </div>
            </motion.div>
          );
        })}

        {/* Audio replay tile (no counters) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-6 rounded-2xl bg-gradient-to-r from-accent/15 via-primary/10 to-secondary/15 border border-border/40 p-5 flex items-center justify-between gap-4 flex-wrap"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm md:text-base font-semibold text-foreground/80">
              {t(slide.title, lang)}
            </span>
          </div>
          {slide.text && <AudioButton text={slide.text} src={slide.audio} />}
        </motion.div>
      </div>
    </motion.div>
  );
}
