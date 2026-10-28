# Automated browser checks

This project keeps the 55-case manual test suite separate from the Playwright smoke suite. Automated results must not be copied into the manual workbook as if the manual cases were executed.

## What runs

The GitHub Actions workflow `.github/workflows/saucedemo-playwright.yml` runs browser checks when relevant branches receive pushes, when a pull request targets `main`, on manual dispatch, and every Sunday at 06:00 UTC.

The Playwright suite currently checks:

1. Standard user login and inventory visibility.
2. Locked-out user login error.
3. Inventory sorting by price, low to high.
4. Adding a product to the cart.
5. Completing checkout with valid data.
6. Required postal-code validation during checkout.

## Where to find results

Open the repository's **Actions** tab, select **SauceDemo Playwright checks**, and open a workflow run. Download the `saucedemo-playwright-results` artifact for the HTML report and any failure traces/screenshots produced by the run.

## Important distinctions

- A successful workflow run is evidence that these automated checks passed in that run; it does not mean all 55 manual cases passed.
- A failed check is a signal to investigate, not automatically a confirmed product defect. Reproduce the behavior and capture evidence before creating a defect report.
- The workflow depends on the public SauceDemo site and GitHub-hosted runners being reachable. External outages or site changes can cause failures unrelated to this repository.
- The test account and data are public demo values only. Do not add personal credentials or real customer data.
- The manual workbook remains the source of truth for manual execution status.
