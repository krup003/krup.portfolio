export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  status?: "live" | "discontinued" | "building";
  projectBg: string;
};

export const projects: Project[] = [
  {
    id: 0,
    name: "CreatikLab",
    description:
      "A video editing app that allows users to create and edit videos with a variety of tools and effects.",
    image: "/Project/ProjectImages/CreatikLab.png",
    link: "https://www.creatiklab.com/",
    status: "live",
    projectBg: "/Project/ProjectBackground/simon.png",
  },
  {
    id: 1,
    name: "WorkOnward",
    description:
      "A collection of rare, ready-to-use UI components and animations you can actually drop into your next project.",
    image: "/Project/ProjectImages/workonward.png",
    link: "https://www.workonward.com/en",
    status: "live",
    projectBg: "/Project/ProjectBackground/layers.png",
  },
  {
    id: 2,
    name: "FileShare",
    description:
      "A minimalistic typing test app designed to improve typing speed and accuracy with a dynamic leaderboard.",
    image: "/Project/ProjectImages/FileShare.png",
    link: "https://filesharelive.vercel.app/",
    github: "https://github.com/krup003/Fileshare-tool-monorepo",
    status: "live",
    projectBg: "/Project/ProjectBackground/ghosttype.png",
  },
  {
    id: 3,
    name: "Crompt AI",
    description:
      "A SaaS landing page with interactive animations built using modern frontend technologies.",
    image: "/Project/ProjectImages/Crompt AI.png",
    link: "https://crompt.ai/chat",
    status: "live",
    projectBg: "/Project/ProjectBackground/mach.png",
  },

  {
    id: 4,
    name: "CodeShare",
    description:
      "An app that lets users apply anime overlays and custom images on top of their photos.",
    image: "/Project/ProjectImages/Codeshare.png",
    link: "https://anieditor.vercel.app",
    github: "https://github.com/krup003/CodeShare",
    status: "live",
    projectBg: "/Project/ProjectBackground/anieditor.png",
  },
];
