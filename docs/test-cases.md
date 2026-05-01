# Test Cases — SauceDemo

## Authentication

| TC ID  | Title                        | Steps                                                                 | Expected Result                          | Type     | Priority |
|--------|------------------------------|-----------------------------------------------------------------------|------------------------------------------|----------|----------|
| TC-001 | Login valid                  | 1. Buka app 2. Input standard_user 3. Input secret_sauce 4. Klik Login | Redirect ke /inventory, tampil "Products" | Positive | High     |
| TC-002 | Login locked out user        | 1. Input locked_out_user 2. Input secret_sauce 3. Klik Login          | Error: "Sorry, this user has been locked out" | Negative | High |
| TC-003 | Login username kosong        | 1. Kosongkan username 2. Isi password 3. Klik Login                   | Error: "Username is required"            | Negative | High     |
| TC-004 | Login password kosong        | 1. Isi username 2. Kosongkan password 3. Klik Login                   | Error: "Password is required"            | Negative | High     |
| TC-005 | Login kredensial salah       | 1. Input username & password salah 2. Klik Login                      | Error: "Username and password do not match" | Negative | Medium |

## Cart

| TC ID  | Title                        | Steps                                                                 | Expected Result                          | Type     | Priority |
|--------|------------------------------|-----------------------------------------------------------------------|------------------------------------------|----------|----------|
| TC-006 | Add satu produk ke cart      | 1. Login 2. Klik Add to cart pada 1 produk                            | Cart badge = "1"                         | Positive | High     |
| TC-007 | Remove produk dari cart      | 1. Login 2. Add produk 3. Klik Remove                                 | Cart badge hilang                        | Positive | High     |
| TC-008 | Add 3 produk ke cart         | 1. Login 2. Add 3 produk berbeda                                      | Cart badge = "3"                         | Positive | Medium   |

## Checkout

| TC ID  | Title                        | Steps                                                                 | Expected Result                          | Type     | Priority |
|--------|------------------------------|-----------------------------------------------------------------------|------------------------------------------|----------|----------|
| TC-009 | Checkout dengan data lengkap | 1. Add item 2. Checkout 3. Isi semua field 4. Finish                  | Halaman "Thank you for your order!"      | Positive | High     |
| TC-010 | Checkout first name kosong   | 1. Checkout 2. Skip first name 3. Continue                            | Error: "First Name is required"          | Negative | High     |
| TC-011 | Checkout last name kosong    | 1. Checkout 2. Skip last name 3. Continue                             | Error: "Last Name is required"           | Negative | High     |
| TC-012 | Checkout postal code kosong  | 1. Checkout 2. Skip postal code 3. Continue                           | Error: "Postal Code is required"         | Negative | High     |