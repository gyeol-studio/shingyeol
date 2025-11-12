import { z } from 'zod';

// 천간 (Heavenly Stems)
export const HeavenlyStemSchema = z.enum([
  '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'
]);
export type HeavenlyStem = z.infer<typeof HeavenlyStemSchema>;

// 지지 (Earthly Branches)
export const EarthlyBranchSchema = z.enum([
  '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'
]);
export type EarthlyBranch = z.infer<typeof EarthlyBranchSchema>;

// 오행 (Five Elements)
export const ElementSchema = z.enum(['wood', 'fire', 'earth', 'metal', 'water']);
export type Element = z.infer<typeof ElementSchema>;

// 기둥 (Pillar) - 천간 + 지지
export const PillarSchema = z.object({
  heavenly: HeavenlyStemSchema,
  earthly: EarthlyBranchSchema,
});
export type Pillar = z.infer<typeof PillarSchema>;

// 오행 분포
export const ElementsSchema = z.object({
  wood: z.number().min(0),
  fire: z.number().min(0),
  earth: z.number().min(0),
  metal: z.number().min(0),
  water: z.number().min(0),
});
export type Elements = z.infer<typeof ElementsSchema>;

// 사주팔자
export const SajuSchema = z.object({
  year: PillarSchema,
  month: PillarSchema,
  day: PillarSchema,
  hour: PillarSchema,
});
export type Saju = z.infer<typeof SajuSchema>;

// 출생 정보
export const BirthInfoSchema = z.object({
  birthDate: z.string().datetime(),
  birthTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/), // HH:mm
  isLunar: z.boolean(),
  gender: z.enum(['male', 'female']),
  birthPlace: z.object({
    lat: z.number(),
    lng: z.number(),
  }).optional(),
});
export type BirthInfo = z.infer<typeof BirthInfoSchema>;

// 사주 계산 요청
export const SajuCalculateRequestSchema = BirthInfoSchema;
export type SajuCalculateRequest = z.infer<typeof SajuCalculateRequestSchema>;

// 사주 계산 응답
export const SajuCalculateResponseSchema = z.object({
  saju: SajuSchema,
  elements: ElementsSchema,
  birthInfo: BirthInfoSchema,
});
export type SajuCalculateResponse = z.infer<typeof SajuCalculateResponseSchema>;

// 사주 레코드 (DB 저장용)
export const SajuRecordSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid().optional(),
  name: z.string(),
  birthDate: z.date(),
  birthTime: z.string(),
  isLunar: z.boolean(),
  gender: z.enum(['male', 'female']),
  birthPlace: z.object({
    lat: z.number(),
    lng: z.number(),
  }).optional(),
  saju: SajuSchema,
  elements: ElementsSchema,
  isFavorite: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type SajuRecord = z.infer<typeof SajuRecordSchema>;
