import { test, expect } from '@playwright/test';

test('Can create nodes from template', async ({ page }) => {
  await page.goto('http://localhost:8080/tests/001_can_create_nodes_from_template.test.html');
  await expect(page.getByText("Hello, world!")).toHaveCount(3);
});

