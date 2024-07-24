import jsPDF from "jspdf";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I develop solutions that bridge the gap between user needs and business goals",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "/b1.svg",
    video: "/futuristic-vid.mp4",
    vidClassName: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Proven flexibility approach",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by Passion. Building the Future.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Sharpening my skills in Web Development.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to connect with me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SOU: Management System",
    des: "SOU MS, a web-based system for Laguna State Polytechnic University - San Pablo Campus, automates student organization requirement submissions, streamlining the process for both students and administrators.",
    img: "/sou-img.png",
    iconLists: ["php.svg", "js.png", "html.svg", "css.svg", "sql.png"],
    github: "https://github.com/JCMisa/SOUFinalProject",
    live: "https://sou-lspu.ccs-octa.com",
  },
  {
    id: 2,
    title: "Loom: Streamlined Meetings",
    des: "Host secure video conferences with Loom, a user-friendly web app featuring self-managed meetings and Clerk-powered authentication.",
    img: "/loom-img.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    github: "https://github.com/JCMisa/video-conferencing-app",
    live: "https://video-conferencing-app-flax.vercel.app/",
  },
  {
    id: 3,
    title: "CuraTech: Effortless Appointments",
    des: "CuraTech simplifies healthcare scheduling with a web app featuring dedicated admin and patient interfaces.",
    img: "/curatech-img.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/appwrite.jpeg",
      "/twilio.svg",
    ],
    github: "https://github.com/JCMisa/CuraTech-HealthCare",
    live: "https://cura-tech-health-care.vercel.app/",
  },
  {
    id: 4,
    title: "Apple-Inspired Website: Interactive Design",
    des: "Experience a captivating website showcasing 3D animations powered by Three.js and smooth element transitions with GSAP.",
    img: "/appleweb-img.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/three.svg", "/gsap.svg"],
    github: "https://github.com/JCMisa/apple-website",
    live: "https://apple-website-misa.vercel.app/",
  },
  {
    id: 5,
    title: "AI Interview Mocker (AIIM)",
    des: "Prepare for interviews with AI-generated questions, record your answers, and receive ratings & feedback based on AI analysis and your speech.",
    img: "/aiim-img.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/gemini.svg",
      "/neondb.png",
      "/drizzle.png",
    ],
    github: "https://github.com/JCMisa/ai-interview-mocker",
    live: "https://misa-interview-mocker.vercel.app/",
  },
  {
    id: 6,
    title: "ReUp: AI Resume Builder",
    des: "Create stunning modern resumes effortlessly with our AI-powered tool. Generate, customize, download, and share your professional resume in minutes.",
    img: "/reup-img.png",
    iconLists: [
      "/next.svg",
      "/c.svg",
      "/gemini.svg",
      "/neondb.png",
      "/drizzle.png",
    ],
    github: "https://github.com/JCMisa/ai-resume-builder",
    live: "https://misa-ai-resume-builder.vercel.app/",
  },
  {
    id: 7,
    title: "DocSync: Real-time Collaborative Document Editor",
    des: "Edit, view, and write documents in real-time with others. Share and collaborate seamlessly with email invites. Secure and reliable document management.",
    img: "/docsync-img.png",
    iconLists: [
      "/next.svg",
      "/liveblocks.png",
      "/sentry.png",
      "/shadcn.png",
      "/tail.svg",
    ],
    github: "https://github.com/JCMisa/realtime-app",
    live: "https://docsync-flax.vercel.app/",
  },
];

