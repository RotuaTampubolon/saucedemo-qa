 # Bug Reports — SauceDemo

---

## BUG-001

| Field               | Detail                                                                 |
|---------------------|------------------------------------------------------------------------|
| **ID**              | BUG-001                                                                |
| **Title**           | Cart tidak ter-reset setelah logout dan login dengan akun berbeda      |
| **Reporter**        | Ella Situmorang                                                        |
| **Date**            | May 2026                                                               |
| **Environment**     | Chrome 124, Windows 11, saucedemo.com                                  |
| **Severity**        | High                                                                   |
| **Priority**        | High                                                                   |
| **Status**          | Open                                                                   |

**Steps to Reproduce:**
1. Login sebagai `standard_user`
2. Add 2 produk ke cart
3. Klik menu → Logout
4. Login sebagai `problem_user`
5. Klik icon cart

**Expected Result:**
Cart kosong karena session berbeda

**Actual Result:**
Cart masih menampilkan item dari session `standard_user`

---

## BUG-002

| Field               | Detail                                                                 |
|---------------------|------------------------------------------------------------------------|
| **ID**              | BUG-002                                                                |
| **Title**           | Tombol "Add to Cart" tidak berfungsi pada beberapa produk (problem_user)|
| **Reporter**        | Ella Situmorang                                                        |
| **Date**            | May 2026                                                               |
| **Environment**     | Chrome 124, Windows 11, saucedemo.com                                  |
| **Severity**        | High                                                                   |
| **Priority**        | High                                                                   |
| **Status**          | Open                                                                   |

**Steps to Reproduce:**
1. Login sebagai `problem_user` / `secret_sauce`
2. Klik "Add to cart" pada beberapa produk
3. Perhatikan cart badge

**Expected Result:**
Cart badge bertambah untuk setiap produk yang di-add

**Actual Result:**
Beberapa produk tidak menambah cart badge — tombol tidak merespons

---

## BUG-003

| Field               | Detail                                                                 |
|---------------------|------------------------------------------------------------------------|
| **ID**              | BUG-003                                                                |
| **Title**           | Gambar produk tampil salah / tidak sesuai (problem_user)               |
| **Reporter**        | Ella Situmorang                                                        |
| **Date**            | May 2026                                                               |
| **Environment**     | Chrome 124, Windows 11, saucedemo.com                                  |
| **Severity**        | Medium                                                                 |
| **Priority**        | Medium                                                                 |
| **Status**          | Open                                                                   |

**Steps to Reproduce:**
1. Login sebagai `problem_user` / `secret_sauce`
2. Lihat daftar produk di halaman inventory

**Expected Result:**
Setiap produk menampilkan gambar yang sesuai

**Actual Result:**
Gambar produk tampil acak / tidak sesuai dengan nama produk