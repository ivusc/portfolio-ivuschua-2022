import { IconType } from "react-icons";
import { FaAward, FaBook, FaBootstrap, FaBrain, FaClipboardCheck, FaCss3, FaEthereum, FaHtml5, FaKey, FaLaptopCode, FaMapMarkedAlt, FaMicrophone, FaNodeJs, FaReact, FaTrophy, FaWrench } from "react-icons/fa";
import { SiChakraui, SiDotnet, SiExpress, SiGoogleanalytics, SiMaterialui, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiReactrouter, SiRedux, SiSolidity, SiTailwindcss } from "react-icons/si";
import { RiPlantFill, RiTeamFill } from 'react-icons/ri';
import { GiRank3, GiStrong } from 'react-icons/gi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { MdPiano } from "react-icons/md";
import { TiWeatherDownpour } from 'react-icons/ti';
import { StaticImageData } from "next/image";

//PROJECT IMAGES
import {
  oopgProjectLogin, oopgProjectHome, oopgProjectDetails, oopgProjectCart,oopgProjectDB,
  edssProject, irp4InterimProject, irp2TinkerCad, irp2Circuit, irp3Circuit, irp3Schematic,
  irp5CarFront, irp5CarSide, irp5CarBC, irp4Schematic, irp4Circuit, irp4Dashboard, irp4Chatbot,
  irp1Catpult, irp1ScoreSys,dsagViewProd,dsagViewTrans,dsagDelTrans,
  intuitionLanding, intuitionLogin, intuitonStock, intuitionPG, intuitionGP,
  ssaCircuit, ssaParticipation, ssaRunnerUp,
  hackxOutput, hackxCode, hackxParticipation, hackxPrize,
  filmpireMain, filmpireLanding, filmpireMovieInfo, filmpireDarkMode, 
  cryptoketLanding, cryptoketCreateNFT, cryptoketBuyNFT, 
  blogLanding, blogLightMode, blogCreate, blogDetails, blogProfile, 
  libraryLanding, libraryPopular, libraryBookDesc, libraryCrowdIndication,
} from "../assets";
import React from "react";


//GENERAL STYLES
export const darkGradient = 'linear-gradient(45deg, #4c75ff 10%, #b673f8 80%)';
//export const darkGradient = 'linear-gradient(45deg, #FF1F01 10%, #FFC700 80%)';
export const lightGradient = 'linear-gradient(45deg, #60a5fa, #6e9cff, #8391ff, #9c84ff, #b673f8)';
export const cardLightGradient = 'linear-gradient(45deg, #60a5fa, #6e9cff, #8391ff, #9c84ff, #b673f8)';


//NAVBAR
export interface INavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: Array<INavItem> = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href : '/projects' },
  { label: 'Accomplishments', href: '/accomplishments' },
  { label: 'Contact', href: '/contact' },
];

//ABOUT PAGE

interface IDescription{
  description: string;
  p?:string | number;
}

export const DESCRIPTION: Array<IDescription> = [
  {
    description: `I am a student studying Engineering Science at Ngee Ann Polytechnic. 
    A hobby of mine is programming, and I inspire to become a software developer in the future.
    It is always satisfying to see your program or website run successfully, 
    which motivates me to continue improving on my coding skills.`,
    p:5,
  },
  {
    description:`Particularly, I am interested in web development and the technologies behind it.
    I am skilled in creating websites using React and .NET framework.
    Recently, I have started to learn about blockchain technology, and found it interesting.
    Other than programming, I enjoy listening to a variety of music genres and love to play the piano.`
  }
]


export interface IProgressContent{
  title: string;
  value: number;
}

export const PROGRESS_CONTENT : Array<IProgressContent> = [
  { title: "Python", value: 85 },
  { title: "C/C++", value: 60 },
  { title: "C#", value: 85 },
  { title: "Javascript", value: 50 },
  { title: "Typescript", value: 40 },
  { title: "Solidity", value: 27 },
]

export interface IWebDevContent{
  title: string;
  icon: IconType;
  href?:string;
}

