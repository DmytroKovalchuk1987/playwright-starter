import { test, expect } from '@playwright/test';

test('guest can add Audi TT to Garage', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Guest log in' }).click();

  await expect(page).toHaveURL(/\/panel\/garage/);

  await page.getByRole('button', { name: 'Add car' }).click();
  await page.getByLabel('Brand').selectOption('Audi');
  await page.getByLabel('Model').selectOption('TT');
  await page.getByRole('spinbutton', { name: 'Mileage' }).fill('12000');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  await expect(page).toHaveURL(/\/panel\/garage/);
  await expect(page.getByRole('heading', { name: 'Garage' })).toBeVisible();
  await expect(page.getByText('Audi TT', { exact: true })).toBeVisible();
});
