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

export const publicationsData: ResumeEntry[] = [
  {
    description: (
      <p className="description">
        <a href="https://dl.acm.org/doi/10.1145/3470496.3527396">
          N. Bleier, M. H. Mubarik, S. Chakraborty, S. Kishore, and R. Kumar,
          {" "}
          "Rethinking programmable earable processors," in{" "}
          <i>
            Proceedings of the 49th Annual International Symposium on Computer
            Architecture
          </i>
          , 2022.
        </a>
      </p>
    ),
  },
];
