import type { NextPage } from "next";
import Contact from "../../components/contact";
import {
  Education,
  WorkExperience,
  Projects,
  AcademicExperience,
  Skills,
} from "../../components/sections";
import Name from "../../components/name";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-[3fr_1fr]">
        <div className="col-span-1">
          <Name hindi/>
        </div>
        <div className="col-span-1">
          <Contact />
        </div>
      </div>
      <Education type="OneColumn" />
      <WorkExperience type="TwoColumn" />
      <Projects type="OneColumn" />
      <AcademicExperience type="TwoColumn" />
      <Skills type="OneColumn" />
    </>
  );
};

export default Home;
