import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "rudresh jha",
  initials: "RJ",
  url: "https://rudresh.me",
  location: "Bengaluru,India",
  locationLink: "https://maps.app.goo.gl/giJWgGVfWbbfLujdA",
  description:
    "Software Engineer specializing in Frontend, with a strong eye for design and a solid understanding of backend.",
  summary:
    "I’m currently focused on building and scaling my own projects, including an [open-source UI library](https://chatgpt.com/c/685bbcca-25ac-8004-84af-8aa8e174ac32#projects) built with React and Tailwind, and a [SaaS platform](https://chatgpt.com/c/685bbcca-25ac-8004-84af-8aa8e174ac32#projects) that handles real-world workflows like auth, subscriptions, and role-based access. In the past, [I interned at Xebia and Tensax](https://chatgpt.com/c/685bbcca-25ac-8004-84af-8aa8e174ac32#experience), where I worked on frontend components, cloud architecture, and backend development. Before that, [I completed a double degree in Computer Applications (BCA + MCA) from JECRC University](https://chatgpt.com/c/685bbcca-25ac-8004-84af-8aa8e174ac32#education). I am big nerd about Sci-fi and Fantasy movies. I love to lift and watch Cricket.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
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
      href: "https://shopify.com",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
