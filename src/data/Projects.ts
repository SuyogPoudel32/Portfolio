import {Project} from "../types/content"
export const projectCategories = ["All", "Python", "Web", "Data Analytics", "React"];
import PuSeatAllocationSystem from  "../assets/Images/PuSeatAllocationSystem.webp";
import Portfolio from  "../assets/Images/Portfolio.webp";
import HeadPhone from  "../assets/Images/HeadPhone.webp";
import Slider from  "../assets/Images/Slider.webp";
import CivicTrack from  "../assets/Images/CivicTrak.webp";
import TravelWebsite from  "../assets/Images/TravelWebsite.webp";
import VendorSales from  "../assets/Images/VendorSales.webp";
import EmployeeDataSet from  "../assets/Images/EmployeeDataSet.webp";
import EcommerceDataSet from  "../assets/Images/EcommerceDataSet.webp";

export const projects: Project[] = [

  {
  id: "pu-seat-allocation-system",
  title: "PU Seat Allocation System",
  description:
    "A fully automated seat allocation system designed for Pokhara University (PU) scholarship entrance. It prioritizes public sector students, allocates seats based on merit, program preferences, and available quotas, and provides clear visual insights (Note: It is only backend code).",
  shortDescription: "Automated PU scholarship seat allocation with data visualization.",
  categories: ["Python", "Data"],
  tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  image: PuSeatAllocationSystem,
  imageAlt: "Data visualization dashboard representing seat allocation",
  githubUrl: "https://github.com/SuyogPoudel32/PU-Seat-Allocation-System",
  demoUrl: null,
  achievements: [
    "Automated student seat allocation based on merit and preferences",
    "Handled 600+ student records with real-time seat deduction",
    "Integrated validation for incorrect or unavailable preferences",
    "Implemented visual insights using Matplotlib and Seaborn",
    "Generated CSV reports for both allocated and unallocated students"
  ],
  year: "2025"
},
{
  id: "personal-portfolio",
  title: "Personal Portfolio Website",
  description:
    "A responsive personal portfolio built with React and Vite to showcase projects, skills, and background. It includes project category filters and detail views, animated navigation, an interactive background, and a contact form powered by EmailJS.",
  shortDescription: "Responsive portfolio featuring projects, skills, and contact.",
  categories: ["React", "Web"],
  tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "EmailJS"],
  techStack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Vanta.js",
    "EmailJS"
  ],

  image: Portfolio,
imageAlt: "Web designer's portfolio displayed on a laptop",
  githubUrl: "https://github.com/suyogpoudel32/Portfolio",
  demoUrl: null,
  achievements: [
    "Built a responsive single-page portfolio with React and Vite",
    "Organized the site into introduction, about, skills, projects, and contact sections",
    "Added category filtering and project detail views",
    "Used Framer Motion and Vanta.js for interactive visual effects",
    "Integrated an EmailJS-powered contact form"
  ],
  year: "2026"
},
{
  id: "responsive-headphone-website",
  title: "Responsive Headphone Website",
  description:
    "A fully responsive headphone and audio gear landing page with smooth GSAP animations, modern UI/UX design, and a mobile-friendly layout. It showcases product features and engages users across all devices.",
  shortDescription: "Responsive headphone landing page with GSAP animations.",
  categories: ["Web"],
  tags: ["HTML", "CSS", "JavaScript", "GSAP"],
  techStack: ["HTML", "CSS", "JavaScript", "GSAP (GreenSock Animation)"],
  image: HeadPhone,
  imageAlt: "Black wireless headphones displayed on a minimal background",
  githubUrl: "https://github.com/SuyogPoudel32/responsive-headphone-website",
  demoUrl: null,
  achievements: [
    "Built a fully responsive, mobile-first headphone landing page",
    "Integrated GSAP animations for smooth transitions and interactions",
    "Created utility CSS and modular styles for maintainability",
    "Optimized layout for both desktop and mobile views",
    "Organized project structure with clear separation of concerns"
  ],
  year: "2025"
},
{
  id: "slider",
  title: "JS / CSS Slider Component",
  description:
    "A customizable slider / carousel component built with HTML, CSS, and JavaScript. Supports automatic sliding, navigation controls, smooth transitions, and responsive behavior.",
  shortDescription: "Custom slider / carousel component with controls & animations.",
  categories: ["Web" ],
  tags: ["HTML", "CSS", "JavaScript"],
  techStack: ["HTML", "CSS", "JavaScript"],
  image: Slider,
  imageAlt: "Carousel / slider showcasing images",
  githubUrl: "https://github.com/SuyogPoudel32/Slider",
  demoUrl: null,
  achievements: [
    "Built a fully functional image slider / carousel",
    "Included navigation controls and auto-slide functionality",
    "Ensured smooth transitions and responsive layout",
    "Modular, reusable code structure for easy integration",
    "Included pause / resume on hover, and loop behavior"
  ],
  year: "2025"
},


