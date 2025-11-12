import type { HeavenlyStem } from '@shingyeol/shared-types';

/**
 * 천간 (Heavenly Stems) - 10개
 */
export const HEAVENLY_STEMS: HeavenlyStem[] = [
  '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'
];

/**
 * 천간 오행 매핑
 */
export const STEM_ELEMENTS: Record<HeavenlyStem, 'wood' | 'fire' | 'earth' | 'metal' | 'water'> = {
  '甲': 'wood',   // 갑 - 양목
  '乙': 'wood',   // 을 - 음목
  '丙': 'fire',   // 병 - 양화
  '丁': 'fire',   // 정 - 음화
  '戊': 'earth',  // 무 - 양토
  '己': 'earth',  // 기 - 음토
  '庚': 'metal',  // 경 - 양금
  '辛': 'metal',  // 신 - 음금
  '壬': 'water',  // 임 - 양수
  '癸': 'water',  // 계 - 음수
};

/**
 * 천간 음양
 */
export const STEM_YIN_YANG: Record<HeavenlyStem, 'yang' | 'yin'> = {
  '甲': 'yang',
  '乙': 'yin',
  '丙': 'yang',
  '丁': 'yin',
  '戊': 'yang',
  '己': 'yin',
  '庚': 'yang',
  '辛': 'yin',
  '壬': 'yang',
  '癸': 'yin',
};
