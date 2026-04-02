import type { NextPage } from "next";
import Contact from "../components/contact";
import {
  WorkExperience,
  Projects,
  Skills,
} from "../components/sections";
import Name from "../components/name";
import SectionHeader from "../components/sectionheader";
import OneColumnList from "../components/onecolumnlist";
import { educationData, publicationsData } from "../data/education";
// import { awardsData } from "../data/awards";

const Home: NextPage = () => {
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
          {/* <h3>Awards & Recognition</h3>
          <OneColumnList entries={awardsData} /> */}
        </div>
        <div className="section-subsection">
          <h3>publications</h3>
          <OneColumnList entries={publicationsData} />
        </div>
      </div>
      {/* <Projects type="OneColumn" /> */}
    </>
  );
};

export default Home;
