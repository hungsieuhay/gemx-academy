import { createContext } from "react";
import type { CourseContextType } from "../types";

export const CourseContext = createContext<CourseContextType | undefined>(
  undefined
);
