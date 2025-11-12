import type { Saju, Elements } from '@shingyeol/shared-types';

interface SajuCardProps {
  saju: Saju;
  elements: Elements;
}

export function SajuCard({ saju, elements }: SajuCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl border-2 border-brand-accent shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center font-hanja">사주팔자</h2>

      {/* 사주팔자 표 */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {/* 시주 */}
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">時柱</div>
          <div className="text-3xl font-hanja">{saju.hour.heavenly}</div>
          <div className="text-3xl font-hanja">{saju.hour.earthly}</div>
        </div>

        {/* 일주 */}
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">日柱</div>
          <div className="text-3xl font-hanja">{saju.day.heavenly}</div>
          <div className="text-3xl font-hanja">{saju.day.earthly}</div>
        </div>

        {/* 월주 */}
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">月柱</div>
          <div className="text-3xl font-hanja">{saju.month.heavenly}</div>
          <div className="text-3xl font-hanja">{saju.month.earthly}</div>
        </div>

        {/* 년주 */}
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-2">年柱</div>
          <div className="text-3xl font-hanja">{saju.year.heavenly}</div>
          <div className="text-3xl font-hanja">{saju.year.earthly}</div>
        </div>
      </div>

      {/* 오행 분포 */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">오행 분포</h3>
        <div className="grid grid-cols-5 gap-4">
          <ElementBar label="木" value={elements.wood} color="bg-element-wood-primary" />
          <ElementBar label="火" value={elements.fire} color="bg-element-fire-primary" />
          <ElementBar label="土" value={elements.earth} color="bg-element-earth-primary" />
          <ElementBar label="金" value={elements.metal} color="bg-element-metal-primary" />
          <ElementBar label="水" value={elements.water} color="bg-element-water-primary" />
        </div>
      </div>
    </div>
  );
}

function ElementBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-hanja mb-2">{label}</div>
      <div className="h-24 bg-gray-200 rounded-lg relative overflow-hidden">
        <div
          className={`${color} absolute bottom-0 left-0 right-0 transition-all duration-500`}
          style={{ height: `${(value / 8) * 100}%` }}
        />
      </div>
      <div className="text-sm mt-2 font-semibold">{value}</div>
    </div>
  );
}
