import { test, expect } from '@playwright/test'

test('/login to have form contain username', async ({ page }) => {
  await page.goto('http://localhost:3000/login')

  await expect(page.locator('form')).toContainText('Username')
})
