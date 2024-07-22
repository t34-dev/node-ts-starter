[![ISC License](http://img.shields.io/badge/license-ISC-blue.svg)](http://copyfree.org)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-green?logo=node.js)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/Well-do-it-too/typescript-node-starter)

# TypeScript Node.js Starter

A comprehensive starter template for TypeScript Node.js projects, equipped with essential tools and configurations to jumpstart your development process.

## Features

- TypeScript configuration
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks
- Nodemon for development
- Automatic version updating
- Automatic Git tag updating
- Minification of distribution files
- Pre-commit hooks
- Make commands for easier project management

## Prerequisites

- Node.js (v20 or later)
- pnpm (v6 or later)
- GNU Make

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/typescript-node-starter.git
   cd typescript-node-starter
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

## Usage

You can use either pnpm scripts or Make commands to manage the project.

### Using pnpm scripts

To start the development server with hot-reloading:

```
pnpm run dev
```

To compile TypeScript to JavaScript:

```
pnpm run build
```

For production build with minification:

```
pnpm run build:prod
```

To lint your code:

```
pnpm run lint
```

To format your code:

```
pnpm run format
```

To start the compiled application:

```
pnpm start
```

### Using Make commands

Run these commands with `make <command>`:

- `make` or `make help`: Shows all available Make commands.
- `make rmdist`: Removes the dist folder.
- `make build`: Builds the project (includes removing dist folder).
- `make build-prod`: Builds the project for production (includes minification).
- `make dev`: Starts the development server.
- `make run`: Runs the compiled application.
- `make version-up`: Updates the project version.
- `make pre`: Runs pre-commit checks.

#### Git Tag Management

The project includes additional commands for managing Git tags:

- `make tag`: Displays the latest Git tag.
- `make tag-new`: Displays the next Git tag that would be created.
- `make tag-up`: Creates and pushes a new Git tag. Note: This command can only be run from the 'main' branch.

## Scripts

- `prepare`: Sets up Husky
- `clean`: Removes dist folder, node_modules, and pnpm-lock.yaml
- `build`: Compiles TypeScript to JavaScript
- `build:prod`: Compiles and minifies for production
- `dist:minify`: Minifies distribution files
- `dev`: Starts development server with hot-reloading
- `start`: Runs the compiled application
- `lint`: Lints the codebase
- `format`: Formats the codebase
- `version-up`: Updates the project version
- `pre-commit`: Runs linting and formatting before commit

## Version Management

This project uses semantic versioning (SemVer) for its Git tags. The `tag.mk` file provides utilities to manage these tags:

- Tags follow the format `vX.Y.Z` where X is the major version, Y is the minor version, and Z is the patch version.
- The `make tag-up` command automatically increments the patch version when creating a new tag.
- New tags can only be created from the 'main' branch to ensure version consistency.

When contributing to the project, please be aware of these versioning practices and use the provided commands to manage tags and versions.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Remember to run `make pre` or `pnpm run pre-commit` before committing your changes to ensure code quality and consistency.

## Acknowledgements

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [GNU Make](https://www.gnu.org/software/make/)
