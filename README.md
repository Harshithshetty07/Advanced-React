# Advanced-React


# Setting up Testing in our app
 - Install React Testing Library
 - Installed Jest - Already installed when i created react app
 - Installed Babel dependencies
 - We need to create babel.config.js file and add code into this file - (module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
   };)
 - Jest - npx jest --init (it will ask you some question for creating a jest.config.js file)
 - Install jsdom library

 - if write __ in left and  _ _ right is called as a dunder method - (ex: __tests_ _ )
 -  Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - Install npm i -D @testing-library/jest-dom