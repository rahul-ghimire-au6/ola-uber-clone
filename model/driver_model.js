const sequelize = require("../config/db_setting")
const { Sequelize, Model } = require("sequelize")


class Driver extends Model {}

Driver.init({
    driver_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    token: {
        type: Sequelize.TEXT
    },
    latitude:{
        type: Sequelize.FLOAT
    },
    longitude: {
        type: Sequelize.FLOAT
    },
    createdat: {type:Sequelize.DATE}, 
    updatedat: {type:Sequelize.DATE},
    isbooked: {type: Sequelize.BOOLEAN, defaultValue: false }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'drivers' // We need to choose the model name
  });
console.log(Driver === sequelize.models.drivers);

module.exports=Driver