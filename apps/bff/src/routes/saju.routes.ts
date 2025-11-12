import Router from 'koa-router';
import { calculateSajuController } from '../controllers/saju.controller.js';

const router = new Router({
  prefix: '/api/saju',
});

router.post('/calculate', calculateSajuController);

export { router as sajuRouter };
