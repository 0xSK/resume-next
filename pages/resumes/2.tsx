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
      <div className="grid grid-cols-[3fr_1fr] gap-x-12">
        <div className="col-span-1">
          <Name hindi />
          <WorkExperience type="TwoColumn" />
          <AcademicExperience type="TwoColumn" />
          <Projects type="OneColumn" />
        </div>
        <div className="col-span-1">
          <Contact className="" align="left" />
          <Education type="OneColumn" />
          <Skills type="OneColumn" />
        </div>
      </div>
    </>
  );
};

export default Home;
