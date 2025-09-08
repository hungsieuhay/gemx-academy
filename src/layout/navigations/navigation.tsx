import clsx from "clsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const navigations = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Learn", href: "/course" },
  { id: 3, label: "Earn", href: "/earn" },
  { id: 4, label: "News", href: "/news" },
];

const Navigation = () => {
  const [isActiveMobile, setIsActiveMobie] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const checkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header>
      <nav>
        <a href="/" className={styles.logo}>
          <div className={styles.logoIcon}></div>
          GEMX
        </a>
        <ul
          className={clsx(
            styles.navMenu,
            isActiveMobile && styles.mobileActive
          )}
        >
          {navigations.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={checkActive(item.href) ? styles.active : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.navActions}>
          <button
            className={styles.connectWalletBtn}
            onClick={() => navigate("/login")}
          >
            Connect Wallet
          </button>
        </div>
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsActiveMobie(!isActiveMobile)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
