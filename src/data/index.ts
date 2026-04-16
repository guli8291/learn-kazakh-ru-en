import { lesson01 } from "./lesson-01";
import { lesson02 } from "./lesson-02";
import { lesson03 } from "./lesson-03";
import { lesson04 } from "./lesson-04";
import { LessonData } from "@/lib/types";

export const lessons: LessonData[] = [lesson01, lesson02, lesson03, lesson04];

export function getLessonById(id: string): LessonData | undefined {
  return lessons.find((l) => l.id === id);
}
