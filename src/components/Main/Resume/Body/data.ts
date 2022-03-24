import { Content } from "../../../../types";

interface Education {
  title: string;
  content: string;
}

interface Link {
  title: string;
  href: string;
}

interface Data {
  summary: string;
  skills: string[];
  experience: Content[];
  education: Education[];
  links: Link[];
}

const data: Data = {
  summary:
    "Tech savvy Frontend Engineer professionally skilled in building Websites, and Web apps using latest, stable technologies and frameworks like VueJS, React, Svelte, Typescript, GraphQL, NodeJs, etc. With over 4 years of professional experience, I've helped companies and individuals solve technical problems by providing highly optimized websites and web apps that meets the required specications, at the appropriate time interval. Seeking to leverage proven experience, to work with an amazing team, and build more amazing projects.",
  skills: [
    "VueJS",
    "React",
    "Svelte",
    "GraphQL",
    "Node.js",
    "PostgreSQL",
    "React Native",
    "Angular",
    "CSS",
    "JavaScript",
    "TypeScript",
    "SQLite",
    "Go",
    "Docker",
    "Git",
    "MongoDB",
    "Vuetify",
    "MUI",
    "Nuxt",
    "Tailwind",
    "Bootstrap",
    "Unit testing",
  ],
  experience: [
    {
      title: "Senior Front End Developer",
      from: "01/2020",
      company: "Bex Multi Services",
      state: "Owerri",
      description: [
        "Optimize web apps for maximum performance, and accessibility following the WAI-ARIA standards.",
        "Test and debug existing web apps.",
        "Build reusable code and libraries for future use.",
        "Collaborate with other team members and stakeholders.",
        "Lead the junior frontend team in building elegant and sophisticated user interfaces.",
        "Built Admin dashboard using Nuxt, and Vuetify.",
      ],
    },

    {
      title: "Front End Engineer",
      from: "04/2019",
      to: "10/2020",
      company: "Parkway Projects Limited",
      state: "Lagos",
      description: [
        "Developed new user-facing features.",
        "Worked with the UI/UX designers to bridge the gap between graphical design and technical implementation.",
        "Ensured the technical feasibility of UI/UX designs.",
        "Worked closely with the back-end and full-stack developers to deliver consistent and reliable web experience.",
        "Built the front end of <a href='https://payzone.ng' target='_blank' rel='noopener' class='anchor'>Payzone</a>",
      ],
    },

    {
      title: "Front End Developer",
      from: "09/2018",
      to: "09/2019",
      company: "Ministry of Works",
      state: "Enugu",
      description: [
        "Designed engaging, responsive landing pages.",
        "Built the staff check in portal using React.",
        "Optimized web apps and web pages for speed, performance, and accessibility.",
        "Optimized web design for mobile and other platforms for maximum speed.",
      ],
    },

    {
      title: "Front End Developer Intern",
      from: "04/2017",
      to: "09/2017",
      company: "Exolve Technologies Limited",
      state: "Lagos",
      description: [
        "Assisted in developing and maintaining user-friendly websites.",
        "Maintaining an understanding of the latest Web applications and programming practices through education, study, and participation in conferences, workshops, and groups.",
        "Identifying problems uncovered by customer feedback and testing, and correcting or referring problems to appropriate personnel for correction",
        "Maintained website analysis spreadsheet by monitoring activity.",
      ],
    },
  ],
  education: [
    {
      title:
        "The Bells University of Technology - Ogun State | Bachelor of Science",
      content: "Project Management, 09/2018",
    },
  ],

  links: [
    {
      title: "Github",
      href: "https://github.com/c4benni",
    },
    {
      title: "Payzone",
      href: "https://payzone.ng",
    },
  ],
};

export default data;
