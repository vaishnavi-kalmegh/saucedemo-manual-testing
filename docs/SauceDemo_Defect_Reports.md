# SauceDemo Defect Reports

**Status of this document: drafts.** The test cases have not been executed, so none of the defects below is confirmed.
For each draft, the steps and expected result come from the linked test case. The **Actual result** is left open and must be filled in from a real run, with evidence, before the defect is raised or its Jira task is updated.

The bug IDs below are the ones referenced in [SauceDemo_Test_Case_Index.md](SauceDemo_Test_Case_Index.md). The index does not reference BUG-02, BUG-03 or BUG-04, and the repository does not record which `SCRUM-13` to `SCRUM-22` task belongs to which bug, so the Jira column is left blank rather than guessed.

Severity follows the scale in the [test plan](SauceDemo_Test_Plan.md) and is a **proposal** until the actual behaviour is known.

| Bug | Linked case(s) | Account | Summary | Proposed severity | Jira | Status |
|---|---|---|---|---|---|---|
| BUG-01 | TC-009 | standard_user | Username with leading/trailing spaces | Medium | | Draft |
| BUG-05 | TC-030 | problem_user | Add to Cart on product detail page | High | | Draft |
| BUG-06 | TC-029 | problem_user | Product detail page maps to the wrong product | High | | Draft |
| BUG-07 | TC-049 | problem_user | Last Name field on checkout | Critical | | Draft |
| BUG-08 | TC-031 | error_user | Product description visibility on detail page | Medium | | Draft |
| BUG-09 | TC-039 | error_user | Add/remove on cart items | High | | Draft |
| BUG-10 | TC-050, TC-055 (also listed on TC-020) | error_user | Last Name entry and Finish at checkout | Critical | | Draft |

> **Index check needed:** BUG-10 is listed against TC-020 (Sort Price Low-High, standard flow) as well as TC-050 and TC-055 (error_user checkout). Confirm whether the TC-020 reference is a typo for a different bug ID before execution.

---

## BUG-01 — Username with leading/trailing spaces

- **Linked case:** TC-009 · **Module:** Login · **Account:** standard_user
- **Environment:** https://www.saucedemo.com/ · Chrome (latest, desktop)
- **Preconditions:** Browser open on the login page; not logged in.
- **Steps to reproduce:**
  1. Enter `" standard_user "` (one leading and one trailing space) in Username.
  2. Enter `secret_sauce` in Password.
  3. Click Login.
- **Expected result:** Either the whitespace is trimmed and login succeeds, or a clear credentials error is shown. No unhandled error.
- **Actual result:** _To be recorded from a real run._
- **Evidence:** _Screenshot to be attached._
- **Proposed severity / priority:** Medium / Medium

## BUG-05 — Add to Cart on product detail page (problem_user)

- **Linked case:** TC-030 · **Module:** Product Detail · **Account:** problem_user
- **Environment:** https://www.saucedemo.com/ · Chrome (latest, desktop)
- **Preconditions:** Logged in as problem_user; a product detail page is open; cart empty.
- **Steps to reproduce:**
  1. Click "Add to cart" on the detail page.
  2. Check the button label and the cart badge.
- **Expected result:** The button changes to "Remove" and the cart badge increases by 1 for that product.
- **Actual result:** _To be recorded from a real run._
- **Evidence:** _Screenshot to be attached._
- **Proposed severity / priority:** High / High

## BUG-06 — Product detail page maps to the wrong product (problem_user)

- **Linked case:** TC-029 · **Module:** Product Detail · **Account:** problem_user
- **Environment:** https://www.saucedemo.com/ · Chrome (latest, desktop)
- **Preconditions:** Logged in as problem_user; Products page displayed.
- **Steps to reproduce:**
  1. Click a product name, e.g. "Sauce Labs Backpack".
  2. Compare the detail page's name, price, description and image with the product clicked.
  3. Repeat for the other products.
