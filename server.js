const app = require("./app")

app.get('/',(req,res)=>{
    res.json({"msg":"Welcome to Uber/Ola Clone"})
})




let Port = process.env.PORT || 8080
app.listen(Port, () => {
    console.log(`Server listening at ${Port}`)
})