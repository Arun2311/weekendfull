const express =  require("express")

const app = express()

app.use(express.json())


const port = 7000


app.get("/" ,(req,res)=>{
    res.send("Aralam")
})



app.post("/adddata" ,(req,res)=>{
    console.log(req.body);
    res.send({
        statuscode:200,
        message :"sucessfully"
    })
})



app.listen(port , (req,res)=>{
console.log("server started at" , port);

})

