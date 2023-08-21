import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "../../../../util/database";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '6682cebe5d0a759c9e30',
      clientSecret: '36d75646bf657c1b7d8e1f1850311807c884e045',
    }),
  ],
  secret: 'qwerty1221verifiedbyhyun',
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 