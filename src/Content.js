// import images
import Hero_person from "./assets/images/Hero/person.png";

import mongodb from "./assets/images/Skills/mongodb.png"
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import javascript from "./assets/images/Skills/javascript.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";



import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsTwitter, BsTwitterX, BsX } from "react-icons/bs";
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
        title: "Positive Mindset and Learning Attitude",
        para: "I love to learn new things and don't let myself holdback from crippling mindset",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
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
        text: "+61 0410 474 567",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Twitter/X",
        icon: BsTwitterX,
        link: "https://x.com/home?lang=en",
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
