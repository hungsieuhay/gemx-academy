import clsx from "clsx";
import styles from "./styles.module.scss";
import type { Category } from "../../../types";
import { useSearchParams } from "react-router-dom";

interface CourseFilterProps {
  categories: Category[];
}

const CourseFilter = ({ categories }: CourseFilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const handleFilter = (slug: string) => {
    setSearchParams({ category: slug });
  };

  const filterActive = (slug: string) => {
    if (slug === "all") return category === "all";
    return category === slug;
  };
  return (
    <section className={styles.filterSection}>
      <div className={styles.filterContainer}>
        <div className={styles.filterTabs}>
          <button
            onClick={() => handleFilter("all")}
            className={clsx(
              styles.filterBtn,
              filterActive("all") && styles.active
            )}
          >
            All Courses
          </button>
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => handleFilter(item.slug)}
              className={clsx(
                styles.filterBtn,
                filterActive(item.slug) && styles.active
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className={styles.filterOptions}>
          <select className={styles.filterSelect}>
            <option>Sort by: Popularity</option>
            <option>Sort by: Newest</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Price</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default CourseFilter;
