import { SiSencha } from "react-icons/si";
import { DiExtjs } from "react-icons/di";
import { TbBrandFlutter } from "react-icons/tb";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaJava,
} from "react-icons/fa6";

import resume from "../assets/Arunachalam 8+yrs Resume.pdf";
import userImage from "../assets/arun.jpg";
// import userImage from "../assets/carl.jpeg";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  // name: "ARUNACHALAM",
  name: "Arunachalam S",
  greet: "Hello there! 👋🏻",
  image: userImage,
  resumeLink: resume,
  description:
    "Senior Software Engineer and Team Lead with 8+ years of experience in leading cross-functional teams to deliver robust software solutions. Skilled in agile methodologies, architecture design, and fostering collaboration to achieve project goals. Known for balancing technical excellence with strategic vision, mentoring team members, and streamlining development processes to boost efficiency. Enthusiastic about building high-performing teams and crafting software that drives business growth",
  // "Experienced Software Development Team Lead with over 8+ years of expertise in designing, developing, and deploying scalable software solutions. Skilled in leading cross-functional teams, driving Agile practices, and ensuring timely project delivery. Adept at mentoring developers, managing stakeholder expectations, and aligning technical initiatives with business goals. Proficient in [ReactJS, Flutter, Dart, Rest API, Java, Java Script, SQL Server, Robotic Process Automation(RPA), Documentum like xCP, DFC] with a proven track record of successfully delivering high-impact projects. Passionate about fostering a collaborative team culture and leveraging innovation to solve complex challenges.",
  // "Team Lead with 8+ years of experience. Strong in coding and design technologies. Have a good knowledge in ReactJS, Flutter, Dart, Rest API, Java, Java Script, SQL Server, Robotic Process Automation (RPA), Documentum like xCP, DFC. To seek challenging assignment and responsibility, with an opportunity for growth and career advancement as successful achievements.",
  // "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Arunachalam0007?tab=repositories",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/Arunachalam0007?tab=repositories",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/Arunachalam0007?tab=repositories",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/Arunachalam0007?tab=repositories",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/Arunachalam0007?tab=repositories",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/Arunachalam0007?tab=repositories",
  },
];

