import clsx from "clsx";
import styles from "./styles.module.scss";
import { useState } from "react";

const faqData = [
  {
    id: "1",
    question: "Do I need any prior programming knowledge?",
    answer:
      "No, this course is designed for complete beginners. While some technical concepts are covered, no prior programming experience is required. Everything is explained from the ground up.",
  },
  {
    id: "2",
    question: "How long do I have access to the course?",
    answer:
      "You have lifetime access to the course once enrolled. You can learnat your own pace and revisit the material whenever you need to refresh your knowledge.",
  },
  {
    id: "3",
    question: "Will I receive a certificate?",
    answer:
      "Yes! Upon successful completion of all modules and passing the final assessment with at least 80%, you'll receive a blockchain-verified NFT certificate.",
  },
  {
    id: "4",
    question: "Can I interact with the instructor?",
    answer:
      "Yes, you can ask questions in the course discussion forum where Dr. Chen and teaching assistants regularly provide answers and guidance.",
  },
  {
    id: "5",
    question: "What if I'm not satisfied with the course?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, you can request a full refund within 30 days of enrollment.",
  },
];

const TabFaqs = () => {
  const [faqActive, setFaqActive] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    setFaqActive((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="tab-panel" id="faqs">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqData.map((item) => {
          const isActive = faqActive.includes(item.id);
          return (
            <div
              className={styles.faqItem}
              key={item.id}
              onClick={() => toggleAccordion(item.id)}
            >
              <div className={styles.faqQuestion}>
                <span>{item.question}</span>
                <span
                  className={clsx(
                    styles.faqToggle,
                    isActive ? styles.active : ""
                  )}
                >
                  +
                </span>
              </div>
              <div
                className={clsx(
                  styles.faqAnswer,
                  isActive ? styles.active : ""
                )}
              >
                <p style={{ color: "var(--text-secondary)" }}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabFaqs;
