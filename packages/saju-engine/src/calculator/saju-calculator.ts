import { Solar } from 'lunar-javascript';
import type { Saju, Pillar, HeavenlyStem, EarthlyBranch } from '@shingyeol/shared-types';
import type { CalendarDate } from './calendar-converter.js';
import { normalizeToSolar } from './calendar-converter.js';
import { HEAVENLY_STEMS } from '../data/stems.js';
import { EARTHLY_BRANCHES } from '../data/branches.js';

export interface SajuInput {
  birthDate: CalendarDate;
  isLunar: boolean;
}

/**
 * 사주팔자 계산
 */
export function calculateSaju(input: SajuInput): Saju {
  // 양력으로 정규화
  const solar = normalizeToSolar(input.birthDate, input.isLunar);

  // Solar 객체 생성
  const solarDate = Solar.fromYmdHms(
    solar.year,
    solar.month,
    solar.day,
    solar.hour,
    solar.minute,
    0
  );

  // Lunar 객체로 변환
  const lunar = solarDate.getLunar();

  // 사주팔자 추출
  const yearPillar = getPillarFromGanZhi(lunar.getYearInGanZhi());
  const monthPillar = getPillarFromGanZhi(lunar.getMonthInGanZhi());
  const dayPillar = getPillarFromGanZhi(lunar.getDayInGanZhi());
  const hourPillar = getPillarFromGanZhi(lunar.getTimeInGanZhi());

  return {
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar,
  };
}

/**
 * 간지 문자열을 Pillar 객체로 변환
 * 예: "甲子" -> { heavenly: "甲", earthly: "子" }
 */
function getPillarFromGanZhi(ganZhi: string): Pillar {
  const chars = ganZhi.split('');

  if (chars.length !== 2) {
    throw new Error(`Invalid GanZhi: ${ganZhi}`);
  }

  const heavenly = chars[0] as HeavenlyStem;
  const earthly = chars[1] as EarthlyBranch;

  // 유효성 검증
  if (!HEAVENLY_STEMS.includes(heavenly)) {
    throw new Error(`Invalid Heavenly Stem: ${heavenly}`);
  }

  if (!EARTHLY_BRANCHES.includes(earthly)) {
    throw new Error(`Invalid Earthly Branch: ${earthly}`);
  }

  return {
    heavenly,
    earthly,
  };
}

/**
 * 시간(hour)로부터 지지 구하기
 */
export function getHourBranch(hour: number): EarthlyBranch {
  // 자시는 23-01시이므로 특별 처리
  if (hour === 23 || hour === 0) return '子';
  if (hour >= 1 && hour < 3) return '丑';
  if (hour >= 3 && hour < 5) return '寅';
  if (hour >= 5 && hour < 7) return '卯';
  if (hour >= 7 && hour < 9) return '辰';
  if (hour >= 9 && hour < 11) return '巳';
  if (hour >= 11 && hour < 13) return '午';
  if (hour >= 13 && hour < 15) return '未';
  if (hour >= 15 && hour < 17) return '申';
  if (hour >= 17 && hour < 19) return '酉';
  if (hour >= 19 && hour < 21) return '戌';
  if (hour >= 21 && hour < 23) return '亥';

  throw new Error(`Invalid hour: ${hour}`);
}
