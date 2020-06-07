# Express API template

I use "express-generator" to set up the app skeleton.
https://expressjs.com/en/starter/generator.html

Then run the following codes.
- yarn global add express-generator
- yarn add express
- express -f ("-f" flag forces Express to create the project in the current directory)

# install babel scripts
- yarn add @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/register @babel/runtime @babel/node --dev

# Babel scripts explained below:

(@babel/cli) - A required install for using babel. It allows the use of Babel from the terminal and is available as ./node_modules/.bin/babel.

(@babel/core) - Core Babel functionality. This is a required installation.

(@babel/node) - This works exactly like the Node.js CLI, with the added benefit of compiling 
with babel presets and plugins. This is required for use with nodemon.

(@babel/plugin-transform-runtime) - This helps to avoid duplication in the compiled output.

(@babel/preset-env) - A collection of plugins that are responsible for carrying out code transformations.

(@babel/register) - This compiles files on the fly and is specified as a requirement during tests.

(@babel/runtime) - This works in conjunction with @babel/plugin-transform-runtime.

# install nodemon
- yarn add nodemon --dev
(nodemon) is a library that monitors our project source code and automatically restarts our server whenever it observes any changes.

# install elsint and prettier
- yarn add eslint eslint-config-airbnb-base eslint-plugin-import prettier --dev

ESLint helps with enforcing syntax rules while prettier helps for formatting our code properly for readability.

# install dotenv
- yarn add dotenv

dotenv gives us the ablility to be able to read environment variables into our project and gives us access to the environment variables defined inside