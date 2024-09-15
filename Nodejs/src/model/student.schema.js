const mongoose = require("mongoose")


const StudentSchema = mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },
        email: {
            required: false,
            type: String
        },
        phone: {
            required: true,
            type: Number
        },
        password: {
            required: true,
            type: String
        }
    }
    ,{
        timestamps:true
    }

)

module.exports = mongoose.model("students",StudentSchema )
