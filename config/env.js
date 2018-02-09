const env = 'production'; // test, development, staging, production
// const env = 'development';

const fs = require('fs');
const dotenv = require('dotenv');

if (!process.env.NODE_ENV || process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = env;
}

const envConfig = dotenv.parse(fs.readFileSync('config/.env.' + process.env.NODE_ENV));
let key;
for (key in envConfig) {
  if (process.env[key] !== undefined) {
    continue;
  }

  process.env[key] = envConfig[key];
}

module.exports = envConfig;