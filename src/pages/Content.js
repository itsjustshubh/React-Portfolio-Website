// Data and Asset Imports
import { backgroundVideo,

    // Education
    northeasternLogo,
    londonEconomicsLogo,
    singaporeInternationalSchoolLogo,
    harvardSummerSchoolLogo,
    georgeComputerTuitionLogo,
    podarInternationalSchoolLogo,
    ryanInternationalSchoolLogo,

    // Icons
    devpost,
    instagram,
    awtl,
    edith,
    socialCloud,
    husky,
    northeastern,
} from './Assets';

import {
    // Some Built in Icons
    faApple,
    faPython,
    faJava,
    faReact,
    faJs,
    faNode,
    faHtml5,
    faAws,
    faGithub,
    faMedium,
    faYoutube,
    faGoogleDrive,
    faAirbnb,
    faArtstation,
    faCcVisa,
    faChrome,
    faLinkedin,
    faResearchgate,
    faVuejs,
    faPhp,
    faAngular,
    faCss3,
    faSass,
    faLess,
    faWordpress,
    faGit,
    faGitlab,
    faNpm,
    faYarn,
    faDocker,
    faGulp,
    faGrunt,
    faSymfony,
    faLaravel,
    faYii,
    faAdobePhoneGap,
    faAppStoreIos,
    faBitbucket,
    faBootstrap,
    faBuffer,
    faDigitalOcean,
    faDiscord,
    faEmber,
    faJquery,
    faJira,
    faMarkdown,
    faRaspberryPi
    // Import additional icons as needed
} from "@fortawesome/free-brands-svg-icons";

import {
    faCode,
    // Some Built in Icons
    faFileText, faNewspaper, faPaintbrush, faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";

// Content Configuration
const logotext = "JOHN";
const meta = {
    title: "Shubh Thorat",
    description: "I’m Shubh Thorat computer scientist _ Full stack developer, currently working in Boston",
};

const styling = {
    background: backgroundVideo,
};

const data = {
    title: "Shubh Thorat",
    displayedPurpose: "Portfolio",
    websitePurpose: "Digital Portfolio",
    animated: [
        "Programming Adventurer & Tech Enthusiast",
        "Innovative Tech Visionary & Code Wizard",
        "Digital Explorer & Software Savant",
        "Tech Trailblazer & Coding Connoisseur",
        "Creative Code Artist & Tech Aficionado",
        "Software Innovator & Technology Enthusiast",
        "Innovative Tech Visionary & Code Wizard",
        "Passionate Programmer & Tech Trendsetter",
        "Cutting-Edge Developer & IT Enthusiast",
        "Tech-Savvy Innovator & Coding Specialist",
        "Future-Focused Technologist & Code Craftsman",
        "Digital Creator & Technology Advocate",
        // add more below
    ],
    description: "In my opinion, coding has the potential to change the world in ways previously only dreamt.\n" +
        "\n" +
        "My objective is to showcase the various avenues of coding by exploring different ideas and experimenting with them.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
    skill: "My Languages:",
    contactTitle: "Connect with me on:",
    projectsTitle: "Welcome To My Projects",
};

const skills = [
    {
        hours: 1,
        name: "Python",
        icon: faPython,
    },
    {
        hours: 1,
        name: "Java",
        icon: faJava,
    },
    {
        hours: 1,
        name: "JavaScript",
        icon: faJs,
    },
    // ... Add other skills here
    {
        hours: 1,
        name: "React",
        icon: faReact,
    },
    {
        hours: 1,
        name: "Node.js",
        icon: faNode,
    },
    {
        hours: 1,
        name: "HTML5",
        icon: faHtml5,
    },
    {
        hours: 1,
        name: "AWS",
        icon: faAws,
    },
    // ... Continue adding other skills
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Northeastern University",
    period: "Sep 2022 - Apr 2026",
    course: "Specialization in Artificial Intelligence",
    description: "Engaged in a comprehensive Computer Science program at Northeastern University, focusing on Artificial Intelligence. This course is enriching my knowledge in algorithms, AI applications, and system design. " +
        "\n\nComplementing this, my minor in Business Administration offers valuable insights into the synergy between technology and business management, equipping me with leadership and strategic skills vital in the tech industry. My involvement in various leadership roles on campus has further enhanced my practical experience.",
    image: northeasternLogo,
  },
  {
    degree: "Summer School Program",
    institution: "London School Of Economics",
    period: "Jun 2023 - Aug 2023",
    course: "Data Science and Marketing",
    description: "At LSE's Summer School, I delved into Data Science and Marketing, gaining in-depth knowledge in big data analytics, machine learning's role in decision-making, and effective marketing strategies." +
        "\n\nThe courses provided valuable insights into customer behavior, data interpretation, and applying these insights to real-world business strategies, enriching my understanding of the interplay between technology and market dynamics.",
    image: londonEconomicsLogo,
  },
  {
    degree: "International Baccalaureate",
    institution: "Singapore International School",
    period: "Jul 2020 - May 2022",
    description: "Completing the International Baccalaureate at Singapore International School, I was challenged with an academically rigorous curriculum, focusing on Mathematics, Physics, and Chemistry at higher levels, alongside Business Management, Spanish, and English. " +
        "\n\nThe diverse academic environment fostered a global outlook and equipped me with the skills needed to excel in multicultural settings, preparing me for a global academic and professional landscape.",
    image: singaporeInternationalSchoolLogo
  },
  {
    degree: "Introduction to Computer Science with Python",
    institution: "Harvard Summer School",
    period: "Apr 2021 - Sep 2021",
    description: "My course at Harvard Summer School served as my formal introduction to computer science and programming. Centering around Python, the curriculum was an excellent blend of theoretical concepts and practical applications and computational problem-solving. " +
        "\n\nThe course laid a solid foundation in computer science principles, significantly influencing my academic trajectory. It spurred my curiosity in the field, driving me to explore more complex and diverse areas of computer science, and shaping my future academic pursuits in technology.",
    image: harvardSummerSchoolLogo
  },
  {
    degree: "C-Language Course",
    institution: "George Computer Tuition",
    period: "Sep 2019 - Apr 2020",
    description: "Beginning my programming journey with George Computer Tuition, I undertook a comprehensive course in C-language. This initial step into coding introduced me to fundamental concepts and logical structures, forming the basis of my understanding of computer programming. " +
        "\n\nThe rigorous training in this foundational language proved to be a critical stepping stone, igniting my passion for programming and significantly influencing my decision to major in Computer Science at Northeastern University. This course was a pivotal moment, setting the direction for my academic and professional pursuits in technology.",
    image: georgeComputerTuitionLogo
  },
  {
    degree: "IGCSE",
    institution: "Podar International School",
    period: "Sep 2017 - Apr 2020",
    description: "At Podar International School, the IGCSE curriculum provided me with a broad and varied academic experience. I navigated through challenging subjects, learning to adapt and develop effective study techniques. This period was critical for my academic growth, teaching me the value of resilience and adaptability in the face of challenges. " +
        "\n\nThe comprehensive curriculum laid a solid foundation in various subjects, contributing significantly to my overall development and shaping my approach to learning. This phase was instrumental in preparing me for higher academic endeavors and setting a robust foundation for future success.",
    image: podarInternationalSchoolLogo
  },
  {
    degree: "CBSE",
    institution: "Ryan International School",
    period: "Jun 2013 - Aug 2017",
    description: "My time at Ryan International School was foundational, marked by a diverse and enriching educational experience under the CBSE curriculum. The school's holistic approach to education emphasized not just academic excellence but also the development of key life skills such as communication, teamwork, and ethical decision-making. " +
        "\n\nThese formative years were crucial in shaping my character and personal development, instilling in me a strong sense of discipline and a passion for learning. The experiences and skills gained during this period have had a lasting impact, laying a strong foundation for my subsequent educational journey.",
    image: ryanInternationalSchoolLogo
  },
  // Add more entries below
];

