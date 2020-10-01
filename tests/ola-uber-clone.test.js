const app = require("../app")
const assert = require("assert")
const supertest = require('supertest');
const request = supertest(app);

//------------------------------------testing of users/signup route--------------------------------------

// describe('POST /users/signup', ()=>{
//   it('user gets signup and server responds with json', (done)=> {
//     request.post('/users/signup',
//       ).send({
//           "name":"Rahul",                        //please change the data if not running for first time db may contain this data
//           "email":"ghimirerahul@gmail.com",
//           "password":"yahoo159",  
//       })
//       .set('Content-Type', 'application/json')
//       .expect(201)
//       .expect('Content-Type', /json/)//    
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//                assert.deepStrictEqual(res.body.status,'success','expected to receive success message from the server')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------
//------------------------------------testing of users/login route--------------------------------------

// describe('POST /users/login', ()=>{
//   it('user gets logged in and server responds with json', (done)=> {
//     request.post('/users/login',
//       ).send({
//           "email":"nileshpatil@gmail.com",
//           "password":"yahoo159",  
//       })
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)
//       .expect((res)=>{
//        if(!('token' in res.body)) throw new Error('token generation failed, missing token')
//       })
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//               assert.deepStrictEqual(res.body.status,'success','expected to receive success message from the server')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------
//------------------------------------testing of users/logout route-----------------------------------------------

// describe('POST /users/logout/:token', ()=>{
//   it('user gets logged out and server responds with json', (done)=> {
//     request.post('/users/logout/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZ2hpbWlyZXJhaHVsQGdtYWlsLmNvbSIsImlhdCI6MTYwMTQ5NTc4OSwiZXhwIjoxNjAxNDk5Mzg5fQ.eCo0A-5frzUZD50MREWrAn6kh9Ppj3gSm4NjqxvLe8E',)
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)//      
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//               assert.strictEqual(res.body.status,'success','expected to receive success message from the server')
//               assert.strictEqual(res.body.message,'Logged Out Successfully','expected to receive logged out message from the server')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------

//------------------------------------testing of users/booking route----------------------------------------------

// describe('POST /users/booking', ()=>{
//   it('users sends pickup location and destination location and server responds with json', (done)=> {
//     request.post('/users/booking',
//       ).send({
//         "pickup_address":{
//             "street":"dp road",
//             "city":"Badlapur",
//             "state":"Maharashtra",
//             "postalcode":"421503"
//         },
//         "destination_address":{
//             "street":"manjarli",
//             "city":"Badlapur",
//             "state":"Maharashtra",
//             "postalcode":"421503"
//         }
//       })
//       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibmlsZXNocGF0aWxAZ21haWwuY29tIiwiaWF0IjoxNjAxNTcxNTU0LCJleHAiOjE2MDE1NzUxNTR9.JHPclfxlaBPmxhqGiuLBn12uC6Fx_pXNhPNmu484yDA')
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)  
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//               assert.deepStrictEqual(res.body.status,'success','expecting success response from server')
//               assert.deepStrictEqual(res.body.message,'Booking Slot created successfully please go to /cab_list/:id (put booking id) to select your cab')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------------------
//------------------------------------testing of users/cab_list/:booking_id route----------------------------------------------

// describe('GET /users/cab_list/:id', ()=>{
//   it('users sends booking_id and proximity if needed server responds with nearby drivers available in json', (done)=> {
//     request.get('/users/cab_list/5',
//       ).send({
//         'proximity':2    // this is optional but can provide if you want to customize it more
//       })
//       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibmlsZXNocGF0aWxAZ21haWwuY29tIiwiaWF0IjoxNjAxNTcxNTU0LCJleHAiOjE2MDE1NzUxNTR9.JHPclfxlaBPmxhqGiuLBn12uC6Fx_pXNhPNmu484yDA')
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)  
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//               assert.deepStrictEqual(res.body.status,'success','expecting success response from server')
//               assert.deepStrictEqual(res.body.message,'Cabs near you:-','expecting cabs near you message as a response from server')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------

