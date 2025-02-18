import project1 from "../src/assets/projects/project-1.webp";
import project2 from "../src/assets/projects/project-2.webp";
import project3 from "../src/assets/projects/project-3.webp";
import project4 from "../src/assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer aiming to drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Video-conferencing Website",
    image: project1,
    description:
      "A fully functional video conferencing website which can make video calls among users with  user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Next.js"],
  },
  {
    title: "AI-Voice Assistant",
    image: project2,
    description:
      "An assistant implemented using open-ai modals and LLMs with speech to text and text to speech communications",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS","Framer Motion"],
  },
  {
    title: "Code Reviewer",
    image: project4,
    description:
      "A platform for reviewing code and giving an analysis and explanation on the working a program",
    technologies: ["HTML", "CSS", "React.js", "FineTuning", "LLMs"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
