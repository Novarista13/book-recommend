import { NextRequest, NextResponse } from "next/server";
import { any, z } from "zod";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/authOptions";

const createBookSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

interface Books {
  title: string;
  description: string;
  categoryId: number;
  author: string;
  categoryName: string;
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });

  const books = await prisma.book.findMany({ orderBy: { title: "asc" } });
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createBookSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newBook = await prisma.book.create({
    data: <Books>{
      author: body.author,
      categoryId: body.category_id,
      categoryName: body.category_name,
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newBook, { status: 201 });
}
