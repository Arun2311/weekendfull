const express = require("express")
const StudentModel = require("./src/model/student.schema")
const app = express()
const connectDb = require("./src/config/dbconfig")
app.use(express.json())


const port = 7000
connectDb()

app.get("/", (req, res) => {
    res.send("Aralam")
})



// app.post("/adddata" ,(req,res)=>{
//     console.log(req.body);
//     res.send({
//         statuscode:200,
//         message :"sucessfully"
//     })
// })


app.post("/studentdata", async (req, res, nxt) => {

    try {

        let body = req.body
        let stu = new StudentModel(body)
        await stu.save()


        let da =  StudentModel.findOne({email:body.email})

        res.send({
            status: 400,
            message: "data saved",
            // data: da
        })

        res.status(500)

    } catch (err) {
        nxt(err)
    }


})









app.listen(port, (req, res) => {
    console.log("server started at", port);

})

