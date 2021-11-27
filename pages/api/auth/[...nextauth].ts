import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    CredentialsProvider({

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // (i.e., the request IP address)
        //   const res = await fetch("/your/endpoint", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()

        // If no error and we have user data, return it
        return { id: 1, name: "J Smith", email: "jsmith@example.com" };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.AUTH_SECRET,
  },

   pages: {
    signIn: "/auth",
   },

  debug: true,
  });