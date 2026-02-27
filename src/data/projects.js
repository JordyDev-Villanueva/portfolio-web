export const projects = [
  {
    id: 1,
    title: 'KATITA-POS',
    category: 'Full-Stack',
    featured: true,
    description: 'Sistema POS de portafolio personal para minimarkets peruanos. Incluye FIFO automático, gestión de inventario, reportes PDF profesionales con gráficos, y métodos de pago locales (Yape, Plin).',
    demoCredentials: {
      admin: { user: 'admin', pass: 'admin123' },
      vendor: { user: 'vendedor', pass: 'vendedor123' }
    },
    tags: ['Python', 'Flask', 'React', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    image: 'https://raw.githubusercontent.com/JordyDev-Villanueva/katita-pos/main/docs/screenshots/01-login.png',
    demoUrl: 'https://katita-pos.vercel.app',
    githubUrl: 'https://github.com/JordyDev-Villanueva/katita-pos',
    highlights: [
      'Inventario FIFO + alertas de vencimiento',
      'Autenticación JWT con 3 roles',
      'Reportes PDF con matplotlib'
    ]
  },
  {
    id: 2,
    title: 'PayFlow API',
    category: 'Backend',
    featured: true,
    description: 'API REST para procesamiento asíncrono de pagos masivos a restaurantes. Arquitectura por capas con procesamiento asíncrono que permite procesar 500+ transacciones en ~2 segundos (vs 16 minutos secuencialmente).',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Railway', 'Pydantic', 'Async/Await'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    demoUrl: 'https://payflow-api-production.up.railway.app/docs',
    githubUrl: 'https://github.com/JordyDev-Villanueva/payflow-api',
    highlights: [
      'Mejora de 800% en performance (16 min → 2 seg)',
      'Procesamiento asíncrono de 500+ pagos simultáneos',
      'Analytics con SQL Window Functions',
      'Arquitectura por capas escalable',
      'Documentación interactiva (Swagger/OpenAPI)',
      'Production-ready 24/7 en Railway'
    ]
  },
  // Aquí puedes agregar más proyectos después
];

export const categories = ['Todos', 'Full-Stack', 'Backend', 'Frontend'];
