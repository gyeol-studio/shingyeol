'use client';

import { useState } from 'react';

export interface BirthInfo {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  isLunar: boolean;
  gender: 'male' | 'female';
}

interface BirthInfoFormProps {
  onSubmit: (birthInfo: BirthInfo) => void;
}

export function BirthInfoForm({ onSubmit }: BirthInfoFormProps) {
  const [birthInfo, setBirthInfo] = useState<BirthInfo>({
    year: 1990,
    month: 1,
    day: 1,
    hour: 12,
    minute: 0,
    isLunar: false,
    gender: 'male',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(birthInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="bg-white p-8 rounded-xl border-2 border-brand-accent shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">생년월일 입력</h2>

        {/* 날짜 입력 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">년</label>
            <input
              type="number"
              value={birthInfo.year}
              onChange={(e) => setBirthInfo({ ...birthInfo, year: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-accent focus:outline-none"
              min={1900}
              max={2100}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">월</label>
            <input
              type="number"
              value={birthInfo.month}
              onChange={(e) => setBirthInfo({ ...birthInfo, month: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-accent focus:outline-none"
              min={1}
              max={12}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">일</label>
            <input
              type="number"
              value={birthInfo.day}
              onChange={(e) => setBirthInfo({ ...birthInfo, day: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-accent focus:outline-none"
              min={1}
              max={31}
            />
          </div>
        </div>

        {/* 시간 입력 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">시</label>
            <input
              type="number"
              value={birthInfo.hour}
              onChange={(e) => setBirthInfo({ ...birthInfo, hour: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-accent focus:outline-none"
              min={0}
              max={23}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">분</label>
            <input
              type="number"
              value={birthInfo.minute}
              onChange={(e) => setBirthInfo({ ...birthInfo, minute: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-accent focus:outline-none"
              min={0}
              max={59}
            />
          </div>
        </div>

        {/* 양력/음력 */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">달력 종류</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={!birthInfo.isLunar}
                onChange={() => setBirthInfo({ ...birthInfo, isLunar: false })}
                className="mr-2"
              />
              양력
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={birthInfo.isLunar}
                onChange={() => setBirthInfo({ ...birthInfo, isLunar: true })}
                className="mr-2"
              />
              음력
            </label>
          </div>
        </div>

        {/* 성별 */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">성별</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={birthInfo.gender === 'male'}
                onChange={() => setBirthInfo({ ...birthInfo, gender: 'male' })}
                className="mr-2"
              />
              남성
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={birthInfo.gender === 'female'}
                onChange={() => setBirthInfo({ ...birthInfo, gender: 'female' })}
                className="mr-2"
              />
              여성
            </label>
          </div>
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full bg-brand-primary text-white py-3 rounded-lg hover:bg-[#34495E] transition-colors font-semibold"
        >
          사주 보기
        </button>
      </div>
    </form>
  );
}
