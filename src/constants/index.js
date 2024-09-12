import discord from "../assets/collaboration/discord.png";
import figma from "../assets/collaboration/figma.png";
import framer from "../assets/collaboration/framer.png";
import notion from "../assets/collaboration/notion.png";
import photoshop from "../assets/collaboration/photoshop.png";
import protopie from "../assets/collaboration/protopie.png";
import raindrop from "../assets/collaboration/raindrop.png";
import slack from "../assets/collaboration/slack.png";
import Image1 from '../assets/Screenshot 2024-08-18 013513.png'
import Expence_img_1 from '../assets/Project Image/Screenshot 2024-09-12 133631.png'
import Expence_img_2 from '../assets/Project Image/Screenshot 2024-09-12 133659.png'

export const collabText =
  "With expertise in modern frameworks and meticulous attention to detail, it's the perfect choice for businesses seeking a skilled frontend developer.";

export const collabContent = [
  {
    id: "0",
    title: "Responsive Design",
    text: collabText,
  },
  {
    id: "1",
    title: "Modern Frameworks",
  },
  {
    id: "2",
    title: "Performance Optimization",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];


export const ProjectData = [
  {
    "id": 1,
    "projectName": "Expence Tracker",
    "image1": Expence_img_1,
    "image2": Expence_img_2,
    "description": "I designed and developed a comprehensive expense tracker application using React.js, Tailwind CSS, and Chakra UI. The application allows users to easily add and categorize their expenses, boosting engagement and management. I implemented a shared expenses feature for collaborative management with friends and integrated a doughnut chart to provide users with visual insights into their spending habits. By applying responsive design principles, I ensured the application is mobile-friendly and accessible across various devices. The use of Chakra UI and Tailwind CSS enhanced the UI/UX, resulting in a visually appealing and user-friendly interface.",
    "githubLink": "https://github.com/vinay8962/expense-tracker.git",
    "liveLink": "https://Expence_tracker.com",
    "language": ["React", "Redux Toolkit", "Redux Saga", "Tailwind Css", "Chakra Ui", "Chart Js"]
  },
  {
    "id": 2,
    "projectName": "E-library",
    "image1": Image1,
    "image2": "https://via.placeholder.com/150",
    "description": "A task management tool that helps users organize and track their daily tasks, with the ability to set reminders and mark tasks as complete.",
    "githubLink": "https://github.com/username/task-manager",
    "liveLink": "https://task-manager-demo.com",
    "language": ["JavaScript", "React", "Redux"]
  },
  {
    "id": 3,
    "projectName": "E-commerce Platform",
    "image1": Image1,
    "image2": "https://via.placeholder.com/150",
    "description": "An e-commerce platform that allows users to browse products, add them to the cart, and proceed with checkout. It includes payment integration and order tracking.",
    "githubLink": "https://github.com/username/ecommerce-platform",
    "liveLink": "https://ecommerce-platform-demo.com",
    "language": ["JavaScript", "React", "Node.js", "Express"]
  },


]

