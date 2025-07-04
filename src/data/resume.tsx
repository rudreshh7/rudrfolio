import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "rudresh",
  initials: "RJ",
  url: "https://rudresh.me",
  location: "Bengaluru,India",
  locationLink: "https://maps.app.goo.gl/giJWgGVfWbbfLujdA",
  description:
    "Full Stack Engineer focused on building products with extra attention to detail.",
  summary:
    " I’m currently focused on building and scaling my own projects, including clean-erp a [erp](https://cleanerp.vercel.app/) solution for startups and small business where I have implemented Role based Auth and lot of erp features and an [open-source UI library](https://apsaraui.vercel.app/) built with React and Tailwind. In the past, I interned at Xebia and Tensax, where I worked on frontend components, cloud architecture, and backend development. I completed a double degree in Computer Applications (BCA + MCA) from JECRC University. I am big nerd about Sci-fi and Fantasy movies. I love to lift and watch Cricket.",
  avatarUrl: "/fun.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "Go",
    "Postgres",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Javascript",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rudreshjha18@gmail.com",
    tel: "+91 8005818019",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rudreshh7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rudreshh7/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rudresh7x",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Xebia",
      href: "https://xebia.com/",
      badges: [],
      location: "Gurgaon/Jaipur",
      title: "SDE Intern",
      logoUrl: "/xebia.jpg",
      start: "Nov 2024",
      end: "April 2025",
      description: "Worked on Creating a Ticketing tool ",
    },
    {
      company: "Tensax",
      badges: [],
      href: "",
      location: "Remote",
      title: "FrontEnd Intern",
      logoUrl: "/tensax.png",
      start: "Jan 2023",
      end: "July 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "JECRC University",
      href: "https://jecrcuniversity.edu.in/",
      degree: "Master's Degree of Computer Aplication (MCA)",
      logoUrl: "/jecrc.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "JECRC University",
      href: "https://jecrcuniversity.edu.in/",
      degree: "Bachelor's Degree of Computer Aplication (BCA)",
      logoUrl: "/jecrc.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "cleanerp",
      href: "https://cleanerp.vercel.app/",
      dates: "April 2025 - Present",
      active: true,
      description:
        "all-in-one tool to manage teams and grow your business which help small startups with erp.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Clerk",
        "Radix UI",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://cleanerp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/rudreshh7/cleanerp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cleanerp.png",
      video: "",
    },
    {
      title: "Apsara UI",
      href: "https://apsaraui.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Designed, developed animated UI components for developers. Just copy and add in ur project.",
      technologies: ["Next.js", "React", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://apsaraui.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/rudreshh7/apsaraui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "pro-sensei",
      href: "https://prosensei.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "project management tool which keep ur task organized in a company .",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://prosensei.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rudreshh7/ProSensei",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Next Role",
      href: "https://next-role-opal.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a no nonsense job posting and hunting website with secured auth.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/rudreshh7/NextRole",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nextrole.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "November 23rd - 25th, 2023",
      location: "Jaipur",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "/smartindia.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Tech-a-thon",
      dates: "September 17th - 18th, 2022",
      location: "Jaipur",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "/ineuron.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
