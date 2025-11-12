import { test, expect } from '@playwright/test';

test.describe('Saju Page', () => {
  test('should display homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('신경을');
  });

  test('should navigate to saju page', async ({ page }) => {
    await page.goto('/saju');
    await expect(page.locator('h1')).toContainText('사주 계산');
  });

  test('should have birth info form', async ({ page }) => {
    await page.goto('/saju');

    // 폼 요소들이 존재하는지 확인
    await expect(page.locator('input[type="number"]').first()).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  // Note: API 통합 테스트는 실제 BFF 서버가 필요합니다
  // 현재는 기본적인 UI 렌더링만 테스트합니다
});
