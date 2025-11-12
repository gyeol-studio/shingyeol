import { z } from 'zod';

// 사용자
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email().optional(),
  nickname: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export type User = z.infer<typeof UserSchema>;

// 궁합 계산 요청
export const CompatibilityRequestSchema = z.object({
  person1: z.object({
    birthDate: z.string().datetime(),
    birthTime: z.string(),
    gender: z.enum(['male', 'female']),
  }),
  person2: z.object({
    birthDate: z.string().datetime(),
    birthTime: z.string(),
    gender: z.enum(['male', 'female']),
  }),
});
export type CompatibilityRequest = z.infer<typeof CompatibilityRequestSchema>;

// 궁합 결과
export const CompatibilityResponseSchema = z.object({
  score: z.number().min(0).max(100),
  compatibility: z.string(), // "매우 좋음", "좋음", "보통", "나쁨" 등
  strengths: z.array(z.string()),
  warnings: z.array(z.string()),
  advice: z.string(),
});
export type CompatibilityResponse = z.infer<typeof CompatibilityResponseSchema>;
