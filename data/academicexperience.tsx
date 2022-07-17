import type { ResumeEntry } from "../components/resumeentry";

export const academicExperienceData: ResumeEntry[] = [
  {
    title: "Passat Research Group",
    metaDescription: "Mentored by Prof. Rakesh Kumar",
    locationTime: ["August 2020 – January 2022", "Champaign, IL"],
    subtitle:
      "Co-Author & Research Assistant — Rethinking Programmable Earable Processors",
    description: [
      "Worked on a project that proposed a suite of representative emerging earable applications with diverse sensor-based inputs and computational requirements.",
      "Implemented a VLIW simulator in C++ modeling a modern DSP and ran computational kernels on the simulator.",
      "Paper “Rethinking Programmable Earable Processors” accepted to ISCA 2022.",
    ],
  },
  {
    subtitle: "Research Assistant — Dual Front-End Microarchitecture Project",
    description: [
      "Analyzed the feasibility of a microarchitecture that fetches and pre-processes both on-path and off-path instructions on low-confidence branch prediction.",
      "Implemented this modified microarchitecture on the Gem5 Simulator.",
    ],
  },
];
