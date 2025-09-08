import { useQuery } from "@tanstack/react-query";
import courseApi from "../../../api/course-api";
import styles from "./styles.module.scss";
import CourseCardPrimary from "../../../components/course-card-primary";
import type { Category } from "../../../types";
import { useSearchParams } from "react-router-dom";

interface CourseListProps {
  categories: Category[];
}

const CourseList = ({ categories }: CourseListProps) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data, status } = useQuery({
    queryFn: () =>
      courseApi.getCourses({ category: category !== "all" ? category : null }),
    queryKey: ["courses", category],
  });

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return;

  return (
    <section className={styles.coursesSection}>
      <div className={styles.coursesGrid}>
        {data.data.map(
          ({
            id,
            description,
            image,
            author,
            slug,
            fee,
            name,
            category_id,
          }) => {
            const category = categories.find(
              (item) => item.id === category_id
            )?.name;
            return (
              <CourseCardPrimary
                key={id}
                title={name}
                desc={description}
                image={image}
                author={author}
                slug={slug}
                fee={fee}
                category={category ?? ""}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default CourseList;