export const WEB_DEV_CONTENT : Array<IWebDevContent> = [
  { title: 'HTML', icon: FaHtml5 },
  { title: 'CSS', icon: FaCss3 },
  { title: 'Bootstrap', icon: FaBootstrap },
  { title: 'Chakra UI', icon: SiChakraui },
  { title: 'Tailwind CSS', icon: SiTailwindcss },
  { title: 'React', icon: FaReact },
  { title: 'Next JS', icon: SiNextdotjs },
  { title: 'ASP.NET', icon: SiDotnet },
  { title: 'PostgreSQL / SQL', icon: SiPostgresql },
  { title: 'MongoDB', icon: SiMongodb },
  { title: 'Node JS', icon: FaNodeJs },
  { title: 'Solidity Smart Contract', icon: FaEthereum }
]

export interface ISoftSkills{
  title: string;
  content: string;
  icon: IconType;
}

export const SOFT_SKILLS_CONTENT : Array<ISoftSkills>  = [
  {
    title: 'Teamwork',
    content: `By working in group projects in school, I am experienced in working in groups and managing tasks.
    I respect ideas from different people and through understanding their strengths and weaknesses, the group would
    be effective in completing the project or tasks.`,
    icon: RiTeamFill,
  },
  {
    title: 'Resilient',
    content: `As I take my academic results seriously, I am focused on improving myself and the quality of work that I do.
    I am determined to work hard and not give up in times of failures.
    These failures motivated me to work even harder, so that I can achieve the results that I desire.`,
    icon:GiStrong,
  },
  {
    title: 'Communication',
    content: `Through my past CCA experiences, I have developed neccesary skills and confidence to communicate effectively with others.`,
    icon: BsFillChatDotsFill,
  },
  {
    title: 'Critical Thinking',
    content: `Through coding problems and my school work, I have developed critical thinking.
    These problems helped me to think deeper and find different methods to solve them.`,
    icon: FaBrain,
  }
]

interface IEducation{
  school: string;
  desc: string;
  duration: string;
}

export const EDUCATION : Array<IEducation> = [
  { school: 'Ngee Ann Polytechnic', desc: 'Diploma in Engineering Science', duration: '(April 2020 to Present)' },
  { school: `St. Gabriel's Secondary School`, desc: `GCE 'O' Levels`, duration: '(January 2016 to December 2019)' }
]

//ACCOMPLISHMENTS

export interface IAccomplishmentContent{
  title: string
  icon?: IconType
  desc?: string
}

export const POLY_ACADEMIC_ACHIEVEMENTS: Array<IAccomplishmentContent> = [
  { title: 'SUTD Module Exemptions (2021, 2022)', icon: SiGoogleanalytics },
  { title: 'Edusave Merit Bursary (2021)', icon: FaBook },
  { title: 'Best Module Performance Awards (2020,2021)', icon: FaTrophy },
  { title: `Director's List (Semester 1.1 & 1.2) (2020,2021)`, icon: FaAward },
]

export const SEC_ACADEMIC_ACHIEVEMENTS: Array<IAccomplishmentContent> = [
  { title: 'Edusave Merit Bursary (2018)', icon: FaBook },
  { title: 'National Youth Achievement Award (2018)', icon: FaAward },
  { title: 'Young Engineer Award (2017)', icon: FaWrench },
  { title: `Edusave Scholarship Award (2016,2017)`, icon: FaBook },
]

export const POLY_CCA_ACHIEVEMENTS: Array<IAccomplishmentContent> = [
  { title: 'SOE Rangers: Logistics IC for Bonding Day (2022)', icon: FaClipboardCheck },
  { title: 'SOE Rangers: Usher for Open House (2022)', icon: RiTeamFill },
  { title: 'Klavier Ensemble: Various Concerts (2020-2021)', icon: MdPiano },
]

export const SEC_CCA_ACHIEVEMENTS: Array<IAccomplishmentContent> = [
  { title: `NPCC: SGT Rank, Logistics IC (2018-2019)`, icon: GiRank3 },
]

