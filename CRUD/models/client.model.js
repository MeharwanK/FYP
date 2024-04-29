const mongoose =require('mongoose')

const ClientSchema = mongoose.Schema(
    {
        client_name: {
            type: String,
            required: [true,"Please enter your name"]
        },
        client_email:{
            type:String,
            required: true,
            default:0
        },
        client_password:{
            type: String,
            required: true
            
        },
        client_cnic:{
            type: Number,
            required:true,
            default:0
        },
        client_username:{
            type: String,
            required: [true,"Please enter user name"]
        },
        client_phone:{
            type:Number,
            required: true,
            default:0
        }
    },
    {
        timestamps:true
    }
)



const client = mongoose.model("client",ClientSchema);
module.exports = client;