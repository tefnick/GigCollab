import NextAuth from "next-auth"
import google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google],
  // callbacks: {
  //   authorized: async ({ auth }) => {
  //     // Logged in users are authenticated, otherwise redirect to login page
  //     return !!auth
  //   },
  // },
})