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
import { educationData } from "../data/education";
// import { awardsData } from "../data/awards";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] gap-x-12">
        <div className="col-span-1">
          <Name />
        </div>
        <div className="col-span-1">
          <Contact className="h-12" align="right" />
        </div>
      </div>
      <div className="section">
        <SectionHeader title="education" hr={false} />
        <div className="section-content">
          <OneColumnList entries={educationData} />
          {/* <h3>Awards & Recognition</h3>
          <OneColumnList entries={awardsData} /> */}
        </div>
      </div>
      <WorkExperience type="TwoColumn" />
      <div className="section break-before-page">
        <Projects type="OneColumn" />
        <Skills type="OneColumn" />
      </div>
    </>
  );
};

export default Home;
