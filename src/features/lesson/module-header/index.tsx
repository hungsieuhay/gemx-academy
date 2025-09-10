import styles from "./styles.module.scss";

interface ModuleHeaderProps {
  moduleOrder: number;
  title: string;
  total: number;
}

const ModuleHeader = ({ moduleOrder, title, total }: ModuleHeaderProps) => {
  return (
    <div className={styles.moduleHeader}>
      <div className={styles.moduleTitle}>
        <span className={styles.moduleNumber}>Module {moduleOrder + 1}</span>
        <span>{title}</span>
      </div>
      <span className={styles.moduleInfo}>{total} lessons • 1h 30m</span>
    </div>
  );
};

export default ModuleHeader;
