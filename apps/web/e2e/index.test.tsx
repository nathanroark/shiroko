import { test, expect } from '@playwright/test'

test('should display the count button and HMR text in the card', async ({
  page
}) => {
  await page.goto('http://localhost:5173/')

  // Check that the card contains the button with the initial count text
  await expect(page.locator('.card button')).toHaveText('count is 0')

  // Check that the card contains the specific instructional text
  await expect(page.locator('.card')).toContainText(
    'Edit src/App.tsx and save to test HMR'
  )
})
