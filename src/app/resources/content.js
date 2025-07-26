import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Erhenede",
  lastName: "Daniel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/profile.png",
  location: "Africa/Lagos", // IANA time zone identifier for Lagos, Nigeria
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Ready to take your digital experience to the next Level</>,
  description: (
    <>Reach out to me for collaboration, feedback, or just to say hello!</>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/obscuremd/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/erhenede-mudiaga-298a82276/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:md.erhenede@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>FullStack Javascript Developer</>,
  subline: (
    <>
      I'm Daniel, a fullstack developer skilled in Next.js, Node.js, and React.
      <br /> I build fast web apps and create my own products.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Erhenede Mudiaga Daniel, a frontend-focused fullstack developer
        specializing in JavaScript, TypeScript, and frameworks like Next.js,
        React, and Node.js.
        <br /> I build fast, scalable web apps with clean, maintainable code.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Euro 65 Motors",
        timeframe: "2025 - Present",
        role: "Lead Software Engineer & Product Manager",
        achievements: [
          <>
            Developed an Inventory Management System to help the organization
            track incoming and sold cars, enhancing security, safety, and
            transparency in operations.
          </>,
          <>
            Designed an intuitive user interface to ensure that staff with
            non-technical backgrounds could navigate and use the application
            effortlessly, minimizing the need for extensive training.
          </>,
          <>
            Developed an intuitive dashboard for executives to monitor sales and
            track progress from anywhere in the world. Implemented user-friendly
            UI features such as filtering, quick search, and streamlined
            navigation to enhance usability and efficiency.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Endevops",
        timeframe: "2023 - 2025",
        role: "Lead Software Engineer",
        achievements: [
          <>
            Collaborating with blockchain and AI engineers to develop an
            innovative AI-powered blockchain application designed for securely
            storing and managing Real-World Assets (RWA) on the blockchain.
          </>,
          <>
            Worked as the sole developer and designer on Pinoy, a user-centric
            delivery application, handling both the technical development and
            UX/UI design to ensure a seamless and intuitive user experience.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bells University of Technology",
        description: <>Studied Management Science.</>,
      },
      {
        name: "Nupat Technologies",
        description: <>Learnt FullStack Development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            Skilled in creating and prototyping intuitive, user-centric designs
            using Figma.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Skilled in transforming design concepts into responsive, functional
            web applications with Next.js and React.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js & MongoDB",
        description: (
          <>
            Experienced in developing scalable backend systems, including
            databases and APIs, with Node.js and MongoDB.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
