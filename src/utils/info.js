import { Github, Linkedin, Mail, ClipboardList } from "lucide-react";


export const navLinks = [
  {
    id: 1,
    title: "Inicio",
    href: "#home",
  },
  {
    id: 2,
    title: "Servicios",
    href: `#services`,
  },
  {
    id: 3,
    title: "Proyectos",
    href: `#projects`,
  },
  {
    id: 4,
    title: "Contacto",
    href: "#contact",
  },
];

export const socialMedia = [
  {
    id: "GitHub",
    href: "https://github.com/joaquinIMB",
    icon: Github,
  },
  {
    id: "LinkedIn",
    href: "https://www.linkedin.com/in/joaquin-imbriago/",
    icon: Linkedin,
  },
  {
    id: "Email",
    href: "mailto:joaquinimbriago@gmail.com",
    icon: Mail,
  },
  {
    id: "CV",
    href: "https://drive.google.com/file/d/19IFD7jXJBNqhp9mLubMVubmId4nFnAyo/view?usp=drive_link",
    icon: ClipboardList,
  },
];
