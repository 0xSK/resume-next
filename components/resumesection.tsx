import SectionHeader from "./sectionheader";
import styles from "../styles/knobs.module.scss";
import type { ResumeEntry } from "./resumeentry";
import OneColumnList from "./onecolumnlist";
import TwoColumnList from "./twocolumnlist";

type ResumeSectionProps = {
  title: string;
  hr?: boolean;
  entries: ResumeEntry[];
  type: "OneColumn" | "TwoColumn";
  className?: string;
  sectionHeaderClassName?: string;
};

const ResumeSection = ({
  title,
  hr = true,
  entries,
  type,
  className = "",
  sectionHeaderClassName = "",
}: ResumeSectionProps): JSX.Element => {
  return (
    <div className={`${styles.section} ${className}`}>
      <SectionHeader title={title} hr={hr} className={sectionHeaderClassName} />
      {
        {
          OneColumn: <OneColumnList entries={entries} />,
          TwoColumn: <TwoColumnList entries={entries} />,
        }[type]
      }
    </div>
  );
};

export default ResumeSection;
