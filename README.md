# SauceDemo QA Portfolio Project

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![CI](https://github.com/RotuaTampubolon/saucedemo-qa/actions/workflows/cypress-tests.yml/badge.svg)

> End-to-end QA Testing Portfolio — Manual & Automation  
> **Tester:** Rotua Immanuela Tampubolon | Information Systems Student

---

## Project Overview

Proyek ini merupakan implementasi QA testing lengkap pada aplikasi
e-commerce [SauceDemo](https://www.saucedemo.com), mencakup:

- Manual Testing (Test Plan, Scenarios, Test Cases)
- Bug Reporting (3 realistic bugs)
- Test Automation menggunakan **Cypress + JavaScript**
- Test Execution Result & Summary Report

---

## Tools & Tech Stack

| Tool          | Purpose                  |
|---------------|--------------------------|
| Cypress       | Test Automation Framework|
| JavaScript    | Automation scripting     |
| VS Code       | Code editor              |
| GitHub        | Version control          |

---

## Testing Scope

| Feature                | Manual  | Automated |
|------------------------|------=--|-----------|
| Login / Authentication | ✅     | ✅        |
| Product Listing        | ✅     | ❌        |
| Add / Remove Cart      | ✅     | ✅        |
| Checkout Flow          | ✅     | ✅        |
| Logout                 | ✅     | ❌        |

---

## Project Structure

```
saucedemo-qa/
├── cypress/
│   └── e2e/
│       ├── login.cy.js       ← 5 test cases
│       ├── cart.cy.js        ← 3 test cases
│       └── checkout.cy.js    ← 4 test cases
├── docs/
│   ├── test-plan.md
│   ├── test-scenarios.md     ← Gherkin format
│   ├── test-cases.md
│   ├── bug-reports.md
│   ├── test-execution-result.md
│   └── test-summary-report.md
├── screenshots/
├── cypress.config.js
└── README.md
```

---

## Test Result Summary

| Metric            | Result  |
|-------------------|---------|
| Total Test Cases  | 12      |
| Pass              | 12      |
| Fail              | 0       |
| Pass Rate         | **100%**|
| Bugs Found        | 3       |

---

## Bug Summary

| ID      | Title                                       | Severity |
|---------|---------------------------------------------|----------|
| BUG-001 | Cart tidak reset setelah logout             | High     |
| BUG-002 | Add to cart tidak berfungsi (problem_user)  | High     |
| BUG-003 | Gambar produk tampil salah (problem_user)   | Medium   |

---

## How to Run Automation

```bash
# Clone repo
git clone https://github.com/YOUR_USERNAME/saucedemo-qa.git
cd saucedemo-qa

# Install dependencies
npm install

# Run semua test (headless)
npx cypress run

# Run dengan tampilan browser
npx cypress open
```

---

## Documentation

| Doc               | Link                                                          |
|-------------------|---------------------------------------------------------------|
| Test Plan         | [docs/test-plan.md](docs/test-plan.md)                        |
| Test Scenarios    | [docs/test-scenarios.md](docs/test-scenarios.md)              |
| Test Cases        | [docs/test-cases.md](docs/test-cases.md)                      |
| Bug Reports       | [docs/bug-reports.md](docs/bug-reports.md)                    |
| Execution Result  | [docs/test-execution-result.md](docs/test-execution-result.md)|
| Summary Report    | [docs/test-summary-report.md](docs/test-summary-report.md)    |
