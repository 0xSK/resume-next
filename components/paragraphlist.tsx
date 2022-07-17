import textStyles from "../styles/text.module.scss";
import type { ResumeEntry } from "./resumeentry";
import FlexParagraph from "./flexparagraph";

type ParagraphListProps = {
  entries: ResumeEntry[];
  className?: string;
  style?: React.CSSProperties;
};

export const ParagraphList = ({
  entries,
  className,
  style,
}: ParagraphListProps): JSX.Element => {
  return (
    <div className={`${className}`} style={style}>
      {entries.map((entry, index) => (
        <div key={index} className="my-10">
          {entry.title &&
            (typeof entry.title === "string" ? (
              <p className={textStyles.title}>{entry.title}</p>
            ) : (
              entry.title
            ))}

          {entry.subtitle &&
            (typeof entry.subtitle === "string" ? (
              <p className={textStyles.subtitle}>{entry.subtitle}</p>
            ) : (
              entry.subtitle
            ))}

          {entry.description && (
            <FlexParagraph
              flexParagraph={entry.description}
              paragraphClassName={textStyles.description}
            />
          )}

          {entry.metaDescription && (
            <FlexParagraph
              flexParagraph={entry.metaDescription}
              paragraphClassName={textStyles.metaDescription}
            />
          )}

          {entry.locationTime && (
            <FlexParagraph
              flexParagraph={entry.locationTime}
              paragraphClassName={textStyles.locationTime}
            />
          )}
        </div>
      ))}
    </div>
  );
};
