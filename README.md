# SauceDemo Manual Testing — QA Portfolio

Manual QA testing project for [SauceDemo](https://www.saucedemo.com/): test plan, 55 documented test cases, defect report drafts and a test summary.

## Deliverables
- **Test Plan:** [docs/SauceDemo_Test_Plan.md](docs/SauceDemo_Test_Plan.md)
- **Test Cases (Excel):** [docs/SauceDemo_Test_Cases.xlsx](docs/SauceDemo_Test_Cases.xlsx) — all 55 cases with preconditions, steps, test data and expected results, a status column per case, a live summary sheet and a test data sheet
- **Test Cases (readable on GitHub):** [docs/SauceDemo_Test_Cases.md](docs/SauceDemo_Test_Cases.md); one-line index in [docs/SauceDemo_Test_Case_Index.md](docs/SauceDemo_Test_Case_Index.md)
- **Defect reports:** [docs/SauceDemo_Defect_Reports.md](docs/SauceDemo_Defect_Reports.md) — drafts with steps and expected results, plus a blank template
- **Jira traceability:** [docs/Jira_Defect_Traceability.md](docs/Jira_Defect_Traceability.md)
- **Test Summary:** [docs/SauceDemo_Test_Summary.md](docs/SauceDemo_Test_Summary.md)

## Coverage

| Module | Cases |
|---|---:|
| Login | 12 |
| Inventory | 12 |
| Product Detail | 7 |
| Cart | 8 |
| Checkout | 11 |
| Order Overview | 5 |
| **Total** | **55** |

Case types: functional, negative and boundary. Accounts used: standard_user, locked_out_user, problem_user and error_user.

## Status
**All 55 cases are Not Run.** No pass/fail results, actual outcomes or evidence are recorded yet, and the defect reports are unconfirmed drafts. Execution results are added as each case is run.

## How to execute
1. Open `docs/SauceDemo_Test_Cases.xlsx` and go to the **Test Cases** sheet.
2. Run each case in desktop Chrome against https://www.saucedemo.com/ using the **Test Data** sheet for accounts and expected messages.
3. Set **Status** (Pass, Fail, Blocked, Skipped), fill in **Actual Result** and **Executed On**, and add a **Bug** ID for failures.
4. For each failure, complete the matching draft in `docs/SauceDemo_Defect_Reports.md` (or the blank template) with evidence, then raise or update the Jira task.
5. The **Summary** sheet recalculates automatically; copy its counts into `docs/SauceDemo_Test_Summary.md`.
