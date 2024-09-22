const express = require("express")
const StudentModel = require("./src/model/student.schema")
const app = express()
const connectDb = require("./src/config/dbconfig")
app.use(express.json())
const bcrypt =  require("bcryptjs")
const jwt =  require("jsonwebtoken")

const port = 7000
connectDb()

app.get("/", (req, res) => {
    res.send("Aralam")
})




app.post("/register", async (req, res, nxt) => {

    try {

        let body = req.body

        const salt = await  bcrypt.genSalt(10)

        const hashpassword =  await bcrypt.hash(body.password,salt)

body.password = hashpassword

        let stu = new StudentModel(body)
        await stu.save()


        let da =  StudentModel.findOne({email:body.email})

        res.send({
            status: 400,
            message: "data saved",
        })

        res.status(500)

    } catch (err) {
        nxt(err)
    }


})

app.post("/login" , async(req,res,nxt)=>{

    try{


        let {email,password} =  req.body

        let studentdata =  await StudentModel.findOne({email:email})



        console.log(studentdata);
        
        if(!studentdata) {
            res.send({
                status:400,
                msg:"invalid"
            })
        }



        const invalidpass =  await bcrypt.compare(password,studentdata.password)

        if(!invalidpass){

          return  res.send({
                status:400,
                msg:"invalid username or password"
            })

        }


        const token =  jwt.sign({userid :studentdata._id},"weekendnodejs",{
            expiresIn: "1d"
        } )



        res.send({
            msg:"sucess logined",
            data:studentdata,
            token :token
        })
        












    }catch(err){
      console.log(err);
      nxt(err)
      
    }

})








app.listen(port, (req, res) => {
    console.log("server started at", port);

})

