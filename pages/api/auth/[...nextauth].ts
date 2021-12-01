import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";

declare module 'next-auth' {
  interface Session {
      user: {
          id: string
          email: string
          company: string
          name: string
      }
  }
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    CredentialsProvider({

      credentials: {
        username: { label: "Username", type: "text" },
        company: { label: "Company", type: "text" },
        mail: { label: "E-Mail", type: "text" },
      },
      async authorize(credentials) {
        // (i.e., the request IP address)
        //   const res = await fetch("/your/endpoint", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()
        let user = await prisma.user.findUnique({
          where: { email: credentials.mail}
        })

        if(!user) {
  

          user = await prisma.user.create({
          data: {
            email: credentials.mail ,
            name: credentials.username,
            company: credentials.company
          },
        })
                
      }


        // If no error and we have user data, return it
        return { id: 10, name: user.name, company: user.company, email: user.email };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.AUTH_SECRET,
  },
  callbacks: {
    //  session: async({ session, token, user }) => {
    //   session.user.id = user.id
    //   return Promise.resolve(session)
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.company = user.company
    //   }
    //   return token
    // }
  },

   pages: {
    signIn: "/auth/signin",
   },

  debug: true,
  }
  
  export default NextAuth(authOptions)