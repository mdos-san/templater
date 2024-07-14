import { test, expect } from '@playwright/test';

test('Can change attributes', async ({ page }) => {
  await page.goto('http://localhost:8080/src/003_can_use_id_to_change_attributes_inside_template.test.html');

  await expect(page.locator("#email-input-id")).toBeVisible();
  await expect(page.locator("#password-input-id")).toBeVisible();

  const email = page.locator("#email-input-id");
  const password = page.locator("#password-input-id");

  expect(await email.getAttribute('type')).toBe("email");
  expect(await email.getAttribute('placeholder')).toBe("john@mail.com");
  expect(await password.getAttribute('type')).toBe("password");
});

