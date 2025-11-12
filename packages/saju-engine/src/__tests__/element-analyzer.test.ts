import { describe, it, expect } from 'vitest';
import { analyzeElements, getStrongestElement, getWeakestElement } from '../analyzer/element-analyzer';
import type { Saju } from '@shingyeol/shared-types';

describe('Element Analyzer', () => {
  const mockSaju: Saju = {
    year: { heavenly: '甲', earthly: '子' },
    month: { heavenly: '乙', earthly: '丑' },
    day: { heavenly: '丙', earthly: '寅' },
    hour: { heavenly: '丁', earthly: '卯' },
  };

  it('should analyze elements from saju', () => {
    const elements = analyzeElements(mockSaju);

    expect(elements).toHaveProperty('wood');
    expect(elements).toHaveProperty('fire');
    expect(elements).toHaveProperty('earth');
    expect(elements).toHaveProperty('metal');
    expect(elements).toHaveProperty('water');

    // 총 8개 (천간 4 + 지지 4)
    const total = elements.wood + elements.fire + elements.earth + elements.metal + elements.water;
    expect(total).toBe(8);
  });

  it('should find strongest element', () => {
    const elements = {
      wood: 3,
      fire: 1,
      earth: 2,
      metal: 1,
      water: 1,
    };

    const strongest = getStrongestElement(elements);
    expect(strongest).toBe('wood');
  });

  it('should find weakest element', () => {
    const elements = {
      wood: 3,
      fire: 0,
      earth: 2,
      metal: 1,
      water: 2,
    };

    const weakest = getWeakestElement(elements);
    expect(weakest).toBe('fire');
  });
});