export const BIO = [
  "Experienced Software Development Team Lead with over 8+ years of expertise in designing, developing, and deploying scalable software solutions. Skilled in leading cross-functional teams, driving Agile practices, and ensuring timely project delivery.",
  " Adept at mentoring developers, managing stakeholder expectations, and aligning technical initiatives with business goals. Proficient in [ReactJS, Flutter, Dart, Rest API, Java, Java Script, SQL Server, Robotic Process Automation(RPA), Documentum like xCP, DFC] with a proven track record of successfully delivering high-impact projects. Passionate about fostering a collaborative team culture and leveraging innovation to solve complex challenges.",
  // "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  // "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "4+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "few months",
  },
  {
    icon: <TbBrandFlutter className="text-4xl text-blue-500 lg:text-5xl" />,

    name: "Flutter",
    experience: "2 years",
  },

  {
    icon: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&amp;w=256"
        width={50}
      ></img>
    ),
    // icon: <FaJava className="text-4xl text-blue-950 lg:text-5xl" />,
    name: "Java",
    experience: "1 years",
  },
  {
    icon: <SiSencha className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Extjs",
    experience: "2+ year",
  },
  {
    icon: (
      <img
        width={60}
        src="https://w7.pngwing.com/pngs/800/400/png-transparent-documentum-hd-logo-thumbnail.png"
        jsaction=""
      />
    ),
    name: "Documentum",
    experience: "2+ year",
  },
  {
    icon: (
      <img
        width={60}
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA5NCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ3OTNfMTI3OCkiPgo8cGF0aCBkPSJNMCAwSDMyVjMySDBWMFpNMjguNjg0OCAyOC42ODQ4VjMuMzE1MkgzLjMxNTJWMjguNjkxMkgyOC42OTEyTDI4LjY4NDggMjguNjg0OFpNNi4xOTUyIDguMjU2VjE3Ljk1MkM2LjE5NTIgMjIuMzg3MiA4LjYyNzIgMjQuOTc5MiAxMi43NDI0IDI0Ljk3OTJDMTYuODU3NiAyNC45NzkyIDE5LjQxNzYgMjIuMzM2IDE5LjQxNzYgMTcuOTUyVjguMjU2SDE2LjEwMjRWMTcuOTUyQzE2LjEwMjQgMjAuNDYwOCAxNS4wMzM2IDIxLjg0OTYgMTIuODE5MiAyMS44NDk2QzEwLjYwNDggMjEuODQ5NiA5LjUwNCAyMC4zNzc2IDkuNTA0IDE3Ljk1MlY4LjI1Nkg2LjE4ODhINi4xOTUyWk0yMy42OTI4IDEwLjIzMzZDMjQuODcwNCAxMC4yMzM2IDI1LjcyMTYgOS40MzM2IDI1LjcyMTYgOC4yNTZDMjUuNzIxNiA3LjA3ODQgMjQuODY0IDYuMjI3MiAyMy42OTI4IDYuMjI3MkMyMi41MjE2IDYuMjI3MiAyMS42NjQgNy4wNTI4IDIxLjY2NCA4LjI1NkMyMS42NjQgOS40NTkyIDIyLjUyMTYgMTAuMjMzNiAyMy42OTI4IDEwLjIzMzZaTTIyLjAzNTIgMTEuODA4VjI0LjgxOTJIMjUuMzUwNFYxMS44MDhIMjIuMDM1MlpNNDEuODMwNCAxOS40NzUyQzQ1LjQzMzYgMTkuNDc1MiA0Ny43ODg4IDE3LjM2MzIgNDcuNzg4OCAxMy44MTEyQzQ3Ljc4ODggMTAuMjU5MiA0NS40OTEyIDguMjU2IDQxLjgzMDQgOC4yNTZIMzUuNTI2NFYyNC44MTkySDM4Ljg0MTZWMTkuNDc1Mkg0MS44MzA0Wk00MS40ODQ4IDE2LjgzMkgzOC44NDE2VjEwLjkzMTJINDEuNDg0OEM0My4zNzkyIDEwLjkzMTIgNDQuNDIyNCAxMiA0NC40MjI0IDEzLjgxNzZDNDQuNDIyNCAxNS43Njk2IDQzLjM3OTIgMTYuODM4NCA0MS40ODQ4IDE2LjgzODRWMTYuODMyWk00OC45MDg4IDE4LjMyOTZDNDguOTA4OCAyMi4yMDE2IDUxLjM5MiAyNC45NzkyIDU0LjkxODQgMjQuOTc5MkM1Ny4wMDQ4IDI0Ljk3OTIgNTguMzYxNiAyNC4yMzA0IDU5LjEzNiAyMi45NzZWMjQuODE5Mkg2Mi40NTEyVjExLjgwOEg1OS4xMzZWMTMuODM2OEM1OC4zMzYgMTIuNDk5MiA1Ni45NDcyIDExLjY0OCA1NC45MTg0IDExLjY0OEM1MS4zNDA4IDExLjY0OCA0OC45MDg4IDE0LjQ3NjggNDguOTA4OCAxOC4zMjMyVjE4LjMyOTZaTTU5LjEzNiAxOC4zMjk2QzU5LjEzNiAyMC42MDE2IDU3LjcyMTYgMjIuMDY3MiA1NS42OTI4IDIyLjA2NzJDNTMuNDQ2NCAyMi4wNjcyIDUyLjI3NTIgMjAuNDkyOCA1Mi4yNzUyIDE4LjMyOTZDNTIuMjc1MiAxNi4wMDY0IDUzLjU4NzIgMTQuNTM0NCA1NS42OTI4IDE0LjUzNDRDNTcuNzk4NCAxNC41MzQ0IDU5LjEzNiAxNi4wODMyIDU5LjEzNiAxOC4zMjk2Wk03MC44MDk2IDIxLjk5MDRDNjkuNTI5NiAyMS45OTA0IDY5LjE3NzYgMjEuNDI3MiA2OS4xNzc2IDIwLjI4MTZWMTQuNjE3Nkg3Mi4wODk2VjExLjgxNDRINjkuMTc3NlY4LjI2MjRINjUuODYyNFYxMS44MTQ0SDY0LjMxMzZWMTQuNjE3Nkg2NS44NjI0VjIwLjI1NkM2NS44NjI0IDIzLjMyOCA2Ny4yMjU2IDI0LjgyNTYgNzAuMzc0NCAyNC44MjU2SDcyLjEwODhWMjEuOTk2OEg3MC43OTY4TDcwLjgwOTYgMjEuOTkwNFpNNzcuMjczNiAxMy42MzJWNy40NjI0SDczLjk1ODRWMjQuODI1Nkg3Ny4yNzM2VjE3LjkzMjhDNzcuMjczNiAxNS43MTg0IDc4LjQ1MTIgMTQuMzgwOCA4MC4zOTY4IDE0LjM4MDhDODIuMzQyNCAxNC4zODA4IDgzLjM2IDE1LjY2MDggODMuMzYgMTcuNjM4NFYyNC44MjU2SDg2LjY3NTJWMTcuMjY3MkM4Ni42NzUyIDEzLjg0OTYgODQuMjY4OCAxMS42Mjg4IDgxLjE5NjggMTEuNjI4OEM3OS4yMTkyIDExLjYyODggNzguMDE2IDEyLjM3NzYgNzcuMjY3MiAxMy42MzJINzcuMjczNloiIGZpbGw9IiNGQTQ2MTYiLz4KPHBhdGggZD0iTTg5Ljg0OTUgMTIuODMxNkM4Ny44MDE1IDEyLjgzMTYgODYuMzk5OSAxMS40MDQ0IDg2LjM5OTkgOS40MTQwM0M4Ni4zOTk5IDcuNDIzNjMgODcuODQ2MyA2LjAxNTYyIDg5Ljg0OTUgNi4wMTU2MkM5MS44NTI3IDYuMDE1NjIgOTMuMjc5OSA3LjM4NTIzIDkzLjI3OTkgOS40MTQwM0M5My4yNzk5IDExLjQ0MjggOTEuODcxOSAxMi44MzE2IDg5Ljg0OTUgMTIuODMxNlpNODkuODQ5NSA2LjYxNzIzQzg4LjEzNDMgNi42MTcyMyA4Ny4wNDYzIDcuNjkyNDMgODcuMDQ2MyA5LjQwNzYzQzg3LjA0NjMgMTEuMTIyOCA4OC4xOTE5IDEyLjE3ODggODkuODQ5NSAxMi4xNzg4QzkxLjUwNzEgMTIuMTc4OCA5Mi42Mzk5IDExLjA2NTIgOTIuNjM5OSA5LjQwNzYzQzkyLjYzOTkgNy43NTAwMyA5MS41NTE5IDYuNjE3MjMgODkuODQ5NSA2LjYxNzIzWk05MC42MzAzIDkuOTQ1MjNMOTEuMzUzNSAxMS4yOTU2SDkwLjQ5NTlMODkuODExMSAxMC4wNTRIODkuMjY3MVYxMS4yOTU2SDg4LjQ5MjdWNy40NDkyM0g4OS45NzExQzkwLjgwOTUgNy40NDkyMyA5MS40MzAzIDcuOTQyMDMgOTEuNDMwMyA4LjczNTYzQzkxLjQzMDMgOS4zMjQ0MyA5MS4xMTY3IDkuNzQ2ODMgOTAuNjMwMyA5Ljk0NTIzWk04OS4yNjcxIDkuNDM5NjNIODkuODc1MUM5MC4zMjMxIDkuNDM5NjMgOTAuNjMwMyA5LjE5MDAzIDkwLjYzMDMgOC43MzU2M0M5MC42MzAzIDguMzE5NjMgOTAuMzIzMSA4LjA3MDAzIDg5Ljg3NTEgOC4wNzAwM0g4OS4yNjcxVjkuNDM5NjNaIiBmaWxsPSIjRkE0NjE2Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNDc5M18xMjc4Ij4KPHJlY3Qgd2lkdGg9IjkzLjI4IiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
        alt="UiPath Logo"
      ></img>
    ),
    name: "UiPath",
    experience: "2+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Sedin Technologies",
    duration: "Nov 2017 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, RPA and Documentum. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Documentum Engineer",
    company: "ICP UAE (Onsite)",
    duration: "February 2020 - June 2021",
    description:
      "Worked as senior documentum developer, creating open source chrome extension developed to make xCP developer life easie",
  },
  {
    title: "Junior Developer",
    company: "Full Creative",
    duration: "Oct 2016 - Oct 2017",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (Computer Science)",
    institution: "Anna university, Karpaga vinayaga collage, Chennai",
    duration: "July 2012 - June 2016",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Bharathidhassan Higher SecondarySchool, Kanchipuram",
    duration: "June 2011 - March 2012",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/share/155YHdVFPL/?mibextid=LQQJ4d/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://www.instagram.com/arunsha.dio/profilecard/?igsh=cGppYnNxZXNqMW1v/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.threads.net/@arunsha.dio/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://github.com/Arunachalam0007",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/arunachalam-velayutham-88aa75161/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
