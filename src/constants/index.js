import brand from "../assets/projects/brand.png";
import cuaca from "../assets/projects/cuaca.png";
import disney from "../assets/projects/mydisney.png";
import brandV from "../assets/projects/brand.mp4";
import finansia from "../assets/projects/finansia.png";
import finansiaV from "../assets/projects/finansiaV.mp4";
import cuacaV from "../assets/projects/cuaca.mp4";
import disneyV from "../assets/projects/mydisney.mp4";
import gradientcss from "../assets/projects/gradientcss.png"
import gradientcssV from "../assets/projects/gradientcssV.mp4"
import glhtml from "../assets/certifications/GL-FEhtml.png";
import glreact from "../assets/certifications/GL-react.png";
import hrreact from "../assets/certifications/HR-FEreact.png";
import hrproblemsolving from "../assets/certifications/HR-problemsolving.png";
import hrreactbasic from "../assets/certifications/HR-reactbasic.png";
import hrse from "../assets/certifications/HR-se-intern.png";

export const HERO_CONTENT = `Fullstack Website Developer with strong expertise in building scalable, user-centric web applications using modern technologies. Experienced with React.js, Next.js, and Tailwind CSS for developing responsive frontends, and Node.js with Express.js for building robust, secure backends. Proven track record of improving API performance by 25%, reducing bounce rate by 10%, and streamlining deployment through CI/CD pipelines with GitHub Actions, Prometheus, and Grafana. Solid understanding of API integration, web security fundamentals, automated testing, and monitoring practices. A detail-oriented and fast learner, committed to delivering maintainable solutions and collaborating effectively across cross-functional teams.`;

export const EXPERIENCES = [
  {
    year: "July - September 2023 ",
    role: "Mobile Developer Internship",
    company: "PT. Techno Infinity",
    description: `Successfully implemented a complete UI redesign for the Workspace App, following the design guidelines provided by the UI/UX team, using Flutter & React Native to enhance responsiveness and improve navigation flow. Optimized app performance by reducing load times by 15% through lazy loading and efficient resource management, ensuring a smoother user experience. Collaborated closely with UI/UX designers and backend developers to maintain consistency between design and functionality, while leveraging Git & GitHub for version control to streamline workflow, minimize code conflicts, and improve overall team efficiency.`,
    technologies: ["Flutter", "Android Studio", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "E-COMMERCE ISONEDAY BRAND",
    image: brand,
    video: brandV,
    description:
      "This e-commerce platform is designed to deliver a seamless shopping experience tailored to a local streetwear brand. The website features a responsive and user-centric design, optimized for both mobile and desktop users, with an emphasis on intuitive navigation and aesthetic appeal. Key functionalities include interactive hero sliders, dynamic product pages, hover effects, and smooth-scrolling carousels, creating an engaging and visually appealing interface. Built using React.js and Tailwind CSS, the platform leverages modern web technologies to ensure high performance and responsiveness. Integrated with secure third-party platforms, it simplifies transactions, enabling fast and secure purchases for customers. Its minimalist and mobile-first layout embodies professionalism and ease of use, aligning perfectly with the brand’s identity.",
    technologies: ["Vite","React.js","Tailwind CSS", "HTML5", "JavaScript"],
    githubLink: "https://github.com/erickdeoalamsyah/ecommerce-Isoneday-brand",
    websiteLink: "https://ecommerce-isoneday-brand.vercel.app/",
  },
  {
    title: "FINANSIA MONEY MANAGER",
    image: finansia,
    video: finansiaV,
    description:
      "Money Manager is a responsive and dynamic financial tracking application inspired by mobile money manager apps, built with React.js and Tailwind CSS, featuring local storage integration for persistent data management. The project showcases my front-end development expertise, including UI/UX optimization, state management (useState & useEffect), and dynamic component-based architecture. Key features include daily, calendar, and statistics views, interactive charts using Chart.js, advanced search and filtering, and a mobile-responsive design. With smooth UI interactions like a modal-based search bar, a sidebar settings panel, and animated transaction updates, this project highlights my ability to build efficient, maintainable, and visually appealing web applications focused on user experience and performance.",
    technologies: ["Vite", "React.js","Tailwind CSS","Chart.js", "JavaScript"],
    githubLink: "https://github.com/erickdeoalamsyah/Finansia",
    websiteLink: "https://finansia.vercel.app/",
  },
  {
    title: "WEATHER EXPLORER",
    image: cuaca,
    video: cuacaV,
    description:
      "Weather Explorer is an interactive weather app delivering real-time forecasts with a sleek and modern design. Powered by Vite, React.js, and Tailwind CSS, it integrates the OpenWeatherMap API to provide detailed data, including temperature, wind speed, visibility, and hourly predictions. The app offers a seamless switch between light and dark themes for a personalized experience and allows users to search weather conditions for any city or country effortlessly.",
    technologies: ["Vite","React.js", "Tailwind CSS", "HTML5", "JavaScript", "OpenWeatherMap API"],
    githubLink: "https://github.com/erickdeoalamsyah/cuaca",
    websiteLink: "https://celciusweather.vercel.app/",
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
    title: "GRADIENT CSS PICKER",
    image: gradientcss,
    video: gradientcssV,
    description:
      "An interactive web application that allows users to create, customize, and export gradient codes in both standard CSS and Tailwind CSS formats. This project features a modern and responsive UI, equipped with live preview, color picker, gradient direction selector, random gradient generator, and export functionality to seamlessly integrate gradients into other projects. Utilizing React.js for state management, Tailwind CSS for modular styling, Framer Motion for smooth animations, Clipboard API for instant code copying, and Vite.js for fast builds, this application demonstrates my expertise in building interactive, dynamic, and optimized UI for various devices.",
    technologies: ["Vite", "React.js","Tailwind CSS","Clipboard API", "JavaScript"],
    githubLink: "https://github.com/erickdeoalamsyah/gradientpicker",
    websiteLink: "https://gradientpickercss.vercel.app/",
  },
  
];

export const CERTIFICATIONS = [
  {
    title: "Frontend Developer (React) ",
    issuer: "HackerRank",
    date: "2024",
    desc: "Demonstrates expertise in React.js, including component-based architecture, state management, and performance optimization.",
    image: hrreact, 
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "2024",
    desc: "Validates problem-solving skills, debugging techniques, and ability to implement scalable web solutions in a development environment.",
    image: hrse,
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "2024",
    desc: "Covers fundamental React concepts, including JSX, props, hooks, and component lifecycle.",
    image: hrreactbasic,
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2024",
    desc: "Verifies problem-solving ability in algorithm design, logic building, and code efficiency using JavaScript.",
    image: hrproblemsolving,
  },
  {
    title: "React JS tutorial",
    issuer: "Great Learning",
    date: "2024",
    desc: "Provides practical experience in building dynamic and interactive web applications using React.js.",
    image: glreact,
  },
  {
    title: "Frontend Development - HTML ",
    issuer: "Great Learning",
    date: "2024",
    desc: "Covers HTML best practices, semantic elements, and web page structuring for accessibility and SEO.",
    image: glhtml,
  },
];

