# SCHOOL-ERP

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/rserravi/school-erp/master/LICENSE)
[![GitHub package version](https://img.shields.io/github/package-json/v/codedthemes/mantis-free-react-admin-template)](https://github.com/rserravi/school-erp)

School ERP is a free erp and Crm for schools and academies. 
After 11 years directing schools, I want to create the tool that is really useful for what I know schools need.

## How to use
 
- run 'git clone ...'
- run 'npm start'
 
Note: Make sure you have nodemon is installed in your system otherwise you can install as a dev dependencies in the project


## Tech

In the **backend** we are using:
- express - https://www.npmjs.com/package/express - Fast, unopinionated, minimalist web framework
- body-parser - https://www.npmjs.com/package/body-parser - Node.js body parsing middleware
- cors - https://www.npmjs.com/package/cors - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- helmet - https://www.npmjs.com/package/helmet - help secure Express/Connect apps with various HTTP headers
- morgan - https://www.npmjs.com/package/morgan - HTTP request logger middleware for node.js
- mongoose: https://www.npmjs.com/package/mongoose - Mongoose MongoDB ODM
- dotenv: https://www.npmjs.com/package/dotenv - Loads environment variables from .env file
- bcrypt: https://www.npmjs.com/package/bcrypt - A bcrypt library for NodeJS.
- jsonwebtoken:  https://www.npmjs.com/package/jsonwebtoken - JSON Web Token implementation (symmetric and asymmetric)
- redis: https://redis.io/ - A modern, high performance Redis client
- nodemailer: https://nodemailer.com/about/ - Easy as cake e-mail sending from your Node.js applications
- joi: https://joi.dev/ - The most powerful schema description language and data validator for JavaScript.



## API Resources

### User API Resources

All the user API router follows '/v1/user/'
 
| #     | Routers                          | Verbs | Progress | Is Private | Description                                      |
| ----- | -------------------------------- | ----- | -------- | ---------- | ------------------------------------------------ |
| 1     | '/v1/user/login'                 | POST  | DONE     | No         | Verify user authentication and return JWT      |
| 2     | '/v1/user/reset-password         | POST  | DONE     | No         | Verify email and email pin to reset the password |
| 3     | '/v1/user/reset-password         | PATCH | DONE     | No         | Replace with new password.                      |
| 4     | '/v1/user/{id}                   | GET   | DONE     | Yes        | Get users info             

### Tokens API resources
 
All the Tokens API router follows '/v1/tokens'
 
| #     | Routers                          | Verbs | Progress | Is Private | Description                                      |
| ----- | -------------------------------- | ----- | -------- | ---------- | ------------------------------------------------ |
| 1     | '/v1/tokens'                     | GET   | DONE     |no          | Get a fresh access JWT              |