export const OTHER_ACHIEVEMENTS: Array<IAccomplishmentContent> = [
  { title: 'ABRSM Piano Practical', desc: 'Grade 8 Performance', icon: MdPiano }, 
  { title: 'Step Stem Alive Camp 2021 (Science Centre Singapore)', desc: 'First Runner Up', icon: RiPlantFill },
  { title: 'HackathonX 2021 (Crimson Education)', desc: 'Notable Mention', icon: TiWeatherDownpour },
  { title: 'Coding Lab', desc: 'Certificate of Completion for courses', icon: FaLaptopCode }
]


// PROJECTS PAGE

export interface IProjectCardContent{
  title: string;
  desc: string;
  href: string;
  image: StaticImageData;
}

export const SCHOOL_PROJECTS_CARD_CONTENT : Array<IProjectCardContent> = [
  {
    title: 'Smart Door / Home Automation',
    desc: 'Three projects about home automation, in three different modules.',
    href: '/projects/school/smartdoor',
    image: edssProject,
  },
  {
    title: 'E-Commerce Store / Sales Tracker',
    desc: 'Two projects about building an e-commerce clone, in two different modules.',
    href: '/projects/school/ecommerce',
    image: oopgProjectHome,
  },
  {
    title: 'Smart Car / Autonomous Vehicle',
    desc: 'Two projects about smart car that are built in two different modules.',
    href: '/projects/school/avs',
    image: irp5CarSide,
  },
  {
    title: 'Other Projects',
    desc: 'Other projects built throughout my time in NP.',
    href: '/projects/school/otherproj',
    image: irp4InterimProject,
  }
]

export const HCKTN_PROJECTS_CARD_CONTENT : Array<IProjectCardContent> = [
  {
    title: 'iNTUition v8.0 2022',
    desc: 'iNTUition v8.0 is organised by NTU Open Source Society, and Developer Student Clubs NTU.',
    href: '/projects/hackathon/intuitionv8',
    image: intuitionLanding,
  },
  {
    title: 'Step-Stem-Alive Camp 2021',
    desc: 'Step-Stem-Alive Camp (SSA) is a 2 week hackathon organised by the Singapore Science Centre.',
    href: '/projects/hackathon/ssa2021',
    image: ssaCircuit,
  },
  {
    title: 'HackathonX 2021',
    desc: 'HackathonX, organised by Crimson Education, is a 2 day hackathon to create a solution.',
    href: '/projects/hackathon/hackathonx',
    image: hackxOutput,
  },
]

export interface IPersonalProject extends IProjectCardContent {
  tags?: Array<string>
}

export const PERSONAL_PROJECTS : Array<IPersonalProject> = [
  {
    title: 'Filmpire',
    desc: 'Filmpire is a AI-powered movie information app clone of IMDB.',
    href: '/projects/react/filmpire',
    image: filmpireMain,
    tags: ['React JS','Redux','Material UI'],
  },
  {
    title: 'Cryptoket',
    desc: 'Cryptoket is a Web3 Decentralised App (dApp) clone of a NFT marketplace.',
    href: '/projects/react/cryptoket',
    image: cryptoketLanding,
    tags: ['Next JS','Solidity','Tailwind CSS'],
  },
  {
    title: 'Blog App',
    desc: 'Blog App is a MERN full stack web app of a social media clone.',
    href: '/projects/react/blogapp',
    image: blogLanding,
    tags: ['React JS', 'Express', 'Node JS', 'Mongo DB'],
  },
  {
    title: 'Library App',
    desc: 'Library App is a project made for a module in school.',
    href: '/projects/react/libraryapp',
    image: libraryLanding,
    tags: ['React JS', 'Redux', 'Node JS']
  },
]

export interface IProjectCarousel{
  image: StaticImageData;
}

export interface IProjectContent{
  maintitle: string;
  content: Array<ISingleProject>
}


export interface ISingleProject{
  title: string;
  desc: string;
  name: string;
  sourceHref?: string;
}



// export const SMART_DOOR_IMAGES : Array<ISchoolProjectCarousel> = [
//   {
//     name: 'irp2',
//     images: [{ image: irp2Circuit }, { image: irp2TinkerCad }]
//   },
//   {
//     name: 'irp3',
//     images: [{ image: irp3Circuit },{ image: irp3Schematic }]
//   }
// ]

