export interface IProject {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo: string;
  }
  
  export const projects: IProject[] = [
    {
      id: 1,
      title: 'IRC:Internet Relay Chat (Github repo Soon)',
      description: 'Command-line IRC client in C++98, built with low-level socket programming and OOP principles, implementing key IRC protocol features such as connection management, message parsing, and real-time command handling.',
      image: '/images/IRC.jpg',
      tech: ['C++', 'Socket'],
      github: '',
      demo: '',
    },
    {
      id: 2,
      title: 'Inception (Github repo Soon)',
      description: 'Set up a Docker-based infrastructure with separate services (NGINX with TLS, WordPress + PHP-FPM, MariaDB) interconnected through a dedicated network. Configured a secure environment with persistent volumes, environment variables, and NGINX as the single entry point.',
      image: '/images/d.png',
      tech: ['Docker', 'Nginx', 'Mariadb', 'Wordpress'],
      github: '',
      demo: '',
    },
    {
      id: 3,
      title: 'Online chat (Github repo Soon)',
      description: 'Real-time messaging platform built with Node.js, Fastify, and WebSocket, enabling fast and reliable communication. The frontend, developed in TypeScript/Tailwind CSS, provides a modern and responsive interface. Key features include private messaging, presence tracking, and secure WebSocket connections via Nginx (reverse proxy, load balancing, SSL).',
      image: '/images/s.PNG',
      tech: ['Node.js', 'Fastify', 'Typescript', 'WebSockets', 'Sqlite'],
      github: '',
      demo: '',
    },
    // Add more here
  ];