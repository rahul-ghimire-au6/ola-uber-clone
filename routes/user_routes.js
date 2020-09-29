const express=require('express')
const router=express.Router()
const user_controller = require('../controller/user_controller')
const {auth_pickup_destination_location} = require('../middleware/address_to_latlog')
const authentication = require('../middleware/authentication')

//-----------------------------------------user signup/login.logout route--------------------------------------
router.post('/signup',user_controller.post.signup)
router.post('/login',user_controller.post.login)
router.post('/logout/:token',user_controller.put.logout)
//---------------------------------------------end-------------------------------------------------------------

//------------------------------------------------booking routes------------------------------------------------
router.post('/booking',authentication,auth_pickup_destination_location,user_controller.post.Booking)
router.get('/cab_list/:id',authentication,user_controller.get.cab_list)
router.post('/checkout/:id',authentication,user_controller.post.checkout)
router.get('/get_booking_history',authentication,user_controller.get.get_booking_history)
//------------------------------------------------------end------------------------------------------------------



module.exports = router
