import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/home";
import CoursePage from "../pages/course";
import CourseDetailPage from "../pages/course/detail";
import CourseListPage from "../pages/course/list";
import { CourseProvider } from "../provider/course-provider";
import LessonPage from "../pages/lesson";
import ComingSoon from "../components/coming-soon";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CourseProvider>
        <Layout />
      </CourseProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "course",
        element: <CoursePage />,
        children: [
          {
            index: true,
            element: <CourseListPage />,
          },
          {
            path: ":courseSlug",
            element: <CourseDetailPage />,
          },
          {
            path: ":courseSlug/:sectionSlug/:lessonSlug",
            element: <LessonPage />,
          },
        ],
      },
      {
        path: "earn",
        element: <ComingSoon />,
      },
      {
        path: "news",
        element: <ComingSoon />,
      },
    ],
  },
]);

export default router;
