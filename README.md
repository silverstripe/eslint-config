# eslint-config

[![Silverstripe supported module](https://img.shields.io/badge/silverstripe-supported-0071C4.svg)](https://www.silverstripe.org/software/addons/silverstripe-commercially-supported-module-list/)

This NPM package provides a shared common ESLint configuration used across all Silverstripe modules.

## Installation

This package does not install eslint or stylelint. You must install them in your project.
Add all three packages to the devDependencies of your project:

```json
"@silverstripe/eslint-config": "^2",
"eslint": "^8.26.0",
"stylelint": "~16.12.0"
```

Version 1 installed eslint and stylelint for you. Version 2 does not. Yarn 4 does not give
you the command of a package that you do not install directly.

## Usage

**my-project/.eslintrc.js**
```js
module.exports = require('@silverstripe/eslint-config/.eslintrc');
```

**my-project/.stylelintrc.js**
```js
module.exports = require('@silverstripe/eslint-config/.stylelintrc');
```

