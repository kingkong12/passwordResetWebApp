This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Table of Contents

1. [Problem Statement](#Problem Statement)
2. [Getting Started](#Running on Localhost)

## Problem Statement

The flow:​

- Create a page that takes some form of user identifier (email/phone) and new password.
- Ensure the password meets our requirements.
- Update the user password in the database leveraging the API.
- If successful let the user be notified.
- If the password doesn’t meet our requirements, please let the user know what they can change.

Password requirements:

- Min: 1 lowercase and 1 uppercase alphabet
- Min: 1 number
- Min: 1 special character
- 8-16 character length
- Shouldn’t be the same as username
- Shouldn’t be the same as last password

## Running on Localhost

You'll need to have `node` installed to build and run the front-end:

1. npm install

2. npm run server

3. npm start

# Redux

Redux is a predictable state container for JavaScript apps. Redux is used together with react library.

### HTTP Requests

Used [Axios](https://github.com/axios/axios) for making all HTTP requests. It is a well documented, promise based library that is widely accepted.

### Materil Ui

Material-UI came about from our love of React and Google's Material Design.

Some of the benifits.

- Components work in isolation
  Material-UI components are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css!

- Consistent appearance
  Aesthetic preferences for Material Design aside, your web project has a high chance of retaining similarity in appearance and functions all throughout.

- React Components
  135 More components
  50 Better customization
  36 Better documentation
  31 TypeScript
  24 Performance
  19 Bundle size
  17 Material Design Update
  16 styled-components
  14 Fewer breaking changes
  10 More page layout examples
  and more

### JSON server

Get a full fake REST API with zero coding in less than 30 seconds. JSON Server is a Node Module that you can use to create demo rest json webservice in less than a minute. All you need is a JSON file for sample data.

how can you run

- npm run server  
   to test type `http://localhost:4000/users` in your browser
