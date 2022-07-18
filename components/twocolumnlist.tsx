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
    <div className={`section-content ${className}`} style={style}>
      <div className="two-column-grid">
        {entries.map((entry, index) => (
          <>
            <div key={index + "0"} className="col-span-1">
              {entry.title &&
                (typeof entry.title === "string" ? (
                  <p className="title">{entry.title}</p>
                ) : (
                  entry.title
                ))}
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
            <div key={index + "1"} className="col-span-1">
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
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnList;
