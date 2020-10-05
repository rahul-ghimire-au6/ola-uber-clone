const user_model = require("../models/user_model");
const driver_model = require("../models/driver_model");
const booking_model = require("../models/booking_model");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

module.exports = {
  get: {
    async cab_list(req, res) {
      try {
        let earth_radius = 6371.0;
        function degtorad(deg) {
          return (deg * Math.PI) / 180;
        }

        function distanceEarth(lat1, lon1, lat2, lon2) {
          let new_lat1 = degtorad(lat1);
          let new_lon1 = degtorad(lon1);
          let new_lat2 = degtorad(lat2);
          let new_lon2 = degtorad(lon2);
          delta_lon = new_lon2 - new_lon1;
          // greate circle formula
          central_ang = Math.acos(
            Math.sin(new_lat1) * Math.sin(new_lat2) +
              Math.cos(new_lat1) * Math.cos(new_lat2) * Math.cos(delta_lon)
          );
          return earth_radius * central_ang;
        }
        let temp = await driver_model.findAll({});
        let order_id = req.params.id;
        let proximity = req.body.proximity || 2;
        let booking_data = await booking_model.findAll({
          where: { id: order_id },
        });
        let temp1 = temp.filter(
          (element) => element.dataValues.latitude !== null
        );
        let driverData = temp1.filter(element => element.dataValues.isbooked !== true)
        let { pickup_lat } = booking_data[0].dataValues;
        let { pickup_lon } = booking_data[0].dataValues;
        let nearby_driver_list = [];
        for (let i = 0; i < driverData.length; i++) {
          let distance = distanceEarth(
            parseFloat(pickup_lat),
            parseFloat(pickup_lon),
            parseFloat(driverData[i].dataValues.latitude),
            parseFloat(driverData[i].dataValues.longitude)
          );
          if (distance < proximity) {
            nearby_driver_list.push(driverData[i].dataValues);
          }
        }
        let new_driver_list = nearby_driver_list.map((element) => ({
          id: element.id,
          driver_name: element.driver_name,
          driver_email: element.email,
          latitude: element.latitude,
          longitude: element.longitude,
        }));
        res.status(200).json({
          status: "success",
          message: "Cabs near you:-",
          Cabs: new_driver_list,
        });
      } catch (err) {
        console.log(err.name);
        console.log(err.message);
        res.status(400).json({
          status: "failed",
          errName: err.name,
          errMessage: err.message,
        });
      }
    },
    async get_booking_history(req, res){
      try {
        userData = req.user
        const { pageNo } = req.query
        offset = pageNo * 2
        limit = 2
        let temp=userData.dataValues.id
        if(typeof(userData.dataValues.id)=='number'){
          console.log('inside')
          temp = temp.toString()  
        }
        let booking_history = await booking_model.findAll({limit,offset,where:{user_id:temp}})
        console.log(booking_history)
        res.status(200).json({'status':'success','message':booking_history})        
      } catch (err) {
          console.log(err.name);
          console.log(err.message);
          res.status(400).json({
          status: "failed",
          errName: err.name,
          errMessage: err.message,
        });
      }
    }
  },
  post: {
    async signup(req, res) {
      let yahoo = req.body;
      //first is to generate token
      var token = jwt.sign(
        {
          data: yahoo.email,
        },
        "secret",
        { expiresIn: "1h" }
      );
      // second step to encrypt the password
      let encrypted_pass = undefined;
      await bcrypt.hash(yahoo.password, 10, (err, hash) => {
        encrypted_pass = hash;
        if (encrypted_pass !== undefined) {
          let user = {
            name: yahoo.name,
            email: yahoo.email,
            password: encrypted_pass,
            token,
            createdat: Date.now(),
          };
          let newuser = user_model
            .create(user)
            .then(() =>
              res.status(201).json({ status: "success", token: token })
            )
            .catch((err) => {
              res.status(400).json({
                status: "fail",
                error_name: err.name,
                message: err.message,
              });
            });
        }
      });
    },
    async login(req, res) {
      let yahoo = req.body;
      user_model
        .findOne({
          where: {
            email: yahoo.email,
          },
        })
        .then((data) => {
          if (data === null) {
            res
              .status(400)
              .json({ status: "fail", message: "user does not exist" });
          } else {
            // console.log(data.dataValues)
            bcrypt
              .compare(yahoo.password, data.dataValues.password)
              .then((result) => {
                if (result === false) {
                  res
                    .status(400)
                    .json({ status: "fail", message: "incorrect password" });
                } else {
                  let token1 = jwt.sign(
                    {
                      data: yahoo.email,
                    },
                    "secret",
                    { expiresIn: "1h" }
                  );
                  user_model
                    .update(
                      { token: token1, updatedat: Date.now() },
                      { where: { id: data.dataValues.id } }
                    )
                    .then((data) => {
                      res.status(200).json({ status: "success", token: token1 });
                    });
                }
              })
              .catch((err) => console.log(err));
          }
        });
    },
    async Booking(req, res) {
      try {
        userData = req.user.dataValues;
        userInput = req.body;
        pickup_data = req.pickup_data;
        destination_data = req.destination_data;
        let booking_data = {
          user_id: userData.id,
          pickup_location: pickup_data.display_name,
          destination_location: destination_data.display_name,
          pickup_lat: pickup_data.lat,
          pickup_lon: pickup_data.lon,
          destination_lat: destination_data.lat,
          destination_lon: destination_data.lon,
          createdat: Date.now(),
        };
        let saveddata = await booking_model.create(booking_data);
        await console.log(saveddata);
        await res.status(200).json({
          status: "success",
          message:
            "Booking Slot created successfully please go to /cab_list/:id (put booking id) to select your cab",
          Booking_Details: saveddata,
        });
      } catch (err) {
        console.log(err.name);
        console.log(err.message);
        res.status(400).json({
          status: "failed",
          errName: err.name,
          errMessage: err.message,
        });
      }
    },
    async checkout(req, res) {
      try {
        let userData = req.user;
        let booking_id = req.params.id;
        let driver_id = req.body.driver_id;
        let booking_data = await booking_model.findOne({where:{id:booking_id}})
        let driverData = await driver_model.findOne({where:{id:driver_id}})
        if(booking_data.dataValues.user_id == userData.dataValues.id){
          if(driverData.dataValues.isbooked !== true){
            await booking_model.update({driver_id,updatedat:Date.now()},{where:{id:booking_id}})
            await driver_model.update({isbooked:true,updatedat:Date.now()},{where:{id:driver_id}})
          .then(
            res.status(200).json({'status':"success","message":"Congratulations!!! Cab Booking Successfull, Cab is on its way to your pickup destination."})
          ).catch(err=>console.log(err))
          }
          else{
            return res.status(400).json({'status':'failed','message':'driver unavailable'})
          }
        }else{
          res.status(400).json({'status':'failed','message':'user who has created booking they can only create/confirm the order/booking'})
        }

      } catch (err) {
        console.log(err.name);
        console.log(err.message);
        res.status(400).json({
          status: "failed",
          errName: err.name,
          errMessage: err.message,
        });
      }
    },
  },
  put: {
    async logout(req, res) {
      yahoo = req.params.token;
      user_model
        .update({ token: null }, { where: { token: yahoo } })
        .then((data) => {
          console.log(data);
          if (data[0] === 0) {
            res
              .status(400)
              .json({ status: "Failed", message: "Logged Out Unsuccessfull" });
          } else {
            res
              .status(200)
              .json({ status: "Success", message: "Logged Out Successfully" });
          }
        });
    },
  },
  delete: {},
};
