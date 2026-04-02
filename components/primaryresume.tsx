import Contact from "./contact";
import { WorkExperience, Skills } from "./sections";
import Name from "./name";
import SectionHeader from "./sectionheader";
import OneColumnList from "./onecolumnlist";
import { educationData, publicationsData } from "../data/education";

const PrimaryResume = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-[3fr_1fr] gap-x-12">
        <div className="col-span-1">
          <Name hindi />
        </div>
        <div className="col-span-1">
          <Contact className="h-12" align="right" />
        </div>
      </div>
      <Skills type="OneColumn" />
      <WorkExperience type="TwoColumn" />
      <div className="section">
        <SectionHeader title="education" hr={false} />
        <div className="section-content">
          <OneColumnList entries={educationData} />
        </div>
        <div className="section-subsection">
          <h3>publications</h3>
          <OneColumnList entries={publicationsData} />
        </div>
      </div>
    </>
  );
};

export default PrimaryResume;