const socialprofils = [
    {
        name: "Github",
        color: "rgb(0,62,84)",
        link: "https://www.github.com/itsjustshubh",
        icon: faGithub,
    },
    {
        name: "Linkedin",
        color: "rgb(11,101,194)",
        link: "https://www.linkedin.com/in/shubhthorat/",
        icon: faLinkedin,
    },
    {
        name: "Instagram",
        color: "LightSlateGrey",
        link: "https://www.instagram.com/_itsjustshubh/",
        icon: instagram,
    },
    {
        name: "YouTube",
        color: "rgb(255,0,0)",
        link: "https://www.youtube.com/@shubhthorat",
        icon: faYoutube,
    },
    {
        name: "Medium",
        color: "black",
        link: "https://shubhthorat.medium.com/",
        icon: faMedium,
    },
    {
        name: "iCloud Mail",
        color: "black",
        link: "mailto:reapers-arras.0y@icloud.com",
        icon: faApple,
    },
    {
        name: "Devpost",
        color: "rgb(100,148,185)",
        link: "https://devpost.com/software/edith-brshpa",
        icon: devpost,
    },
    // {
    //     name: "Khoury News",
    //     color: "grey",
    //     link: "https://www.khoury.northeastern.edu/meet-edith-the-ai-powered-schedule-assistant-designed-to-reduce-your-stress/",
    //     icon: faNewspaper,
    // },
];

