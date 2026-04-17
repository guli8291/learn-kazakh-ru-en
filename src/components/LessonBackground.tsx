import { motion } from "framer-motion";

interface Props {
  variant?: "hero" | "topic" | "rules" | "interactive" | "game" | "video" | "summary" | string;
}

/**
 * Shared decorative background system used behind every lesson slide.
 * Provides a soft educational base gradient + animated colored blobs.
 * Per-slide variation is achieved by shifting blob positions / accent hues
 * while keeping the same visual language across all slides.
 */
export default function LessonBackground({ variant = "topic" }: Props) {
  // Palette uses semantic tokens so it adapts to theme changes.
  const variants: Record<string, { a: string; b: string; c: string; aPos: string; bPos: string; cPos: string; baseTo: string }> = {
    hero: {
      a: "bg-primary/30",
      b: "bg-secondary/30",
      c: "bg-accent/25",
      aPos: "top-[-10%] left-[-10%] h-[40rem] w-[40rem]",
      bPos: "bottom-[-15%] right-[-10%] h-[36rem] w-[36rem]",
      cPos: "top-[20%] right-[15%] h-[18rem] w-[18rem]",
      baseTo: "to-secondary/10",
    },
    topic: {
      a: "bg-primary/15",
      b: "bg-secondary/15",
      c: "bg-accent/15",
      aPos: "top-[-15%] right-[-10%] h-[34rem] w-[34rem]",
      bPos: "bottom-[-20%] left-[-15%] h-[32rem] w-[32rem]",
      cPos: "top-[40%] left-[10%] h-[14rem] w-[14rem]",
      baseTo: "to-primary/5",
    },
    rules: {
      a: "bg-accent/20",
      b: "bg-primary/15",
      c: "bg-secondary/15",
      aPos: "top-[-10%] left-[20%] h-[30rem] w-[30rem]",
      bPos: "bottom-[-15%] right-[-10%] h-[34rem] w-[34rem]",
      cPos: "top-[55%] left-[-5%] h-[16rem] w-[16rem]",
      baseTo: "to-accent/5",
    },
    interactive: {
      a: "bg-secondary/20",
      b: "bg-primary/20",
      c: "bg-accent/20",
      aPos: "top-[-10%] right-[10%] h-[32rem] w-[32rem]",
      bPos: "bottom-[-10%] left-[-15%] h-[30rem] w-[30rem]",
      cPos: "top-[35%] right-[-5%] h-[18rem] w-[18rem]",
      baseTo: "to-secondary/5",
    },
    game: {
      a: "bg-accent/25",
      b: "bg-secondary/20",
      c: "bg-primary/20",
      aPos: "top-[-15%] left-[-5%] h-[34rem] w-[34rem]",
      bPos: "bottom-[-15%] right-[5%] h-[32rem] w-[32rem]",
      cPos: "top-[45%] left-[40%] h-[16rem] w-[16rem]",
      baseTo: "to-accent/10",
    },
    video: {
      a: "bg-primary/10",
      b: "bg-secondary/10",
      c: "bg-accent/10",
      aPos: "top-[-10%] left-[-10%] h-[28rem] w-[28rem]",
      bPos: "bottom-[-15%] right-[-10%] h-[28rem] w-[28rem]",
      cPos: "top-[50%] left-[50%] h-[12rem] w-[12rem]",
      baseTo: "to-muted/40",
    },
    summary: {
      a: "bg-accent/25",
      b: "bg-primary/20",
      c: "bg-secondary/20",
      aPos: "top-[-10%] right-[-5%] h-[34rem] w-[34rem]",
      bPos: "bottom-[-10%] left-[-10%] h-[32rem] w-[32rem]",
      cPos: "top-[30%] left-[30%] h-[18rem] w-[18rem]",
      baseTo: "to-accent/10",
    },
  };

  const v = variants[variant] || variants.topic;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-background via-background ${v.baseTo}`} />

      {/* Decorative blurred blobs */}
      <motion.div
        className={`absolute rounded-full blur-3xl ${v.a} ${v.aPos}`}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute rounded-full blur-3xl ${v.b} ${v.bPos}`}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute rounded-full blur-3xl ${v.c} ${v.cPos}`}
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle dot pattern overlay for educational texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground) / 0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