export const SMART_DOOR_IMAGES_IRP2 : Array<IProjectCarousel>= [
  { image: irp2Circuit },
  { image: irp2TinkerCad },
]

export const SMART_DOOR_IMAGES_IRP3 : Array<IProjectCarousel> = [
  { image: irp3Circuit },
  { image: irp3Schematic },
]


export const SMART_DOOR_CONTENT : IProjectContent = {
  maintitle: 'Smart Door / Home Automation',
  content: [
    { 
      name: 'irp2',
      title: 'Integrated Real World Project 2 (IRP2)',
      desc: `This project was done during IRP2, the theme was Engineering with Society. 
      My group has interviewed some elderly people living in Singapore to find out their pains,
      and to understand them better. After these interviews, I thought of the elderly people living in 
      the same condominium as me, and sometimes I see them struggling to open the gates it was very heavy for them. 
      Hence, my project was to create an automatic condo gate in which would help the elderly move in and out of 
      the condo premises much more easily.`,
    },
    {
      name: 'irp3-sd',
      title: 'Integrated Real World Project 3 (IRP3)',
      desc: `This project done in IRP3 is a continuation from my IRP2 project, which is a smart condo door. 
      The improvements being made in this project are the use of bluetooth and MIT app inventor, 
      with firebase to store passwords for better security of the condo gate, as well as additional sensors to sense 
      the surroundings for people better.`,
    },
    {
      name: 'edss',
      title: 'Embedded Systems (EDSS)',
      desc: `For EDSS, I did a home automation project, with the purpose of helping the elderly who are living 
      alone in Singapore. Home appliances such as the fan and lights (represented by a DC motor and LDR) can 
      be turned on and off automatically. There is also a smart door lock system, taking inspiration from IRP 2 
      and IRP 3 projects, which helps the elderly to move in and out of their houses more conveniently. 
      This whole project is written in C Register Level Code, which is a completely new experience for me, 
      and it was quite challenging.`,
    }
  ]
}
 
export const ECOMMERCE_CARD_CONTENT_OOPG : Array<IProjectCarousel> = [
  { image: oopgProjectLogin },
  { image: oopgProjectHome },
  { image: oopgProjectDetails },
  { image: oopgProjectCart },
  { image: oopgProjectDB }
]
 
 export const ECOMMERCE_CARD_CONTENT_DSAG : Array<IProjectCarousel> = [
  { image: dsagViewProd },
  { image: dsagViewTrans },
  { image: dsagDelTrans }
]


export const ECCOMMERCE_CONTENT : IProjectContent = {
  maintitle: 'E-Commerce Store / Sales Tracker',
  content: [
    {
      name: 'oopg',
      title: 'C# Object Oriented Programming (OOPG)',
      desc: `For Object Oriented Programming in C# (OOPG), I did an online e-commerce website clone, 
      where people can register as users, browse and buy different products being offered by the store. 
      Store owners can create, delete, view, update products. It is built with ASP.NET core web framework using Razor 
      Pages. For the backend, I used the local SQL server.`,
      sourceHref:'https://github.com/ivusc/ShopWeb',
    },
    {
      name: 'dsag',
      title: 'C# Data Structures and Algorithms (DSAG)',
      desc: `For Data Structures and Algorithms in C# (DSAG), I continued with the theme of 
      the online e-commerce website, and created a sales tracker that make use of the different data structures 
      taught in this module, (e.g. Stacks and Queues, Hashtables, BST).`,
    }
  ]
}

export const AV_CARD_CONTENT_IRP5 : Array<IProjectCarousel> = [
  { image: irp5CarFront },
  { image: irp5CarSide },
  { image: irp5CarBC }
]

export const AV_CONTENT : IProjectContent = {
  maintitle: 'Smart Car / Autonomous Vehicle',
  content: [
    {
      name: 'irp3-sv',
      title: 'Integrated Real World Project 3 (IRP3)',
      desc: `This is the second project done in IRP3 about a smart car. It utilizes multiple 
      different sensors that are connected to an arduino to navigate around. However, artificial intelligence 
      and machine learning has not been implemented. I was happy to see my work has paid off during the first 
      test run of the car in the video.`,
    },
    {
      name: 'irp5',
      title: 'Integrated Real World Project 5 (IRP5)',
      desc: `Currently in IRP5, we are building a Robot Platform, known as the Multi-agent System for non-Holonomic 
      Racing (MuSHR). In this project, the robot race car being used was developed to participate in NVIDIA's 
      DIY Autonomous Car Race, by the Personal Robotics Lab at the University of Washington's Paul G. Allen School 
      of Computer Engineering. This part would be updated once the project is done.`,
    }
  ]
}
 
