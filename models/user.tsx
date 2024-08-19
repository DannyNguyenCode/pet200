import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String,
        required: [true, 'Email is required']
    },
    username:{
        type: String,
    },
    image: {
        type: String,
    },
    loginType:{
        type:String
    },
    password:{
        type:String,
    }
})

const User = models.User || model("User", UserSchema);

export default User;