// Skills Section Logo's
import androidstudioLogo from './assets/tech_logo/android-studio-icon.webp';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import cicdLogo from './assets/tech_logo/CicdLogo.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cssLogo from './assets/tech_logo/css.png';
import DBMSLOGO from './assets/tech_logo/DBMS_LOGO.png';
import DockerLogo from './assets/tech_logo/dockerLogo.svg';
import DSALOGO from './assets/tech_logo/DSA_LOGO.jpg';
import expressjsLogo from './assets/tech_logo/express.png';
import gitLogo from './assets/tech_logo/git.png';
import githubactionsLogo from './assets/tech_logo/github-actions-Logo.webp';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import OOPLOGO from './assets/tech_logo/Oops_logo.webp';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import APILOGO from './assets/tech_logo/Rest_api_logo.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import vscodeLogo from './assets/tech_logo/vscode.png';


// Education Section Logo's
import DsceLogo from './assets/education_logo/dsce.jpg';
import jnvlogo from './assets/education_logo/Jawahar_Navodaya_Vidyalaya_logo.png';
import sirmvlogo from './assets/education_logo/sirmv_pu_college.jpg';

// Project Section Logo's
import Banklogo from './assets/work_logo/Banklogo.png';
import Catlogo from './assets/work_logo/CATlogo.png';
import wanderlustLogo from './assets/work_logo/wanderlustlogo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools & Devops',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Docker', logo: DockerLogo },
      { name: 'CI/CD', logo: cicdLogo },
      {name: 'Github Actions', logo: githubactionsLogo},
      {name: 'Android Studio', logo: androidstudioLogo},
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'DSA', logo: DSALOGO },
      { name: 'OOPS', logo: OOPLOGO },
      {name: 'DBMS', logo: DBMSLOGO}, 
      { name: 'RESTful API', logo: APILOGO },


    ],
  },
  {
    title: 'Learning & Exploring',
    skills: [
      { name: 'springBoot', logo: springbootLogo },
      {name: 'python', logo: pythonLogo},
    ],
  }
];

  export const education = [
    {
      id: 0,
      img: DsceLogo,
      school: "Dayanand Sagar College of Engineering, Bangalore",
      date: "Dec 2022 - May 2026",
      // grade: "73.2%",
      desc: "I completed my Bachelor's degree in Information Science Engineering from Dayanand Sagar College of Engineering, Bengaluru. Throughout my studies, I explored core subjects such as Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, and Database Management Systems. Alongside academics, I gained hands-on experience in building full-stack web and Android applications using modern technologies like the MERN stack, and explored cloud and DevOps practices. My academic journey enabled me to apply theoretical concepts to real-world projects, strengthening my problem-solving and software development skills.",      
      degree: "Information Science & Engineering (B.E) - 2026",
    },
    {
      id: 1,
      img: sirmvlogo,
      school: "SIR MV PU College, Davangere, Karnataka",
      date: "Apr 2019 - May 2021",
      grade: "97%",
      desc: "I completed my class 12 education from SIR MV PU College, Davangere, Karnataka, under the Karnataka board, where I studied Physics, Chemistry, Mathematics and Biology (PCMB).",
      degree: "Karnataka(XII) - PCMB",
    },
    {
      id: 2,
      img: jnvlogo,
      school: "Jawahar Navodaya Vidyalaya,  Chitradurga, Karnataka",
      date: "May 2018 - April 2019",
      grade: "92%",
      desc: "I completed my class 10 education from Jawahar Navodaya Vidyalaya, Chitradurga, Karnataka, under the CBSE board, where I studied Science.",
      degree: "CBSE(X), Science ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Wanderlust",
      description:
     "Built a full-stack MERN web application with role-based access and MVC architecture, allowing users to browse listings and owners to manage properties. Integrated Mapbox for location mapping and Cloudinary for image storage, with secure authentication, CRUD operations, and cloud deployment on Render.",
      image:wanderlustLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js","MongoDB", "API"],
      github: "https://github.com/chethan-r30/Wanderlust",
      webapp: "https://wanderlust-s9l5.onrender.com/listings",
    },
    {
      id: 1,
      title: "Course_Allotment_Tool",
      description:"Built a web-based automation system to intelligently assign faculty to course sections by processing Excel inputs using a rule-based decision engine. Implemented Excel parsing, automated conflict-free allocation, downloadable report generation, and cloud deployment via Render, reducing manual workload and improving transparency.",
      image: Catlogo,
      tags: ["React JS", "Node.js", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/chethan-r30/Course_Allotment_Tool",
      webapp: "https://course-allotment-tool-2.onrender.com/",
    },
    {
      id: 2,
      title: "Bank Management System",
      description:"Built a Bank Account Management System using Java (Swing), JDBC, and MySQL to handle account creation, deposits/withdrawals, fund transfers, balance checks, and transaction history. Implemented secure login with role-based access for admin and users, and designed real-time transaction updates with structured data storage",
      image: Banklogo,
      tags: ["java", "sql"],
      github: "https://github.com/chethan-r30/Bank-Management-System",
    },
    {
      id: 3,
      title: "WeatherNow",
      description:
        "A real-time weather application that provides accurate and up-to-date weather information for any location. Built using React.js and a weather API, it offers a user-friendly interface with detailed forecasts and interactive maps.",
      //image: weatherLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/chethan-r30/WeatherNow",
    },
  ];  