import { test, expect } from '@playwright/test';

/**
 * End-to-end test for the MusicCollector homepage and API health status integration.
 * Verifies that the homepage loads and displays the API health status as 'Healthy'.
 */
test('Homepage displays API health status', async ({ page }) => {
  // Arrange: Go to the homepage
  await page.goto('http://localhost:3000');

  // Assert: The main heading is visible
  await expect(page.getByRole('heading', { name: /welcome to musiccollector/i })).toBeVisible();

  // Assert: The API Health Status section is visible
  await expect(page.getByRole('heading', { name: /api health status/i })).toBeVisible();

  // Assert: The health status is displayed and is 'Healthy'
  await expect(page.getByText(/healthy/i)).toBeVisible();
});
