export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-[#34495E] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 font-hanja">
            신결 (神結)
          </h1>
          <p className="text-lg opacity-90 mb-8">
            전통적인 사주명리학과 현대 기술의 조화
          </p>
          <p className="text-base opacity-80 max-w-2xl mx-auto">
            사주팔자를 통해 당신의 운명을 알아보세요
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-columns-3 gap-8">
          {/* 사주 계산 카드 */}
          <div className="bg-white border-2 border-brand-accent rounded-xl p-8 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-4">사주 계산</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              생년월일시를 입력하여 사주팔자를 확인하세요
            </p>
            <button className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-[#34495E] transition-colors">
              시작하기
            </button>
          </div>

          {/* 오늘의 운세 카드 */}
          <div className="bg-white border-2 border-[var(--border-primary)] rounded-xl p-8 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-4">오늘의 운세</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              빠르게 오늘의 운세를 확인하세요
            </p>
            <button className="bg-white text-brand-primary border-2 border-brand-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              확인하기
            </button>
          </div>

          {/* 궁합 보기 카드 */}
          <div className="bg-white border-2 border-[var(--border-primary)] rounded-xl p-8 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-4">궁합 보기</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              두 사람의 사주 궁합을 확인하세요
            </p>
            <button className="bg-white text-brand-primary border-2 border-brand-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              확인하기
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
