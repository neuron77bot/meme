const fastify = require('fastify')({ logger: true });

// CORS
fastify.register(require('@fastify/cors'), {
  origin: '*',
});

// Swagger
fastify.register(require('@fastify/swagger'), {
  openapi: {
    info: {
      title: 'meme API',
      description: 'API documentation for meme',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'https://meme.vm.devalliance.com.ar/api',
        description: 'Production server',
      },
    ],
  },
});

fastify.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
});

// Health check endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Example endpoint
fastify.get('/hello', {
  schema: {
    description: 'Hello world endpoint',
    tags: ['example'],
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          project: { type: 'string' },
        },
      },
    },
  },
}, async (request, reply) => {
  return {
    message: 'Hello from meme API!',
    project: 'meme',
  };
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log(`Server running on port 3000`);
    console.log(`Swagger docs: https://meme.vm.devalliance.com.ar/api/docs`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
