import { test, expect } from '@playwright/test';

test('Can prefix id inside template', async ({ page }) => {
  await page.goto('http://localhost:8080/tests/002_can_prefix_template_ids.test.html');
  await expect(page.locator("#email-input-id")).toBeVisible();
  await expect(page.locator("#password-input-id")).toBeVisible();
});

