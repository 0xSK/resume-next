import type { NextPage } from "next";
import Contact from "../components/contact";
import {
  Education,
  EducationAlt,
  WorkExperience,
  Projects,
  AcademicExperience,
  Skills,
  SkillsAlt,
} from "../components/sections";
import Name from "../components/name";
import SectionHeader from "../components/sectionheader";

const Home: NextPage = () => {
  return (
    <>
      <Name hindi />
      <div className="grid grid-cols-[3fr_1fr] gap-x-12">
        {/* <div className="col-span-1">
          <Name hindi />
        </div>
        <div className="col-span-1">
          <Contact className="" align="right" />
        </div> */}
        <div className="col-span-1">
          <WorkExperience type="TwoColumn" />
          <AcademicExperience type="TwoColumn" />
          <Projects type="TwoColumn" />
        </div>
        <div className="col-span-1 h-full relative">
          <EducationAlt type="OneColumn" />
          <SkillsAlt type="OneColumn" />
          <Contact
            reverse
            className="absolute bottom-0 right-0 transform -translate-y-6"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
