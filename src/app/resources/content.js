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
        timeframe: "Feb 2025 - Present",
        role: "Lead Software Engineer & Product Manager",
        achievements: [
          <>
            Led the end-to-end development of a comprehensive Inventory
            Management System to track incoming and sold vehicles, improving
            operational security, accuracy, and transparency.
          </>,
          <>
            Designed a user-friendly interface tailored for non-technical staff,
            reducing onboarding and training time by 60%.
          </>,
          <>
            Built an executive sales dashboard for remote performance
            monitoring, increasing management efficiency by 40%.
          </>,
          <>
            Implemented advanced UI features including filtering, quick search,
            and streamlined navigation, reducing task completion time by 35%.
          </>,
          <>
            Coordinated product strategy and engineering execution, ensuring
            timely feature delivery aligned with business objectives while
            improving decision-making through optimized reporting workflows.
          </>,
        ],
        images: [
          {
            src: "/images/about/euro65/1.png",
            alt: "euro65-1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/about/euro65/2.png",
            alt: "euro65-2",
            width: 16,
            height: 9,
          },
          {
            src: "/images/about/euro65/3.png",
            alt: "euro65-3",
            width: 16,
            height: 9,
          },
          {
            src: "/images/about/euro65/4.png",
            alt: "euro65-4",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Endevops",
        timeframe: "Dec 2023 - Jan 2025",
        role: "Lead Software Engineer",
        achievements: [
          <>
            Led development of an AI-powered blockchain platform for secure
            storage and management of Real-World Assets (RWA), collaborating
            with AI and blockchain engineers to deliver a scalable and secure
            solution.
          </>,
          <>
            Optimized blockchain asset workflows, improving transaction
            processing speed by 30% while maintaining high security standards.
          </>,
          <>
            Designed and built Pinoy, a delivery application, as the sole
            developer and UX/UI designer, increasing onboarding efficiency by
            40%.
          </>,
          <>
            Implemented end-to-end full-stack architecture (database design, API
            integration, frontend UX), reducing system errors during testing by
            90%.
          </>,
          <>
            Conducted user research and A/B testing, translating insights into
            UI/UX improvements that increased user retention by 25%.
          </>,
          <>
            Coordinated cross-functional teams to meet all project milestones
            ahead of schedule.
          </>,
        ],
        images: [],
      },
      {
        company: "Bira Solutions",
        timeframe: "Nov 2025 - Present",
        role: "Lead Software Engineer & Product Manager",
        achievements: [
          <>
            Led the planning, design, development, and deployment of multiple
            web applications for internal teams and external clients, delivering
            projects on time and within scope.
          </>,
          <>
            Designed and developed responsive, user-centered platforms aligned
            with client business goals, achieving 100% client satisfaction.
          </>,
          <>
            Developed and maintained platforms including BCCastings (talent
            portfolio & recruiter job board) and BCGym (modern gym website),
            increasing client engagement by 35–50%.
          </>,
          <>
            Spearheaded end-to-end project execution, translating client briefs
            into scalable, maintainable digital solutions across industries.
          </>,
          <>
            Implemented testing, optimization, and deployment best practices,
            ensuring production-ready applications with minimal downtime.
          </>,
          <>
            Introduced workflow improvements that reduced project turnaround
            time by 25% and enhanced overall team efficiency.
          </>,
        ],
        images: [
          {
            src: "/images/about/bira/1.png",
            alt: "euro65-1",
            width: 16,
            height: 9,
          },
          {
            src: "/images/about/bira/2.png",
            alt: "euro65-2",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Bells University of Technology",
        description: <>Studied Computer Science.</>,
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