export const OTR_PROJ_IRP4 : Array<IProjectCarousel> = [
  { image: irp4InterimProject },
  { image: irp4Schematic },
  { image: irp4Circuit },
  { image: irp4Dashboard },
  { image: irp4Chatbot }
]
 
export const OTR_PROJ_IRP1 : Array<IProjectCarousel> = [
  { image: irp1Catpult },
  { image: irp1ScoreSys },
]

export const OTHER_PROJECT_CONTENT : IProjectContent = {
  maintitle: 'Other Projects',
  content: [
    { 
      name: 'irp4',
      title: 'Integrated Real World Project 4 (IRP4)',
      desc: `The theme for IRP4 is about Urban Farming in Singapore, 
      with an emphasis on sustainable urban farming here.
      We were being tasked to create an environmental monitoring system which would help farmers 
      increase their productivity, so that the production of crops could be scaled up. I have used the 
      temperature sensor to track the temperature of the farm, and through the usage of IOT, the data would 
      be uploaded to a cloud platform, and can be viewed via a dashboard using ubidots (4th slide). Lastly, 
      I have integrated the use of a whatsapp chat bot to allow farmers to control the actuator (fan) for the farm 
      remotely (5th slide).`
    },
    { 
      name: 'irp1',
      title: 'Integrated Real World Project 1 (IRP1)',
      desc: `In IRP1, I built a catapult from reusable materials found from my home (slide 1), 
      After launching the projectiles, I recorded the measurements found and analyzed its motion. 
      Another task was to hit a certain target located a distance away from the launcher. 
      The tinkercad circuit (slide 2) was used to record the number of times that the projectile has 
      hit the target (not shown in here). Through working on this project, I learnt more about the physics 
      and math behind projectile motions and the basics of arduino programming.`
    }
  ]
}

export interface IHackathonProject{
  code: string;
  title: string;
  subtitle: string;
  desc: Array<string>;
  sourceHref?: string;
}

export const INTUITION_IMAGES : Array<IProjectCarousel> = [
  { image: intuitionLanding },
  { image: intuitionLogin },
  { image: intuitonStock },
  { image: intuitionPG },
  { image: intuitionGP }
]

export const INTUITION_CONTENT: IHackathonProject = {
  code: 'iv8-2022',
  title: 'iNTUition v8.0 2022',
  subtitle: 'by NTU Open Source Society',
  desc: [
    `iNTUition v8.0 is a hackathon organised by NTU Open Source Society, and Developer Student Clubs NTU in 2022. It is open to people of all ages, but mainly many participants are from NTU.`,
    `In this hackathon, we had a few topics to choose from. My group had chosen the topic on fintech and digital banking. We decided to create a digital banking clone with features such as scam prevention and a stocks viewing page.`,
    `We used ASP.NET core framework as we were familiar using it from OOPG in school, and also used google cloud platforms to host the Postgres SQL database. Furthermore, a stocks API was used for fetching the stocks data.`,
    `Although we did not win anything from this hackathon, we learnt many things such as introduction to cloud platforms, data analytics, flutter and how to use github to collaborate on coding projects.`,
  ],
  sourceHref: `https://github.com/DisabledAurora/Hexed-relics-Intuition`,
}

export const SSA_IMAGES : Array<IProjectCarousel> = [
  { image: ssaCircuit },
  { image: ssaParticipation },
  { image: ssaRunnerUp }
]

