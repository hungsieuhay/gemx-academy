import { useContext } from "react";
import { CourseContext } from "../context/course-context";

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
