import type { Saju, Elements, Element } from '@shingyeol/shared-types';
import { STEM_ELEMENTS } from '../data/stems.js';
import { BRANCH_ELEMENTS } from '../data/branches.js';

/**
 * 사주로부터 오행 분포 계산
 */
export function analyzeElements(saju: Saju): Elements {
  const elements: Elements = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0,
  };

  // 년주
  addElement(elements, STEM_ELEMENTS[saju.year.heavenly]);
  addElement(elements, BRANCH_ELEMENTS[saju.year.earthly]);

  // 월주
  addElement(elements, STEM_ELEMENTS[saju.month.heavenly]);
  addElement(elements, BRANCH_ELEMENTS[saju.month.earthly]);

  // 일주
  addElement(elements, STEM_ELEMENTS[saju.day.heavenly]);
  addElement(elements, BRANCH_ELEMENTS[saju.day.earthly]);

  // 시주
  addElement(elements, STEM_ELEMENTS[saju.hour.heavenly]);
  addElement(elements, BRANCH_ELEMENTS[saju.hour.earthly]);

  return elements;
}

/**
 * 오행 카운트 증가
 */
function addElement(elements: Elements, element: Element): void {
  elements[element]++;
}

/**
 * 가장 강한 오행 찾기
 */
export function getStrongestElement(elements: Elements): Element {
  let strongest: Element = 'wood';
  let maxCount = elements.wood;

  for (const [element, count] of Object.entries(elements)) {
    if (count > maxCount) {
      strongest = element as Element;
      maxCount = count;
    }
  }

  return strongest;
}

/**
 * 가장 약한 오행 찾기
 */
export function getWeakestElement(elements: Elements): Element {
  let weakest: Element = 'wood';
  let minCount = elements.wood;

  for (const [element, count] of Object.entries(elements)) {
    if (count < minCount) {
      weakest = element as Element;
      minCount = count;
    }
  }

  return weakest;
}

/**
 * 오행 밸런스 점수 계산 (0-100)
 * 더 균형잡힐수록 높은 점수
 */
export function calculateElementBalance(elements: Elements): number {
  const values = Object.values(elements);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  // 표준편차 계산
  const variance = values.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / values.length;
  const stdDev = Math.sqrt(variance);

  // 표준편차가 0에 가까울수록 균형잡힌 것
  // 최대 표준편차를 약 3으로 가정 (한 오행에 몰림)
  const maxStdDev = 3;
  const balance = Math.max(0, 100 - (stdDev / maxStdDev) * 100);

  return Math.round(balance);
}

/**
 * 부족한 오행 찾기 (0개인 오행들)
 */
export function getMissingElements(elements: Elements): Element[] {
  return (Object.entries(elements) as [Element, number][])
    .filter(([_, count]) => count === 0)
    .map(([element]) => element);
}
