# Island UI Foundation
Design system starting point using SCSS, with foundational tokens, variables, & grid system for non-React based projects. This is meant to be an opinionated starting point, not a complete system.

## Installation

```
yarn install
```

## Development

To set gulp to watch the SCSS files for changes and to process the changes automatically into a new CSS file for the theme, simply use this command:
```
yarn dev
```

To only process the SCSS files a single time just use this command:
```
yarn start
```

This project is set-up with a `tokens.json` file which contains the foundational design tokens. If you make a change to the design tokens, it should be done directly to the `tokens.json` file. To regenerate the SCSS file `src\styles\foundation\_tokens\_tokens.scss` that is created from the `src\styles\tokens.json` file you can run this command:
```
yarn tokenize
```

If you are making a lot of changes to the tokens to iterate or test different styles, or from an external design program that rebuilds the JSON file, you can open a terminal and specifically get gulp to watch the file and regenerate the SCSS tokens file automatically on each change using this command:

```
yarn watcht
```