import Router from 'koa-router';

const router = new Router({
  prefix: '/api',
});

router.get('/health', (ctx) => {
  ctx.body = {
    status: 'ok',
    timestamp: new Date().toISOString(),
  };
});

export { router as healthRouter };
