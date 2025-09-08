import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./navigations";
import styles from "./styles.module.scss";
import ScrollToTop from "./scroll-top";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
