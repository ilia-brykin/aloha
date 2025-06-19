# Project Guidelines

## Project Structure

- All components, directives, and utility functions are located in the src/ folder.
- The global entry point of the framework is src/index.js.
  - ✅ Junie is allowed to modify this file to register new components, directives, or utilities.
- Project documentation is located in the docs/ folder and supports multiple languages.

## Code Style

- ESLint is used with the following plugins:
  - eslint-plugin-vue
  - eslint-plugin-import
  - @stylistic/eslint-plugin
  - eslint-plugin-jest
  - eslint-plugin-vue-pug
- Junie should follow the existing style rules.
- Warnings are acceptable, but errors must be avoided.
- Preferred formatting: 2-space indentation, double quotes, consistent trailing commas, and alphabetized imports.

## Testing and Building

- Junie should run tests to check the correctness of proposed solutions.
- Tests can be run using the standard test command for the project.
- Junie should build the project before submitting results to ensure there are no build errors.
- All code should adhere to the code style guidelines mentioned above.
- When making changes inside the /docs/ directory, running tests is not necessary. Instead, run `npm run build` in the docs/ directory.
- When making changes to functions or components that don't have tests, running tests is not necessary.
