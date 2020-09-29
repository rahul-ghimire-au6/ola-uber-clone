const express=require('express')
const {auth_address} = require('../middleware/address_to_latlog')
const driver_controller = require('../controller/driver_controller')
const router=express.Router()

router.post('/signup',auth_address,driver_controller.post.signup)
router.post('/login',auth_address,driver_controller.post.login)
router.post('/logout/:token',driver_controller.post.logout)

module.exports = router
