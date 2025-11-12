import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { errorHandler } from './middleware/error-handler.js';
import { logger } from './middleware/logger.js';
import { healthRouter } from './routes/health.routes.js';

const app = new Koa();

// Middleware
app.use(errorHandler);
app.use(logger);
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser({
  jsonLimit: '10mb',
}));

// Routes
app.use(healthRouter.routes());
app.use(healthRouter.allowedMethods());

export { app };
