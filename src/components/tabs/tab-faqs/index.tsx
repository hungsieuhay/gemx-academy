import clsx from "clsx";
import styles from "./styles.module.scss";
import { useState } from "react";

const faqData = [
  {
    id: "1",
    question: "What are the Gemx Academy educational courses?",
    answer:
      "Gemx Academy, educational arm, introduces online courses to its versatile list of offerings. In addition to in-depth articles, the Learn & Earn program, in-person educational seminars, and educational partnerships with universities, you can now take online courses to advance your knowledge in specific areas related to blockchain technology, crypto, and Web3.",
  },
  {
    id: "2",
    question: "What courses are there? Are they free?",
    answer: "Gemx Academy hosts a selection of free and paid courses.",
  },
  {
    id: "3",
    question:
      "Do I have to log into my Gemx Academy account to take the courses?",
    answer:
      "For free courses, logging into your Gemx Academy account is not mandatory, but we highly recommend you do so. This allows you to track your course progress effectively, and you’ll be able to receive PDF and/or NFT certificates. If you don't log in to your Gemx Academy account, your learning progress cannot be recorded.For free courses, logging into your Gemx Academy account is not mandatory, but we highly recommend you do so. This allows you to track your course progress effectively, and you’ll be able to receive PDF and/or NFT certificates. If you don't log in to your Gemx Academy account, your learning progress cannot be recorded.",
  },
  {
    id: "4",
    question: "What is the Learn & Earn program?",
    answer:
      "The Learn & Earn program allows you to earn cryptocurrency rewards by completing specific learning tasks or modules, such as passing quizzes and interacting with blockchain applications. It’s a way to learn while earning at the same time.",
  },
  {
    id: "5",
    question: "Are the courses beginner-friendly?",
    answer:
      "Yes. Gemx Academy offers courses for all levels, from beginner to advanced. If you're new to crypto or blockchain, we recommend starting with the Blockchain Basics, Cryptocurrency Basics courses.",
  },
  {
    id: "6",
    question: "Can I access the courses from my phone or tablet?",
    answer:
      "Yes, Gemx Academy’s platform is fully mobile-responsive, meaning you can learn from your smartphone, tablet, or desktop with a stable internet connection.",
  },
  {
    id: "7",
    question: "How long does it take to complete a course?",
    answer:
      "Course length varies. Some micro-courses can be completed in under 30 minutes, while others may take a few hours depending on the depth of content. You can learn at your own pace and pick up where you left off.",
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
