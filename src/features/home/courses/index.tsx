import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import courseApi from "../../../api/course-api";
import { CourseCard } from "../../../components";

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
        <a href="#" className="view-all">
          View all courses →
        </a>
      </div>
      <div className={styles.coursesGrid}>
        {data.data.map(({ id, name, description, image, author, slug }) => (
          <CourseCard
            key={id}
            title={name}
            desc={description}
            imgUrl={image}
            author={author as string}
            slug={slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;
