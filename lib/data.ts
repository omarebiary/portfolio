import { LeadershipEntry, Project, SkillCluster } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "smart-wallet",
    title: "Smart Wallet for the Visually Impaired",
    tags: ["TEAM PROJECT"],
    description:
      "A wallet-tracking device built on an STM32F103 \u201cBlue Pill\u201d board, designed to help visually impaired users locate and manage their belongings without relying on sight. My part of the team handled sensor integration and motor control in ARM Assembly \u2014 reading input, driving output, and getting the two to talk to each other reliably on constrained hardware. This is the project that's closest to the work I actually want to do: real hardware, real constraints, and a real person on the other end of the design decision.",
    stack: ["ARM Assembly", "STM32F103"],
    featured: true,
  },
  {
    id: "collab-editor",
    title: "Real-Time Collaborative Editor",
    tags: ["TEAM PROJECT"],
    description:
      "A Google Docs\u2013style collaborative text editor, built to understand how systems like it actually work rather than just use them. It handles concurrent edits from multiple users using CRDTs, with networking and concurrency control keeping every user's document in sync without a central lock. Still in progress \u2014 the problems here (conflict resolution, ordering, network reliability) are the same category that shows up in the communication systems I'm hoping to specialize in.",
    stack: ["Java", "CRDTs", "Networking"],
    featured: true,
  },
  {
    id: "alu-design",
    title: "2-bit Signed ALU Design",
    tags: ["TEAM PROJECT"],
    description:
      "An arithmetic and logic unit built from the gate level up, handling signed 2-bit operations. Built with a team as part of a digital logic course \u2014 the kind of project that looks small on paper and teaches you more about how a processor actually thinks than most software courses do.",
    stack: ["Digital Logic Design"],
    featured: true,
  },
  {
    id: "roborally",
    title: "RoboRally Digital Version",
    tags: ["TEAM PROJECT"],
    description:
      "A full digital implementation of the RoboRally board game, built in C++ with an object-oriented structure that keeps the rules engine, board state, and player logic cleanly separated. A useful exercise in designing software that stays maintainable as complexity grows, rather than software that just works once.",
    stack: ["C++", "OOP"],
    featured: true,
  },
  {
    id: "physio-data",
    title: "Physiotherapy Data Management",
    tags: ["TEAM PROJECT"],
    description:
      "Designed data structures to organize and retrieve patient records efficiently.",
    stack: ["C++", "Data Structures"],
    featured: false,
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation using AI",
    tags: ["SOLO"],
    description:
      "Applied K-Means clustering to invoice data to group customers by spending behavior.",
    stack: ["Python", "Machine Learning"],
    featured: false,
  },
];

export const SKILL_CLUSTERS: SkillCluster[] = [
  {
    id: "embedded",
    label: "Embedded & Systems",
    icon: "cpu",
    items: ["C", "C++", "ARM Assembly", "Linux", "Bash", "Operating Systems"],
  },
  {
    id: "software",
    label: "Software Engineering",
    icon: "terminal",
    items: ["Python", "Java", "Object-Oriented Design", "Data Structures & Algorithms"],
  },
  {
    id: "domain",
    label: "Domain Exposure",
    icon: "radio",
    items: [
      "GSM Networks",
      "Fiber Optics",
      "Microwave Communication",
      "Two-Way Radio Systems",
      "CCTV Systems",
    ],
    caption:
      "From a technical training program \u2014 foundational exposure, not hands-on production experience.",
  },
];

export const LEADERSHIP: LeadershipEntry[] = [
  {
    id: "enactus",
    org: "Enactus Cairo University",
    role: "Lead Presenter",
    body: [
      "Selected as one of four lead presenters out of a team of eight, trained specifically to represent Enactus Cairo University's work publicly. Each year, I present the organization's full output \u2014 the work of roughly 180 members across nine months of projects \u2014 at the annual year-end showcase.",
      "I also work within the Learning & Development team, coordinating training sessions for members on communication, stress management, and presentation skills. I designed and delivered one of these sessions myself \u2014 a workshop on personal branding, presented to 25 members alongside two teammates.",
    ],
    stats: [{ label: "1 of 4 \u2014 selected from 8" }, { label: "180 members represented" }],
  },
  {
    id: "cbe-fintech",
    org: "Central Bank of Egypt \u2014 Fintech Got Talent 2025",
    role: "Team Member, Idea Lead & Presenter",
    body: [
      "I originated the idea behind Tracksy, an app concept that helps students track their spending by automatically categorizing purchases and surfacing student-specific discounts. Over several weeks, my team of six and I refined the pitch across five or six rounds of internal review before I presented it live on stage to a panel of judges.",
      "We placed in the Top 10, out of hundreds of teams competing nationally across every faculty and university in Egypt.",
    ],
    stats: [{ label: "Top 10 \u2014 national finalist" }],
  },
  {
    id: "almun",
    org: "ALMUN \u2014 Model United Nations",
    role: "Delegate, Human Rights Council",
    body: [
      "Stepped in as a solo delegate representing the United Kingdom on the Human Rights Council, covering the Syria file, after my co-delegate was unable to attend. My first Model UN conference, prepared for on short notice.",
    ],
    stats: [{ label: "Honorable Mention" }],
  },
];
