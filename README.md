# playwrite-automation-exercise
Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation.


# Automation Exercise Testing Suite
An end-to-end testing suite for Automation Exercise using Playwright.
Features

User Registration:
Login/Logout
Contact Form
Error Handling
Account Management

Prerequisites:
Node.js (v14 or higher)
npm

Setup :
# Clone repository
git clone [your-repo-url]
cd [your-repo-name]

# Install dependencies
npm install
npx playwright install

Project Structure:
├── test-data/
│   └── sample.txt
├── tests/
│   └── automation.spec.ts
├── playwright.config.ts
├── package.json
└── README.md

Running Tests:
# Run all tests
npx playwright test

# Run specific test file
npx playwright test automation.spec.ts

# Run tests with UI
npx playwright test --headed

# Run tests with debug mode
npx playwright test --debug


Test Cases:

# Register User
Creates new account
Verifies account creation
Deletes account


# Login User
Tests correct credentials
Tests incorrect credentials
Verifies error messages


# Logout User
Verifies successful logout
Confirms redirect to login page


# Contact Form
Submits contact form
Handles file upload
Verifies success message

Implementation Details:
# Key Functions
<function generateUniqueEmail() {
  return `user_${Date.now()}@example.com`;
}>

# Test Architecture
Uses Page Object Model
Implements utility functions
Handles dynamic data
Includes proper error handling

# Configuration
playwright.config.ts includes:

# Headless/headed mode
Video recording
Screenshot on failure
Retry logic
Timeout settings

# Best Practices Used
Unique email generation
Proper wait mechanisms
Error handling
Clean test data
Independent test cases

Common Issues & Solutions

# Timeout Issues
Increased default timeout
Added explicit waits


# Element Selection
Used reliable selectors
Added visibility checks


# Test Independence
Generated unique data
Cleaned up test data



# Contributing
Fork repository
Create feature branch
Submit pull request

License
@Zouahir_Laaroussi
# github: ZoouhairLrs 