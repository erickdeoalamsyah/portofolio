import isoneday from "../assets/projects/isoneday.png";
import cuaca from "../assets/projects/cuaca.png";
import todolist from "../assets/projects/todolist.png";
import disney from "../assets/projects/mydisney.png";
import isonedayV from "../assets/projects/isoneday.mp4";
import cuacaV from "../assets/projects/cuaca.mp4";
import todolistV from "../assets/projects/todolist.mp4";
import disneyV from "../assets/projects/mydisney.mp4";
import dataScience from "../assets/projects/datascience.png"
import dataScienceV from "../assets/projects/datascience.mp4"
import glhtml from "../assets/certifications/GL-FEhtml.png";
import glreact from "../assets/certifications/GL-react.png";
import hrreact from "../assets/certifications/HR-FEReact.png";
import hrproblemsolving from "../assets/certifications/HR-problemsolving.png";
import hrreactbasic from "../assets/certifications/HR-reactbasic.png";
import hrse from "../assets/certifications/HR-se-intern.png";

export const HERO_CONTENT = `A results-driven individual specializing in Front-End Development with a passion for creating responsive, interactive, and user-friendly web interfaces. Expert in translating design concepts into functional applications, ensuring seamless user experiences (UX) and high performance. Known for being a fast learner, adaptable to new technologies, and delivering solutions that meet project requirements. Strong communication and collaboration skills, enabling effective teamwork in dynamic and cross-functional environments. Dedicated to bringing creativity, technical expertise, and a problem-solving mindset to every project.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July - September 2023 ",
    role: "Mobile Developer",
    company: "Techno Infinity",
    description: `During my internship as a Mobile Android Developer, I successfully completed the redesign process of the UI for a project using Flutter and Android Studio. In this role, I implemented the redesigned UI provided by the UI/UX team into a fully functional and responsive interface, ensuring it met the expected design standards. I actively participated in daily checkpoint meetings to monitor progress, address technical challenges, and collaborate effectively with the team. Additionally, I consistently utilized Git for version control, maintaining code integrity and ensuring smooth development processes. This achievement highlights my ability to translate designs into high-performing, real-world applications.`,
    technologies: ["Flutter", "Android Studio", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "E-COMMERCE ISONEDAY BRAND",
    image: isoneday,
    video: isonedayV,
    description:
      "This e-commerce platform is designed to deliver a seamless shopping experience tailored to a local streetwear brand. The website features a responsive and user-centric design, optimized for both mobile and desktop users, with an emphasis on intuitive navigation and aesthetic appeal. Key functionalities include interactive hero sliders, dynamic product pages, hover effects, and smooth-scrolling carousels, creating an engaging and visually appealing interface. Built using React.js and Tailwind CSS, the platform leverages modern web technologies to ensure high performance and responsiveness. Integrated with secure third-party platforms, it simplifies transactions, enabling fast and secure purchases for customers. Its minimalist and mobile-first layout embodies professionalism and ease of use, aligning perfectly with the brand’s identity.",
    technologies: ["Vite","React.js","Tailwind CSS", "HTML5", "JavaScript"],
    githubLink: "https://github.com/erickdeoalamsyah/isoneday-brand",
    websiteLink: "https://isoneday.vercel.app/",
  },
  {
    title: "ALUMNI INCOME CLASSIFICATION ON TRACER STUDY DATA USING MACHINE LEARNING",
    image: dataScience,
    video: dataScienceV,
    description:
      "This project focused on analyzing Telkom University alumni income levels using Tracer Study Data to identify 7 key variables influencing income predictions. By leveraging Support Vector Machine (SVM) and Logistic Regression, I developed and evaluated high-accuracy classification models. The workflow included comprehensive data preprocessing, feature selection, and insightful visualizations created with Python libraries such as Pandas, Scikit-learn, Matplotlib, and Seaborn, executed on Google Colab. The results provided critical insights into variable significance, offering valuable recommendations for stakeholders to support institutional decision-making and alumni success.",
    technologies: ["Google Colab", "Pandas & NumPy","Python","Matplotlib & Seaborn", "Scikit-learn", "Support Vector Machine", "Logistic Regression"],
    githubLink: "https://colab.research.google.com/drive/1WliQHuzvzbFSg3VaNagyNl_X1zVOGgDA?usp=sharing",
    websiteLink: "https://colab.research.google.com/drive/1WliQHuzvzbFSg3VaNagyNl_X1zVOGgDA?usp=sharing",
  },
  {
    title: "WEATHER EXPLORER",
    image: cuaca,
    video: cuacaV,
    description:
      "Weather Explorer is an interactive weather app delivering real-time forecasts with a sleek and modern design. Powered by Vite, React.js, and Tailwind CSS, it integrates the OpenWeatherMap API to provide detailed data, including temperature, wind speed, visibility, and hourly predictions. The app offers a seamless switch between light and dark themes for a personalized experience and allows users to search weather conditions for any city or country effortlessly.",
    technologies: ["Vite","React.js", "Tailwind CSS", "HTML5", "JavaScript", "OpenWeatherMap API"],
    githubLink: "https://github.com/erickdeoalamsyah/my-weather-app",
    websiteLink: "https://my-weather-app-rust.vercel.app/",
  },
  {
    title: "DISNEY FILM",
    image: disney,
    video: disneyV,
    description:
      "This project is a sleek and interactive Movie Search App, inspired by the design and functionality of Disney+. Built using React, Vite, and Tailwind CSS, the app allows users to search for movies and explore detailed information seamlessly. Powered by the TMDB API, it provides real-time data on trending movies, ratings, synopses, and more. One of the standout features is the Watchlist, where users can save their favorite movies with a single click for later viewing. The Watchlist is fully interactive—users can add or remove movies effortlessly, ensuring a personalized and streamlined experience. With its modern UI, responsive design, and smooth interactions, this app combines aesthetics and usability, delivering a user-friendly platform for movie enthusiasts.",
    technologies: ["Vite", "React.js", "Tailwind CSS", "HTML5", "JavaScript", "TMDB API"],
    githubLink: "https://github.com/erickdeoalamsyah/my-disneyfilm",
    websiteLink: "https://my-disneyfilm.vercel.app/",
  },
  {
    title: "TODOLIST ",
    image: todolist,
    video: todolistV,
    description:
      "This To-Do List project is a dynamic and user-friendly task management application built with React.js, Vite, and Tailwind CSS. It includes features such as task creation with customizable names and deadlines, real-time status updates (complete/incomplete), and the ability to edit or delete tasks. The app automatically adjusts to the current day and allows users to start new tasks daily or edit the day's name. Tasks are marked overdue with notifications if they aren't completed on time, ensuring efficient time management. With a sleek dark and light mode toggle, this application is both functional and visually appealing.",
    technologies: ["Vite", "React.js", "Tailwind CSS", "HTML5", "JavaScript"],
    githubLink: "https://github.com/erickdeoalamsyah/todolist-app",
    websiteLink: "https://my-todolist-vert.vercel.app/",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Frontend Developer (React) Certification",
    issuer: "HackerRank",
    date: "2024",
    image: hrreact, 
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "2024",
    image: hrse,
  },
  {
    title: "React (Basic) Certification",
    issuer: "HackerRank",
    date: "2024",
    image: hrreactbasic,
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2024",
    image: hrproblemsolving,
  },
  {
    title: "React JS tutorial",
    issuer: "Great Learning",
    date: "2024",
    image: glreact,
  },
  {
    title: "Frontend Development - HTML certification",
    issuer: "Great Learning",
    date: "2024",
    image: glhtml,
  },
];