- **Expected result:** The detail page shows the product that was clicked.
- **Actual result:** _To be recorded from a real run, including which products mismatched._
- **Evidence:** _Screenshots of the Products page and the resulting detail page._
- **Proposed severity / priority:** High / High

## BUG-07 — Last Name field on checkout (problem_user)

- **Linked case:** TC-049 · **Module:** Checkout · **Account:** problem_user
- **Environment:** https://www.saucedemo.com/ · Chrome (latest, desktop)
- **Preconditions:** Logged in as problem_user; Backpack in cart; Checkout: Your Information page open.
- **Steps to reproduce:**
  1. Enter First Name `Jane`.
  2. Enter Last Name `Doe`.
  3. Enter Zip/Postal Code `94016`.
  4. Click Continue.
- **Expected result:** Each field keeps the value typed into it, including Last Name = "Doe", and Continue opens Checkout: Overview.
- **Actual result:** _To be recorded from a real run, including the contents of all three fields before clicking Continue._
- **Evidence:** _Screenshot of the form before and after Continue._
- **Proposed severity / priority:** Critical / High (blocks the purchase flow if confirmed)

## BUG-08 — Product description visibility on detail page (error_user)

- **Linked case:** TC-031 · **Module:** Product Detail · **Account:** error_user
- **Environment:** https://www.saucedemo.com/ · Chrome (latest, desktop)
- **Preconditions:** Logged in as error_user; Products page displayed.
- **Steps to reproduce:**
  1. Open a product detail page.
  2. Compare the description with the one on the Products page.
- **Expected result:** The product description is visible and matches the Products page.
- **Actual result:** _To be recorded from a real run._
- **Evidence:** _Screenshot to be attached._
- **Proposed severity / priority:** Medium / Medium

## BUG-09 — Add/remove on cart items (error_user)

- **Linked case:** TC-039 · **Module:** Cart · **Account:** error_user
- **Environment:** https://www.saucedemo.com/ · Chrome (latest, desktop)
- **Preconditions:** Logged in as error_user; Products page displayed; cart empty.
- **Steps to reproduce:**
  1. Click Add to cart on each of the six products, one by one, checking the badge after each.
  2. Click Remove on each, checking the badge after each.
- **Expected result:** Every product can be added and removed; the badge and button state update correctly each time.
- **Actual result:** _To be recorded from a real run, naming each product that failed to add or remove._
- **Evidence:** _Screenshots or a screen recording._
- **Proposed severity / priority:** High / High

## BUG-10 — Last Name entry and Finish at checkout (error_user)

- **Linked cases:** TC-050, TC-055 (the index also lists BUG-10 on TC-020; see the index check above) · **Module:** Checkout / Order Overview · **Account:** error_user
- **Environment:** https://www.saucedemo.com/ · Chrome (latest, desktop)
- **Preconditions:** Logged in as error_user; Backpack in cart; Checkout: Your Information page open.
- **Steps to reproduce:**
  1. Enter First Name `Jane`, Last Name `Doe`, Zip/Postal Code `94016`.
  2. Click Continue.
  3. On the overview page click Finish.
- **Expected result:** The information is accepted, Overview opens, and Finish completes the order ("Thank you for your order!").
- **Actual result:** _To be recorded from a real run, noting which step failed._
- **Evidence:** _Screenshots of each step._
- **Proposed severity / priority:** Critical / High (blocks the purchase flow if confirmed)

---

## Blank defect template

- **Bug ID / Jira key:**
- **Linked test case(s):**
- **Module / Account:**
- **Environment:** (URL, browser and version, date)
- **Preconditions:**
- **Steps to reproduce:**
  1.
- **Expected result:**
- **Actual result:**
- **Evidence:** (screenshot, recording)
- **Severity / priority:** (Critical, High, Medium, Low)
- **Reproducibility:** (always, intermittent, once)
- **Status:** (Draft, Open, Fixed, Retested, Closed)
