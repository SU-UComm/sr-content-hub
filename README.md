[[_TOC_]]
 # Content Hub Repository 
 - All modules can be found in src/modules

## To run locally
- ```git clone git@github.com:SU-UComm/sr-content-hub.git```
- navigate to folder sr-content-hub locally
- ```npm install```
- ```npm run build``` to run build locally
- ```npm run serve``` to run locally
- make changes

## Push changes
- ```npm run build```
- continue git process from here
    -  ```git add .```
    -  ```git commit -m```
    -  ```git push origin master/yourbranchname```
 
  
# Requirements
This version is tested under:
* Node v18
* NPM 9

It will also work on Node v16 but v14 is preferred due to the fact that it runs much faster on Gitlab CI.

# Docs

## Webpack config file
Some of the webpack options can be configured using **/webpack/config.js**
* buildFolder - folder to build to using npm run build(-min) commands
* host - host to run the dev sever on
* port - dev server port
* watchFiles - array of files to watch by devServer
* purgeCssPath - glob used by PurgeCSSPlugin in prod build - it is commented out by default as it can break React apps css without proper config
* devServerClient - devServer client configuration
* publicPath - webpack [Public Path](https://webpack.js.org/guides/public-path/)
* alias - webpack aliases used in imports
* entry - webpack [entry points](https://webpack.js.org/concepts/entry-points/)
* chunks - chunks configuration lets you specify which chunks should be used in which html page template
* rewrites - [rewrites](https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback) to be used with things like [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)

## Commands
* audit - npm audit on production dependencies
* test - jest tests
* test:coverage - generate jest tests coverage
* build - build output files to buildFolder
* build-min - build output files to buildFolder minified
* serve - dev server
* lint - lint css and js
    * lint:js - lint js only
    * lint:css - lint css only
* format - run prettier
* cypress:install - install cypress localy
* cypress:install:save - install cypress and save it in package.json if you wanna run CI tests
* cypress:verify - verify cypress installation
* cypress:dev - run cypress tests using .env.development
* cypress:prod - run cypress tests using .env
* cypress:ci - run headless cypress tests using .env
* loco - run loco dev proxy

## Additional webpack plugins
* [css-mqpacker](https://www.npmjs.com/package/css-mqpacker) - enabled in prod build by default - combines all repearing media queries. This is 5 years old and no longer maintained but works well.
* [purgecss-webpack-plugin](https://www.npmjs.com/package/purgecss-webpack-plugin) - removes unused CSS rules - commented out by defualt

## Tailwind
Tailwind css is added to all pages. This can be changed in webpack/config.js.
Entry file is located in src/js/tailwind.js which just imports src/css/input.css.
Some portions of the defauls tailwind includes are commented out as this would duplicate the global styles.
Main configuration file can be found in the root directory - tailwind.config.js

## Property validation
[prop-types](https://www.npmjs.com/package/prop-types) is used for that. It comes in handy when debuging as is considered good practice overall.

```
import React from 'react';
import PropTypes from 'prop-types';
[...]

export const SomeModule = (props) => {
    [...]

    return (
        <div className="someModule">
            [...]
        </div>
    )
}

PrevNext.propTypes = {
    name:  PropTypes.string,
    status: PropTypes.bool
}
```

## Styled Components
[Emotion](https://emotion.sh/docs/introduction) is used for styled components.

Example can be found in [ReactExamples](http://127.0.0.1:3000/reactExamples.html). It shows how you can create a styled component using scss variables.

## Linting
When using VSCode with ESLint and stylelint extensions installed JS/CSS errors should be highlighted in the editor. In addition for CI there are two separte commands:
* npm run lint:js - will lint js/jsx
* npm run lint:css - will lint css/scss

## Prettier
It is recommended to use prettier. This can be done by running:
```
npm run format
```
If you are using **VSCode** there is an easier way - install [Prettier  plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Env variables
Environment variables are stored in
* .env - PROD
* .env.development - DEV/localhost

Webpack uses **dotenv-webpack** package to access those variables.
Cypress uses **cypress-dotenv** package to use environment variables.

Example can be found in **ReactExamples**

## Loco
[Loco](https://www.npmjs.com/package/loco-server) can be used to
* proxy requests - example **./loco_functions/return_json.js**
* mock data - example **./loco_functions/scaffold.js**

To start run
```
npm run loco
```
which will make functions from **./loco_functions/{name}.js** available under **127.0.0.1:8888/{name}**

## Jest - Unit testing
* Test are located in **\_\_tests\_\_** folder and/or **./src/modules/\*\*/\_\_jest\_\_**
* [identity-obj-proxy](https://jestjs.io/docs/webpack#mocking-css-modules) is used to mock scss/css imports of variables used in styled components.

Run
```
npm run test
```
to run all test
```
npm run:coverage
```
to see/generate test coverage.

## Cypress - E2E testing
[Cypress](https://www.cypress.io/) is used as an E2E testing tool.

Run
```
npm run cypress:install
```

or

```
npm run cypress:install:save
```

or install globaly before use.
### Commands
```
npm run cypress:dev
```
runs cypress using cypress.development.json
```
npm run cypress:prod
```
runs cypress using cypress.json
```
npm run cypress:ci
```
runs cypress headless using cypress.json

### Cypress related files
* ./cypress.json - PROD env configuration
* ./cypress.development.json - DEV env configuration
* ./cypress/ - main folder

### Test location
Test are located in **./src/modules/\*\*/\_\_cypress\_\_/*.spec.js**

### Env variables
Cypress uses **cypress-dotenv** package to use environment variables Example usage of **SITE_URL** variable:
```
Cypress.env('SITE_URL')
```

## VSCode useful plugins
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - to highlight js/jsx errors
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - to apply proper formating on save
* [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - to highlight SCSS/CSS errors

## Gitabl CI
Gitlab continuous integration flow consists of two stages:
* build - in this stage npm packages are being installed, lint and jest tests run and after that build-min creates the deploy folder
* deploy - deploy folder is being pushed to a separate repository to be used in Matrix via GitBridge

