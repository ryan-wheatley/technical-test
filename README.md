# Technical Test

## Getting Started

1. Clone the repository
2. Run `yarn install`
3. Run `turbo dev` to start the development servers
4. Open [http://localhost:3000](http://localhost:3001) with your browser to see the result.
5. Run `turbo build` to build the project

## Tests
Run `turbo test` to run the tests.

The tests I have added:
- end-to-end tests using Playwright in apps/e2e.
- unit tests in apps/backend/src/comms.controller.spec.ts

Make sure to run `turbo dev` before running the tests as the e2e tests reuses the development server.
