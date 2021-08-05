import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.FACEBOOK({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
