import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId:'877573455221-l52j3nsv9dt41g4lgobkbanau8gt37f4.apps.googleusercontent.com',
            clientSecret:'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'
        })
    ],
    pages:{
        signIn:'./signin'
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}