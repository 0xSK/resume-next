import type { ResumeEntry } from "../components/resumeentry";

export const educationData: ResumeEntry[] = [
  {
    title: "University of Illinois at Urbana-Champaign",
    subtitle: "B.Sc. in Computer Engineering · Art & Design Minor · 3.32 GPA",
    description:
      "Selected Coursework: Data Structures, Algorithms & Models of Computation, Operating Systems, Computer Organization & Design, Parallel Computer Architecture, SoC Design, Digital Systems Lab, Signal Processing, Mobile Sensing, Wireless Networks, Computer Security",
    locationTime: "Fall 2017 – May 2022",
  },
];

export const educationDataAlt: ResumeEntry[] = [
  {
    title: (
      <p className="title">
        University of Illinois at <br /> Urbana-Champaign
      </p>
    ),
    subtitle: (
      <p className="subtitle">
        B.Sc. in Computer Engineering <br />
        Art & Design Minor <br />
        3.32 GPA
      </p>
    ),
    description: [
      "Selected Coursework:",
      "Computer Organization & Design",
      "Parallel Computer Architecture",
      "SoC Design",
      "Operating Systems",
      "Digital Systems Laboratory",
      "Signal Processing",
      "Mobile Sensing",
      "Wireless Networks",
      "Data Structures",
      "Algorithms & Models of Computation",
      "Computer Security",
    ],
    locationTime: "Fall 2017 – May 2022",
  },
];
