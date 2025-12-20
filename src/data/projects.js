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
  {
    id: 2,
    title: 'PayFlow API',
    category: 'Backend',
    featured: true,
    description: 'API REST para procesamiento asíncrono de pagos masivos a restaurantes. Arquitectura por capas con procesamiento asíncrono que permite procesar 500+ transacciones en ~2 segundos (vs 16 minutos secuencialmente).',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Railway', 'Pydantic', 'Async/Await'],
    image: 'https://raw.githubusercontent.com/JordyDev-Villanueva/payflow-api/refs/heads/main/docs/screenshots/swagger-ui.png',
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
