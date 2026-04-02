import type { ResumeEntry } from "../components/resumeentry";
export const projectsData: ResumeEntry[] = [
  {
    title: "SIGCloud – ACM@UIUC",
    description: [
      "Founded a student organization under ACM@UIUC to teach students how to leverage cloud technologies and DevOps for their projects.",
      "Focused on using platforms such as AWS, Google Cloud Platform, Microsoft Azure, DigitalOcean, CircleCI etc.",
    ],
  },
  {
    title: "NanoRV32I",
    description: [
      "Designed a RISC-V (RV32I) processor in SystemVerilog from scratch, among a team of three students.",
      "Implemented advaced features such as pipelining, out-of-order execution, branch prediction, speculative execution, and a multi-level cache hierarchy.",
    ],
  },
  {
    title: "Borland C++ for MacOS",
    metaDescription: ["2,000+ Monthly Downloads", "145,000+ Users"],
    description: [
      "Ported Borland's MS-DOS based C/C++ IDE to modern MacOS systems, with platform-specific optimization and custom keymaps.",
      "Used by high school students across India for computer science coursework.",
    ],
  },
  {
    title: "Super Hexagon on FPGA",
    description: [
      "Created a clone of the popular game “Super Hexagon” running entirely in hardware on an Altera DE2-115 FPGA Development Board.",
    ],
  },
];
