import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '신경을 (神經乙) - AI 기반 사주 풀이',
  description: '전통적인 사주명리학과 현대 기술을 결합한 개인화된 운세 분석 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
