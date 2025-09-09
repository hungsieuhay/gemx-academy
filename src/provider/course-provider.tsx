import { useQuery } from "@tanstack/react-query";
import { type PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import courseApi from "../api/course-api";
import { CourseContext } from "../context/course-context";

export const CourseProvider = ({ children }: PropsWithChildren) => {
  const { courseSlug } = useParams();

  const { data } = useQuery({
    queryFn: () => courseApi.getCoursesDetail(courseSlug as string),
    queryKey: ["course-detail", courseSlug],
  });

  return (
    <CourseContext.Provider value={{ course: data?.data }}>
      {children}
    </CourseContext.Provider>
  );
};
