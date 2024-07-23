
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import postpartum from "./assets/postpartum.png";
import depression from "./assets/depression.jpeg";
import phobia from "./assets/phobia.jpg";


import workplacestress from "./assets/workplaceStress.jpeg";
import domesticviolence from "./assets/domesticvoilence.jpeg";

export const blogData = [
  {
    id: 1,
    image: postpartum,
    category: "postpartum",
    title: "Postpartum issues requires a compassionate and holistic approach.New mothers often find themselves grappling with a range of emotions and physical changes after childbirth",
    
   
  },
  {
    id: 2,
    image: depression,
    category: "Depression",
    title: "Depression is a complex and multifaceted challenge that can be influenced by a variety of factors, including biological, hormonal, social issues",
   
   
  },
  {
    id: 3,
    image: domesticviolence,
    category: "Domestic Violence",
    title: "Domestic violence against women is a pervasive and deeply troubling issue that can encompass physical, emotional, or psychological abuse within intimate relationships. Women experiencing domestic violence often face fear, isolation,and a sense of powerlessness. ",
   
  },
  {
    id: 4,
    image: workplacestress,
    category: "Work Place Stress",
    title: "Workplace stress in women is a prevalent challenge, often arising from a delicate balance between professional responsibilities and personal obligations.The pressure to meet career expectations while managing familial duties can contribute to heightened stress levels. ", 
  },
  {
    id: 5,
    image: phobia,
    category: "Phobia",
    title: "Phobias in women are intense and irrational fears of specific objects, situations, or activities.",
   
  },
  
];

export const navLinks = [
  {
    id: 1,
    href: "/",
    link: "Home",
  },
  {
    id: 2,
    href: "/aboutus",
    link: "About us",
  },
  {
    id: 3,
    href: "/interactwithus",
    link: "Interact with us",
  },
  {
    id: 4,
    href: "/blogs",
    link: "Blogs",
  },
  {
    id: 5,
    href: "/chatPage",
    link: "ChatBot",
  },
  {
    id: 6,
    href: "/feedback",
    link: "FeedBack",
  },
];


export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
  },
];