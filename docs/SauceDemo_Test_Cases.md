# SauceDemo Test Cases

Full case documentation for the 55 cases listed in [SauceDemo_Test_Case_Index.md](SauceDemo_Test_Case_Index.md). The same content is in the Excel workbook [SauceDemo_Test_Cases.xlsx](SauceDemo_Test_Cases.xlsx), which also holds the execution status columns and a live summary.

**Execution status:** six scenarios have overlapping Playwright checks that passed in the latest recorded successful CI run; those cases are labelled **Automation covered — not manually executed** below. The remaining 49 cases are **Not Run** and have no recorded actual outcomes or evidence. The Excel workbook's Status column tracks manual execution only, so its 55 manual statuses remain Not Run. Expected results describe intended behavior, not proof of a pass.

**Environment:** https://www.saucedemo.com/ in desktop Chrome (latest). Accounts and data: see the Test Data sheet in the workbook.

## Login

### TC-001 — Valid login with standard credentials

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: standard_user / Password: secret_sauce

**Expected result:** User is taken to /inventory.html. Page title is "Products"; six products, the cart icon and the menu button are displayed.

### TC-002 — Invalid username

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: invalid_user / Password: secret_sauce

**Expected result:** Error banner: "Epic sadface: Username and password do not match any user in this service". User stays on the login page.

### TC-003 — Invalid password

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: standard_user / Password: wrong_password

**Expected result:** Error banner: "Epic sadface: Username and password do not match any user in this service". User stays on the login page.

### TC-004 — Both fields empty

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Leave Username empty.
2. Leave Password empty.
3. Click Login.

**Test data:** Username: (empty) / Password: (empty)

**Expected result:** Error banner: "Epic sadface: Username is required". User stays on the login page.

### TC-005 — Username empty

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Leave Username empty.
2. Enter the password.
3. Click Login.

**Test data:** Username: (empty) / Password: secret_sauce

**Expected result:** Error banner: "Epic sadface: Username is required".

### TC-006 — Password empty

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username.
2. Leave Password empty.
3. Click Login.

**Test data:** Username: standard_user / Password: (empty)

**Expected result:** Error banner: "Epic sadface: Password is required".

### TC-007 — Very long username

**Type:** Boundary · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: 256 x "a" / Password: secret_sauce

**Expected result:** Application does not crash or break the layout. Error banner: "Epic sadface: Username and password do not match any user in this service". User stays on the login page.

### TC-008 — Very long password

**Type:** Boundary · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: standard_user / Password: 256 x "a"

**Expected result:** Application does not crash or break the layout. Error banner: "Epic sadface: Username and password do not match any user in this service". User stays on the login page.

### TC-009 — Username with leading/trailing spaces

**Type:** Negative · **Priority:** Medium · Bug: BUG-01 · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: " standard_user " (one leading and one trailing space) / Password: secret_sauce

**Expected result:** Either the whitespace is trimmed and login succeeds, or a clear credentials error is shown. No unhandled error. Record the exact behaviour; BUG-01 is raised against this case in the index.

### TC-010 — Password masking

**Type:** Functional · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Type a password into the Password field.
2. Look at the field while typing and after.

**Test data:** Password: secret_sauce

**Expected result:** Characters are masked (dots/bullets). The password is not shown in clear text.

### TC-011 — Locked account

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: locked_out_user / Password: secret_sauce

**Expected result:** Error banner: "Epic sadface: Sorry, this user has been locked out." User is not logged in and stays on the login page.

### TC-012 — Case-sensitive username

**Type:** Negative · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Browser open on https://www.saucedemo.com/; no user logged in

**Steps:**

1. Enter the username in the Username field.
2. Enter the password in the Password field.
3. Click Login.

**Test data:** Username: Standard_User (different capitalisation) / Password: secret_sauce

**Expected result:** Error banner: "Epic sadface: Username and password do not match any user in this service". User stays on the login page.

## Inventory

### TC-013 — Six products displayed

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Look at the product list on the Products page.

**Test data:** n/a

**Expected result:** Exactly six products are listed: Sauce Labs Backpack, Bike Light, Bolt T-Shirt, Fleece Jacket, Onesie and Test.allTheThings() T-Shirt (Red).

