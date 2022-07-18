import ResumeSection from "./resumesection";
import { educationData } from "../data/education";
import { workExperienceData } from "../data/workexperience";
import { projectsData } from "../data/projects";
import { academicExperienceData } from "../data/academicexperience";
import { skillsData } from "../data/skills";

type SectionProps = {
  type: "OneColumn" | "TwoColumn";
};

const Education = ({ type }: SectionProps): JSX.Element => {
  return (
    <ResumeSection title="Education" entries={educationData} type={type} />
  );
};

const WorkExperience = ({ type }: SectionProps): JSX.Element => {
  return (
    <ResumeSection
      title="Work Experience"
      entries={workExperienceData}
      type={type}
    />
  );
};

const Projects = ({ type }: SectionProps): JSX.Element => {
  return <ResumeSection title="Projects" entries={projectsData} type={type} />;
};

const AcademicExperience = ({ type }: SectionProps): JSX.Element => {
  return (
    <ResumeSection
      title="Academic Experience"
      entries={academicExperienceData}
      type={type}
    />
  );
};

const Skills = ({ type }: SectionProps): JSX.Element => {
  return <ResumeSection title="Skills" entries={skillsData} type={type} />;
};

export { Education, WorkExperience, Projects, AcademicExperience, Skills };
