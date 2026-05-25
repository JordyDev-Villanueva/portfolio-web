export const projects = [
  {
    id: 0,
    title: 'Scarlyfy',
    subtitle: 'SaaS de Agendamiento Médico',
    category: 'SaaS',
    featured: true,
    inProduction: true,
    description: 'SaaS B2B de agendamiento médico en producción con clientes pagando en Perú. Bot de WhatsApp que agenda citas automáticamente 24/7, recordatorios vía llamada automática y dashboard con métricas en tiempo real.',
    tags: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'WhatsApp API', 'Twilio', 'Cloudinary', 'Railway', 'Vercel', 'GitHub Actions'],
    image: '/scarlyfy-preview.png',
    demoUrl: 'https://scarlyfy.com',
    githubUrl: null,
    highlights: [
      'En producción con clientes pagando — S/.1,340/mes',
      'Bot WhatsApp agenda citas automáticamente 24/7',
      'Arquitectura multi-tenant con roles (Jefe/Profesional)',
      '+60% cobertura de tests con pytest + CI/CD completo',
      'Integraciones: Twilio · Cloudinary · Flow · Resend · WhatsApp API'
    ]
  },
  {
    id: 1,
    title: 'KATITA-POS',
    subtitle: 'Sistema Punto de Venta',
    category: 'Full-Stack',
    featured: true,
    inProduction: false,
    description: 'Sistema POS completo para digitalizar operaciones reales de minimarkets peruanos. 235+ tests unitarios, inventario FIFO automático, reportes PDF con gráficos y métodos de pago locales (Yape, Plin).',
    demoCredentials: {
      admin: { user: 'admin', pass: 'admin123' },
      vendor: { user: 'vendedor', pass: 'vendedor123' }
    },
    tags: ['Python', 'Flask', 'React', 'PostgreSQL', 'Tailwind CSS', 'Vite', 'JWT'],
    image: 'https://raw.githubusercontent.com/JordyDev-Villanueva/katita-pos/main/docs/screenshots/01-login.png',
    demoUrl: 'https://katita-pos.vercel.app',
    githubUrl: 'https://github.com/JordyDev-Villanueva/katita-pos',
    highlights: [
      '235+ tests unitarios passing',
      'Inventario FIFO + alertas de vencimiento',
      'Autenticación JWT con 3 roles',
      'Reportes PDF con Matplotlib'
    ]
  },
  {
    id: 2,
    title: 'PayFlow API',
    subtitle: 'Procesamiento Asíncrono de Pagos',
    category: 'Backend',
    featured: true,
    inProduction: false,
    description: 'API REST para procesamiento asíncrono de pagos masivos. Arquitectura por capas que permite procesar 500+ transacciones en ~2 segundos (mejora del 800% vs implementación síncrona).',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'Railway', 'Async/Await'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    demoUrl: 'https://payflow-api-production.up.railway.app/docs',
    githubUrl: 'https://github.com/JordyDev-Villanueva/payflow-api',
    highlights: [
      'Mejora de 800% en performance (16 min → 2 seg)',
      '500+ transacciones simultáneas en ~2 segundos',
      'Analytics con SQL Window Functions',
      'Documentación interactiva Swagger/OpenAPI'
    ]
  },
];

export const categories = ['Todos', 'SaaS', 'Full-Stack', 'Backend'];
