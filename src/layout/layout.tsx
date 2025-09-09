import { Outlet, useParams } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./navigations";
import styles from "./styles.module.scss";
import ScrollToTop from "./scroll-top";

const Layout = () => {
  const { lessonSlug } = useParams();

  return (
    <div className={styles.layout}>
      <ScrollToTop />
      {!lessonSlug && <Navigation />}
      <Outlet />
      {!lessonSlug && <Footer />}
    </div>
  );
};

export default Layout;