export const SSA_CONTENT : IHackathonProject = {
  code: 'ssa',
  title: 'Step-Stem-Alive Camp 2021',
  subtitle: 'by Science Centre Singapore',
  desc: [
    `Step-Stem-Alive Camp (SSA) is a 2 week hackathon organised by the Singapore Science Centre, with students participating from the diffrent countries in Southeast Asia.`,
    `In this hackathon, we had to create an Engineering Solution to a problem related to the Sustainable Development Goals by the United Nations (UNSDGs). using Micro-Bit. My group was given the task of doing SDG 12, about responsible consumption and production in Indonesia.`,
    `We came up with the idea of a smart trash can which helps people to segregate trash into different bins so that they can be recycled much more easily.`,
    `Our work had paid off as my team emerged as the first runner up for this hackathon.`,
  ]
}

export const HCKX_IMAGES : Array<IProjectCarousel> = [
  { image: hackxCode },
  { image: hackxOutput },
  { image: hackxParticipation },
  { image: hackxPrize }
]

export const HCKX_CONTENT : IHackathonProject = {
  code: 'hckx',
  title: 'HackathonX 2021',
  subtitle: 'by Crimson Education',
  desc: [
    `HackathonX, organised by Crimson Education, is yet another 2 day hackathon in which we had to solve another problem relating to the UN SDGs.`,
    `In this hackathon, it was an individual project, and I had to create a solution using Javascript and the p5.js library.`,
    `This time, the topic that I chose was SDG 11, about making cities inclusive, safe, resilient and sustainable. I had the idea of creating a single webpage that fetches json data from a disaster forecast website through an api, and render the data to that page.`,
    `This was my first webpage that I created and I was still a beginner to web development. However, it was still functional, and I ended up a notable mention for it.`
  ]
}

export interface IProjectStack{
  icon: IconType;
  title: string;
}

export interface IReactProject {
  name: string;
  desc: string;
  stack: Array<IProjectStack>;
  takeaways?: Array<string>;
  sourceHref: string;
  demoHref: string;
  apiHref?: string;
}

export const FILMPIRE_IMAGES : Array<IProjectCarousel> = [
  { image: filmpireMain },
  { image: filmpireLanding },
  { image: filmpireMovieInfo },
  { image: filmpireDarkMode }
]

export const FILMPIRE_CONTENT : IReactProject = {
  name: 'Filmpire',
  desc: `Filmpire is a AI-powered Movie Information Website clone using various web technologies shown below. 
  Movies data were fetched from The Movie Database (TMDB) API. Users can login to their TMDB account, favorite movies, 
  add them to watchlist, search and filter movies through text or voice, as well as actors, and read about them.`,
  stack: [
    { icon: FaReact, title: 'React JS' },
    { icon: SiRedux, title: 'Redux Toolkit' },
    { icon: SiMaterialui, title: 'Material UI' },
    { icon: SiReactrouter, title: 'React Router' },
    { icon: FaMicrophone, title: 'Alan AI' }
  ],
  takeaways: [
    'Learnt about React folder structure and best practices',
    'Learnt how to use Redux Toolkit for state management',
    'Learnt to use Material UI',
    'Learnt to use Alan AI for speech to text'
  ],
  sourceHref: 'https://github.com/ivusc/Filmpire',
  demoHref: 'https://filmpire-ivusc.netlify.app/',
  apiHref: 'https://www.themoviedb.org/',
}

export interface ICryptoketContent extends IReactProject{
  blockchaindesc: string;
  blockchainimg: string;
}

export const CRYPTOKET_IMAGES : Array<IProjectCarousel> = [
  { image: cryptoketLanding },
  { image: cryptoketCreateNFT },
  { image: cryptoketBuyNFT },
]

