import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "software Developer Trainee",
    companyName: "SOFTWARE DEVELOPER TRAINEE | VAPS TECHNOSOFT SOLUTIONS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2021 - January 2023",
    points: [
"•	Collaborated on stages of systems development lifecycle from requirement gathering to production releases.",
"•	Developed software for desktop and mobile operating systems.",
"•	Tested and deployed scalable and highly available software products.",
"•	Estimated work hours and tracked progress using Scrum methodology.",
"•	Involving in the development of enhancement on top of Vaps technosoft product such as Vaps technosoft (ERP) product and I-Vidyalaya Resource Management (ERP) ,per the customer requirement, using of open source tools like visual studio 2019 and Microsoft sql server Management studio 2017",
"•	Designing and Developing the Agents front end using Angular 2, Html, Css, Bootstrap and backend MySQL hosted on Azure cloud Platform",
"•	Inspected equipment, assessed functionality, and optimized controls."
    ],
  },
  {
    title: "ASP.NET Developer Trainee ",
    companyName: "Lobotus Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Bengaluru, India - January 2023 - April 2023",
    points: [
      "•	Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings.",
"•	Performed unit testing of web applications and troubleshot issues.",
"•	Proved successful working within tight deadlines and a fast-paced environment.",
"•	Took concepts and produced design mockups and prototypes to strengthen designs, enhance user experiences and improve site interactions.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Thanks you visiting my portfolio",
    name: "snehith",
    designation: "",
    company: "",
    image: "https://media.licdn.com/dms/image/v2/D5635AQFtopK913y2Iw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730188265665?e=1730916000&v=beta&t=--E5MSpshdH4oezsdHweqS1PbwKJGaZtTtVwXSo661c",
  }
];

const projects: TProject[] = [
  {
    name: "Object Detection",
    description:
      "I'm excited to share my latest project: ObjectDetection! 🎉 This marks a new era in digital analysis, providing a streamlined and professional way to look through and interpret objects in real-time.Explore the code and documentation to understand the methodologies employed and to potentially adapt the framework for your specific use cases.",  tags: [
      {
        name: "pycharm",
        color: "blue-text-gradient",
      },
      {
        name: "nump.py",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Snehithzeus/Object-Detection-using-PyCharm",
  },
  {
    name: "Audify Pdf",
    description:
      "Turn your PDFs into audio with Audify PDF, a lightweight, offline PDF audio reader built in Python. This tool combines PyPDF2 for text extraction and pyttsx3 for converting text to speech, making it easy to listen to PDFs without an internet connection. Whether you prefer a CLI or GUI interface, Audify PDF has you covered. Perfect for reading on the go or hands-free studying!",
    tags: [
      {
        name: "pycharm",
        color: "blue-text-gradient",
      },
      {
        name: "PyPDF2",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Snehithzeus/Audify-PDF",
  },
  {
    name: "Radiant Erp",
    description:
      "This project aims to develop a comprehensive ERP solution for educational institutions. It will integrate various functionalities such as student enrollment, attendance tracking, grade management, and financial accounting. The system will provide an intuitive dashboard for administrators, teachers, and parents to facilitate real-time communication and access to information.",    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "http://radiantshemaschool.000.pe/?i=1",
  },
];

export { services, technologies, experiences, testimonials, projects };
