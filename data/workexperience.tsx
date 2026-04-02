import type { ResumeEntry } from "../components/resumeentry";

export const workExperienceData: ResumeEntry[] = [
  {
    title: "Ampere",
    subtitle: "Senior RTL Methodology Engineer",
    description: [
      "Led development of a Python-based SoC generation framework that constructs high-level models of up to 512-core systems, integrating in-house and third-party IP into a unified software model.",
      "Built a centralized metadata system capturing architectural and microarchitectural details, such as address maps, mesh coordinates, module parameterization, etc.",
      "Implemented automated RTL generation producing 500K+ lines of lint-clean Verilog used in tapeout, eliminating manual integration effort.",
      "Reduced RTL integration time by ~10×, replacing workflows that traditionally required 25+ engineers with a scalable, programmatic, and correct-by-construction approach.",
      "Scaled the project from a solo effort to a 7-engineer team, expanding its scope to enable additional automation flows across design and verification teams.",
    ],
    locationTime: ["Oct 2022 – Now", "Portland, OR"],
  },
  {
    title: "",
    subtitle: "RTL Methodology Engineer",
    description: [
      "Worked on microarchitectural fixes across CPU and mesh interconnect components for timing and area closure.",
      "Refactored several physical design flows and enabled push-button PPA estimation for RTL owners, significantly accelerating iteration speed and reducing dependency on physical design teams.",
      "Created software workflows to automate analysis, improve debugging efficiency, and support A/B testing of microarchitectural changes.",
    ],
    locationTime: "",
  },
  {
    title: "Apple",
    subtitle: "Platform Architecture Intern",
    description: [
      "Added checkpoint-based execution support for a C++ CPU simulator, enabling simulation from checkpoints collected from real silicon.",
      "Reduced turnaround time for performance analysis and microarchitectural validation by eliminating the need for full workload simulation.",
      "Extended simulator correctness to support JIT and self-modifying code by handling dynamic instruction updates within the trace pipeline.",
    ],
    locationTime: ["May 2021 – August 2021", "Cupertino, CA"],
  },
  {
    title: "Apple",
    subtitle: "Silicon Validation Intern",
    description: [
      "Created GUI tools that parse and visualize advanced SoC scan-dump traces for data-driven discovery and debugging.",
      "Enabled efficient root-cause analysis by identifying outliers in request-reponse trace data.",
    ],
    locationTime: ["May 2020 – August 2020", "Remote"],
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
];
