import {
  CourseHero,
  CourseFilter,
  CourseList,
  LearningPath,
  CourseProgress,
} from "../../../features/course";

const CourseListPage = () => {
  return (
    <main>
      <CourseHero />
      <CourseFilter />
      <CourseList />
      <LearningPath />
      <CourseProgress />
    </main>
  );
};

export default CourseListPage;