### TC-014 — Product name/price/image/description present

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. For each of the six products, check what is displayed on its card.

**Test data:** n/a

**Expected result:** Every card shows a product image (loaded, not broken), name, description, price and an Add to cart button.

### TC-015 — Add first product to cart

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Click Add to cart on the first product (Sauce Labs Backpack).

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Button changes to "Remove". Cart badge shows 1.

### TC-016 — Remove product from inventory page

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack already added from the Products page (badge = 1)

**Steps:**

1. Click Remove on the Backpack card.

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Button reverts to "Add to cart". Cart badge disappears.

### TC-017 — Cart badge count for multiple products

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Click Add to cart on three different products, one at a time.
2. Check the cart badge after each click.

**Test data:** Products: Backpack, Bike Light, Bolt T-Shirt

**Expected result:** Badge shows 1, then 2, then 3. Each clicked button changes to "Remove".

### TC-018 — Sort A-Z

**Type:** Functional · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Open the sort dropdown.
2. Select "Name (A to Z)".

**Test data:** Sort: Name (A to Z)

**Expected result:** Order: Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red).

### TC-019 — Sort Z-A

**Type:** Functional · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Open the sort dropdown.
2. Select "Name (Z to A)".

**Test data:** Sort: Name (Z to A)

**Expected result:** Exact reverse of A to Z: Test.allTheThings() T-Shirt (Red) first, Sauce Labs Backpack last.

### TC-020 — Sort Price Low-High

**Type:** Boundary · **Priority:** Medium · Bug: BUG-10 · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Open the sort dropdown.
2. Select "Price (low to high)".

**Test data:** Sort: Price (low to high)

**Expected result:** Prices ascend: $7.99, $9.99, $15.99, $15.99, $29.99, $49.99 (Onesie, Bike Light, the two $15.99 T-shirts, Backpack, Fleece Jacket). Index lists BUG-10 against this case; confirm the reference on execution (BUG-10 otherwise relates to error_user checkout).

### TC-021 — Sort Price High-Low

**Type:** Boundary · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Open the sort dropdown.
2. Select "Price (high to low)".

**Test data:** Sort: Price (high to low)

**Expected result:** Prices descend: $49.99, $29.99, $15.99, $15.99, $9.99, $7.99.

### TC-022 — Open product from name

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Click the product name "Sauce Labs Backpack".

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Product detail page opens (/inventory-item.html?id=4) showing the Backpack.

### TC-023 — Open product from image

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Click the product image of "Sauce Labs Backpack".

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Same product detail page as TC-022 opens, for the Backpack.

### TC-024 — Reset App State

**Type:** Functional · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; two products added to cart (badge = 2)

**Steps:**

1. Click the menu (burger) button.
2. Click "Reset App State".
3. Close the menu.

**Test data:** n/a

**Expected result:** Cart is emptied and the badge disappears. Product buttons show "Add to cart" (note whether a page refresh is needed for button states to reset).

## Product Detail

### TC-025 — Correct product detail data

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Open each product from the list.
2. Compare name, description, price and image with the Products page.

**Test data:** All six products

**Expected result:** Each detail page shows the same name, description, price and image as the product card that was clicked.

### TC-026 — Back to Products

**Type:** Functional · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; a product detail page is open

**Steps:**

1. Click "Back to products".

**Test data:** n/a

**Expected result:** User returns to the Products page (/inventory.html).

### TC-027 — Add to cart from detail

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack detail page open; cart empty

**Steps:**

1. Click "Add to cart".

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Button changes to "Remove". Cart badge shows 1.

### TC-028 — Remove from cart from detail

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack detail page open; Backpack in cart

**Steps:**

1. Click "Remove".

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Button reverts to "Add to cart". Cart badge disappears.

### TC-029 — Problem user wrong detail mapping

**Type:** Negative · **Priority:** High · Bug: BUG-06 · **Status:** Not Run

**Preconditions:** Logged in as problem_user; Products page displayed; cart empty

**Steps:**

1. Click a product name, e.g. "Sauce Labs Backpack".
2. Compare the detail page with the product that was clicked.
3. Repeat for the other products.

**Test data:** Account: problem_user / secret_sauce

