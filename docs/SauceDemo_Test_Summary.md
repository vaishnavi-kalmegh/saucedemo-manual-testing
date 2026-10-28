# SauceDemo — Test Summary

**Test Objective:** Manual black-box validation of login, inventory, product details, cart and checkout.

**Coverage:** 55 documented manual test cases across 6 modules. Six scenarios also have overlapping Playwright checks; the other 49 scenarios have no automated equivalent in this project.

**Application Reachability:** The test plan targets the live SauceDemo web application.

## Test Cases by Module

| Module | Cases | Not Run | Pass | Fail | Blocked |
|---|---:|---:|---:|---:|---:|
| Login | 12 | 12 | 0 | 0 | 0 |
| Inventory | 12 | 12 | 0 | 0 | 0 |
| Product Detail | 7 | 7 | 0 | 0 | 0 |
| Cart | 8 | 8 | 0 | 0 | 0 |
| Checkout | 11 | 11 | 0 | 0 | 0 |
| Order Overview | 5 | 5 | 0 | 0 | 0 |
| **Total** | **55** | **55** | **0** | **0** | **0** |

## Test Cases by Priority

| Priority | Cases |
|---|---:|
| Critical | 4 |
| High | 33 |
| Medium | 18 |
| Low | 0 |

The live version of these counts is the **Summary** sheet in [SauceDemo_Test_Cases.xlsx](SauceDemo_Test_Cases.xlsx). Copy its figures into the tables above after each execution round.

## Defect Findings
Defect reports are drafted for the bug IDs referenced in the case index (BUG-01, 05, 06, 07, 08, 09, 10) in [SauceDemo_Defect_Reports.md](SauceDemo_Defect_Reports.md). They have steps to reproduce and expected results; actual results and evidence are added after execution. None is confirmed yet.

## Execution status

- **Manual suite:** 55/55 cases remain Not Run in the workbook because none was individually executed manually. Automated results are not recorded as manual Pass results.
- **Automated suite:** six Playwright scenarios have a successful recorded GitHub Actions run. The latest recorded run is [available here](https://github.com/vaishnavi-kalmegh/saucedemo-manual-testing/actions/runs/40761897048).
- **Automated overlap:** TC-001 (standard login/inventory), TC-011 (locked-out login), TC-015 (add product to cart), TC-020 (price low-to-high), TC-044 (postal code required), and TC-054 (complete checkout). These are automation-covered, not manually executed.
- **Remaining scope:** the other 49 manual cases are not covered by the current Playwright suite and have not been executed. No manual Pass/Fail results are claimed.

## Release Assessment
Execution results are updated as each case is run; this document does not provide a release sign-off.

## Next Steps
1. If manual validation is required, run the 55-case suite in Chrome/Edge with JavaScript enabled, recording Status, Actual Result and Executed On in the workbook. Do not convert automation results into manual execution results.
2. Complete the matching defect drafts with evidence and review or retest the Jira defect records as applicable.
3. Update the tables above, then perform regression and closure.

## Jira Traceability
- **SCRUM-13 through SCRUM-22:** Jira defect task references
- **SCRUM-23:** master Jira task for the project documentation

The mapping from bug IDs to Jira keys is not recorded in the repository; see [Jira_Defect_Traceability.md](Jira_Defect_Traceability.md).
