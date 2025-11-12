import { describe, it, expect } from 'vitest';
import { calculateSaju } from '../calculator/saju-calculator';

describe('Saju Calculator', () => {
  it('should calculate saju for a solar date', () => {
    const result = calculateSaju({
      birthDate: {
        year: 1990,
        month: 1,
        day: 15,
        hour: 14,
        minute: 30,
      },
      isLunar: false,
    });

    expect(result).toHaveProperty('year');
    expect(result).toHaveProperty('month');
    expect(result).toHaveProperty('day');
    expect(result).toHaveProperty('hour');

    expect(result.year).toHaveProperty('heavenly');
    expect(result.year).toHaveProperty('earthly');
  });

  it('should calculate saju for a lunar date', () => {
    const result = calculateSaju({
      birthDate: {
        year: 1990,
        month: 1,
        day: 1,
        hour: 12,
        minute: 0,
      },
      isLunar: true,
    });

    expect(result).toHaveProperty('year');
    expect(result).toHaveProperty('month');
    expect(result).toHaveProperty('day');
    expect(result).toHaveProperty('hour');
  });
});
