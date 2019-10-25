const databaseConfig= {
    "host": "fc9bebb.online-server.cloud",
    "port": 5432,
    "database": "postgres",
    "user": "postgres",
    "password": "admin"
  };
const pgp = require("pg-promise")({});
const db = pgp(databaseConfig);
db.connect()
    .then(obj => {
        obj.done(); // success, release the connection;
        console.log('success')
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
module.exports=db;