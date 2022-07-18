import styles from "../styles/knobs.module.scss";
import type { ResumeEntry } from "./resumeentry";
import FlexParagraph from "./flexparagraph";

type OneColumnListProps = {
  entries: ResumeEntry[];
  className?: string;
  style?: React.CSSProperties;
};

const OneColumnList = ({
  entries,
  className = "",
  style,
}: OneColumnListProps): JSX.Element => {
  return (
    <div className={`${className} ${styles.sectionContent}`} style={style}>
      {entries.map((entry, index) => (
        <div key={index} className={styles.oneColumnItem}>
          {entry.title &&
            (typeof entry.title === "string" ? (
              <p className={styles.title}>{entry.title}</p>
            ) : (
              entry.title
            ))}

          {entry.subtitle &&
            (typeof entry.subtitle === "string" ? (
              <p className={styles.subtitle}>{entry.subtitle}</p>
            ) : (
              entry.subtitle
            ))}

          {entry.description && (
            <FlexParagraph
              flexParagraph={entry.description}
              paragraphClassName={styles.description}
            />
          )}

          {entry.metaDescription && (
            <FlexParagraph
              flexParagraph={entry.metaDescription}
              paragraphClassName={styles.metaDescription}
            />
          )}

          {entry.locationTime && (
            <FlexParagraph
              flexParagraph={entry.locationTime}
              paragraphClassName={styles.locationTime}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OneColumnList;