export const testimonials = [
  {
    quote: `Let's be honest, hiring a developer can feel like wrangling kittens. But John Carlo was a breath of fresh air! They tackled both the front-end and back-end of my e-commerce website with the grace of a ballerina...well, maybe a slightly caffeinated ballerina. Jokes aside, his code was clean, efficient, and somehow made sense even to a non-techie like me. If you need a full-stack developer who can get things done without the developer drama, He's your person.`,
    name: "Reden Samudio",
    title: "DEPED Teacher",
  },
  {
    quote: `Let's be honest, hiring a developer can feel like wrangling kittens. But John Carlo was a breath of fresh air! They tackled both the front-end and back-end of my e-commerce website with the grace of a ballerina...well, maybe a slightly caffeinated ballerina. Jokes aside, his code was clean, efficient, and somehow made sense even to a non-techie like me. If you need a full-stack developer who can get things done without the developer drama, He's your person.`,
    name: "Reden Samudio",
    title: "DEPED Teacher",
  },
  {
    quote: `Let's be honest, hiring a developer can feel like wrangling kittens. But John Carlo was a breath of fresh air! They tackled both the front-end and back-end of my e-commerce website with the grace of a ballerina...well, maybe a slightly caffeinated ballerina. Jokes aside, his code was clean, efficient, and somehow made sense even to a non-techie like me. If you need a full-stack developer who can get things done without the developer drama, He's your person.`,
    name: "Reden Samudio",
    title: "DEPED Teacher",
  },
  {
    quote: `Let's be honest, hiring a developer can feel like wrangling kittens. But John Carlo was a breath of fresh air! They tackled both the front-end and back-end of my e-commerce website with the grace of a ballerina...well, maybe a slightly caffeinated ballerina. Jokes aside, his code was clean, efficient, and somehow made sense even to a non-techie like me. If you need a full-stack developer who can get things done without the developer drama, He's your person.`,
    name: "Reden Samudio",
    title: "DEPED Teacher",
  },
  {
    quote: `Let's be honest, hiring a developer can feel like wrangling kittens. But John Carlo was a breath of fresh air! They tackled both the front-end and back-end of my e-commerce website with the grace of a ballerina...well, maybe a slightly caffeinated ballerina. Jokes aside, his code was clean, efficient, and somehow made sense even to a non-techie like me. If you need a full-stack developer who can get things done without the developer drama, He's your person.`,
    name: "Reden Samudio",
    title: "DEPED Teacher",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloudinary.svg",
    nameImg: "/cloudinary.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/appwrite.svg",
    nameImg: "/appwrite.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "microsoft",
    img: "/microsoft.svg",
    nameImg: "/microsoft.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Application Dev Project",
    desc: "Developed and implemented a web application for [University Name]'s student organizations, streamlining the submission process for required documents and forms.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Dev in Progress",
    desc: "Dedicated to continuous learning in web development, actively exploring and implementing new and in-demand tech stacks. This includes experience with NextJS, SpringBoot, .NetCore.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Project Management & Finance Specialist",
    desc: "Managed the commissioning process for web development projects, ensuring clear communication between clients and developers. Additionally, handled financial aspects like creating financial statements and balance sheets.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "IT Challenge Enthusiast",
    desc: "Participated in web development competitions like IT Olympics and other university events, honing my skills in problem-solving, coding under pressure, and teamwork in a competitive environment.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/JCMisa",
  },
  {
    id: 2,
    img: "/facebook.svg",
    link: "https://www.facebook.com/johncarlomisa26/",
  },
  {
    id: 3,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/john-carlo-misa-80a1b5208/",
  },
];

export const projectVideos = [
  {
    id: 1,
    name: "Finatica",
    video: "/projVid/finatica-vid.mp4",
    techStack: "React and .NetCore",
  },
  {
    id: 2,
    name: "ReStop",
    video: "/projVid/restop-vid.mp4",
    techStack: "React and Java SpringBoot",
  },
  {
    id: 3,
    name: "CuraTech",
    video: "/projVid/curatech-vid.mp4",
    techStack: "NextJS and Appwrite",
  },
  {
    id: 4,
    name: "Loom",
    video: "/projVid/loom-vid.mp4",
    techStack: "NextJS and Clerk",
  },
  {
    id: 5,
    name: "Gemini Clone",
    video: "/projVid/gemini-vid.mp4",
    techStack: "React and Gemini API",
  },
  {
    id: 6,
    name: "dictionAIry",
    video: "/projVid/dictionairy-vid.mp4",
    techStack: "React and Gemini API",
  },
  {
    id: 7,
    name: "Netflix Clone",
    video: "/projVid/netflix-vid.mp4",
    techStack: "React",
  },
  {
    id: 8,
    name: "Apple Website",
    video: "/projVid/Apple iPhone - Google Chrome 2024-07-11 16-39-55.mp4",
    techStack: "React and ThreeJS",
  },
  {
    id: 9,
    name: "SOU MS",
    video: "/projVid/sou-vid.mp4",
    techStack: "Javascript and PHP",
  },
  {
    id: 10,
    name: "Spotify Clone",
    video: "/projVid/spotify-vid.mp4",
    techStack: "React",
  },
  {
    id: 11,
    name: "AIIM",
    video: "/projVid/aiim-vid.mp4",
    techStack: "NextJS and Neon DB",
  },
  {
    id: 12,
    name: "ReUP",
    video: "/projVid/reup-vid.mp4",
    techStack: "NextJS and Neon DB",
  },
  {
    id: 13,
    name: "DocSync",
    video: "/projVid/docsync-vid.mp4",
    techStack: "NextJS and Liveblocks",
  },
];

export const downloadResume = () => {
  let doc = new jsPDF("portrait", "px", "a4", false);
  doc.addImage(
    "https://i.ibb.co/vdb46Hr/resume.jpg",
    "JPG",
    0,
    0,
    393.867,
    557
  ); // w-393.867 h-557
  doc.save("resume.pdf");
};
