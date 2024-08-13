import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { connecToDB } from "@utils/database";
import User from "@models/user";
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from "@utils/saltAndHashPassword";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
            clientId:process.env.GOOGLE_ID as string,
            clientSecret:process.env.GOOGLD_CLIENT_SECRET as string
        }),
    Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
          email: {},
          password: {},
        },
        authorize: async (credentials) => {
          let user = null
    
          // logic to salt and hash password
          const pwHash = saltAndHashPassword(credentials.password as string)
    
          // logic to verify if the user exists
          try{
            await connecToDB();
            user = await User.findOne({
                email:credentials.email
            })

            return user;
        }catch(error){
            throw new Error("User not found.")
        }

        },
    }),
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