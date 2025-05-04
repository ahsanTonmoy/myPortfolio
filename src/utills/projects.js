// image
import bistroBoss from '@/assects/image/work/bistroBoss.png';
import fruitBrust from '@/assects/image/work/fruit-brust.jpg';
import phTube from '@/assects/image/work/ph-tube.jpg';
import gameHunt from '@/assects/image/work/game-hunting.jpg';
import summerSale from '@/assects/image/work/summer-sale.jpg';
export const projects = [
    {
      id: "664dfe5f3a1c4f0f0d5c1a01",
      title: "Basa Finder Platform",
      description:
        "A smart rental platform built with Next.js and TailwindCSS, featuring role-based access, secure payments, and responsive design.",
      overview:
        "Basa Finder is a full-stack web application designed to simplify rental housing in Bangladesh, allowing tenants, landlords, and admins to interact through dedicated dashboards with secure features.",
      problemStatement:
        "Traditional rental systems lacked transparency and digital access for users in Bangladesh. A centralized and scalable platform was needed for smoother interactions and management.",
      image: bistroBoss,
      github: "https://github.com/mizan-rh/basa-finder-client",
      demo: "https://basa-finder-client-swart.vercel.app/",
      featured: true,
      category: "Web",
      completedDate: "March 2025",
      role: "Full Stack Developer",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "TypeScript",
        "Framer Motion",
      ],
      features: [
        "Role-based dashboards for tenants, landlords, and admins",
        "Responsive design with modern UI components",
        "Secure rent payments via ShurjoPay integration",
        "Property listing with filters and media upload",
        "Request approval and communication workflow",
        "Admin tools for user and content management",
      ],
      challenges: [
        {
          title: "Payment Integration",
          description:
            "Integrating a localized payment gateway (ShurjoPay) was complex due to limited documentation and testing access.",
          solution:
            "Collaborated with ShurjoPay support, used sandbox mode extensively, and created robust success/failure handlers.",
        },
        {
          title: "Dynamic Role-Based Routing",
          description:
            "Managing access control for three distinct user roles was initially error-prone.",
          solution:
            "Implemented dynamic route guards and context-based auth state using JWT tokens and secure cookies.",
        },
      ],
    },
    {
      id: "664dfe5f3a1c4f0f0d5c1a02",
      title: "Bike Store E-Commerce Platform",
      description:
        "A full-stack e-commerce platform for bike sales with user authentication, product management, and order processing.",
      overview:
        "Bike Store Client is a comprehensive web application for browsing, purchasing, and managing bikes. It features an admin panel for managing inventory, orders, and users, alongside a user-friendly front-end for customers.",
      problemStatement:
        "The traditional bike selling model lacked an efficient online platform for customers to browse and purchase bikes, and for admins to manage inventory and orders seamlessly.",
      image:"https://i.ibb.co/jkPHGTWb/Home-Bike-Shop-Online-Delivary-feature.png",
      github: "https://github.com/mizan-rh/bike-store-client",
      demo: "https://bike-store-b4-a4-frontend.vercel.app/",
      featured: true,
      category: "Web",
      completedDate: "April 2025",
      role: "Full Stack Developer",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT (JSON Web Tokens)",
        "Vercel",
      ],
      features: [
        "Admin panel for product and order management",
        "Customer-friendly bike browsing and purchasing system",
        "Secure user authentication with JWT",
        "Role-based access control for admins and customers",
        "Responsive design for mobile and desktop",
        "Real-time order processing and status updates",
      ],
      challenges: [
        {
          title: "User Authentication",
          description:
            "Implementing secure login and role-based access control using JWT tokens presented challenges related to session management and token security.",
          solution:
            "Utilized secure HTTP-only cookies for storing tokens and implemented middleware to validate user roles before granting access to sensitive pages.",
        },
        {
          title: "Product Management",
          description:
            "Allowing admins to add, edit, and remove bike products efficiently while ensuring a seamless UI for both admins and customers was a challenge.",
          solution:
            "Developed a dynamic product management dashboard using React and MongoDB, enabling easy CRUD operations with real-time updates to the front-end.",
        },
      ],
    },
    {
      id: "664dfe5f3a1c4f0f0d5c1a03",
      title: "Yogayuq Yoga Class Booking Platform",
      description:
        "A yoga class booking platform with role-based access, secure payments, and responsive design.",
      overview:
        "Yogayuq is a web application that enables users to browse, book, and manage yoga classes. It includes dashboards for admins and instructors, secure login, and a user-friendly interface for students.",
      problemStatement:
        "Traditional yoga studios often lack a centralized digital solution for class booking and instructor management. Yogayuq solves this by offering an online platform for seamless scheduling and communication.",
      image: "https://i.ibb.co/Y5PVrxQ/Yogayuq-feature.png",
      github: "https://github.com/mizan-rh/yogayuq-client-side",
      demo: "https://summer-camp-ec2ea.web.app/",
      featured: true,
      category: "Web",
      completedDate: "April 2025",
      role: "Frontend Developer",
      technologies: [
        "React",
        "Firebase",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "Framer Motion",
        "React Hook Form",
      ],
      features: [
        "Role-based dashboards for admins, instructors, and students",
        "Secure authentication with Firebase",
        "Class booking and approval system",
        "Real-time updates and notifications",
        "Animations with Framer Motion",
        "Responsive and clean UI design",
      ],
      challenges: [
        {
          title: "Role-Based Access Control",
          description:
            "Managing access between students, instructors, and admins required careful logic to prevent unauthorized access.",
          solution:
            "Implemented conditional rendering and protected routes using Firebase auth and custom role-checking logic.",
        },
        {
          title: "Class Booking Management",
          description:
            "Enabling real-time updates to class availability was complex due to asynchronous data handling.",
          solution:
            "Used Firebase Realtime Database and state management to ensure booking data was synced and updated properly.",
        },
      ],
    },
  
];
