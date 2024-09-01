import { Schema, model, models } from "mongoose";

const OneTimePasscodeSchema = new Schema({
    passcode:{
        type:String
    },
    issueDate:{
        type:String
    },
    expiryDate:{
        type:String
    },
    user:{
        type:String,
        ref:'User'
    }

})

const OneTimePasscode = models.OneTimePasscode || model("OneTimePasscode",OneTimePasscodeSchema);

export default OneTimePasscode;