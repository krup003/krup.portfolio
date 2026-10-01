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
      "A modern digital marketing platform for CreatikLab, helping businesses discover and access senior marketing services across SEO, Google Ads, paid media, analytics, automation, AI marketing, and conversion optimization.",
    image: "/Project/ProjectImages/CreatikLab.png",
    link: "https://www.creatiklab.com/",
    status: "live",
    projectBg: "/Project/ProjectBackground/simon.png",
  },
  {
    id: 1,
    name: "WorkOnward",
    description:
      "A US-based map-driven recruitment platform that connects local job seekers with employers, making it easier to discover nearby jobs, find qualified candidates, post jobs, and manage the hiring process.",
    image: "/Project/ProjectImages/workonward.png",
    link: "https://www.workonward.com/en",
    status: "live",
    projectBg: "/Project/ProjectBackground/layers.png",
  },
  {
    id: 2,
    name: "FileShare",
    description:
      "A lightweight file-sharing platform that lets users upload files, generate shareable links, and download files without an account, with optional OTP/password protection for private sharing.",
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
      "An all-in-one AI platform that brings multiple AI models and tools into one workspace, enabling users to chat, code, research, analyze data, generate images, search the web, and create structured outputs without switching between different AI platforms.",
    image: "/Project/ProjectImages/Crompt AI.png",
    link: "https://crompt.ai/chat",
    status: "live",
    projectBg: "/Project/ProjectBackground/mach.png",
  },

  {
    id: 4,
    name: "CodeShare",
    description:
      "A lightweight code-sharing platform that lets developers paste code, generate a unique shareable link, and easily share code with others for collaboration, debugging, and code reviews.",
    image: "/Project/ProjectImages/Codeshare.png",
    link: "https://onlinecodeshare.vercel.app/",
    github: "https://github.com/krup003/CodeShare",
    status: "live",
    projectBg: "/Project/ProjectBackground/anieditor.png",
  },
];
