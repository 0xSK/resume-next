import type { FlexParagraphType } from "./flexparagraph";

type ResumeEntry = {
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  locationTime?: FlexParagraphType;
  description?: FlexParagraphType;
  metaDescription?: FlexParagraphType;
};

export type { ResumeEntry };
