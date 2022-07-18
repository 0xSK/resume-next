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
    <div className={`section-content ${className}`} style={style}>
      {entries.map((entry, index) => (
        <div key={index} className="one-column-item">
          {entry.title &&
            (typeof entry.title === "string" ? (
              <p className="title">{entry.title}</p>
            ) : (
              entry.title
            ))}

          {entry.subtitle &&
            (typeof entry.subtitle === "string" ? (
              <p className="subtitle">{entry.subtitle}</p>
            ) : (
              entry.subtitle
            ))}

          {entry.description && (
            <FlexParagraph
              flexParagraph={entry.description}
              paragraphClassName="description"
            />
          )}

          {entry.metaDescription && (
            <FlexParagraph
              flexParagraph={entry.metaDescription}
              paragraphClassName="metaDescription"
            />
          )}

          {entry.locationTime && (
            <FlexParagraph
              flexParagraph={entry.locationTime}
              paragraphClassName="locationTime"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OneColumnList;
