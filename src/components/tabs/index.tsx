import clsx from "clsx";
import styles from "./styles.module.scss";
import TabOverview from "./tab-overview";
import TabCurriculum from "./tab-curriculum";
import TabInstructor from "./tab-instructor";
import TabReview from "./tab-review";
import TabFaqs from "./tab-faqs";
import { useState } from "react";

const tabData = [
  { key: "overview", label: "Overview" },
  { key: "curriculum", label: "Curriculum" },
  { key: "instructor", label: "Instructor" },
  { key: "reviews", label: "Reviews" },
  { key: "faqs", label: "FAQs" },
];

const Tabs = () => {
  const [activeKey, setActiveKey] = useState<string>("overview");

  const onClick = (key: string) => {
    setActiveKey(key);
    document
      .querySelectorAll(".tab-panel")
      .forEach((panel) => panel.classList.remove("active"));
    const activePanel = document.getElementById(key);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  };

  return (
    <div>
      <div className={styles.contentTabs}>
        {tabData.map((item) => (
          <button
            key={item.key}
            className={clsx(
              styles.tabButton,
              item.key === activeKey ? styles.active : ""
            )}
            data-tab={item.key}
            onClick={() => onClick(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <TabOverview />
      <TabCurriculum />
      <TabInstructor />
      <TabReview />
      <TabFaqs />
    </div>
  );
};

export default Tabs;