const projects = [
    {
        hours: "1",
        name: "A Will To Live (AWTL)",
        backgroundColor: "rgb(0,62,84,50%)",
        image: awtl,
        timeline: "Oct 2020 - Dec 2021",
        description: "AWTL, a project close to my heart, focuses on aiding individuals battling mental health challenges. The initiative provides resources and support, fostering a community where everyone feels empowered to seek the help they need. My role as President of Technology and Logistics involved spearheading the website development, strategizing marketing approaches, and partnering with social influencers to promote wellness.",

        buttons: [
            {
                buttonIcon: faChrome,
                buttonText: "Explore AWTL Website",
                buttonLink: "https://shubhcthorat.wixsite.com/awtl",
            },
            {
                buttonIcon: faFileText,
                buttonText: "Detailed Insights",
                buttonLink: "/education",
            }
        ],
    },
    {
        hours: "1",
        name: "Social Cloud",
        backgroundColor: "rgb(0,123,255,30%)",
        image: socialCloud,
        timeline: "Aug 2020 - Dec 2021",
        description: "Social Cloud is an innovative platform where business ideas meet big data for a noble cause – supporting NGOs and Charities. I was part of an enthusiastic student team that built this unique agency, specializing in customized social marketing. Our efforts aimed to harness the power of digital platforms to create positive global impact.",

        buttons: [
            {
                buttonIcon: faChrome,
                buttonText: "Visit Social Cloud",
                buttonLink: "https://www.shubhthorat.com/socialcloud",
            },
            {
                buttonIcon: faYoutube,
                buttonText: "Social Cloud Insights",
                buttonLink: "https://socialcloud.org",
            }
        ]
    },
    {
        hours: "1",
        name: "Graphic Design",
        backgroundColor: "rgb(255,165,0,50%)",
        image: faPaintbrush,
        timeline: "Feb 2020 - Present",
        description: "My journey in Graphic Design began with a keen interest in video production and typography. I focus on creating instructional tech videos, aiming to bridge the technology gap for seniors. My work, which began with assisting the older generation in technology adoption, has now expanded to collaborating on diverse multimedia projects.",

        buttons: [
            {
                buttonIcon: faChrome,
                buttonText: "Graphic Design Portfolio",
                buttonLink: "https://www.shubhthorat.com/socialcloud",
            },
            {
                buttonIcon: faYoutube,
                buttonText: "Watch Tutorial Videos",
                buttonLink: "https://socialcloud.org",
            }
        ]
    },
    {
        hours: "50",
        name: "Edith (An AI Calendar App)",
        backgroundColor: "rgb(256,256,256,25%)",
        image: edith,
        timeline: "Oct 2023 - Present",
        description: "Edith redefines planning in the digital age, seamlessly integrating life's many facets into a single, intuitive planner. More than just a scheduling tool, Edith offers academic planning, mood-based music suggestions, astrological insights, and activity planning based on weather forecasts. This project, developed using agile methodologies and diverse APIs, stands out by prioritizing holistic well-being in daily organization.",

        buttons: [
            {
                buttonIcon: faGithub,
                buttonText: "Repository",
                buttonLink: "https://github.com/itsjustshubh/Emotion_Analysis_AI-Phase_One",
            },
            {
                buttonIcon: faNewspaper,
                buttonText: "Khoury Article",
                buttonLink: "https://www.khoury.northeastern.edu/meet-edith-the-ai-powered-schedule-assistant-designed-to-reduce-your-stress/",
            },
            {
                buttonIcon: faCode,
                buttonText: "Prototype",
                buttonLink: "https://drive.google.com/file/d/1itFukhWEn5DTPpNbw-OLsEtJN5uTv1HJ/view",
            },
            {
                buttonIcon: faGoogleDrive,
                buttonText: "Research Paper",
                buttonLink: "https://drive.google.com/file/d/1itFukhWEn5DTPpNbw-OLsEtJN5uTv1HJ/view",
            },
        ]
    },
    // Add more projects below...
];

const errorPage = {
        title: "404",
        subtitle: "This page does not exist. Reevaluate your URL in order to find what you're searching.",
        button: {
            icon: faArrowCircleLeft,
            text: "Return Home",
            link: "/",

            // Colors
            textColor: "ghostwhite",
            textBackgroundColor: "rgb(255, 255, 255, 20%)",

            // Colors On Hover
            textColor: "black", // changes the box shadow
            textBackgroundColor: "rgb(255, 255, 255, 20%)",
        },

        quotes: [
        {
            text: "Coding is one of the only forms of art, where the creation of the artist, the code, is never really seen by the public but rather only its representation. To truly understand the elegance of this art, view the code, the real art.",
            writer: "Shubh Thorat",
        },
        {
            text: "Technology is best when it brings people together.",
            writer: "Matt Mullenweg",
        },
        {
            text: "It's not a faith in technology. It's faith in people.",
            writer: "Steve Jobs",
        },
        {
            text: "The science of today is the technology of tomorrow.",
            writer: "Edward Teller",
        },
        {
            text: "Innovation distinguishes between a leader and a follower.",
            writer: "Steve Jobs",
        },
        {
            text: "The best way to predict the future is to invent it.",
            writer: "Alan Kay",
        },
        {
            text: "Any sufficiently advanced technology is equivalent to magic.",
            writer: "Arthur C. Clarke",
        },
        {
            text: "The only way to do great work is to love what you do.",
            writer: "Steve Jobs",
        },
        {
            text: "The purpose of software engineering is to control complexity, not to create it.",
            writer: "Pamela Zave",
        }
    ]
};

// Exporting all configurations
export {
    logotext,
    meta,
    styling,
    data,
    skills,
    education,
    socialprofils,
    projects,
    errorPage,
};
