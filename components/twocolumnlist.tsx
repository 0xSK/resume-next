import styles from "../styles/knobs.module.scss";
import type { ResumeEntry } from "./resumeentry";
import FlexParagraph from "./flexparagraph";

type TwoColumnListProps = {
  entries: ResumeEntry[];
  className?: string;
  style?: React.CSSProperties;
};

const TwoColumnList = ({
  entries,
  className = "",
  style = {},
}: TwoColumnListProps): JSX.Element => {
  return (
    <div className={`${className} ${styles.sectionContent}`} style={style}>
      <div className={styles.twoColumnGrid}>
        {entries.map((entry, index) => (
          <>
            <div key={index + "0"} className="col-span-1">
              {entry.title &&
                (typeof entry.title === "string" ? (
                  <p className={styles.title}>{entry.title}</p>
                ) : (
                  entry.title
                ))}
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
            <div key={index + "1"} className="col-span-1">
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
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnList;
