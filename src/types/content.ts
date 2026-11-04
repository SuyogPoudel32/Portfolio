import type { ComponentType, SVGProps } from "react";
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  categories: ("Python" | "Web" | "Data" | "React" | string)[];
  tags: string[];
  techStack: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  demoUrl?: string | null;
  achievements: string[];
  year: string;
}


export interface SocialLink {
  platform: "GitHub" | "LinkedIn" | "Email" | "Twitter" | "Instagram";
  url: string | null;
  handle?: string | null;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