export const CRYPTOKET_CONTENT : ICryptoketContent = {
  name: 'Cryptoket',
  desc: `Cryptoket is an OpenSea clone, a NFT market place dApp where users can create,
  buy, sell and resell NFTs, through the use of Ethereum. The smart contract being 
  used is deployed to the Goerli Test Network. Users are required to connect their 
  MetaMask wallet in order to create, buy and sell NFTs.`,
  stack: [
    { icon: SiNextdotjs, title: 'Next JS' },
    { icon: SiReact, title: 'React JS' },
    { icon: SiSolidity, title: 'Solidity' },
    { icon: FaEthereum, title: 'Ethereum Network' },
    { icon: SiTailwindcss, title: 'Tailwind CSS' },
  ],
  blockchaindesc: `Smart contracts are simply programs stored on a blockchain 
  that run when predetermined conditions are met. They typically are used to 
  automate the execution of an agreement so that all participants can be 
  immediately certain of the outcome, without any intermediary's involvement or 
  time loss. They can also automate a workflow, triggering the next action when 
  conditions are met.`,
  blockchainimg: `https://blog.hubspot.com/hubfs/How%20Smart%20Contracts%20Will%20Impact%20The%20Future%20of%20Customer%20Service.jpeg`,
  takeaways: [
    'Learnt to use Next JS for file routing',
    'Learnt how to build and deploy smart contracts to a test network',
    'Learnt about the basics of blockchain technology',
    'Learnt about React Best Practices',
    'Learnt to use Tailwind CSS'
  ],
  sourceHref: 'https://github.com/ivusc/CryptoKet',
  demoHref: 'https://crypto-ket.vercel.app/'
}
 
export const BLOG_APP_IMAGES : Array<IProjectCarousel> = [
  { image: blogLanding },
  { image: blogLightMode },
  { image: blogCreate },
  { image: blogDetails },
  { image: blogProfile }
]

export const BLOG_APP_CONTENT : IReactProject = {
  name: 'Blog App',
  desc: `This project is a social media clone where users can post pictures, like posts, delete posts and comment 
  on posts, just like any other social media platform. It is my first full stack application outside the .NET 
  framework. This web app uses the MERN stack, with a custom API to fetch the data from MongoDB. The frontend is 
  then deployed using Netlify, while the backend is deployed using Heroku.`,
  stack: [
    { icon: FaReact, title: 'React JS' },
    { icon: SiRedux, title: 'Redux Toolkit' },
    { icon: SiReactrouter, title: 'React Router' },
    { icon: SiChakraui, title: 'Chakra UI' },
    { icon: SiExpress, title: 'Express' },
    { icon: SiNodedotjs, title: 'Node JS'},
    { icon: FaKey, title: 'JWT Cookie Authentication' },
    { icon: SiMongodb, title: 'Mongo DB' }
  ],
  takeaways: [
    'Learnt about React folder structure and best practices',
    'Learnt to use Redux Toolkit for state management',
    'Learnt to use JWT cookie based authentication',
    'Learnt to use Express API to handle HTTP requests',
    'Learnt to connect and use Mongo DB to store documents and subdocuments',
    'Learnt to query Mongo DB to do CRUD operations'
  ],
  sourceHref: 'https://github.com/ivusc/Blog',
  apiHref: 'https://blogapi-crix.herokuapp.com/posts',
  demoHref: 'https://blogapp-crix.netlify.app/',
}

export const LIBRARY_APP_IMAGES : Array<IProjectCarousel> = [
  { image: libraryLanding },
  { image: libraryPopular },
  { image: libraryBookDesc },
  { image: libraryCrowdIndication }
]

export const LIBRARY_APP_CONTENT : IReactProject = {
  name: 'Library App',
  desc: `This project is a library website clone, done for a school module called Project ID - Conneting the Dots (PROID).
  It is an improved library website that is catered to people with disabilities (PWDs). Users can search for books using
  text or speech, find books by genres, and read a short summary of the books. They can also use the services page to find the nearby 
  libraries, and look at the crowd indication level of each library.`,
  stack: [
    { icon: SiReact, title: 'React JS' },
    { icon: SiChakraui, title: 'Chakra UI' },
    { icon: SiRedux, title: 'Redux Toolkit' },
    { icon: SiReactrouter, title: 'React Router' },
    { icon: SiNodedotjs, title: 'Node JS' },
    { icon: FaMapMarkedAlt, title: 'Google Maps API' },
    { icon: FaBook, title: 'Google Books API' },
  ],
  takeaways: [
    'Learnt to use Browser Navigator API to find latitude and longitude',
    'Learnt to use Google Maps Places API to find the nearest landmarks',
    'Learnt to use Redux Toolkit Query to query the backend'
  ],
  sourceHref: 'https://github.com/ivusc/Library-Website',
  demoHref: 'https://library-website-proid.netlify.app/'
}