**Expected result:** The detail page shows the product that was clicked (same name, price, description and image).

### TC-030 — Problem user detail Add to Cart

**Type:** Negative · **Priority:** High · Bug: BUG-05 · **Status:** Not Run

**Preconditions:** Logged in as problem_user; Products page displayed; cart empty; a product detail page is open

**Steps:**

1. Click "Add to cart" on the detail page.
2. Check the button and the cart badge.

**Test data:** Account: problem_user / secret_sauce

**Expected result:** Button changes to "Remove" and the badge increases by 1 for that product.

### TC-031 — Error user description visibility

**Type:** Negative · **Priority:** Medium · Bug: BUG-08 · **Status:** Not Run

**Preconditions:** Logged in as error_user; Products page displayed; cart empty

**Steps:**

1. Open a product detail page.
2. Compare the description with the one on the Products page.

**Test data:** Account: error_user / secret_sauce

**Expected result:** The product description is visible and matches the Products page.

## Cart

### TC-032 — Open cart

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Click the cart icon.

**Test data:** n/a

**Expected result:** Cart page opens (/cart.html) with title "Your Cart", QTY and Description headers, Continue Shopping and Checkout buttons.

### TC-033 — Added item appears

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack added to cart

**Steps:**

1. Click the cart icon.
2. Check the listed item.

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Backpack is listed with QTY 1, its description and price $29.99.

### TC-034 — Remove item

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack added to cart; Your Cart page open

**Steps:**

1. Click Remove next to the Backpack.

**Test data:** Product: Sauce Labs Backpack

**Expected result:** Item disappears from the cart. Cart badge disappears.

### TC-035 — Continue shopping

**Type:** Functional · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack added to cart; Your Cart page open

**Steps:**

1. Click "Continue Shopping".

**Test data:** n/a

**Expected result:** User returns to the Products page; the Backpack still shows "Remove" and the badge still shows 1.

### TC-036 — Checkout from cart

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack added to cart; Your Cart page open

**Steps:**

1. Click "Checkout".

**Test data:** n/a

**Expected result:** Checkout: Your Information page opens (/checkout-step-one.html).

### TC-037 — Empty cart display

**Type:** Boundary · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Products page displayed; cart empty

**Steps:**

1. Click the cart icon with nothing added.
2. Observe the page.

**Test data:** n/a

**Expected result:** Cart page shows no items and no badge. Continue Shopping and Checkout buttons are visible. Also record whether Checkout can be clicked with an empty cart and what happens.

### TC-038 — Problem user remove item

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as problem_user; Products page displayed; cart empty

**Steps:**

1. Add a product to the cart.
2. Open the cart.
3. Click Remove on the item.

**Test data:** Account: problem_user / secret_sauce

**Expected result:** Item is removed from the cart and the badge disappears.

### TC-039 — Error user add/remove affected item

**Type:** Negative · **Priority:** High · Bug: BUG-09 · **Status:** Not Run

**Preconditions:** Logged in as error_user; Products page displayed; cart empty

**Steps:**

1. Click Add to cart on each of the six products, one by one, checking the badge.
2. Click Remove on each, checking the badge.

**Test data:** Account: error_user / secret_sauce

**Expected result:** Every product can be added and removed; the badge and button state update correctly each time.

## Checkout

### TC-040 — Checkout information loads

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack added to cart; Your Cart page open

**Steps:**

1. Click Checkout.

**Test data:** n/a

**Expected result:** Page title "Checkout: Your Information". First Name, Last Name and Zip/Postal Code fields plus Cancel and Continue buttons are displayed.

### TC-041 — All required fields empty

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: (empty) / Last: (empty) / Zip: (empty)

**Expected result:** Error banner: "Error: First Name is required". User stays on the page.

### TC-042 — First name empty

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: (empty) / Last: Doe / Zip: 94016

**Expected result:** Error banner: "Error: First Name is required".

### TC-043 — Last name empty

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: Jane / Last: (empty) / Zip: 94016

**Expected result:** Error banner: "Error: Last Name is required".

### TC-044 — Postal code empty

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: Jane / Last: Doe / Zip: (empty)

**Expected result:** Error banner: "Error: Postal Code is required".

