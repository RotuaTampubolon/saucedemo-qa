 # Test Summary Report — SauceDemo

---

## Project Info

| Field       | Detail                    |
|-------------|---------------------------|
| Project     | SauceDemo QA Testing      |
| Tester      | Ella Situmorang           |
| Date        | May 2026                  |
| Environment | Chrome 124 · Windows 11   |
| App URL     | https://www.saucedemo.com |

---

## Execution Summary

| Metric            | Result |
|-------------------|--------|
| Total Test Cases  | 12     |
| Pass              | 12     |
| Fail              | 0      |
| Skipped           | 0      |
| Pass Rate         | 100%   |

---

## Bug Summary

| ID      | Title                                              | Severity | Status |
|---------|----------------------------------------------------|----------|--------|
| BUG-001 | Cart tidak reset setelah logout                    | High     | Open   |
| BUG-002 | Add to cart tidak berfungsi pada problem_user      | High     | Open   |
| BUG-003 | Gambar produk tampil salah pada problem_user       | Medium   | Open   |

---

## Conclusion

Semua 12 test case pada fitur utama (Login, Cart, Checkout) berhasil
dieksekusi dan lulus dengan pass rate 100%.

Ditemukan 3 bug pada akun `problem_user` yang merupakan akun simulasi
untuk menguji error handling aplikasi. Bug tersebut tidak mempengaruhi
flow utama `standard_user`.

**Recommendation:** Aplikasi layak untuk demo environment.
Bug BUG-001 dan BUG-002 perlu ditindaklanjuti sebelum production release.
