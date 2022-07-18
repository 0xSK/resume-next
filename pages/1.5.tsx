import type { NextPage } from "next";
import Contact from "../components/contact";
import {
  Education,
  EducationAlt,
  WorkExperience,
  Projects,
  AcademicExperience,
  Skills,
} from "../components/sections";
import Name from "../components/name";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-[3fr_1fr]">
        <div className="col-span-1">
          <Name hindi />
        </div>
        <div className="col-span-1">
          <Contact className="h-12" />
        </div>
      </div>
      <div className="grid grid-cols-[2fr_2fr]">
        <div className="col-span-1">
          <EducationAlt type="OneColumn" />
        </div>
        <div className="col-span-1">
          <Skills type="OneColumn" />
        </div>
      </div>
      <WorkExperience type="TwoColumn" />
      <Projects type="OneColumn" />
      <AcademicExperience type="TwoColumn" />
    </>
  );
};

export default Home;
