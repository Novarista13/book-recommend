import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";

import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

import { compare } from "bcrypt";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "abcd@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // check if the user exist
        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!existingUser) {
          return null;
        }

        // check if the password match
        if (existingUser.password) {
          const passwordMatch = compare(
            credentials?.password,
            existingUser.password
          );
          if (!passwordMatch) return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
};

export default authOptions;
