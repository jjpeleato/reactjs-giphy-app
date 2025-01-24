# GiphyApp

An example created in React.js + Vite with connection to Giphy.

## Project

Built with React.js + Vite and using the following technologies: HTML 5, JavaScript, CSS3 and more.

### Installing dependencies

You must install the environment manually: Node.JS, NPM or Yarn.

For more information visit:

- Node and NPM: https://nodejs.org/es/
- Yarn: https://yarnpkg.com/es-ES/

**Note:** If you work with Windows < 10. To execute the commands, we recommend installing **Cygwin** http://www.cygwin.com/

**Note:** If you work with Windows > 10. To execute the commands, we recommend installing **WSL 2** with Ubuntu https://docs.microsoft.com/es-es/windows/wsl/install-win10

**Note:** If you work with Windows > 10. You need install the following package: https://www.npmjs.com/package/win-node-env

**Note:** I recommend installing the following IDE for PHP Programming: Visual Studio Code (https://code.visualstudio.com/) or PHPStorm (recommended) (https://www.jetbrains.com/phpstorm/).

### Project skeleton

```
├─ .husky/ # Husky directory (git-hooks)
├─ public/ # Public directory
├─ src/ # Source directory
├─ test/ # Test directory
├─ .editorconfig
├─ .env.alpha.local.dist
├─ .env.beta.local.dist
├─ .env.development.local.dist
├─ .env.production.local.dist
├─ .gitignore
├─ commitlint.config.cjs
├─ eslint.config.js
├─ index.html
├─ LICENSE
├─ package.json
└─ README.md
```

### Installing

1. Open your terminal and navigate to the root directory of your project.
2. Run `$yarn`.
3. Run `$yarn dev`.
4. End. Happy developing.

### Developing with Yarn

- Open your terminal and navigate to the root directory of your project.
- If required. Run: `$yarn install --dev`.
- Yarn actions commands list:
  - `$yarn build` Runs the vite build command to build the production-ready version of the application.
  - `$yarn build:alpha` Builds the application using the environment variables defined in `.env.alpha.local` by leveraging the dotenv library.
  - `$yarn build:beta` Similar to build:alpha, but uses `.env.beta.local` to build the application for the beta environment.
  - `$yarn commit` Runs the `cz` (Commitizen) command to standardize and guide the commit message creation process.
  - `$yarn dev` Starts the development server using vite to enable live reloading during development.
  - `$yarn lint` Runs ESLint on the project files to identify and fix code style and quality issues.
  - `$yarn prepare` Installs Husky git hooks, typically used for tasks like running pre-commit checks.
  - `$yarn preview` Starts a preview server with the built production files, allowing you to test the final build locally.
  - `$yarn test` Runs all tests using Jest in watch mode (--watchAll), which monitors file changes and automatically re-runs tests whenever a file is updated.

### Technologies and tools

This project utilizes various technologies and tools for automation and the development process. For more details and learning resources, please refer to the following links.

1. Babel: https://babeljs.io/
2. Commitizen: http://commitizen.github.io/cz-cli/
3. Commitlint: https://commitlint.js.org/
4. EditorConfig: https://editorconfig.org/
5. ESLint: https://eslint.org/
6. Git: https://git-scm.com/
7. Human.txt: http://humanstxt.org/
8. Husky: https://www.npmjs.com/package/husky
9. Jest: https://jestjs.io/
10. Node.js: https://nodejs.org/
11. Prop-types: https://github.com/facebook/prop-types
12. React: https://reactjs.org/
13. Security.txt: https://securitytxt.org/
14. Testing-library: https://testing-library.com/
15. Vite: https://vite.dev/
16. Yarn: https://yarnpkg.com/

**Note:** Many thanks to all the developers who worked on these projects.

## Finally

More information on the following commits. If required.

Grettings **@jjpeleato**.
