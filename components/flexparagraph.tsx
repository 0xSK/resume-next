import { isValidElement } from "react";

type FlexParagraphType = string | string[] | JSX.Element | JSX.Element[];

type FlexParagraphProps = {
  flexParagraph: FlexParagraphType;
  paragraphClassName?: string;
};

const FlexParagraph = ({
  flexParagraph,
  paragraphClassName = "",
}: FlexParagraphProps): JSX.Element => {
  if (
    flexParagraph === undefined ||
    flexParagraph === null ||
    (Array.isArray(flexParagraph) && flexParagraph.length === 0)
  ) {
    return <></>;
  } else if (typeof flexParagraph === "string") {
    return <p className={paragraphClassName}>{flexParagraph}</p>;
  } else if (isValidElement(flexParagraph)) {
    return <>{flexParagraph}</>;
  } else if (Array.isArray(flexParagraph) && flexParagraph.length > 0) {
    if (typeof flexParagraph[0] === "string") {
      return (
        <>
          {flexParagraph.map((paragraph, index) => (
            <p key={index} className={paragraphClassName}>
              {" "}
              {paragraph}{" "}
            </p>
          ))}
        </>
      );
    } else {
      return <>{flexParagraph.map((paragraph, index) => paragraph)}</>;
    }
  } else {
    throw new Error("Should not be here");
  }
};

export type { FlexParagraphType };
export default FlexParagraph;
