import { test, expect } from '@playwright/test'

test('should display the welcome message on the home page', async ({
  page
}) => {
  // Navigate to the home page
  await page.goto('http://localhost:5173/')

  // Check that the heading contains the text "Welcome Home!"
  await expect(page.locator('h3')).toHaveText('Welcome Home!')

  // Alternatively, you can check if the heading is visible on the page
  await expect(page.locator('h3')).toBeVisible()
})
