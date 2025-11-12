# 신경을 (神經乙)

AI 기반 사주 풀이 서비스

## 프로젝트 구조

```
shingyeol/
├── apps/
│   ├── web/          # Next.js 프론트엔드
│   └── bff/          # Koa BFF 서버
├── packages/
│   ├── saju-engine/      # 사주 계산 엔진
│   ├── shared-types/     # 공유 타입 정의
│   └── ui-components/    # 공유 UI 컴포넌트
├── deployment/           # 배포 설정
└── docs/                # 문서
```

## 기술 스택

- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **BFF**: Koa.js + TypeScript
- **Database**: PostgreSQL
- **Monorepo**: pnpm + Turborepo
- **Hosting**: Proxmox (Self-hosted)

## 시작하기

### 필수 요구사항

- Node.js >= 20.0.0
- pnpm >= 8.0.0

### 설치

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 린트
pnpm lint
```

## 문서

- [기획서](./기획서.md)
- [디자인 시스템](./디자인시스템.md)

## 라이선스

MIT
