const env = process.env.NODE_ENV;
let config;

if (env === 'development') {
  config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1984_$hmy810',
    database: 'myblog'
  };
}

if (env === 'production') {
  config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1984_$hmy810',
    database: 'myblog'
  };
}

module.exports = config;
