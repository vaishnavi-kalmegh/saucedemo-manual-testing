# SauceDemo — Test Summary

**Test Objective:** Manual black-box validation of login, inventory, product details, cart and checkout.

**Coverage:** 55 test cases: functional, negative and boundary scenarios across 7 modules.

**Application Reachability:** The live SauceDemo homepage was reachable during this run.

**Defect Findings:** 10 defects documented in Jira, focused on reproducible account-specific and workflow failures.

**Severity Mix:** 2 Critical, 4 High, 4 Medium. Severity reflects business impact of the affected workflow.

## Evidence
Defect behaviors were corroborated by multiple recent public SauceDemo testing reports. Native browser screenshots could not be captured because the available live-page tool did not execute JavaScript; attached Jira images are clearly labeled **evidence reconstructions**.

## Release Assessment
Testing produced actionable defects, but this run should not be treated as a formal release sign-off because full interactive execution was technically blocked.

## Next Steps
Run the 55-case suite in Chrome/Edge with JavaScript enabled, replace reconstructed evidence with native screenshots, retest all Jira defects, then perform regression and closure.

## Jira Traceability
- **SCRUM-13 through SCRUM-22:** 10 Jira defect tasks
- **SCRUM-23:** master Jira task containing the test cases, plan, summary, limitations, defect links, and evidence notes
