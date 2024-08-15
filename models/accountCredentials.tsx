import { Schema, model, models } from "mongoose";

const AccountCredentialsSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
    },

})

const AccountCredentials = models.AccountCredentials || model("AccountCredentials", AccountCredentialsSchema);

export default AccountCredentials;