### TC-045 — Single-character names

**Type:** Boundary · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: A / Last: B / Zip: 94016

**Expected result:** Application accepts single-character names and opens Checkout: Overview.

### TC-046 — Postal code minimum length

**Type:** Boundary · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: Jane / Last: Doe / Zip: 1

**Expected result:** A one-character postal code is handled consistently: either Overview opens, or a clear validation message is shown. Record which.

### TC-047 — Alphabetic postal code

**Type:** Negative · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: Jane / Last: Doe / Zip: ABCDE

**Expected result:** No written postal-code rule exists. Reasonable expectation: a non-numeric code is rejected or flagged. If accepted, record it as an observation and decide whether to raise a defect.

### TC-048 — Special characters in names

**Type:** Negative · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Sauce Labs Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** First: <b>Jane</b> / Last: O'Neil-!@#$ / Zip: 94016

**Expected result:** Special characters are handled safely: no script runs, no broken layout. Either Overview opens with the text shown literally, or a clear validation message appears.

### TC-049 — Problem user last name field

**Type:** Negative · **Priority:** Critical · Bug: BUG-07 · **Status:** Not Run

**Preconditions:** Logged in as problem_user; Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name.
2. Enter Last Name.
3. Enter Zip/Postal Code.
4. Click Continue.

**Test data:** Account: problem_user / secret_sauce; First: Jane / Last: Doe / Zip: 94016

**Expected result:** Each field keeps the value typed into it, including Last Name = "Doe". Continue opens Checkout: Overview.

### TC-050 — Error user last name + finish

**Type:** Negative · **Priority:** Critical · Bug: BUG-10 · **Status:** Not Run

**Preconditions:** Logged in as error_user; Backpack in cart; Checkout: Your Information page open

**Steps:**

1. Enter First Name, Last Name and Zip/Postal Code.
2. Click Continue.
3. On the overview page click Finish.

**Test data:** Account: error_user / secret_sauce; First: Jane / Last: Doe / Zip: 94016

**Expected result:** Information is accepted, Overview opens, and Finish completes the order ("Thank you for your order!").

## Order Overview

### TC-051 — Order lines accurate

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack and Bike Light in cart; Checkout: Overview page open (valid details entered)

**Steps:**

1. Compare the listed lines with what was added to the cart.

**Test data:** Products: Sauce Labs Backpack ($29.99), Sauce Labs Bike Light ($9.99)

**Expected result:** Exactly the two selected items are listed, each with QTY 1, correct name, description and price.

### TC-052 — Tax and total calculation

**Type:** Functional · **Priority:** High · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack and Bike Light in cart; Checkout: Overview page open (valid details entered)

**Steps:**

1. Read Item total, Tax and Total.
2. Check the arithmetic.

**Test data:** Products: Backpack $29.99 + Bike Light $9.99

**Expected result:** Item total $39.98; Tax (8%) $3.20; Total $43.18. Total equals item total plus tax.

### TC-053 — Cancel checkout

**Type:** Functional · **Priority:** Medium · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack and Bike Light in cart; Checkout: Overview page open (valid details entered)

**Steps:**

1. Click Cancel.

**Test data:** n/a

**Expected result:** User returns to the Products page; the cart still contains both items (badge = 2).

### TC-054 — Finish purchase

**Type:** Functional · **Priority:** Critical · **Status:** Not Run

**Preconditions:** Logged in as standard_user; Backpack and Bike Light in cart; Checkout: Overview page open (valid details entered)

**Steps:**

1. Click Finish.
2. Read the confirmation.
3. Click Back Home.

**Test data:** n/a

**Expected result:** Confirmation page (/checkout-complete.html) shows "Thank you for your order!" and the dispatch message. After Back Home the Products page opens with an empty cart.

### TC-055 — Error user Finish action

**Type:** Negative · **Priority:** Critical · Bug: BUG-10 · **Status:** Not Run

**Preconditions:** Logged in as error_user; item in cart; Checkout: Overview page open

**Steps:**

1. Click Finish.
2. Observe the result.

**Test data:** Account: error_user / secret_sauce

**Expected result:** Order completes: confirmation page shows "Thank you for your order!".
