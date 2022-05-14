const mongoose = require('mongoose')

const {Schema, model} = mongoose;

const  userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Number,
            default: 0 // 0 = user, 1 = admin
        },
        avatar: {
            type: String,
            default: "https://e7.pngegg.com/pngimages/492/286/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png"
        },
        about: {
            type: String        
        }
    }
    , {
        timestamps: true
    }
)


module.exports = User = model("user", userSchema);