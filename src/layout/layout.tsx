import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./navigations";
import styles from "./styles.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
