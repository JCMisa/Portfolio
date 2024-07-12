import jsPDF from "jspdf";
import projVid1 from "@/videos/finatica-vid.mp4";
import projVid2 from "@/videos/restop-vid.mp4";
import projVid3 from "@/videos/curatech-vid.mp4";
import projVid4 from "@/videos/loom-vid.mp4";
import projVid5 from "@/videos/gemini-vid.mp4";
import projVid6 from "@/videos/dictionairy-vid.mp4";
import projVid7 from "@/videos/netflix-vid.mp4";
import projVid8 from "@/videos/Apple iPhone - Google Chrome 2024-07-11 16-39-55.mp4";
import projVid9 from "@/videos/sou-vid.mp4";
import projVid10 from "@/videos/spotify-vid.mp4";


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I develop solutions that bridge the gap between user needs and business goals",
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
    title: "Proven flexibility approach to project needs",
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
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
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
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    github: "https://github.com/JCMisa/CuraTech-HealthCare",
    live: "https://cura-tech-health-care.vercel.app/",
  },
  {
    id: 4,
    title: "Apple-Inspired Website: Interactive Design",
    des: "Experience a captivating website showcasing 3D animations powered by Three.js and smooth element transitions with GSAP.",
    img: "/appleweb-img.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    github: "https://github.com/JCMisa/apple-website",
    live: "https://apple-website-misa.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const projectVideos = [
  {
    id: 1,
    name: "Finatica",
    video: projVid1,
    techStack: "React and .NetCore"
  },
  {
    id: 2,
    name: "ReStop",
    video: projVid2,
    techStack: "React and Java SpringBoot"
  },
  {
    id: 3,
    name: "CuraTech",
    video: projVid3,
    techStack: "NextJS and Appwrite"
  },
  {
    id: 4,
    name: "Loom",
    video: projVid4,
    techStack: "NextJS and Clerk"
  },
  {
    id: 5,
    name: "Gemini Clone",
    video: projVid5,
    techStack: "React and Gemini API"
  },
  {
    id: 6,
    name: "dictionAIry",
    video: projVid6,
    techStack: "React and Gemini API"
  },
  {
    id: 7,
    name: "Netflix Clone",
    video: projVid7,
    techStack: "React"
  },
  {
    id: 8,
    name: "Apple Website",
    video: projVid8,
    techStack: "React and ThreeJS"
  },
  {
    id: 9,
    name: "SOU MS",
    video: projVid9,
    techStack: "Javascript and PHP"
  },
  {
    id: 10,
    name: "Spotify Clone",
    video: projVid10,
    techStack: "React"
  },
]

export const downloadResume = () => {
  let doc = new jsPDF('portrait', 'px', 'a4', false)
  doc.addImage('https://i.ibb.co/vdb46Hr/resume.jpg', 'JPG', 0, 0, 393.867, 557) // w-393.867 h-557
  doc.save('resume.pdf')
}