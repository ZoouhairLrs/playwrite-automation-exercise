import { test, expect } from '@playwright/test';

// Utility function to generate unique email
function generateUniqueEmail() {
  return `zouhair_${Date.now()}@example.com`;
}

// Utility function to create an account and return credentials
async function createTestAccount(page) {
  const email = generateUniqueEmail();
  const password = 'password123';
  const name = 'Zouhair';

  // Register new account
  await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });
  await page.click('text=Signup / Login');
  await expect(page.locator('text=New User Signup!')).toBeVisible({ timeout: 15000 });
  
  await page.fill('input[data-qa="signup-name"]', name);
  await page.fill('input[data-qa="signup-email"]', email);
  await page.click('button[data-qa="signup-button"]');
  
  await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible({ timeout: 15000 });
  
  // Fill account details
  await page.check('#id_gender1');
  await page.fill('#password', password);
  await page.selectOption('#days', '10');
  await page.selectOption('#months', 'January');
  await page.selectOption('#years', '1995');
  await page.check('#newsletter');
  await page.check('#optin');
  await page.fill('#first_name', name);
  await page.fill('#last_name', 'Laaroussi');
  await page.fill('#address1', '123 Street');
  await page.selectOption('#country', 'United States');
  await page.fill('#state', 'New York');
  await page.fill('#city', 'NYC');
  await page.fill('#zipcode', '10001');
  await page.fill('#mobile_number', '1234567890');
  
  await page.click('button[data-qa="create-account"]');
  await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible({ timeout: 15000 });
  await page.click('text=Continue');
  
  return { email, password, name };
}

test('Register User', async ({ page }) => {
  await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Automation Exercise/);
  
  const email = generateUniqueEmail();
  
  await page.click('text=Signup / Login');
  await expect(page.locator('text=New User Signup!')).toBeVisible({ timeout: 15000 });
  await page.fill('input[data-qa="signup-name"]', 'Zouhair');
  await page.fill('input[data-qa="signup-email"]', email);
  await page.click('button[data-qa="signup-button"]');
  
  await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible({ timeout: 15000 });
  await page.check('#id_gender1');
  await page.fill('#password', 'password123');
  await page.selectOption('#days', '10');
  await page.selectOption('#months', 'January');
  await page.selectOption('#years', '1995');
  await page.check('#newsletter');
  await page.check('#optin');
  await page.fill('#first_name', 'Zouhair');
  await page.fill('#last_name', 'Laaroussi');
  await page.fill('#address1', '123 Street');
  await page.selectOption('#country', 'United States');
  await page.fill('#state', 'New York');
  await page.fill('#city', 'NYC');
  await page.fill('#zipcode', '10001');
  await page.fill('#mobile_number', '1234567890');
  
  await page.click('button[data-qa="create-account"]');
  await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible({ timeout: 15000 });
  await page.click('text=Continue');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('text=Logged in as Zouhair')).toBeVisible({ timeout: 15000 });
  await page.click('text=Delete Account');
  await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible({ timeout: 15000 });
  await page.click('text=Continue');
});

test('Login User with correct email and password', async ({ page }) => {
  // First create a test account
  const credentials = await createTestAccount(page);
  
  // Logout first
  await page.click('text=Logout');
  
  // Now try to login with the created account
  await page.click('text=Signup / Login');
  await page.fill('input[data-qa="login-email"]', credentials.email);
  await page.fill('input[data-qa="login-password"]', credentials.password);
  await page.click('button[data-qa="login-button"]');
  
  await page.waitForLoadState('networkidle');
  await expect(page.locator(`text=Logged in as ${credentials.name}`)).toBeVisible({ timeout: 15000 });
  
  // Cleanup: Delete account
  await page.click('text=Delete Account');
  await expect(page.locator('text=ACCOUNT DELETED!')).toBeVisible({ timeout: 15000 });
});

test('Login User with incorrect email and password', async ({ page }) => {
  await page.goto('https://automationexercise.com', { waitUntil: 'domcontentloaded' });
  await page.click('text=Signup / Login');
  await page.fill('input[data-qa="login-email"]', 'wrong@example.com');
  await page.fill('input[data-qa="login-password"]', 'wrongpassword');
  await page.click('button[data-qa="login-button"]');
  await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible({ timeout: 15000 });
});

test('Logout User', async ({ page }) => {
    // First create a test account
    await page.goto('http://automationexercise.com', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Automation Exercise/);
    
    const email = generateUniqueEmail();
    
    await page.click('text=Signup / Login');
    await expect(page.locator('text=New User Signup!')).toBeVisible({ timeout: 15000 });
    await page.fill('input[data-qa="signup-name"]', 'Zouhair');
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');
    
    await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible({ timeout: 15000 });
    await page.check('#id_gender1');
    await page.fill('#password', 'password123');
    await page.selectOption('#days', '10');
    await page.selectOption('#months', 'January');
    await page.selectOption('#years', '1995');
    await page.check('#newsletter');
    await page.check('#optin');
    await page.fill('#first_name', 'Zouhair');
    await page.fill('#last_name', 'Laaroussi');
    await page.fill('#address1', '123 Street');
    await page.selectOption('#country', 'United States');
    await page.fill('#state', 'New York');
    await page.fill('#city', 'NYC');
    await page.fill('#zipcode', '10001');
    await page.fill('#mobile_number', '1234567890');
    
    await page.click('button[data-qa="create-account"]');
    await expect(page.locator('text=ACCOUNT CREATED!')).toBeVisible({ timeout: 15000 });
    await page.click('text=Continue');
  
    // Wait for page to load and verify logged in state
    await page.waitForLoadState('networkidle');
    await expect(page.locator('text=Logged in as Zouhair')).toBeVisible({ timeout: 15000 });
    
    // Click logout and wait for navigation
    await page.click('a[href="/logout"]');
    await page.waitForLoadState('networkidle');
    
    // Verify we're back at login page
    await expect(page.locator('h2').filter({ hasText: 'Login to your account' })).toBeVisible({ timeout: 15000 });
    
    // Additional verification that we're actually logged out
    await expect(page.locator('text=Logged in as Zouhair')).not.toBeVisible();
  });