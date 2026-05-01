# Test Scenarios — SauceDemo

> Format: Gherkin (Given / When / Then)

---

## Feature: Login

**Scenario 1 — Login valid**
Given user berada di halaman login
When user input username "standard_user" dan password "secret_sauce"
And user klik tombol Login
Then user redirect ke halaman Products

**Scenario 2 — Locked out user**
Given user berada di halaman login
When user input username "locked_out_user" dan password "secret_sauce"
And user klik tombol Login
Then muncul error "Sorry, this user has been locked out"

**Scenario 3 — Username kosong**
Given user berada di halaman login
When user mengosongkan field username
And user klik tombol Login
Then muncul error "Username is required"

**Scenario 4 — Password kosong**
Given user berada di halaman login
When user mengosongkan field password
And user klik tombol Login
Then muncul error "Password is required"

**Scenario 5 — Kredensial salah**
Given user berada di halaman login
When user input username dan password yang salah
And user klik tombol Login
Then muncul error "Username and password do not match"
---

## Feature: Cart

**Scenario 6 — Add to cart**   
Given user sudah login
When user klik "Add to cart" pada satu produk
Then cart badge menampilkan angka "1"\

**Scenario 7 — Remove dari cart**
Given user sudah memiliki 1 item di cart
When user klik "Remove"
Then cart badge menghilang

**Scenario 8 — Add multiple items**
Given user sudah login
When user menambahkan 3 produk berbeda
Then cart badge menampilkan angka "3"
---

## Feature: Checkout

**Scenario 9 — Checkout berhasil**
Given user memiliki item di cart
When user mengisi semua field checkout dengan data valid
And klik Continue lalu Finish
Then muncul halaman "Thank you for your order!"

**Scenario 10 — First name kosong**
Given user berada di halaman checkout
When user mengosongkan field First Name
And klik Continue
Then muncul error "First Name is required"

**Scenario 11 — Last name kosong**
Given user berada di halaman checkout
When user mengosongkan field Last Name
And klik Continue
Then muncul error "Last Name is required"

**Scenario 12 — Postal code kosong**
Given user berada di halaman checkout
When user mengosongkan field Postal Code
And klik Continue
Then muncul error "Postal Code is required"