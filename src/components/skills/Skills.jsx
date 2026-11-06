import React from 'react'
import Skill from './Skill'
import {Python,JavaScript,Java,C,HTML,CSS,REACT,Gsap,SQLite,PowerBi,NumPyPandas,Matplotlib,Github,Vscode} from "../../assets/icons/Icons"

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
        logo: Python
      },

      {
        name: "JavaScript (ES6+)",
        level: 70,
        description: "Modern DOM manipulation, async workflows, and interactive UI logic.",
        logo: JavaScript
      },
      {
  name: "C",
  level: 40,
  description: "Programming fundamentals, data structures, memory management, and problem-solving.",
  logo: C
},
{
  name: "Java",
  level: 40,
  description: "Object-oriented programming, core Java concepts, and application development.",
  logo: Java
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
        logo: HTML
      },
      {
        name: "CSS, Tailwind & Motion Design",
        level: 70,
        description: "Electric visual systems with responsive layouts and micro-interactions.",
        logo: CSS
      },
      {
        name: "React + Tailwind + shadcn/ui",
        level: 40,
        description: "Reusable component systems with delightful animations.",
        logo: REACT
      },
      {
        name: "GSAP Animation Pipelines",
        level: 40,
        description: "Immersive storytelling using timeline-driven animation.",
        logo: Gsap
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
        logo: SQLite
      },
      {
        name: "PyMySQL Integrations",
        level: 80,
        description: "Bridging Python apps with relational databases securely.",
        logo: Python
      },
      {
        name: "Pandas & NumPy",
        level: 70,
        description: "Data cleaning pipelines, analytics, and statistical storytelling.",
        logo: NumPyPandas
      },
      {
        name: "Matplotlib & Visual Insights",
        level: 70,
        description: "Turning raw data into digestible visuals and reports.",
        logo: Matplotlib
      },
      {
  name: "Power BI",
  level: 75,
  description: "Building interactive dashboards, data modeling, DAX measures, and business performance reports.",
  logo: PowerBi

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
        logo: Github
      },
      {
        name: "JSON/CSV Pipelines",
        level: 80,
        description: "Reliable import/export flows and data normalization routines.",
        logo: JavaScript
      },
      {
        name: "Testing & QA Mindset",
        level: 85,
        description: "Focused on edge cases, maintainability, and documentation.",
        logo: Vscode
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
        logo: Python
      },
      {
        name: "Data Cleaning & Validation",
        level: 85,
        description: "Transform messy inputs into actionable intelligence.",
        logo: Python
      },
    ],

  }
]
    return (
       <div className='block md:flex flex-wrap gap-4'>
        {skills.map((elem)=> (<Skill skills={elem} key={elem.id} />))}
       </div>
    )
}

export default Skills
