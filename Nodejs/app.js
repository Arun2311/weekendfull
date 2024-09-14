const express =  require("express")

const app = express()
const connectDb =  require("./src/config/dbconfig")
app.use(express.json())


const port = 7000
connectDb()

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

