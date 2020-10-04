const sequelize = require("../config/db_setting")
const { Sequelize, Model } = require("sequelize")


class Booking extends Model {}

Booking.init({
    user_id: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    driver_id: {
        type: Sequelize.TEXT,
    },
    pickup_location:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    destination_location:{
        type: Sequelize.TEXT,
        allowNull:false
    },    
    pickup_lat:{
        type: Sequelize.FLOAT,
        allowNull:false
    },
    pickup_lon: {
        type: Sequelize.FLOAT,
        allowNull:false
    },
    destination_lat:{
        type: Sequelize.FLOAT,
        allowNull:false
    },
    destination_lon:{
        type: Sequelize.FLOAT,
        allowNull:false
    },
    createdat: {type:Sequelize.DATE}, 
    updatedat: {type:Sequelize.DATE},
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'bookings' // We need to choose the model name
  });
console.log(Booking === sequelize.models.bookings);

module.exports=Booking