import type { NextPage } from "next";
import Contact from "../components/contact";
import {
  Education,
  WorkExperience,
  Projects,
  AcademicExperience,
  Skills,
} from "../components/sections";

const Home: NextPage = () => {
  return (
    <>
      <Contact />
      <Education type="OneColumn" />
      <WorkExperience type="TwoColumn" />
      <Projects type="OneColumn" />
      <AcademicExperience type="TwoColumn" />
      <Skills type="OneColumn" />
    </>
  );
};

export default Home;
