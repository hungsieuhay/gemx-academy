import { useQuery } from "@tanstack/react-query";
import axiosClient from "../../../api/axios-client";
import type { Research } from "../../../types";
import styles from "./styles.module.scss";
import { FeaturedArticle, SubArticle } from "../../../components";

type Response<T> = {
  researchs: T[];
};

async function fetchResearch() {
  const res = await axiosClient.get<Response<Research>>(
    "https://gemx.io/api/research?pageIndex=1&pageSize=6&language=vi"
  );
  return res;
}

const News = () => {
  const { data, status } = useQuery({
    queryFn: fetchResearch,
    queryKey: ["gemx-researchs"],
  });

  const featuredArticle = data?.researchs[0];

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return;

  return (
    <section className={styles.news} id="news">
      <div className={styles.newsContainer}>
        <div className="section-header">
          <h2 className="section-title">Latest News & Updates</h2>
          <a
            href="https://gemx.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all"
          >
            View all news →
          </a>
        </div>

        <div className={styles.newsGrid}>
          {featuredArticle && (
            <FeaturedArticle
              img={featuredArticle.img_path}
              title={featuredArticle.title}
              desc={featuredArticle.content_short}
              time={featuredArticle.created_at}
              view={featuredArticle.views}
              slug={featuredArticle.slug}
            />
          )}
          <div className={styles.newsSidebar}>
            {data.researchs.map((item, index) => {
              if (index !== 0) {
                return (
                  <SubArticle
                    key={item.id}
                    title={item.title}
                    time={item.created_at}
                    slug={item.slug}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
