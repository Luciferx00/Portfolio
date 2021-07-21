/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Apurva Kumar Gupta",
  logo_name: "apurva.k()",
  nickname: "manu / picleric",
  full_name: "Apurva Kumar Gupta",
  subTitle:
    "Computer Science Student and a Freelance Web Devloper. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/193-bMKeFFJR1tIhUsxSjfM9nW4L9055M/view?usp=sharing",
  mail: "mailto:apurvakumarg@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Luciferx00",
  linkedin: "https://www.linkedin.com/in/apurva-kumar-gupta-4b640a1b8/",
  gmail: "apurvakumarg@gmail.com",

};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for Web",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS "
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
                // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#e5e5e5",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
       
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CMR Institute of Technology",
      subtitle: "BE in Computer Science & Engineering",
      logo_path: "cmrit.png",
      alt_name: "CMRIT",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Algorithm, Networking etc.",
        "⚡ I have also completed various online courses for Frontend and Backend Web Development, Cloud.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.cmrit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Cloud Services",
      subtitle: "Amazon Web Services",
      logo_path: "aws certified.png",
      certificate_link:
        "https://drive.google.com/drive/folders/16K_uBKd4LJnP8CLiXaoQ2WdVzQSB78Z5?usp=sharing",
      alt_name: "AWS",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "MERN Full Stack Web Development,",
      subtitle: "Udemy",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1C6TsuWyWZvJ3LFYHYd0Z_JQXmNneTEwP/view?usp=sharing",
      alt_name: "udemy",
      color_code: "#E2405F",
    },
    {
      title: "Big Data With Hadoop",
      subtitle: "Coursera",
      logo_path: "coursera.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1nDbnB7VQu9hFLMSSNUjN4TWvJ3qvTr1x/view?usp=sharing",
      alt_name: "coursera",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "HTML and CSS",
      subtitle: "Udemy",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1WtYh_jH-QQChwEzqA99OQUX_BVgdcvBN/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#2AAFED",
    },
    {
      title: "PHP Web Development",
      subtitle: "Coursera",
      logo_path: "coursera.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Tf_whX671_HpkvkRyy3qE_K5nH9Q0AlS/view?usp=sharing",
      alt_name: "coursera",
      color_code: "#fe0037",
    },
    {
      title: "jQuery, JSON and JS",
      subtitle: "Coursera",
      logo_path: "coursera.jpg",
      certificate_link:
        "https://drive.google.com/file/d/14XVNIGRApvJo56g8HiCz6uYupJoDgkTW/view?usp=sharing",
      alt_name: "coursera",
      color_code: "#2AAFED",
    },
    {
      title: "C++",
      subtitle: "Udemy",
      logo_path: "udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1E3TvPwSwVAZUuRuot8eK0QOD0y3aoGmo/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#fe0037",
    },
    
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internship. I've mostly done projects on my own and I am actively looking for internships.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "RMC Educational Services",
          company_url: "https://www.rmcedu.com/",
          logo_path: "rmc1.jpg",
          duration: "May 2021 - June 2021",
          location: "Work From Home",
          description:
            "To design frontend of the RMC Website and optimize the website speed.",
          color: "#0071C5",
        },
        {
          title: "WIX Website Developer Intern",
          company: "The Entrepreneurship Network",
          company_url: "https://www.entrepreneurshipnetwork.net/",
          logo_path: "ten.jpg",
          duration: "Sep 2020 - Oct 2020",
          location: "Work From Home",
          description:
            "To design frontend at Wix framework and link the frontend to the backend.",
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "TedxCMRIT",
          company_url: "https://www.ted.com/tedx/events/31663",
          logo_path: "tedx.png",
          duration: "Feb 2019 - May 2021",
          location: "College",
          description:
            "Helping to get sponsorship and supporting at event at TedxCMRIT",
          color: "#4285F4",
        },
        {
          title: "Web Developer and Volunteer",
          company: "Innovation Club CMRIT",
          company_url: "https://www.instagram.com/innovation_cmrit/",
          logo_path: "innovation_cmrit.jpg",
          duration: "Feb 2021 - Present",
          location: "Work from Home",
          description: "To develop websites for the events of the club.",
          color: "#196acf",
        },
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create clone of Famous sites. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "apurva.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  
};

const projects = {
  data: [
    {
      id: "0",
      name: "Whatsapp Clone",
      url: "https://github.com/Luciferx00/whatsapp-clone-mern",
      description: "This is a whatsapp clone build using Full Stack MERN.The front end is build using React. The backend is build using MongoDB, ExpressJS, NodeJS, Pusher.",
      languages: [
       
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        }
      ],
    },
    {
      id: "1",
      name: "Facebook Clone",
      url: "https://github.com/Luciferx00/facebook-clone",
      description:
        "Its a clone of Facebook based on React and Firebase. The front end part is based on React. The database and deployment is done using Firebase.",
      languages: [
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "Spotify Clone",
      url: "https://github.com/Luciferx00/spotify-clone",
      description:
        "This is a working clone of Spotify App. Its build using ReactJS, Spotify Web Api, Firebase. ",
      languages: [
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "3",
      name: "Twitter Clone",
      url: "https://github.com/Luciferx00/moziety-twitter",
      description:
        "This is a social media Twitter-type site built during Full Stack Web Development Workshop.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        
        
      ],
    },
    {
      id: "4",
      name: "Assignment Submission Analysis",
      url: "https://github.com/Luciferx00/Assignment-Submission-Analysis-Project",
      description:
        "This project is made completely on PHP.It has some exciting features like exporting table to excel, Arranging students assignment based on student_id,title,marks,submission date.",
      languages: [
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "MySQl",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "3",
      name: "Food Ordering System",
      url: "https://github.com/Luciferx00/Food-Ordering-System",
      description:
        "This is Food Ordering app based on PHP and SQL. It implements all DBMS Concepts.",
      languages: [
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "MySQl",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "4",
      name: "React Todo App",
      url: "https://github.com/Luciferx00/React-Todo-App",
      description:
        "This is a todoapp which is bulid using ReactJS. It was build while I was learing ReactJS.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    

  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
