import {SocialLink} from "../types/content"
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/SuyogPoudel32",
    handle: "SuyogPoudel32",
    icon: FaGithub,
  },
  {
    platform: "LinkedIn",
    url: null,
    handle: null,
    icon: FaLinkedin,
  },
  {
    platform: "Email",
    url: "mailto:suyogpoudel458@gmail.com",
    handle: "suyogpoudel458@gmail.com",
    icon: Mail,
  },
];
