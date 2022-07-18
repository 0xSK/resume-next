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

const Home: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-[3fr_1fr] gap-x-12">
        <div className="col-span-1">
          <Name hindi />
        </div>
        <div className="col-span-1">
          <Contact className="" align="right" />
        </div>
        <div className="col-span-1">
          <WorkExperience type="TwoColumn" />
          <AcademicExperience type="TwoColumn" />
          <Projects type="OneColumn" />
        </div>
        <div className="col-span-1">
          <EducationAlt type="OneColumn" />
          <SkillsAlt type="OneColumn" />
        </div>
      </div>
    </>
  );
};

export default Home;
