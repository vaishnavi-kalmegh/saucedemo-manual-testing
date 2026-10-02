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

## Entry Criteria
- Application reachable
- Test credentials available
- Core pages load

## Exit Criteria
- All planned test cases reviewed
- Critical/high defects documented
- Summary produced

## Defect Severity
- **Critical:** blocks purchase/core workflow
- **High:** major function broken
- **Medium:** significant degradation
- **Low:** cosmetic/minor

## Risks
Demo-user accounts intentionally exhibit defects; live-site behavior can change; the available tool environment could not execute browser JavaScript or capture native screenshots.

## Deliverables
1-page test plan; 55 test cases; test summary; 10 Jira defect reports; evidence attachments/reconstructions.
