# Test Plan — SauceDemo E-Commerce

| Field       | Detail                     |
| ----------- | -------------------------- |
| Project     | SauceDemo QA Testing       |
| Tester      | Rotua Immanuela Tampubolon |
| Date        | April 2026                 |
| Version     | 1.0                        |
| Environment | Chrome 124, Windows 11     |
| App URL     | https://www.saucedemo.com  |

---

## Objective

Memastikan fitur utama SauceDemo berjalan sesuai requirement,
bebas dari bug kritis, dan memberikan pengalaman pengguna yang baik.

---

## Scope of Testing

### In Scope

- Login & Authentication
- Product Listing & Sorting
- Add / Remove Cart
- Checkout Flow
- Logout

### Out of Scope

- Payment gateway (tidak tersedia di demo)
- Performance testing
- Mobile responsiveness

---

## Testing Types

| Type             | Approach         |
| ---------------- | ---------------- |
| Functional       | Manual + Cypress |
| Negative Testing | Manual + Cypress |
| Regression       | Cypress          |

---

## Entry Criteria

- Aplikasi dapat diakses di browser
- Credentials test tersedia

## Exit Criteria

- Semua test case dieksekusi
- Tidak ada bug dengan severity High yang masih Open
- Pass rate minimal 90%

---

## Tools

| Tool    | Purpose         |
| ------- | --------------- |
| Cypress | Test Automation |
| VS Code | Script Editor   |
| GitHub  | Version Control |
