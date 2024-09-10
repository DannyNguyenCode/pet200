import { Schema, model, models } from "mongoose";

const PetSchema = new Schema({
    category:{
        type:String
    },
    name:{
        type:String
    },
    gender:{
        type:String
    },
    image:{
        type:String
    },
    breed:{
        type:String
    },
    age:{
        type:Number
    },
    primaryColor:{
        type:String
    },
    secondaryColor:[{
        type:String
    }],
    desc:{
        type:String
    },
    owner:{
        type: String,
        ref:'User'
    }

})

const Pet = models.Pets || model("Pets",PetSchema);

export default Pet;