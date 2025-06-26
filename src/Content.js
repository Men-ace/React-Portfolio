// import images
import Hero_person from "./assets/images/Hero/person.png";
import mongodb from "./assets/images/Skills/mongodb.png"
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import typescript from "./assets/images/Skills/typescript.webp"
import javascript from "./assets/images/Skills/javascript.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import {  BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Shailesh",
    LastName: "Gharti",
    btnText: "Hire Me",
    btnCV: "Download CV",

    
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience Web development",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "mongoDB",
        para: " Database",
        logo: mongodb,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "JavaScript",
        para: "",
        logo: javascript,
      },
      {
        name: "TypeScript",
        para: "",
        logo: typescript,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I provide web services as a full-stack developer with a Bachelor’s degree and freelancing experience. Let’s build responsive, fast sites to scale your local business. Hire me to bring your vision to life!",
        logo: services_logo1,
      },
      {
        title: "Full stack Development",
        para: "From designing responsive user interfaces to building powerful server-side applications, I provide end-to-end full-stack development support.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Finance Tracker",
        image: project1,
        livelink: "https://finance-tracker-client-5lf5.vercel.app/",
        gitlink:"https://github.com/Men-ace/Finance-Tracker-client"
      },
      {
        title: "Library Management System",
        image: project2,
        livelink: "https://auth-system-client-t5ew.vercel.app/",
        gitlink:"https://github.com/Men-ace/auth-system-client"
      },
      {
        title: "Creative Website",
        image: project3,
        livelink: "https://finance-tracker-client-5lf5.vercel.app/",
        gitlink:"https://github.com/Men-ace/auth-system-client"
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    para: "Over the past few years, I’ve honed my skills through freelancing, working on diverse projects that taught me adaptability and problem-solving. Now, I’m excited to bring my enthusiasm and experience to a full-time role. Let’s create something great together!"
,
    btnText: "Hire Me",
  },
  Contact: {
    title: "Connect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "chhettrisailesh1@gmail.com",
        icon: GrMail,
        link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/sailesh-chhettri/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
