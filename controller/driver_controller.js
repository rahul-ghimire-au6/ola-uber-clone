const driver_model=require('../models/driver_model')
const bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');

module.exports = {
    get:{},
    post:{
        async signup(req,res){  
            let yahoo = req.body
            let address = req.address            
             //first is to generate token
             var token = jwt.sign({
                data: yahoo.email
              }, 'secret', { expiresIn: '1h' });
            // second step to encrypt the password
            let encrypted_pass=undefined
            await bcrypt.hash(yahoo.password, 10, async (err, hash)=>{
                 encrypted_pass=hash
                 if(encrypted_pass!==undefined){
                    let user = {
                        driver_name:yahoo.name,
                        email:yahoo.email,
                        password:encrypted_pass,
                        token,
                        latitude:address.lat,
                        longitude:address.lon,
                        createdat:Date.now() 
                    }                    
                    let newuser = await driver_model.create(user)
                    .then(()=>                    
                    res.status(201).json({'status':'success','token':token})
                    )
                    .catch(err=>{                    
                        console.log(err)
                        res.status(400).json({'status':'fail','error_name':err.name,'message':err.message})
                    })                    
                  }
            });
        },
        async login (req,res){
            let yahoo = req.body 
            let address = req.address          
            driver_model.findOne({
                where: {
                    email:yahoo.email
                }            
            })
            .then(data=>{
                if(data===null){
                res.status(400).json({'status':'failed','message':'user does not exist'})
                }
                else{
                // console.log(data.dataValues)
                bcrypt.compare(yahoo.password, data.dataValues.password)
                .then(result=>{
                    if(result===false){
                        res.status(400).json({'status':'failed','message':'incorrect password'})
                    }
                    else{                
                        let token1 = jwt.sign({
                            data: yahoo.email
                          }, 'secret', { expiresIn: '1h' });
                        driver_model.update({latitude:address.lat,longitude:address.lon,token:token1,updatedat:Date.now()},{where:{id:data.dataValues.id}}).then((data)=>{
                            res.status(200).json({'status':'success','token':token1})
                        })

                    }})
                .catch(err=>console.log(err))
                }
            })}
            ,
            async logout(req,res){
                console.log(req.params)
                yahoo=req.params.token
                driver_model.update({latitude:null,longitude:null,token:null},{where:{token:yahoo}})
                .then(data=>{
                    console.log(data)
                    if(data[0]===0){
                        res.status(400).json({'status':'failed','message':'logged out unsuccessfull'})
                    }
                    else{
                        res.status(200).json({'status':'success','message':'Logged Out Successfully'})
                    }
                    
                }).catch(err=>{
                    console.log(err.name)
                    console.log(err.message)
                })
            }
            
    },
    put:{},
    delete:{}
}
    