import { set, connect } from "mongoose";

let isConnected = false;

export const connecToDB = async ()=>{
    set('strictQuery', true);

    if(isConnected){
        console.log('is connected to database already');
        return;
    }
    try{
        await connect(process.env.MONGODB_URI as string,{
            dbName:"pet200",
        })
        isConnected = true;
        console.log('MongoDB connected');
    }catch(error){
        console.log(error)
    }
}