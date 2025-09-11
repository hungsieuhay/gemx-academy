import clsx from "clsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { X, Menu, User } from "lucide-react";
import { useAppkitModal } from "../../hooks";

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
  const { open: openAppKit } = useAppKit();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const { status } = useAppKitAccount();

  const logout = () => {
    disconnect().then(() => {
      navigate("/");
    });
  };

  const { handleOpenAppkit } = useAppkitModal({ func: logout });

  const onOpen = () => {
    openAppKit();
  };

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

          <button
            className={clsx(styles.connectWalletBtn, styles.mobile)}
            onClick={() => {
              setIsActiveMobie(false);
              handleOpenAppkit();
            }}
          >
            {isConnected && status === "connected"
              ? "Sign out"
              : "Connect Wallet"}
          </button>
        </ul>
        <div className={styles.navActions}>
          {isConnected && status === "connected" ? (
            <div className={styles.menu}>
              <User />
              <ul className={styles.menuContainer}>
                <li onClick={logout}>Sign out</li>
              </ul>
            </div>
          ) : (
            <button className={styles.connectWalletBtn} onClick={onOpen}>
              Connect Wallet
            </button>
          )}
        </div>
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsActiveMobie(!isActiveMobile)}
        >
          {isActiveMobile ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
