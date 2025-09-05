import styles from "./styles.module.scss";
import { Calendar, Eye } from "lucide-react";
import dayjs from "../../libs/dayjs";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface FeaturedArticleProps {
  img: string;
  title: string;
  desc: string;
  time: string;
  view: number;
  slug: string;
}

const FeaturedArticle = ({
  img,
  title,
  desc,
  time,
  view,
  slug,
}: FeaturedArticleProps) => {
  return (
    <div className={styles.featuredArticle}>
      <Link
        to={`https://gemx.io/research/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.featuredImg}>
          <span className={styles.articleCategory}>TRENDING</span>
          <img src={img} alt="article-thumb" />
        </div>
        <div className={styles.articleContent}>
          <h3 className={styles.articleTitle}>{title}</h3>
          <p
            className={clsx("clamp-long-text", styles.articleExcerpt)}
            dangerouslySetInnerHTML={{ __html: `${desc}` }}
          />
          <div className={styles.articleMeta}>
            <p>
              <Calendar size={14} /> {dayjs(time).fromNow()}
            </p>
            <p>
              <Eye size={14} /> {view} views
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedArticle;