{
  id: "travel-website",
  title: "Travel Website",
  description:
    "A modern and responsive travel website designed to inspire and guide users in planning their trips. It features stunning UI/UX design, smooth animations, destination highlights, and an interactive layout for an immersive travel experience.",
  shortDescription: "Modern travel website with smooth animations and responsive UI.",
  categories: ["Web"],
  tags: ["HTML", "CSS", "JavaScript"],
  techStack: ["HTML", "CSS", "JavaScript"],
  image: TravelWebsite,
  imageAlt: "Beautiful travel destination with beach and sunset",
  githubUrl: "https://github.com/SuyogPoudel32/Travel-website",
  demoUrl: null,
  achievements: [
    "Built a fully responsive and visually appealing travel website",
    "Integrated smooth scroll animations and interactive UI elements",
    "Designed a modern layout showcasing travel destinations and packages",
    "Used clean, structured code for easy maintenance and scalability",
    "Optimized for fast loading and cross-device compatibility"
  ],
  year: "2025"
},
  {
    id: "employee-dataset-cleaning",
    title: "Employee Dataset Cleaning",
    description:
      "Custom dataset of 170 employee rows transformed into consistency-ready tables for analytics dashboards.",
    shortDescription: "Wrangled employee dataset for BI workflows",
    categories: ["Data Analytics"],
    tags: ["Python", "Data Cleaning", "Pandas"],
    techStack: ["Python", "Pandas", "NumPy"],
    image: EmployeeDataSet,
    imageAlt: "Data analyst workspace with vibrant lighting",
    githubUrl: "https://github.com/SuyogPoudel32/Employee-Data-Cleaning",
    demoUrl: null,
    achievements: [
      "Validated fields for missing values and inconsistent casing",
      "Delivered ready-to-use CSV exports and summary statistics",
    ],
    year: "2024",
  },


  {
  id: "civic-track",
  title: "CivicTrack - Smart Civic Issue Reporting System",
  description:
    "A smart civic issue reporting and tracking platform designed to connect citizens with municipal authorities. The system enables citizens to report public infrastructure problems, submit photographic evidence, track complaint progress, and provides administrators with tools to manage complaints, monitor resolution statuses, and support data-driven civic management.",
  shortDescription:
    "Smart civic issue reporting platform with complaint tracking and administrative management.",
  categories: ["Web", "Python"],
  tags: [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
  ],
  techStack: [
    "Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
  ],
  image: CivicTrack,
  imageAlt: "Modern city infrastructure representing smart city technology",
  githubUrl: "https://github.com/SuyogPoudel32/Civic_Track",
  demoUrl: null,
  achievements: [
    "Developed a civic issue reporting workflow connecting citizens and administrators",
    "Implemented complaint submission with issue categories, location details, and image evidence",
    "Designed administrative workflows for reviewing complaints and updating resolution statuses",
    "Structured relational database tables for users, complaints, complaint images, and status history",
    "Designed the platform to support transparent issue tracking and more efficient civic management"
  ],
  year: "2026"
},

{
  id: "vendor-sales-analysis",
  title: "End-to-End Vendor Sales Analysis",
  description:
    "An end-to-end data analytics project focused on evaluating vendor sales performance, profitability, and business trends. The project combines SQL-based data preparation, Python data cleaning and exploratory analysis, and Power BI visualization to transform sales data into meaningful business insights. It explores sales and profit performance to help identify vendor contribution, performance patterns, and opportunities for further investigation.",
  shortDescription:
    "End-to-end vendor sales analytics using SQL, Python, and Power BI.",
  categories: ["Data Analytics"],
  tags: [
    "SQL",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Power BI"
  ],
  techStack: [
    "SQL",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Power BI"
  ],
  image: VendorSales,
  imageAlt: "Business analytics dashboard displaying charts and performance metrics",
  githubUrl:
    "https://github.com/SuyogPoudel32/End-to-End-Vendor-Sales-Analysis",
  demoUrl: null,
  achievements: [
    "Built an end-to-end analytical workflow covering data preparation, exploration, and visualization",
    "Used SQL-related data extraction workflows to prepare data for further analysis",
    "Applied Python and Pandas for data manipulation, aggregation, and exploratory analysis",
    "Analyzed sales and profit metrics to investigate vendor performance and business trends",
    "Created a Power BI dashboard to communicate analytical results through interactive visualizations"
  ],
  year: "2026"
},

{
  id: "ecommerce-customer-behavior-analysis",
  title: "E-Commerce Customer Behavior & Sales Analysis",
  description:
    "A data analytics project that explores e-commerce sales performance and customer purchasing behavior using SQL and Python. The workflow includes loading CSV data into SQL, analyzing transactional data, and performing exploratory analysis with Python. The project provides a foundation for investigating sales trends, customer activity, and purchasing patterns through structured queries and data visualizations.",
  shortDescription:
    "E-commerce sales and customer behavior analysis using SQL and Python.",
  categories: ["Data Analytics"],
  tags: [
    "SQL",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook"
  ],
  techStack: [
    "SQL",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook"
  ],
  image: EcommerceDataSet,
  imageAlt: "Online shopping and digital commerce transactions",
  githubUrl:
    "https://github.com/SuyogPoudel32/E-Commerce-Customer-Behavior-Sales-Analysis-using-SQL-and-Python",
  demoUrl: null,
  achievements: [
    "Created a workflow for loading CSV-based sales data into a SQL database",
    "Used SQL to prepare and query structured e-commerce data",
    "Applied Python and Pandas for data cleaning, transformation, and exploratory analysis",
    "Investigated sales patterns and customer behavior using data analysis techniques",
    "Used Python notebooks to organize the analytical workflow and explore findings"
  ],
  year: "2026"
}






];