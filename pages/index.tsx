// basic page that shows a list of all the resumes in the `resumes` folder as cards
import path from "path";

type IndexProps = {
  resumes: string[];
};

export async function getStaticProps() {
  const fs = require("fs");
  const resumes = fs.readdirSync("pages/resumes");
  return {
    props: {
      resumes,
    },
  };
}

const Index = ({ resumes }: IndexProps) => {
  return (
    <div className="index">
      <h1>Resumes</h1>
      <div className="resumes">
        {resumes &&
          resumes.map((resume, index) => (
            <div key={index} className="resume">
              <a href={`/resumes/${resume.replace(".tsx", "")}`}>
                {resume.replace(".tsx", "")}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
