import { calculateSajuComplete } from '@shingyeol/saju-engine';

export interface BirthInfoInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  isLunar: boolean;
  gender: 'male' | 'female';
}

export async function calculateSajuService(birthInfo: BirthInfoInput) {
  // 사주 엔진을 사용하여 계산
  const result = calculateSajuComplete({
    year: birthInfo.year,
    month: birthInfo.month,
    day: birthInfo.day,
    hour: birthInfo.hour,
    minute: birthInfo.minute,
    isLunar: birthInfo.isLunar,
  });

  return {
    saju: result.saju,
    elements: result.elements,
    birthInfo,
  };
}
