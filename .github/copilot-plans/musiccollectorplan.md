# MusicCollector Project Plan

This plan outlines the phased development of the MusicCollector web application. The project will use a C# .NET backend, Next.js frontend, xUnit for unit testing, and Playwright for end-to-end testing.
 
All code will follow Microsoft coding standards
SOLID principles will be adhered to. 
unit tests and e2e tests to be created and maintained.
all user facing text needs to be externalised into a language resources file.
At the end of each phase prompt to commit changes to github.

Each phase is independent and results in a working example. tick off the checklist tasks and phases as they are completed.lets do one at a time

---

## Phase 1: Project Skeleton & Initial Setup

 - [x] Create solution structure in the current folder
 - [x] Initialize C# .NET Web API backend (Microsoft coding style)
 - [x] Initialize Next.js frontend app
 - [x] Set up xUnit test project for backend
 - [x] Set up Playwright for frontend e2e tests
 - [x] Add README.md with build/run instructions
- [x] Ensure backend and frontend can run locally (localhost)


## Phase 2: Basic Web Interface & API Connection

- [x] Create a basic homepage in Next.js
- [x] Implement a simple API endpoint in .NET backend (e.g., /api/health)
- [x] Connect frontend to backend API (fetch health status)
- [x] Write xUnit test for API endpoint
- [x] Write Playwright test for homepage and API connection

---

## Phase 3: Set Up PostgreSQL Database Integration

- [ ] Add PostgreSQL as the database for the project
- [ ] Configure .NET backend to connect to PostgreSQL
- [ ] Add connection string management (environment variables, secrets)
- [ ] Verify backend can connect to PostgreSQL instance
- [ ] Document setup steps for local development

---

## Phase 4: Prepare for Incremental Feature Development

- [ ] Set up modular structure for backend (services, models, controllers)
- [ ] Set up modular structure for frontend (components, pages, services)
- [ ] Document how to add new features and tests

---

## Notes
- This plan will be updated as new features are added.
- Each phase should result in a working, testable application.
- All tasks should be checked off as completed.
