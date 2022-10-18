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
- express - https://www.npmjs.com/package/express 
- body-parser - https://www.npmjs.com/package/body-parser 
- cors - https://www.npmjs.com/package/cors 
- helmet - https://www.npmjs.com/package/helmet 
- morgan - https://www.npmjs.com/package/morgan
- mongoose: https://www.npmjs.com/package/mongoose 
- dotenv: https://www.npmjs.com/package/dotenv 
- bcrypt: https://www.npmjs.com/package/bcrypt


## API Resources

### User API Resources

All the user API router follows '/v1/user/'
 
| #     | Routers                          | Verbs | Progress | Is Private | Description                                      |
| ----- | -------------------------------- | ----- | -------- | ---------- | ------------------------------------------------ |
| 1     | '/v1/user/login'                 | POST  | TODO     | No         | Verify user authentication and return JWT      |
| 2     | '/v1/user/reset-password         | POST  | TODO     | No         | Verify email and email pin to reset the password |
| 3     | '/v1/user/reset-password         | PATCH | TODO     | No         | Replace with new password.                      |
| 4     | '/v1/user/{id}                   | GET   | TODO     | Yes        | Get users info             
