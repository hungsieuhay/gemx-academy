import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/home";
import CoursePage from "../pages/course";
import CourseDetailPage from "../pages/course/detail";
import CourseListPage from "../pages/course/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/course",
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
        ],
      },
    ],
  },
]);

export default router;
