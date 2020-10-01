const Sequelize = require('sequelize');
const dotenv=require("dotenv")
dotenv.config()

const {POSTGRES_USERNAME,POSTGRES_PASS}=process.env

if(process.env.NODE_ENV === 'test'){
  console.log('inside')
  var sequelize = new Sequelize('uber_clone_test_db', 'postgres', 'light159', {
    host: 'localhost',
    dialect:'postgres',
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
  var sequelize = new Sequelize(POSTGRES_USERNAME, POSTGRES_USERNAME, POSTGRES_PASS, {
    host: 'arjuna.db.elephantsql.com',
    dialect:'postgres',
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