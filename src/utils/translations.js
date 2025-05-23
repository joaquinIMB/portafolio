import { Code, Zap, BarChart3, Wrench } from "lucide-react";

export const translations = {
  es: {
    navLinks: [
      {
        id: 1,
        title: "Inicio",
        href: "#home",
      },
      {
        id: 2,
        title: "Servicios",
        href: `#services`,
      },
      {
        id: 3,
        title: "Proyectos",
        href: `#projects`,
      },
      {
        id: 4,
        title: "Contacto",
        href: "#contact",
      },
    ],
    mainPage: {
      title: "Hola! Soy",
      span: "Joaco",
      paragraph1: "Desarrollador de aplicaciones web",
      paragraph2: "Juntos podemos trasladar tus ideas a un proyecto real.",
      buttonContact1: "Hablemos",
      buttonAbout: "Sobre mí",
    },
    aboutMeSection: {
      title: "Desarrollador",
      span:"Full Stack",
      spanPresentation:"Sobre mi",
      paragraph1: "Hola! Soy Joaco. Comencé mi carrera como desarrollador hace más de 3 años.",
      paragraph2:
        "Luego de un año de estudio intensivo de manera autónoma, tuve la oportunidad de aplicar mis conocimientos en Punto Deportivo Argentina. Allí lideré el desarrollo de un sistema interno tipo helpdesk, lo que me permitió abordar desafíos reales de programación y análisis de procesos. Esta experiencia consolidó mi dominio del stack React, Next.js y Node.js, así como el diseño de bases de datos en SQL Server,interfaces responsivas con Tailwind CSS y buenas prácticas como el control de versiones y la optimización SEO.",
    },
    servicesSection: {
      spanPresentation: "Servicios",
      title: "Mis",
      span: "servicios",
      paragraph1:
        "Soluciones digitales personalizadas para impulsar tu presencia online y optimizar tus procesos.",
      services: [
        {
          id: "service1",
          name: "Desarrollo Web",
          paragraph1:
            "Creo aplicaciones y CRMs con interfaces modernas, intuitivas y optimizadas para brindar la mejor experiencia de usuario.",
          icon: Code,
          color: "from-cyan-500 to-blue-500",
        },
        {
          id: "service2",
          name: "Automatización con API's",
          paragraph1:
            "Desarrollo APIs que optimizan procesos, integrando datos de manera eficiente con servicios externos y bases de datos.",
          icon: Zap,
          color: "from-purple-500 to-pink-500",
        },
        {
          id: "service3",
          name: "Optimización de rendimiento",
          paragraph1:
            "Analizo tu sitio web con herramientas avanzadas, mejorando métricas clave como velocidad de carga y puntuación en Lighthouse.",
          icon: BarChart3,
          color: "from-cyan-500 to-purple-500",
        },
        {
          id: "service4",
          name: "Soporte y Mantenimiento",
          paragraph1:
            "Brindo asistencia técnica continua, resolviendo errores y garantizando el óptimo rendimiento de tu plataforma.",
          icon: Wrench,
          color: "from-blue-500 to-purple-500",
        },
      ],
    },
    projectsSection: {
      spanPresentation: "Proyectos",
      title: "Mis",
      span: "proyectos",
      paragraph1:
        "Explora algunos de mis trabajos recientes en desarrollo web.",
      projects: [
        {
          id: "project1",
          title: "Recon",
          description: "Plataforma de gestión financiera personal",
          paragraph1:
            "Aplicación web para administrar finanzas personales. Permite registrar gastos, visualizar estadísticas y consultar gráficos intuitivos que brindan una visión clara de la salud financiera del usuario.",
          technologies: "React, Firebase, Context API",
          image: "/recon.webp",
          linkDemo: "https://app-registro-gastos.web.app/iniciar-sesion",
          linkRepo: "https://github.com/joaquinIMB/Re-Con-Gastos",
        },
        {
          id: "project2",
          title: "HelpDesk Unity",
          description: "CRM interno para gestión de soporte técnico",
          paragraph1:
            "Sistema de tickets personalizado para Punto Deportivo, que permite al equipo registrar, actualizar y resolver tickets de soporte eficientemente. Incluye notificaciones en tiempo real, gestión de roles de usuario y paneles administrativos.",
          technologies:
            "React, Next Js 14, Node Js, Express, Tailwind CSS, MSSQL, RTK Query, Context API, Vercel",
          image: "/helpdesk.webp",
          linkDemo: "https://sistema-tickets-punto.vercel.app",
          linkRepo: "https://github.com/joaquinIMB/sistema-tickets",
        },
        {
          id: "project3",
          title: "Portafolio Next.js",
          description: "Portafolio web moderno de desarrollador",
          paragraph1:
            "Portafolio personal dinámico y responsivo diseñado para mostrar proyectos y habilidades con animaciones elegantes utilizando GSAP y Tailwind CSS. Construido para ser escalable, performante y visualmente atractivo.",
          technologies: "Next.js, Tailwind CSS, Vercel, GSAP",
          image: "/portafolio.webp",
          linkDemo: "https://portafolio-joaquin-exequiel.vercel.app/",
          linkRepo: "https://github.com/joaquinIMB/portafolio",
        },
        {
          id: "project4",
          title: "Portafolio CODERHOUSE",
          description:
            "Proyecto final del curso de Desarrollo Web en CODERHOUSE",
          paragraph1:
            "Sitio de portafolio estático creado como proyecto integrador para demostrar las habilidades adquiridas durante el curso. Incluye diseño responsivo, componentes estilizados con SCSS y organización clara de contenidos personales y profesionales.",
          technologies: "HTML, CSS, SCSS",
          image: "/portafolioCoder.webp",
          linkDemo: "https://proyectofinaljoaquinimbriago.netlify.app/",
          linkRepo: "https://github.com/joaquinIMB/Portafolio-CODERHOUSE",
        },
      ],
    },
    contactMeSection: {
      spanPresentation: "Contactame",
      title: "Hablemos de tu",
      span: "proyecto",
      paragraph1:
        "Hagamos realidad tu próxima página web con un diseño moderno y funcionalidades excepcionales.",
    },
    footerSection: {
      title: "Joaquin Imbriago",
      title2: "Navegación",
      title3: "Contacto",
      title4: "Suscríbete",
      paragraph1:
        "Desarrollador FullStack especializado en crear experiencias digitales modernas y atractivas.",
      paragraph2:
        "Recibe actualizaciones sobre mis nuevos proyectos y artículos.",
      copyright: "Joaquin Imbriago. Todos los derechos reservados.",
    },
    metadata: {
      page: "Inicio",
      title: "Portafolio Joaquin",
      description:
        "Portafolio creado por Joaquin Imbriago, desarrollador Full Stack.",
    },
  },
  en: {
    navLinks: [
      {
        id: 1,
        title: "Home",
        href: "#home",
      },
      {
        id: 2,
        title: "Services",
        href: `#services`,
      },
      {
        id: 3,
        title: "Projects",
        href: `#projects`,
      },
      {
        id: 4,
        title: "Contact",
        href: "#contact",
      },
    ],
    mainPage: {
      title: "Hi, I'm",
      span: "Joaco!",
      paragraph1: "Web Application Developer",
      paragraph2: "Together we can turn your ideas into a real project.",
      buttonContact1: "Get in touch",
      buttonAbout: "About me",
    },
    aboutMeSection: {
      title: "Full Stack",
      span:"Developer",
      spanPresentation:"About me",
      paragraph1: "I began my career as a developer over 3 years ago.",
      paragraph2:
        "After a year of intensive self-study, I had the opportunity to apply my knowledge at Punto Deportivo Argentina, where I led the development of an internal helpdesk system. This allowed me to tackle real-world challenges in programming and process analysis. The experience solidified my skills with the React, Next.js, and Node.js stack, database design using SQL Server, responsive interfaces with Tailwind CSS, and best practices such as version control and SEO optimization.",
    },
    servicesSection: {
      spanPresentation: "Services",
      title: "My",
      span: "services",
      paragraph1:
        "Custom digital solutions to boost your online presence and optimize you processes.",
      services: [
        {
          id: "service1",
          name: "Web Development",
          paragraph1:
            "I create applications and CRMs with modern, intuitive, and optimized interfaces to provide the best user experience.",
          icon: Code,
          color: "from-cyan-500 to-blue-500",
        },
        {
          id: "service2",
          name: "API Automation",
          paragraph1:
            "I develop APIs that optimize processes, efficiently integrating data with external services and databases.",
          icon: Zap,
          color: "from-purple-500 to-pink-500",
        },
        {
          id: "service3",
          name: "Performance Optimization",
          paragraph1:
            "I analyze your website using advanced tools, improving key metrics such as loading speed and Lighthouse scores.",
          icon: BarChart3,
          color: "from-cyan-500 to-purple-500",
        },
        {
          id: "service4",
          name: "Support & Maintenance",
          paragraph1:
            "I provide continuous technical assistance, resolving errors and ensuring optimal performance of your platform.",
          icon: Wrench,
          color: "from-blue-500 to-purple-500",
        },
      ],
    },
    projectsSection: {
      spanPresentation: "Projects",
      title: "My",
      span: "projects",
      paragraph1: "Explore some of my recent work in web development.",
      projects: [
        {
          id: "project1",
          title: "Recon",
          description: "Personal finance management platform",
          paragraph1:
            "A web application for managing personal finances. Users can track expenses, review statistics, and visualize data through intuitive graphs and charts, offering a clear view of their financial health.",
          technologies: "React, Firebase, Context API",
          image: "/recon.webp",
          linkDemo: "https://app-registro-gastos.web.app/iniciar-sesion",
          linkRepo: "https://github.com/joaquinIMB/Re-Con-Gastos",
        },
        {
          id: "project2",
          title: "HelpDesk Unity",
          description: "Internal CRM for managing technical support",
          paragraph1:
            "A customized internal ticketing system for Punto Deportivo, allowing staff to register, update, and resolve support tickets efficiently. Includes real-time notifications, user role management, and administrative dashboards.",
          technologies:
            "React, Next Js 14, Node Js, Express, Tailwind CSS, MSSQL, RTK Query, Context API, Vercel",
          image: "/helpdesk.webp",
          linkDemo: "https://github.com/joaquinIMB/sistema-tickets",
          linkRepo: "https://github.com/joaquinIMB/sistema-tickets",
        },
        {
          id: "project3",
          title: "Next.js Portfolio",
          description: "Modern web developer portfolio",
          paragraph1:
            "A dynamic and responsive personal portfolio designed to showcase projects and skills with elegant animations using GSAP and Tailwind CSS. Built to be scalable and performant with a strong aesthetic focus.",
          technologies: "Next.js, Tailwind CSS, Vercel, GSAP",
          image: "/portafolio.webp",
          linkDemo: "https://portafolio-joaquin-exequiel.vercel.app/",
          linkRepo: "https://github.com/joaquinIMB/portafolio",
        },
        {
          id: "project4",
          title: "CODERHOUSE Portfolio",
          description:
            "Final project for the Web Developer course at CODERHOUSE",
          paragraph1:
            "A static portfolio site built as a capstone project to demonstrate skills acquired during the course. It includes responsive layouts, styled components with SCSS, and clear organization of personal and professional projects.",
          technologies: "HTML, CSS, SCSS",
          image: "/portafolioCoder.webp",
          linkDemo: "https://proyectofinaljoaquinimbriago.netlify.app/",
          linkRepo: "https://github.com/joaquinIMB/Portafolio-CODERHOUSE",
        },
      ],
    },
    contactMeSection: {
      spanPresentation: "ContactMe",
      title: "Let's talk about your",
      span: "project",
      paragraph1:
        "Let's bring your next website to life with a modern design and exceptional features.",
    },

    footerSection: {
      title: "Joaquin Imbriago",
      title2: "Navegation",
      title3: "Contact",
      title4: "Suscribe",
      paragraph1:
        "Full-stack Developer specialized in creating modern and engaging digital experiences.",
      paragraph2: "Receive updates about my new projects and articles.",
      copyright: "Joaquin Imbriago. All rights reserved.",
    },
    metadata: {
      page: "Home",
      title: "Portfolio Joaquin",
      description:
        "Portfolio created by Joaquin Imbriago, Full Stack Developer.",
    },
  },
};
