import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ScrollToTop = useScrollToTop;

export default ScrollToTop;
