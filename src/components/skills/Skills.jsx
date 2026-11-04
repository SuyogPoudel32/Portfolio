import React from 'react'
import Skill from './Skill'

const Skills = () => {
   
    const skills = [
      {
    id: "programming",
    title: "Programming",
    focus: "Writing expressive and reliable code across languages",
    items: [
      {
        name: "Python",
        level: 70,
        description: "Automation, backend services, data pipelines, and tooling.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      // {
      //   name: "C",
      //   level: -1,
      //   description: "Systems-level problem solving and performance-critical modules.",
      //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      // },
      {
        name: "JavaScript (ES6+)",
        level: 70,
        description: "Modern DOM manipulation, async workflows, and interactive UI logic.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
  name: "C",
  level: 40,
  description: "Programming fundamentals, data structures, memory management, and problem-solving.",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
},
{
  name: "Java",
  level: 40,
  description: "Object-oriented programming, core Java concepts, and application development.",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
},
    ],
  },
  {
    id: "web",
    title: "Web Development",
    focus: "Beautiful, performant frontends that feel alive",
    items: [
      {
        name: "HTML & Semantic Architecture",
        level: 90,
        description: "Accessible structure with SEO-friendly semantics.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      },
      {
        name: "CSS, Tailwind & Motion Design",
        level: 70,
        description: "Electric visual systems with responsive layouts and micro-interactions.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      },
      {
        name: "React + Tailwind + shadcn/ui",
        level: 40,
        description: "Reusable component systems with delightful animations.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "GSAP Animation Pipelines",
        level: 40,
        description: "Immersive storytelling using timeline-driven animation.",
        logo: "https://cdn.simpleicons.org/gsap/88CE02",
      },
    ],
  },
  {
    id: "data",
    title: "Data & Databases",
    focus: "Reliable persistence and clean, trustworthy datasets",
    items: [
      {
        name: "SQLite & MySQL",
        level: 80,
        description: "Designing schemas, syncing datasets, and query optimization.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PyMySQL Integrations",
        level: 80,
        description: "Bridging Python apps with relational databases securely.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Pandas & NumPy",
        level: 70,
        description: "Data cleaning pipelines, analytics, and statistical storytelling.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "Matplotlib & Visual Insights",
        level: 70,
        description: "Turning raw data into digestible visuals and reports.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
      },
      {
  name: "Power BI",
  level: 75,
  description: "Building interactive dashboards, data modeling, DAX measures, and business performance reports.",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/New_Power_BI_Logo_level2.png",

}
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflows",
    focus: "Crafting efficient developer experiences",
    items: [
      {
        name: "Git & GitHub",
        level: 80,
        description: "Collaborative version control and release automation.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "JSON/CSV Pipelines",
        level: 80,
        description: "Reliable import/export flows and data normalization routines.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Testing & QA Mindset",
        level: 85,
        description: "Focused on edge cases, maintainability, and documentation.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
  {
    id: "concepts",
    title: "Concepts",
    focus: "Core fundamentals that shape strong engineering decisions",
    items: [
      // {
      //   name: "Object-Oriented Design",
      //   level: 86,
      //   description: "Blueprints for scalable, maintainable systems.",
      //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      // },
      // {
      //   name: "Decorators & Exception Handling",
      //   level: 80,
      //   description: "Robust Python architecture that anticipates failure.",
      //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      // },
      {
        name: "File & Data Handling",
        level: 80,
        description: "Secure storage, parsing, and data governance.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Data Cleaning & Validation",
        level: 85,
        description: "Transform messy inputs into actionable intelligence.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  }]
    return (
       <div className='block md:flex flex-wrap gap-4'>
        {skills.map((elem)=> (<Skill skills={elem} key={elem.id} />))}
       </div>
    )
}

export default Skills
