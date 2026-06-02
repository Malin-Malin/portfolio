import RainyDays from "../assets/RainyDays.jpg";
import SemesterProject1 from "../assets/SemesterProject1.jpg";
import Exam2025 from "../assets/Exam2025.jpg";
import Skretcher from "../assets/Skretcher.png";
import cssFrameworks from "../assets/cssFrameworks.png";
import Exame2026 from "../assets/Exam2026.png";
import SemesterProject02 from "../assets/SemesterProject02.png";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string;
  figmaPassword?: string;
  links: {
    live: string;
    figma: string;
    github: string;
  };
};

export const projects: Project[] = [
  {
    id: "rainydays",
    title: "The RainyDays",
    subtitle: "First front-end project",
    image: RainyDays,
    imageAlt: "RainyDays project screenshot",
    description:
      "RainyDays was my first front-end project: a fictional webshop for rain jackets built with HTML and CSS. JavaScript was added later. I focused on clean structure, responsive design, and user-friendly navigation.",
    figmaPassword: "Design-Malin-2025",
    links: {
      live: "https://rainy-days-malin.netlify.app/",
      figma:
        "https://www.figma.com/design/cz2XeWJILbv0AsgwyVpErZ/Rainy-days-nettside?node-id=1-55&m=dev&t=TpV8uqXX9Wg8Jnof-1",
      github: "https://github.com/Malin-Malin/rainyDays-with-js",
    },
  },
  {
    id: "community-science-museum",
    title: "Community Science Museum",
    subtitle: "Semester project",
    image: SemesterProject1,
    imageAlt: "Community Science Museum project screenshot",
    description:
      "This semester project was about designing and building a website for a fictional science museum aimed at children and young teens. I focused on playful design, clear structure, and accessibility, using only HTML and CSS. It was a great challenge that helped me grow in both creativity and coding confidence.",
    figmaPassword: "Design-Malin-2025",
    links: {
      live: "https://community-science-museum-malin.netlify.app/",
      figma:
        "https://www.figma.com/design/PcjaK78LWGKnyWJ6MJvBxM/Semester-project-1?node-id=157-251&p=f&t=6bmwF81KrDgIeBun-0",
      github: "https://github.com/Malin-Malin/CommunityScienceMuseum",
    },
  },
  {
    id: "jaeren-makerspace",
    title: "Jæren Makerspace",
    subtitle: "Exam Project",
    image: Exam2025,
    imageAlt: "Jæren Makerspace project screenshot",
    description:
      "For my first-year exam, I created a website for a fictional creative space called Jæren Makerspace. The site includes multiple pages, a blog system, and forms - all built using HTML, CSS and JavaScript. This project brought together everything I have learned so far, with a strong focus on structure, usability, and visual consistency.",
    figmaPassword: "Design-Malin-2025",
    links: {
      live: "https://courageous-stroopwafel-073cc9.netlify.app/",
      figma:
        "https://www.figma.com/design/XK4EWZGT7lsvJkwN0gE2Tc/Exam-idea?node-id=2-151&p=f&t=tTlTa2mfEfUZXNPg-0",
      github: "https://github.com/Malin-Malin/FED1-PE1-Malin-Malin",
    },
  },
  {
    id: "walk-in-dinner",
    title: "Walk in Dinner",
    subtitle: "Semester Project 2",
    image: SemesterProject02,
    imageAlt: "Walk in Dinner project screenshot",
    description:
      "Walk In Dinner was developed as my semester project after receiving approval to create a custom assignment based on a real-world concept. The application was designed to support a local dining event by simplifying participant registration, event information sharing, and overall event management. This project allowed me to work through the complete development process, from planning and design to implementation and testing. It provided valuable experience in creating a solution based on actual user needs and practical requirements.",
    links: {
      live: "https://walk-in-dinner.netlify.app/",
      figma: "#",
      github: "#",
    },
  },
  {
    id: "social-media",
    title: "Social Media",
    subtitle: "CSS Framework Project",
    image: cssFrameworks,
    imageAlt: "Social Media project screenshot",
    description:
      "This project focused on learning Bootstrap and understanding how to use the framework to create responsive and user-friendly web pages. The goal was not to build a complex application, but to explore Bootstrap's grid system, components, and built-in styling features. Through this assignment, I gained practical experience in implementing a CSS framework and learned how it can improve development efficiency while maintaining a consistent design across a website.",
    links: {
      live: "https://sosial-media-application.netlify.app/",
      figma: "#",
      github: "#",
    },
  },
  {
    id: "skretcher",
    title: "Skretcher",
    subtitle: "React Framework Project",
    image: Skretcher,
    imageAlt: "Skretcher project screenshot",
    description:
      "This project was created as part of our introduction to the React framework. The main objective was to learn component-based development, state management, routing, and API integration. I chose to collaborate with a fellow student, which gave us the opportunity to work with GitHub and Kanban workflows in a more professional setting. Throughout the project, we developed both our technical React skills and our understanding of teamwork, communication, task management, and collaborative software development practices.",
    links: {
      live: "https://genuine-sundae-0c12fa.netlify.app/",
      figma: "#",
      github: "#",
    },
  },
  {
    id: "holidaze",
    title: "Holidaze",
    subtitle: "Exam Project",
    image: Exame2026,
    imageAlt: "Holidaze project screenshot",
    description:
      "Holidaze was my final exam project, where the task was to develop a complete accommodation booking platform. The application includes user registration and authentication, venue management, booking functionality, and full CRUD operations. One aspect that makes this project particularly meaningful is that I built all interface components from scratch. At the time, I was unaware that pre-built component libraries were allowed, which resulted in a deeper learning experience and a stronger understanding of component architecture, styling, and reusable code. This project demonstrates my ability to develop a larger-scale web application independently while implementing complex functionality and maintaining a cohesive user experience.",
    links: {
      live: "https://holidaze-ms.netlify.app/",
      figma: "#",
      github: "#",
    },
  },
];
