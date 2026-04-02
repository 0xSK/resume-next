import path from "path";

type IndexProps = {
  resumes: string[];
};

export async function getStaticProps() {
  const fs = require("fs");
  const pagesDir = path.join(process.cwd(), "pages");
  const resumes = fs
    .readdirSync(pagesDir, { withFileTypes: true })
    .filter(
      (entry: { isFile: () => boolean; name: string }) =>
        entry.isFile() &&
        entry.name.endsWith(".tsx") &&
        !["index.tsx", "_app.tsx", "_document.tsx", "404.tsx"].includes(
          entry.name
        )
    )
    .map((entry: { name: string }) => entry.name.replace(".tsx", ""))
    .sort((a: string, b: string) => {
      const aNum = Number(a);
      const bNum = Number(b);
      const aIsNum = !Number.isNaN(aNum);
      const bIsNum = !Number.isNaN(bNum);

      if (aIsNum && bIsNum) {
        return aNum - bNum;
      }

      if (aIsNum) {
        return -1;
      }

      if (bIsNum) {
        return 1;
      }

      return a.localeCompare(b);
    });

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
              <a href={`/${resume}`}>{resume}</a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
