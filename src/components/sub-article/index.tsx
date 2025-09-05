import styles from "./styles.module.scss";
import dayjs from "../../libs/dayjs";
import { Link } from "react-router-dom";

interface SubArticleProps {
  title: string;
  time: string;
  slug: string;
}

const SubArticle = ({ time, title, slug }: SubArticleProps) => {
  return (
    <div className={styles.sidebarItem}>
      <Link
        to={`https://gemx.io/research/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4 className={styles.sidebarTitle}>{title}</h4>
        <p className={styles.sidebarDate}>{dayjs(time).fromNow()}</p>
      </Link>
    </div>
  );
};

export default SubArticle;
