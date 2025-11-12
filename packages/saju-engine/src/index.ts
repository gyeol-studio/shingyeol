// Calendar conversion
export * from './calculator/calendar-converter.js';

// Saju calculation
export * from './calculator/saju-calculator.js';

// Element analysis
export * from './analyzer/element-analyzer.js';

// Data
export * from './data/stems.js';
export * from './data/branches.js';

// Main Saju Engine API
import type { Saju, Elements, BirthInfo } from '@shingyeol/shared-types';
import { calculateSaju } from './calculator/saju-calculator.js';
import { analyzeElements } from './analyzer/element-analyzer.js';

export interface SajuCalculationResult {
  saju: Saju;
  elements: Elements;
}

/**
 * 생년월일 정보로부터 사주팔자와 오행 분석
 */
export function calculateSajuComplete(birthInfo: {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  isLunar: boolean;
}): SajuCalculationResult {
  // 사주 계산
  const saju = calculateSaju({
    birthDate: {
      year: birthInfo.year,
      month: birthInfo.month,
      day: birthInfo.day,
      hour: birthInfo.hour,
      minute: birthInfo.minute,
    },
    isLunar: birthInfo.isLunar,
  });

  // 오행 분석
  const elements = analyzeElements(saju);

  return {
    saju,
    elements,
  };
}
