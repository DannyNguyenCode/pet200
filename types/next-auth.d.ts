import { DefaultSession  } from "next-auth";

declare module 'next-auth'{
    interface User {
        id: string
        email: string
        loginType: string
    }
    interface Session{
        user: User & DefaultSession["user"]
    }

}