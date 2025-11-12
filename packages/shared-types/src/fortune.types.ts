import { z } from 'zod';

// 운세 타입
export const FortuneTypeSchema = z.enum(['daily', 'weekly', 'monthly', 'yearly']);
export type FortuneType = z.infer<typeof FortuneTypeSchema>;

// 운세 점수 (0-100)
export const FortuneScoreSchema = z.number().min(0).max(100);
export type FortuneScore = z.infer<typeof FortuneScoreSchema>;

// 운세 등급
export const FortuneGradeSchema = z.enum([
  'excellent',  // 90-100
  'good',       // 70-89
  'normal',     // 50-69
  'bad',        // 30-49
  'very-bad',   // 0-29
]);
export type FortuneGrade = z.infer<typeof FortuneGradeSchema>;

// 운세 데이터
export const FortuneDataSchema = z.object({
  overall: FortuneScoreSchema,
  love: FortuneScoreSchema,
  wealth: FortuneScoreSchema,
  career: FortuneScoreSchema,
  health: FortuneScoreSchema,
  luckyColors: z.array(z.string()),
  luckyNumbers: z.array(z.number()),
  advice: z.string(),
  warning: z.string().optional(),
});
export type FortuneData = z.infer<typeof FortuneDataSchema>;

// 운세 조회 요청
export const FortuneRequestSchema = z.object({
  userId: z.string().uuid().optional(),
  sajuRecordId: z.string().uuid(),
  type: FortuneTypeSchema,
  date: z.string().datetime().optional(), // 특정 날짜 운세 조회용
});
export type FortuneRequest = z.infer<typeof FortuneRequestSchema>;

// 운세 응답
export const FortuneResponseSchema = z.object({
  type: FortuneTypeSchema,
  date: z.string().datetime(),
  data: FortuneDataSchema,
});
export type FortuneResponse = z.infer<typeof FortuneResponseSchema>;

// 운세 캐시 (DB 저장용)
export const FortuneCacheSchema = z.object({
  id: z.string().uuid(),
  sajuRecordId: z.string().uuid(),
  date: z.date(),
  type: FortuneTypeSchema,
  data: FortuneDataSchema,
  createdAt: z.date(),
});
export type FortuneCache = z.infer<typeof FortuneCacheSchema>;
