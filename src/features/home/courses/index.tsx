import { useQuery } from "@tanstack/react-query";
import courseApi from "../../../api/course-api";
import { CourseCardSecondary } from "../../../components";
import type { Course } from "../../../types";
import { getRandom } from "../../../utils";
import styles from "./styles.module.scss";

const Courses = () => {
  const { data, status } = useQuery({
    queryFn: () => courseApi.getCourses(),
    queryKey: ["all-courses"],
  });

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return;

  return (
    <section className={styles.courses} id="learn">
      <div className="section-header">
        <h2 className="section-title">Featured Courses</h2>
        <a href="/course" className="view-all">
          View all courses →
        </a>
      </div>
      <div className={styles.coursesGrid}>
        {getRandom<Course>(data.data, 3).map(
          ({ id, name, description, image, author, slug }) => (
            <CourseCardSecondary
              key={id}
              title={name}
              desc={description}
              imgUrl={image}
              author={author as string}
              slug={slug}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Courses;
