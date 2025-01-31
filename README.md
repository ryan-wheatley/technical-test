# Technical Test

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```sh
   git clone git@github.com:ryan-wheatley/technical-test.git
   cd technical-test
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   ```

3. **Configure environment variables:**
    - Create a `.env.local` file in `apps/frontend` and add the following content:
      ```ini
      API_URL=http://localhost:3000
      ```

4. **Start the development servers:**
   ```sh
   turbo dev
   ```
    - The backend will run on `http://localhost:3000`
    - The frontend will run on `http://localhost:3001`

5. **View the app in your browser:**
    - Open [http://localhost:3001/welcome/ff535484-6880-4653-b06e-89983ecf4ed5](http://localhost:3001/welcome/ff535484-6880-4653-b06e-89983ecf4ed5)

6. **Build the project:**
   ```sh
   turbo build
   ```

## Running Tests

### End-to-End (E2E) Tests
- Run `turbo dev` before running tests to ensure the development server is available.
- Execute the tests using Playwright:
  ```sh
  turbo test
  ```

### Unit Tests
- Unit tests are located in `apps/backend/src/comms.controller.spec.ts`.
- These tests validate the functionality of the backend API controller.

## Project Architecture

This project is a **Turbo monorepo** structured as follows:

### Apps
- **Backend (`apps/backend`)**:
    - Built with **NestJS**.
    - Handles API requests.
    - `src/comms.controller.ts` contains the main communication controller.
    - **Deployment:** Automatically deployed using **Render**.

- **Frontend (`apps/frontend`)**:
    - Built with **Next.js**.
    - `middleware.ts` ensures invalid requests to the API are blocked.
    - Tailwind CSS is used for styling, with brand colors defined in `tailwind.config.js`.
    - **Deployment:** Automatically deployed using **Vercel**.

- **E2E Tests (`apps/e2e`)**:
    - Uses **Playwright** for end-to-end testing.
    - Ensures critical user flows function correctly.

### Packages
- **Shared Types (`packages/types`)**:
    - Contains TypeScript types shared between the frontend and backend for consistency.

## Live Demo

You can see the application live at the following links:

### Frontend:
- [Upcoming delivery (no gift)](https://frontend-sigma-one-95.vercel.app/welcome/3dfdc5cf-b8ed-40f7-a5ca-5e88ad103b60)
- [Upcoming delivery (gift)](https://frontend-sigma-one-95.vercel.app/welcome/ff535484-6880-4653-b06e-89983ecf4ed5)
- [Invalid UUID](https://frontend-sigma-one-95.vercel.app/welcome/NON-UUID)
- [UUID of non-existent user](https://frontend-sigma-one-95.vercel.app/welcome/ff535484-6880-4653-b06e-89983ecf4ed6)

### Backend:
- [API URL](https://backend-ffiu.onrender.com/comms/your-next-delivery/)
- [Example delivery](https://backend-ffiu.onrender.com/comms/your-next-delivery/ff535484-6880-4653-b06e-89983ecf4ed5)
