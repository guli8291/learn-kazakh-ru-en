import { useRef, useState } from "react";
import { useLang, t, ui } from "@/lib/language";
import type { Translatable } from "@/lib/language";
import { Volume2 } from "lucide-react";

interface AudioButtonProps {
  src?: string;
  text?: Translatable;
  className?: string;
}

const langMap: Record<string, string> = {
  kk: "kk-KZ",
  ru: "ru-RU",
  en: "en-US",
};

export default function AudioButton({ src, text, className = "" }: AudioButtonProps) {
  const { lang } = useLang();
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (playing) return;
    if (src) {
      const audio = new Audio(src);
      audioRef.current = audio;
      audio.onended = () => setPlaying(false);
      audio.onerror = () => {
        // Fallback to TTS
        speakTTS();
      };
      setPlaying(true);
      audio.play().catch(() => speakTTS());
    } else {
      speakTTS();
    }
  };

  const speakTTS = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(t(text, lang));
    utterance.lang = langMap[lang] || "kk-KZ";
    utterance.rate = 0.9;
    utterance.onend = () => setPlaying(false);
    setPlaying(true);
    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={play}
      className={`inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95 ${playing ? "animate-pulse" : ""} ${className}`}
    >
      <Volume2 className="h-5 w-5" />
      {t(ui.listen, lang)}
    </button>
  );
}
