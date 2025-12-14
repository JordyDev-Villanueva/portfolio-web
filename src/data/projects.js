export const projects = [
  {
    id: 1,
    title: 'KATITA-POS',
    category: 'Full-Stack',
    featured: true,
    description: 'Sistema de punto de venta production-ready para minimarkets peruanos. Incluye FIFO automático, gestión de inventario, reportes PDF profesionales con gráficos, y métodos de pago locales (Yape, Plin).',
    demoCredentials: {
      admin: { user: 'admin', pass: 'admin123' },
      vendor: { user: 'vendedor', pass: 'vendedor123' }
    },
    tags: ['Python', 'Flask', 'React', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    image: 'https://raw.githubusercontent.com/JordyDev-Villanueva/katita-pos/main/docs/screenshots/01-login.png',
    demoUrl: 'https://katita-pos.vercel.app',
    githubUrl: 'https://github.com/JordyDev-Villanueva/katita-pos',
    highlights: [
      '300-350 ventas diarias capacity',
      'Sistema FIFO automático',
      'Reportes PDF con matplotlib',
      'JWT Authentication con roles',
      '500+ productos, 1000+ lotes activos'
    ]
  },
  // Aquí puedes agregar más proyectos después
];

export const categories = ['Todos', 'Full-Stack', 'Backend', 'Frontend'];
