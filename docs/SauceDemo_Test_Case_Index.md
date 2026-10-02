# SauceDemo Test Case Index

| ID | Module | Type | Scenario | Priority | Bug |
|---|---|---|---|---|---|
| TC-001 | Login | Functional | Valid login with standard credentials | High | |
| TC-002 | Login | Negative | Invalid username | High | |
| TC-003 | Login | Negative | Invalid password | High | |
| TC-004 | Login | Negative | Both fields empty | High | |
| TC-005 | Login | Negative | Username empty | High | |
| TC-006 | Login | Negative | Password empty | High | |
| TC-007 | Login | Boundary | Very long username | Medium | |
| TC-008 | Login | Boundary | Very long password | Medium | |
| TC-009 | Login | Negative | Username with leading/trailing spaces | Medium | BUG-01 |
| TC-010 | Login | Functional | Password masking | Medium | |
| TC-011 | Login | Negative | Locked account | High | |
| TC-012 | Login | Negative | Case-sensitive username | Medium | |
| TC-013 | Inventory | Functional | Six products displayed | High | |
| TC-014 | Inventory | Functional | Product name/price/image/description present | High | |
| TC-015 | Inventory | Functional | Add first product to cart | High | |
| TC-016 | Inventory | Functional | Remove product from inventory page | High | |
| TC-017 | Inventory | Functional | Cart badge count for multiple products | High | |
| TC-018 | Inventory | Functional | Sort A-Z | Medium | |
| TC-019 | Inventory | Functional | Sort Z-A | Medium | |
| TC-020 | Inventory | Boundary | Sort Price Low-High | Medium | BUG-10 |
| TC-021 | Inventory | Boundary | Sort Price High-Low | Medium | |
| TC-022 | Inventory | Functional | Open product from name | High | |
| TC-023 | Inventory | Functional | Open product from image | High | |
| TC-024 | Inventory | Functional | Reset App State | Medium | |
| TC-025 | Product Detail | Functional | Correct product detail data | High | |
| TC-026 | Product Detail | Functional | Back to Products | Medium | |
| TC-027 | Product Detail | Functional | Add to cart from detail | High | |
| TC-028 | Product Detail | Functional | Remove from cart from detail | High | |
| TC-029 | Product Detail | Negative | Problem user wrong detail mapping | High | BUG-06 |
| TC-030 | Product Detail | Negative | Problem user detail Add to Cart | High | BUG-05 |
| TC-031 | Product Detail | Negative | Error user description visibility | Medium | BUG-08 |
| TC-032 | Cart | Functional | Open cart | High | |
| TC-033 | Cart | Functional | Added item appears | High | |
| TC-034 | Cart | Functional | Remove item | High | |
| TC-035 | Cart | Functional | Continue shopping | Medium | |
| TC-036 | Cart | Functional | Checkout from cart | High | |
| TC-037 | Cart | Boundary | Empty cart display | Medium | |
| TC-038 | Cart | Negative | Problem user remove item | High | |
| TC-039 | Cart | Negative | Error user add/remove affected item | High | BUG-09 |
| TC-040 | Checkout | Functional | Checkout information loads | High | |
| TC-041 | Checkout | Negative | All required fields empty | High | |
| TC-042 | Checkout | Negative | First name empty | High | |
| TC-043 | Checkout | Negative | Last name empty | High | |
| TC-044 | Checkout | Negative | Postal code empty | High | |
| TC-045 | Checkout | Boundary | Single-character names | Medium | |
| TC-046 | Checkout | Boundary | Postal code minimum length | Medium | |
| TC-047 | Checkout | Negative | Alphabetic postal code | High | |
| TC-048 | Checkout | Negative | Special characters in names | Medium | |
| TC-049 | Checkout | Negative | Problem user last name field | Critical | BUG-07 |
| TC-050 | Checkout | Negative | Error user last name + finish | Critical | BUG-10 |
| TC-051 | Order Overview | Functional | Order lines accurate | High | |
| TC-052 | Order Overview | Functional | Tax and total calculation | High | |
| TC-053 | Order Overview | Functional | Cancel checkout | Medium | |
| TC-054 | Order Overview | Functional | Finish purchase | Critical | |
| TC-055 | Order Overview | Negative | Error user Finish action | Critical | BUG-10 |

> The original Excel workbook contains the full preconditions, steps, test data, expected results, execution status, and observed/bug fields for all 55 cases.
