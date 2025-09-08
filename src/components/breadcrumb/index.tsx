import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import slugToText from "../../utils/slug";
import capitalizeFirst from "../../utils/capitalize-first";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const generateBreadcrumbsFromPath = (pathname: string) => {
    const pathSegments = pathname.replace(/^\//, "").split("/").filter(Boolean);

    const breadcrumbs: Array<{ label: string; href: string }> = [];
    let currentPath = "";

    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = slugToText(segment);

      breadcrumbs.push({
        label: label,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  return (
    <div className={styles.breadcrumbContainer}>
      <a href="/">Home</a>
      {generateBreadcrumbsFromPath(pathname).map((item, index) => (
        <div key={`breadcrumb-${index}`} className={styles.breadcrumb}>
          <span>/</span>
          <a href={item.href}>{capitalizeFirst(item.label)}</a>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
