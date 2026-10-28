# SauceDemo QA Portfolio Project

A learning-focused quality assurance project for [SauceDemo](https://www.saucedemo.com/) demonstrating test planning, manual test-case design, defect documentation, traceability, and browser-test automation with Playwright and GitHub Actions.

> **Project status:** Documentation and automation setup are complete for this educational portfolio. The GitHub Actions browser-test workflow has completed successfully. The 55 manual test cases are documented but have **not** been individually executed; their statuses remain `Not Run`. Defect reports are examples/drafts until reproduced and verified.

## Project highlights

- **55 manual test cases** across six application areas, with preconditions, steps, test data, expected results, and execution fields.
- **Playwright browser automation** for six core login, inventory, cart, and checkout scenarios.
- **GitHub Actions CI** to install dependencies and Chromium, run the automated suite, and upload test reports/evidence.
- **Test plan, summary, defect-report drafts, and traceability documentation** to demonstrate a QA workflow from planning through reporting.

## Test coverage

| Area | Manual cases |
|---|---:|
| Login | 12 |
| Inventory | 12 |
| Product detail | 7 |
| Cart | 8 |
| Checkout | 11 |
| Order overview | 5 |
| **Total** | **55** |

The manual suite includes functional, negative, and boundary scenarios. Test data references SauceDemo accounts such as `standard_user`, `locked_out_user`, `problem_user`, and `error_user`.

### Automated browser scenarios

The Playwright suite covers:

1. Standard-user login and inventory visibility
2. Locked-out-user login error
3. Price sorting from low to high
4. Adding a product to the cart
5. Completing checkout
6. Required postal-code validation during checkout

**Latest recorded CI run:** [View the successful GitHub Actions run](https://github.com/vaishnavi-kalmegh/saucedemo-manual-testing/actions/runs/40761897048). The workflow completed successfully; this confirms the automated job ran successfully, not that the separate manual suite has been executed.

## Repository guide

| Resource | Purpose |
|---|---|
| [Test plan](docs/SauceDemo_Test_Plan.md) | Scope, approach, test data, and execution process |
| [Excel test cases](docs/SauceDemo_Test_Cases.xlsx) | 55 cases, execution fields, summary sheet, and test data |
| [Markdown test cases](docs/SauceDemo_Test_Cases.md) | Readable test-case documentation on GitHub |
| [Test-case index](docs/SauceDemo_Test_Case_Index.md) | Compact case index |
| [Defect-report drafts](docs/SauceDemo_Defect_Reports.md) | Example defect reports and a reusable template |
| [Jira traceability](docs/Jira_Defect_Traceability.md) | Relationship between test cases and defect IDs |
| [Test summary](docs/SauceDemo_Test_Summary.md) | Planned coverage and reporting structure |
| [Automation guide](docs/AUTOMATED_TESTING.md) | How the Playwright suite and CI workflow operate |
| [Playwright tests](tests/e2e/saucedemo.spec.js) | Automated browser scenarios |
| [GitHub Actions workflow](.github/workflows/saucedemo-playwright.yml) | CI configuration |

## Run the automated tests locally

Requirements: Node.js 20 or compatible, npm, and a supported operating system.

```bash
npm install
npx playwright install --with-deps chromium
npm run test:e2e
```

To generate the HTML report locally:

```bash
npm run test:e2e:report
```

The CI workflow also runs on pushes to configured branches, pull requests targeting `main`, manual dispatch, and a weekly schedule. GitHub Actions uploads the Playwright HTML report and failure evidence as workflow artifacts for 14 days.

## Manual test execution workflow

1. Open `docs/SauceDemo_Test_Cases.xlsx` and select the **Test Cases** sheet.
2. Execute each case against the live SauceDemo application using the **Test Data** sheet.
3. Record the actual result, status, execution date, and any related defect ID. Use **Pass**, **Fail**, **Blocked**, or **Skipped** only after executing the case.
4. For a failure, reproduce it and capture appropriate evidence before finalizing a defect report.
5. Update the summary with the actual execution counts.

## Scope and reporting integrity

This is an educational QA portfolio, not a claim of production certification. Expected results describe intended behavior; they are not proof that a scenario passed. Defect drafts are not confirmed bugs until reproduced. Automated smoke tests cover only the six listed scenarios and do not replace the full manual test suite.

## Skills demonstrated

Test planning · Manual test-case design · Positive and negative testing · Boundary testing · Defect reporting · Requirement traceability · Excel-based test tracking · Playwright · JavaScript · GitHub Actions CI
