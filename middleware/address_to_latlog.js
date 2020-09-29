const axios=require('axios').default;
module.exports = {
 auth_address :async (req, res, next) => {
    try {
        if(req.body.address.street || req.body.address.city || req.body.address.state || req.body.address.postalcode){
            axios.get(`https://us1.locationiq.com/v1/search.php?key=02b2208a9d1c90&street=${req.body.address.street}&city=${req.body.address.city}&state=${req.body.address.state}&country=India&postalcode=${req.body.address.postalcode}&format=JSON`)
            .then(res=>(
                req.address = res.data[0],
                next()
            ))
            .catch(err=>{
                console.log(err.name)
                if(err.message==='getaddrinfo EAI_AGAIN us1.locationiq.com'){
                    res.json({"status":"failed","message":err.message,"otherMessage":"this error may occur as there are 2 many request to the server please try again after 2-3 mins"})
                }else{
                    res.json({"status":"failed","message":err.message,"otherMessage":"api error please login once again with right address name"})
                }
            })
        }
        else{
            res.status(400).json({"status":"failed","message":"missing field!, please provide all the fields"})
        }
    }
    catch (err) {
        console.log(err.message);
        res.status(400).json({"success":"failed","err_name":err.name,"message":err.message})
    }
},
auth_pickup_destination_location : async (req,res,next)=>{
    try {
        if(req.body.pickup_address.street || req.body.pickup_address.city || req.body.pickup_address.state || req.body.pickup_address.postalcode || req.body.destination_address.street || req.body.destination_address.city || req.body.destination_address.state || req.body.destination_address.postalcode ){
            let fetch1 = axios.get(`https://us1.locationiq.com/v1/search.php?key=02b2208a9d1c90&street=${req.body.pickup_address.street}&city=${req.body.pickup_address.city}&state=${req.body.pickup_address.state}&country=India&postalcode=${req.body.pickup_address.postalcode}&format=JSON`)
            let fetch2 = axios.get(`https://us1.locationiq.com/v1/search.php?key=b32cf14ed1d7c2&street=${req.body.destination_address.street}&city=${req.body.destination_address.city}&state=${req.body.destination_address.state}&country=India&postalcode=${req.body.destination_address.postalcode}&format=JSON`)
            Promise.all([fetch1,fetch2])
            .then(response=>{
                console.log([response[0].data,response[1].data])
                req.pickup_data = response[0].data[0]
                req.destination_data = response[1].data[0]
                if(req.pickup_data.lat === req.destination_data.lat && req.pickup_data.lon === req.destination_data.lon){
                    return res.status(400).json({'status':'failed','message':'pickup address and destination address must be different!!!!'})
                }
                else{
                    next()
                } 
            })
            .catch(err=>{
                console.log(err)
                if(err[0].message==='getaddrinfo EAI_AGAIN us1.locationiq.com'){
                    res.json({"status":"failed","message":err[0].message,"otherMessage":"this error may occur as there are 2 many request to the server please try again after 2-3 mins"})
                }else if(err[1].message==='getaddrinfo EAI_AGAIN us1.locationiq.com'){
                    res.json({"status":"failed","message":err[1].message,"otherMessage":"this error may occur as there are 2 many request to the server please try again after 2-3 mins"})
                }
                else{
                    res.json({"status":"failed","message1":err[0].message,"message2":err[1].message,"otherMessage":"api error please login once again with right address name"})
                }
            })
        }
        else{
            res.status(400).json({"status":"failed","message":"missing field!, please provide all the fields"})
        }        
    } catch (err) {
        console.log(err)
        res.status(400).json({"success":"failed","err_name":err.name,"message":err.message})
    }
} 

}