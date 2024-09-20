// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/Profile2.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";

import blockchain from "./assets/techstack/blockchain.jpeg"
import IPFS from "./assets/techstack/IPFS.jpg"
import Web3 from "./assets/techstack/web3.png"
// Porject Images
import projectImage1 from "./assets/projects/Banner.png";
import projectImage2 from "./assets/projects/standard.jpg";
import projectImage3 from "./assets/projects/VR.jpg";
import projectImage4 from "./assets/projects/images.jpeg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Avinash Jadhav",
  tagline: "I build things for web",
  img: profile,
  about: ` I recently completed my Bachelor's degree in Computer Science from KKWagh Institute of Engineering, Nashik. Throughout my academic journey, I've cultivated a deep understanding of computer science principles, with a particular focus on mastering C++ and Data Structures.
  
  Beyond the classroom, I've dedicated myself to practical application and exploration of emerging technologies. I've undertaken several projects utilizing modern technologies like React and Blockchain. These projects have not only honed my technical skills but have also instilled in me a passion for innovation and problem-solving.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/avinash-jadhav-27m2003",
  github: "https://github.com/avinash275",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "VR and Game Development Intern",
    Company: `K.K.W.I.E.E.R, NASHIK`,
    Location: "Nashik",
    Type: "Internship",
    Duration: "Jan 2023 - Feb 2023",
  },
  {
    Position: "Web Development Intern",
    Company: `Oasis Infotech`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Feb 2023 - March 2023",
  },
  
];

export const trainingDetails=[
  {
    Company:`Zensar Technology, Pune`,
    Topic:"Java Programming and SQL Training",
    Duration:"Aug 2022 - Jan 2023",
    Location:"Remote",
  }
]

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Computer Engineer",
    Company: "K.K.W.I.E.E.R, NASHIK",
    Location: "NASHIK",
    Type: "Full Time",
    Duration: "Jan 2021 - June 2024",
    Marks:"aggregate CGPA:- 8.98"
  },
  {
    Position: "HSC",
    Company: `N.V.M.D.CAMP`,
    Location: "NASHIK",
    Type: "Full Time",
    Duration: "JUN 2019 - JUN 2020",
    Marks:"80.62%"
  },
  {
    Position: "SSC",
    Company: `N.V.M.D.CAMP`,
    Location: "NASHIK",
    Type: "Full Time",
    Duration: "JUN 2017 - JUN 2018",
    Marks:"92.80%"
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  blockchain:blockchain,
  IPFS:IPFS,
  Web3:Web3
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Evidence Shield",
    image: projectImage1,
    description: `Evidence Shield is a blockchain and IPFS-based evidence protection system that provides a decentralized platform for
    reporting crimes and uploading various evidences and reports to maintain a chain of custody.`,
    techstack: "Ethereum Blockchain, React, Truffle, IPFS",
    githubLink: "https://github.com/avinash275/Evidence-Shield"
  },
  {
    title: "PCB Error Detection",
    image: projectImage2,
    description: `Created a project for PCB error detection with the assistance of Python’s OpenCV library for Image processing.
     In this Project by comparing sample image with standard image counters are detected.`,
    techstack: "Python, Image Processing, Machine Learning",
    githubLink:"https://github.com/avinash275/PCB-Detection",
    previewLink:"https://pcb-detection-1.onrender.com/"
  },
  {
    title: "AICTE IdeaLab Using VR",
    image: projectImage3,
    description: `Created a walkthrough experince in VR of AICTE Idealab of KKWIEER College, Nashik.`,
    techstack: "Unity, Virtual Reality, Game Development",
    previewLink:"https://youtu.be/-cs91d3Gars"
  },
  {
    title:"YOUTUBE Clone",
    image:projectImage4,
    description:`Created using React, Rapid API. In this project I have learnt how to handle different kinds of API's.`,
    techstack:"React, Rapid API",
    previewLink:"https://youtubeclonebyavi.netlify.app/"
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "avinashvi275@gmail.com",
  phone: "+91 93229 88029",
};
