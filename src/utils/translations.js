import { Code, Zap, BarChart3, Wrench } from "lucide-react";

export const translations = {
  es: {
    navBar: {
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
    },
    mainPage: {
      title: "Hola! Soy",
      span: "Joaco",
      paragraph1: "Desarrollador de aplicaciones web",
      paragraph2: "Juntos podemos trasladar tus ideas a un proyecto real",
      buttonContact1: "Hablemos",
      buttonContact2: "Sobre mí",
    },
    servicesSection: {
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
      title: "Mis",
      span: "proyectos",
      paragraph1:
        "Explora algunos de mis trabajos recientes en desarrollo web.",
      projects: [
        {
          id: "project1",
          title: "ReCon",
          description: "Plataforma de gestión financiera personal",
          paragraph1:
            "Aplicación web para administrar finanzas personales. Permite registrar gastos, visualizar estadísticas y consultar gráficos intuitivos que brindan una visión clara de la salud financiera del usuario.",
          technologies: "React, Firebase, Context API",
          image: "/recon.jpg",
          linkDemo: "https://app-registro-gastos.web.app/iniciar-sesion",
          linkRepo:"https://github.com/joaquinIMB/Re-Con-Gastos"
        },
        {
          id: "project2",
          title: "HelpDesk Unity",
          description: "CRM interno para gestión de soporte técnico",
          paragraph1:
            "Sistema de tickets personalizado para Punto Deportivo, que permite al equipo registrar, actualizar y resolver tickets de soporte eficientemente. Incluye notificaciones en tiempo real, gestión de roles de usuario y paneles administrativos.",
          technologies:
            "Next.js 14, Express, Tailwind CSS, MSSQL, RTK Query, Context API",
          image: "/helpdesk.jpg",
          linkDemo: "https://sistema-tickets-punto.vercel.app",
          linkRepo:"https://github.com/joaquinIMB/sistema-tickets"
        },
        {
          id: "project3",
          title: "Portafolio Next.js",
          description: "Portafolio web moderno para desarrolladores",
          paragraph1:
            "Portafolio personal dinámico y responsivo diseñado para mostrar proyectos y habilidades con animaciones elegantes utilizando GSAP y Tailwind CSS. Construido para ser escalable, performante y visualmente atractivo.",
          technologies: "Next.js, Tailwind CSS, Vercel, GSAP",
          image: "/portafolio.jpg",
          linkDemo: "https://portafolio-joaquin-exequiel.vercel.app/",
          linkRepo:"https://github.com/joaquinIMB/portafolio"
        },
        {
          id: "project4",
          title: "Portafolio CODERHOUSE",
          description:
            "Proyecto final del curso de Desarrollo Web en CODERHOUSE",
          paragraph1:
            "Sitio de portafolio estático creado como proyecto integrador para demostrar las habilidades adquiridas durante el curso. Incluye diseño responsivo, componentes estilizados con SCSS y organización clara de contenidos personales y profesionales.",
          technologies: "HTML, CSS, SCSS",
          image: "/portafolioCoder.jpg",
          linkDemo: "https://proyectofinaljoaquinimbriago.netlify.app/",
          linkRepo:"https://github.com/joaquinIMB/Portafolio-CODERHOUSE"
        },
      ],
    },
    contactMeSection: {
      title: "Hablemos de tu",
      span: "proyecto",
      paragraph1:
        "Hagamos realidad tu próxima página web con un diseño moderno y funcionalidades excepcionales.",
    },
    footerSection:{
      title: "Joaquin Imbriago",
      paragraph1:"Desarrollador FullStack especializado en crear experiencias digitales modernas y atractivas.",
      paragraph2:"Recibe actualizaciones sobre mis nuevos proyectos y artículos.",
      copyright:"Joaquin Imbriago. Todos los derechos reservados.",
    },
    metadata: {
      page: "Inicio",
      title: "Portafolio Joaquin",
      description:
        "Portafolio creado por Joaquin Imbriago, desarrollador Full Stack.",
    },
  },
  en: {
    navBar: {
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
    },
    mainPage: {
      title: "Hi, I'm",
      span: "Joaco!",
      paragraph1: "Web Application Developer",
      paragraph2: "Together we can turn your ideas into a real project",
      buttonContact1: "Get in touch",
      buttonContact2: "About me",
    },
    servicesSection: {
      title: "My",
      span: "services",
      paragraph1:
        "Custom digital solutions to boost your online presence and optimize you processes.",
      services: [
        {
          id: "service1",
          title: "Web Development",
          paragraph1:
            "I create applications and CRMs with modern, intuitive, and optimized interfaces to provide the best user experience.",
          icon: Code,
          color: "from-cyan-500 to-blue-500",
        },
        {
          id: "service2",
          title: "API Automation",
          paragraph1:
            "I develop APIs that optimize processes, efficiently integrating data with external services and databases.",
          icon: Zap,
          color: "from-cyan-500 to-blue-500",
        },
        {
          id: "service3",
          title: "Performance Optimization",
          paragraph1:
            "I analyze your website using advanced tools, improving key metrics such as loading speed and Lighthouse scores.",
          icon: BarChart3,
          color: "from-cyan-500 to-blue-500",
        },
        {
          id: "service4",
          title: "Support & Maintenance",
          paragraph1:
            "I provide continuous technical assistance, resolving errors and ensuring optimal performance of your platform.",
          icon: Wrench,
          color: "from-cyan-500 to-blue-500",
        },
      ],
    },
    projectsSection: {
      title: "My",
      span: "projects",
      paragraph1:
        "Explore some of my recent work in web development.",
      projects: [
        {
          id: "project1",
          title: "ReCon",
          description: "Personal finance management platform",
          paragraph1:
            "A web application for managing personal finances. Users can track expenses, review statistics, and visualize data through intuitive graphs and charts, offering a clear view of their financial health.",
          technologies: "React, Firebase, Context API",
          image: "/recon.jpg",
          link: "https://app-registro-gastos.web.app/iniciar-sesion",
        },
        {
          id: "project2",
          title: "HelpDesk Unity",
          description: "Internal CRM for managing technical support",
          paragraph1:
            "A customized internal ticketing system for Punto Deportivo, allowing staff to register, update, and resolve support tickets efficiently. Includes real-time notifications, user role management, and administrative dashboards.",
          technologies:
            "Next.js 14, Express, Tailwind CSS, MSSQL, RTK Query, Context API",
          image: "/helpdesk.jpg",
          link: "https://github.com/joaquinIMB/sistema-tickets",
        },
        {
          id: "project3",
          title: "Next.js Portfolio",
          description: "Modern web developer portfolio",
          paragraph1:
            "A dynamic and responsive personal portfolio designed to showcase projects and skills with elegant animations using GSAP and Tailwind CSS. Built to be scalable and performant with a strong aesthetic focus.",
          technologies: "Next.js, Tailwind CSS, Vercel, GSAP",
          image: "/portafolio.jpg",
          link: "https://portafolio-joaquin-exequiel.vercel.app/",
        },
        {
          id: "project4",
          title: "CODERHOUSE Portfolio",
          description:
            "Final project for the Web Developer course at CODERHOUSE",
          paragraph1:
            "A static portfolio site built as a capstone project to demonstrate skills acquired during the course. It includes responsive layouts, styled components with SCSS, and clear organization of personal and professional projects.",
          technologies: "HTML, CSS, SCSS",
          image: "/portafolioCoder.jpg",
          link: "https://proyectofinaljoaquinimbriago.netlify.app/",
        },
      ],
    },
    contactMeSection: {
      state: "Available",
      title: "Let's Start a Project Together",
      paragraph1:
        "Let's make your next website a reality with a modern design and exceptional features.",
    },
    footerSection: {
      title: "Joaquin Imbriago",
      paragraph1: "Full-stack Developer specialized in creating modern and engaging digital experiences.",
      paragraph2: "Receive updates about my new projects and articles.",
      copyright: "Joaquin Imbriago. All rights reserved."
  },
    metadata: {
      page: "Home",
      title: "Portfolio Joaquin",
      description:
        "Portfolio created by Joaquin Imbriago, Full Stack Developer.",
    },
  },
};
