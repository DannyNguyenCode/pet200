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
          // logic to salt and hash password
          const pwHash = saltAndHashPassword(credentials.password as string)

          // logic to verify if the user exists
        try{
            await connecToDB();
           const user = await User.findOne({
            $and: [
                {email:credentials.email},
                {loginType: 'credentials'}
              ]
              
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
        jwt({token, user, account}) {
            if (user) { // User is available during sign-in
              token.id = user.id
            }
            if(account){
                token.loginType = account?.provider
            }
        
            return token
        },

        async session({session,token,user}:{session?:any,token:any,user:any}){

            let sessionUser = await User.findOne({
                $and: [
                    {email: session.user.email},
                    {loginType: token.loginType}
                  ]
            })
            
            session.user.loginType = sessionUser.loginType.toString();
            session.user.id = sessionUser._id.toString();
            return session
    
        },
        async signIn({ account, profile, credentials }:{account?:any, profile?:any, user?:any, credentials?:any}){
            try{
                await connecToDB();
                let userExists = null

                if(account.provider === "google"){
                    userExists = await User.findOne({
                        $and: [
                            {email:profile.email},
                            {loginType: account.provider}
                          ]
                       
                    })
                    if(!userExists){
                        await User.create({
                            email:profile.email,
                            username: profile.name.replaceAll(" ","").toLowerCase(),
                            image: profile.picture,
                            loginType:account.provider,
                            password:''
                        })
                    }
                }
                if(account.provider === "credentials"){
                    userExists = await User.findOne({
                        $and: [
                            {email:credentials.email},
                            {loginType: account.provider}
                          ]
                     
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