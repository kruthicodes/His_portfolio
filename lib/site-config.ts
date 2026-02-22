export const siteConfig = {
  profile: {
    monogram: "A",
    name: "Abhishek Partap Singh",
    greeting: "Hello, I'm",
    roleLabel: "I build",
    buildItems: ["Cloud Platforms", "Microservices", "Full-Stack Applications"],
    summary:
      "Cloud & Middleware Engineer and Full-Stack Developer specializing in Spring Boot microservices, Oracle Cloud, Kubernetes, and DevOps automation.",
    email: "bakar.banda1711@gmail.com",
    location: "Bangalore, India",
    photoSrc: "/dp.jpg",
    photoAlt: "Abhishek Partap Singh profile photo"
  },
  sections: {
    about: true,
    whatIDo: true,
    projects: false,
    aiSystems: false,
    speaking: false,
    mentorship: false,
    contact: true
  },
  about: {
    title: "About",
    subtitle: "Cloud and middleware engineer focused on scalable architecture, resilient APIs, and automation-driven delivery.",
    body:
      "Working at Infosys and building scalable cloud solutions | Cloud Architect | JEE & Spring Microservices | REST API | Kafka | OCI, SaaS, PaaS | Middleware | Problem Solver (DSA)"
  },
  whatIDo: {
    title: "What I Do",
    subtitle: "Cloud-native engineering, production-grade microservices, and DevOps automation for scalable delivery.",
    cards: [
      {
        title: "Cloud & Middleware Engineering",
        desc: "Design cloud and middleware solutions across OCI services, Linux environments, and enterprise-grade deployment pipelines."
      },
      {
        title: "Microservices & APIs",
        desc: "Build scalable Spring Boot microservices, REST APIs, and Kafka-driven systems with performance and resilience in mind."
      },
      {
        title: "DevOps Automation",
        desc: "Automate CI/CD workflows with Jenkins, containerize workloads on Kubernetes, and streamline release operations."
      }
    ]
  },
  mentorship: {
    title: "Teaching & Mentorship",
    subtitle:
      "Focused coaching for placements, interviews, DSA, system design, and practical AI implementation.",
    description:
      "Mentorship combines structured roadmap planning, project-based review cycles, and focused guidance for placement preparation, interview preparation, DSA coaching, system design rounds, and AI project readiness.",
    focusItems: [
      "Placement prep with role-wise strategy and timelines",
      "Interview prep with targeted question strategy and feedback loops",
      "DSA coaching focused on patterns, speed, and clarity",
      "System design mentoring for LLD and HLD rounds",
      "AI mentoring for real-world application and deployment"
    ],
    topmateUrl: "https://topmate.io/kruthika_r11/",
    topmateLabel: "Book a Mentorship Session on Topmate",
    stats: [
      { label: "Students Mentored", value: 100 },
      { label: "Hands-On Workshops", value: 10 }
    ]
  },
  contact: {
    title: "Contact",
    heading: "Let's Build, Speak, or Collaborate",
    email: "bakar.banda1711@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/abhishek-partap-singh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  }
} as const;

export function getNavItems() {
  const items = [
    { key: "about", label: "About", href: "#about" },
    { key: "whatIDo", label: "What I Do", href: "#what-i-do" },
    { key: "projects", label: "Projects", href: "#projects" },
    { key: "aiSystems", label: "AI Systems", href: "#ai-systems" },
    { key: "speaking", label: "Talks", href: "#speaking" },
    { key: "mentorship", label: "Mentorship", href: "#mentorship" },
    { key: "contact", label: "Contact", href: "#contact" }
  ] as const;

  return items.filter((item) => siteConfig.sections[item.key]);
}
