import { ResumeEntry } from "../components/resumeentry";

export const workExperienceData: ResumeEntry[] = [
  {
    title: "Apple",
    subtitle: "Platform Architecture Intern",
    description: [
      "Worked on driving trace-driven simulation from checkpoints collected from silicon.",
    ],
    locationTime: "May 2021 – August 2021",
  },
  {
    title: "Synchrony",
    subtitle: "UI/UX Design Intern",
    description: [
      "Worked on redesigning Synchonry's eService platform for credit card users.",
      "Conducted user surveys and implemented a data-driven approach for design thinking.",
    ],
    locationTime: "August 2020 – May 2021",
  },
  {
    title: "Apple",
    subtitle: "Silicon Validation Intern",
    description: [
      "Developed a software framework that parses & visualizes SoC request-response traces, and provides a Python notebook interface for data-driven discovery and debugging.",
      "Added high-level front-end components that parse advanced SoC scan-dump structures.",
    ],
    locationTime: "May 2020 – August 2020",
  },
  {
    title: "Synchrony",
    subtitle: "VUI Design Project",
    description: [
      "Worked on redesigning Synchonry's Alexa Skill for the Amazon Store Card.",
      "Conducted user interviews and implemented design changes based on the feedback.",
    ],
    locationTime: ["August 2019 – May 2020", "Champaign, IL"],
  },
  {
    title: "Google",
    subtitle: "Software Engineering Intern",
    description: [
      "Worked on Procella, a distributed, highly-scalable SQL query engine built for YouTube analytics, currently serving hundreds of billions of queries per day.",
      "Implemented new caching policies in Procella to accelerate its adoption across teams in YouTube and Google.",
    ],
    locationTime: ["May 2020 – August 2020", "Mountain View, CA"],
  },
  {
    title: "Synchrony",
    subtitle: "Hardware Engineering Intern",
    description: [
      "Built a specialized Merchant Terminal that utilizes data-over-sound to securely verify mobile payments.",
      "Worked on firmware for the BCM2837 SoC to fulfil engineering requirements.",
    ],
    locationTime: ["May 2020 – August 2020", "Champaign, IL"],
  },
];
