# Linted Static Front-End Web Project

Development projects worked on by large organizations need consistency, or code anarchy ensues. This project is for anyone in need of using a code standard for HTML/CSS/JS. I've used the AIRBNB standards for JS and CSS, but you can use your own lint configurations for sass-lint and eslint.

If you're asking yourself why? Here are some of the pros:

- Prevents ugly, inconsistently-styled code
- You no longer need to make little style judgement calls throughout the day. Just consult the style guide.
- We need agreements, promises and binding social contracts between developers so that our codebase can adapt over time.
- Boost your code’s maintainability
- Disclaimer: There are settings within the lint configurations that will need to be massaged as you grow as a team to prevent headaches (code complexity detection, etc).

## CSS LINTING:

We will be using sass-lint to make sure our CSS adheres to the AIRBNB rules. See links below.

- https://github.com/sasstools/sass-lint 
- https://github.com/sasstools/sass-lint/tree/develop/docs/rules 
- https://github.com/airbnb/css  

The following are some of the rules we are using in our organization (adopted from https://github.com/airbnb/css):

- Use soft tabs (2 spaces) for indentation
- Prefer dashes over camelCasing in class names.
- Strings must use double quotes
- @extend is not allowed
- Underscores and PascalCasing are okay if you are using BEM (see OOCSS and BEM below).
- Do not use ID selectors
- When using multiple selectors in a rule declaration, give each selector its own line.
- Put a space before the opening brace { in rule declarations
- In properties, put a space after, but not before, the : character.
- Put closing braces } of rule declarations on a new line
- Put blank lines between rule declarations
- Single line CSS not allowed

Configuration file is provided courtesy of the local file .sass-lint.yml

## JS LINTING:

We will be using es-lint to make sure our JS adheres to the AIRBNB rules. See links below.

- https://github.com/eslint/eslint#configuration

JS will be linted exactly to AIRBNB specs here:

- https://github.com/airbnb/javascript

Configuration file is provided courtesy of:

- https://www.npmjs.com/package/eslint-config-airbnb-base

## HTML LINTING:

This project utilizes HTMLhint: 

- https://github.com/yaniswang/HTMLHint

If a third party is delivering you static assets, this will ensure the rules in .htmlhintrc are enforced. Example flags include: src attributes that are empty and making sure id is used uniquely.

Configuration file is provided courtesy of the local file .htmlhintrc

## SETUP

Install dependencies:

```bash
npm install
```

Install eslint and sass-lint globally:

```bash
npm install -g eslint
npm install -g sass-lint
```

## Running the JS linter

```bash
eslint src/js/* --fix-dry-run
```

## Running the CSS linter (verbose mode to see warnings, which you should avoid)

```bash
sass-lint -v
```

## Running the HTML linter

```bash
htmlhint
```

Note: There are sample styles, js, and html within the project that you can run the linter on.
