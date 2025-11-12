'use client';

import { useState } from 'react';
import { BirthInfoForm, type BirthInfo } from '@/components/saju/BirthInfoForm';
import { SajuCard } from '@/components/saju/SajuCard';
import type { Saju, Elements } from '@shingyeol/shared-types';

export default function SajuPage() {
  const [result, setResult] = useState<{ saju: Saju; elements: Elements } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (birthInfo: BirthInfo) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/saju/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(birthInfo),
      });

      if (!response.ok) {
        throw new Error('사주 계산에 실패했습니다');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 font-hanja">사주 계산</h1>

        <BirthInfoForm onSubmit={handleSubmit} />

        {loading && (
          <div className="text-center mt-8">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
            <p className="mt-4 text-gray-600">사주를 계산하고 있습니다...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        {result && !loading && (
          <div className="mt-12">
            <SajuCard saju={result.saju} elements={result.elements} />
          </div>
        )}
      </div>
    </main>
  );
}
