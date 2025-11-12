import type { Context } from 'koa';
import { calculateSajuService } from '../services/saju.service.js';

export async function calculateSajuController(ctx: Context) {
  try {
    const birthInfo = ctx.request.body;

    // 간단한 유효성 검사
    if (!birthInfo || !birthInfo.year || !birthInfo.month || !birthInfo.day) {
      ctx.status = 400;
      ctx.body = {
        error: '필수 입력 항목이 누락되었습니다',
      };
      return;
    }

    const result = await calculateSajuService(birthInfo);

    ctx.status = 200;
    ctx.body = result;
  } catch (error: any) {
    console.error('Saju calculation error:', error);
    ctx.status = 500;
    ctx.body = {
      error: error.message || '사주 계산 중 오류가 발생했습니다',
    };
  }
}
