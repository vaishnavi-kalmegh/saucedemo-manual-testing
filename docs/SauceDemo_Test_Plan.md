# SauceDemo — Manual Test Plan

**Project:** SauceDemo Manual Testing – Full Test Cycle  
**Application:** SauceDemo (https://www.saucedemo.com/)

## Objective
Validate core e-commerce flows and identify functional, negative, boundary, and account-specific defects.

## Scope
Login; inventory/product listing; sorting; product details; cart; checkout information; checkout overview; order completion; logout/menu.

## Out of Scope
Performance/load benchmarking, API testing, accessibility certification, security penetration testing, payment gateway integration.

## Test Types
Functional, negative, boundary-value, exploratory, UI/visual, regression-oriented smoke.

## Environment
Live SauceDemo web application; target browser Chrome/latest desktop. Known demo users include standard_user, locked_out_user, problem_user, performance_glitch_user, error_user and visual_user.

## Test Data
Public demo accounts, all with password `secret_sauce`: standard_user, locked_out_user, problem_user, performance_glitch_user, error_user, visual_user. Expected product names, prices and messages are listed on the Test Data sheet of `SauceDemo_Test_Cases.xlsx`.

## Execution Approach
Cases are executed manually in desktop Chrome. Each case is recorded as Pass, Fail, Blocked or Skipped in the workbook, with the actual result and date. A failed case gets a defect report (see `SauceDemo_Defect_Reports.md`) with reproduction steps, expected and actual results and evidence, and a Jira task. Fixed defects are retested, followed by a regression pass of the related module.

## Entry Criteria
- Application reachable
- Test credentials available
- Core pages load

## Exit Criteria
- All planned test cases reviewed
- Critical/high defects documented

## Defect Severity
- **Critical:** blocks purchase/core workflow
- **High:** major function broken
- **Medium:** significant degradation
- **Low:** cosmetic/minor

## Risks
Demo-user accounts intentionally exhibit defects; live-site behavior can change; the available tool environment could not execute browser JavaScript.

## Deliverables
Test plan; 55 test cases (Excel workbook and Markdown); defect reports; test summary; Jira traceability.
