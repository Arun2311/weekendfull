const mongoose  =  require("mongoose")

const mongodburl = "mongodb+srv://arun:eEOnueauJaQqGJJr@cluster0.182bdqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectDb  = async () =>{

    try{

        if(mongodburl){
            await mongoose.connect(mongodburl,{
                dbName:"weekendnodejs"
            })

            console.log("db connected");
            
        }else{
            console.log(" no url");
            
        }

    }catch(err){
       console.log("db failed to connect");
       
    }


}


module.exports = connectDb