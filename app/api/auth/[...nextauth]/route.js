import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { connectMongoDB } from '@/lib/mongodb';

const handler = NextAuth({
  providers: [
    

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Sprawdź, czy użytkownik istnieje.
        await connectMongoDB();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              console.log(user);
              return user;
            } else {
              throw new Error("Błędne dane uwierzytelniające!");
            }
          } else {
            throw new Error("Użytkownik nie znaleziony!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
})
export { handler as GET, handler as POST }