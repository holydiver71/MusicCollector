# MusicCollector

MusicCollector is a web application for managing a music collection. It features a C# .NET backend, Next.js frontend, xUnit unit tests, and Playwright end-to-end tests. All code follows Microsoft C# coding style and SOLID principles.

## Prerequisites
- .NET 8 SDK or later
- Node.js (18+ recommended)
- npm (comes with Node.js)
- PostgreSQL (for database integration)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/MusicCollector.git
cd MusicCollector
```

### 2. Build and run the backend
```bash
dotnet build
cd MusicCollector.Api
dotnet run
```
Backend will run on `http://localhost:5000` (default).

### 3. Build and run the frontend
```bash
cd musiccollector-web
npm install
npm run dev
```
Frontend will run on `http://localhost:3000` (default).

### 4. Run backend unit tests
```bash
dotnet test MusicCollector.Tests
```

### 5. Run frontend e2e tests
```bash
cd musiccollector-web
npx playwright test
```

## Project Structure
- `MusicCollector.Api/` - C# .NET Web API backend
- `MusicCollector.Tests/` - xUnit test project for backend
- `musiccollector-web/` - Next.js frontend app
- `.github/copilot-instructions.md` - Coding standards for code generation
- `musiccollectorplan.md` - Project plan and checklist

## Code Quality
All code must:
- Follow Microsoft C# coding style
- Adhere to SOLID principles
- Be commented and documented
- Be covered by unit and e2e tests

## Database
PostgreSQL will be used for persistent storage. Setup instructions will be added in future phases.

## License
MIT
