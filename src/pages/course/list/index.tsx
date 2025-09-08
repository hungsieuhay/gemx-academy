import { useQuery } from "@tanstack/react-query";
import categoryApi from "../../../api/category-api";
import {
  CourseHero,
  CourseFilter,
  CourseList,
  LearningPath,
  CourseProgress,
} from "../../../features/course";

const CourseListPage = () => {
  const { data: categories } = useQuery({
    queryFn: () => categoryApi.getCategories(),
    queryKey: ["categories"],
  });

  return (
    <main>
      <CourseHero />
      <CourseFilter categories={categories ?? []} />
      <CourseList categories={categories ?? []} />
      <LearningPath />
      <CourseProgress />
    </main>
  );
};

export default CourseListPage;
