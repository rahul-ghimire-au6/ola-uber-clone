const Sequelize = require('sequelize');
const fs=require('fs');
const dotenv=require("dotenv");
const path=require('path')
var pathToJson = path.resolve(__dirname, './config.json');
dotenv.config()

let db=undefined;

db = fs.readFileSync(pathToJson,{'encoding':'utf-8'})
db_data = JSON.parse(db)

if(process.env.NODE_ENV === 'test'){
  var sequelize = new Sequelize(db_data.test.database, db_data.test.username, db_data.test.password, {
    host: db_data.test.host,
    dialect:db_data.test.dialect,
    define: {
      timestamps: false
  }
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection to test db has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the test database:', err.message);
    });
}
else{
  var sequelize = new Sequelize(db_data.development.database, db_data.development.username,db_data.development.password, {
    host: db_data.development.host,
    dialect:db_data.development.dialect,
    define: {
      timestamps: false
  }
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}



module.exports=sequelize