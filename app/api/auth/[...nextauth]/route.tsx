import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connecToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret:process.env.GOOGLD_CLIENT_SECRET as string
        })
    ],
    session:{
        // maxAge:30,
        strategy:'jwt'
    },
    callbacks:{
        async session({session}:{session?:any}){
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            session.user.id = sessionUser._id.toString();
            return session
    
        },
        async signIn({ account, profile, user, credentials }:{account?:any, profile?:any, user?:any, credentials?:any}){
            try{
                await connecToDB();
                const userExists = await User.findOne({
                    email:profile.email
                })
                if(!userExists){
                    await User.create({
                        email:profile.email,
                        username: profile.name.replaceAll(" ","").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true;
            }catch(error){
                console.log(error)
                return false;
            }
        } 
    },
})

export {handler as GET, handler as POST};