//------------------------------------testing of users/checkout/:booking_id route----------------------------------------------

// describe('POST /users/checkout/:booking_id', ()=>{
//   it('users sends booking id as a params and driver id to select the cab and server responds success or failer with json', (done)=> {
//     request.post('/users/checkout/5',
//       ).send({
//         "driver_id":3
//       })
//       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibmlsZXNocGF0aWxAZ21haWwuY29tIiwiaWF0IjoxNjAxNTcxNTU0LCJleHAiOjE2MDE1NzUxNTR9.JHPclfxlaBPmxhqGiuLBn12uC6Fx_pXNhPNmu484yDA')
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)  
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//               assert.deepStrictEqual(res.body.status,'success','expecting success response from server')
//               assert.deepStrictEqual(res.body.message,'Congratulations!!! Cab Booking Successfull, Cab is on its way to your pickup destination.')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------------------


//------------------------------------testing of users/get_booking_history route----------------------------------------------

// describe('GET /users/get_booking_history', ()=>{
//   it('user gets its booking history and server responds with json', (done)=> {
//     request.get('/users/get_booking_history',
//       )
//       .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibmlsZXNocGF0aWxAZ21haWwuY29tIiwiaWF0IjoxNjAxNTcxNTU0LCJleHAiOjE2MDE1NzUxNTR9.JHPclfxlaBPmxhqGiuLBn12uC6Fx_pXNhPNmu484yDA')
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)  
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//               assert.deepStrictEqual(res.body.status,'success','expecting success response from server')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------------------

//------------------------------------testing of driver/signup route----------------------------------------------

// describe('POST /drivers/signup', ()=>{
//   it('driver gets signed up and server responds with json', (done)=> {
//     request.post('/drivers/signup',
//       ).send({
//         "name":"Rahul Ghimire",
//         "email":"rahulghimire@gmail.com",
//         "password":"qwerty",
//         "address":{
//             "street":"manjarli",
//             "city":"Badlapur",
//             "state":"Maharashtra",
//             "postalcode":421503
//         }
//       })
//       .set('Content-Type', 'application/json')
//       .expect(201)
//       .expect('Content-Type', /json/)//     
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//                assert.strictEqual(res.body.status,'success','expected to receive success message from server')
//               done();
//           }
//       });
//   });
//  });
//-----------------------------------------------end--------------------------------------------------------------


//------------------------------------testing of driver/login route----------------------------------------------

// describe('POST /drivers/login', ()=>{
//   it('driver gets logged in and server responds with json', (done)=> {
//     request.post('/drivers/login',
//       ).send({
//         "email":"rahulghimire@gmail.com",
//         "password":"qwerty",
//         "address":{
//             "street":"dp road",
//             "city":"Badlapur",
//             "state":"Maharashtra",
//             "postalcode":421503
//         }
//       })
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)//     
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//                assert.strictEqual(res.body.status,'success','expected to receive success message from server')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------

//------------------------------------testing of driver/logout route----------------------------------------------

// describe('POST /drivers/logout/:token', ()=>{
//   it('driver gets logged out and server responds with json', (done)=> {
//     request.post('/drivers/logout/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoicmFodWxnaGltaXJlQGdtYWlsLmNvbSIsImlhdCI6MTYwMTQ5NjU4MywiZXhwIjoxNjAxNTAwMTgzfQ.X6DCA4dZfghPvhHPCABVzYLx0H3-ZvTuf7kgSlNvMss',
//       )
//       .set('Content-Type', 'application/json')
//       .expect(200)
//       .expect('Content-Type', /json/)//    
//       .end((err, res)=>{
//           if(err){
//               console.log("error");
//               done(err);
//           }
//           else {
//               console.log(res.body);
//                assert.deepStrictEqual(res.body.status,'success','expected to receive success message from server')
//                assert.deepStrictEqual(res.body.message,'Logged Out Successfully','expected to receive Logged Out Successfully message from server')
//               done();
//           }
//       });
//   });
//  });

//-----------------------------------------------end--------------------------------------------------------------