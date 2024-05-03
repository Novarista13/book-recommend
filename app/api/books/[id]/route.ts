import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/[...nextauth]/authOptions";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const books = await prisma.books.findUnique({
    where: { id: parseInt(params.id) },
    include: {
      author: {
        select: {
          name: true,
          about: true,
        },
      },
    },
  });

  return NextResponse.json(books);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const book = await prisma.books.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!book)
    return NextResponse.json({ error: "Invalid book" }, { status: 404 });

  await prisma.books.delete({
    where: { id: book.id },
  });

  return NextResponse.json({});
}

const createBookSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  authorId: z.number().min(1),
  lang: z.string(),
  availability: z.string(),
  status: z.string(),
  cover: z.string().optional(),
  ebook: z.string().optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = createBookSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const {
    user: { id },
  } = session;

  const {
    title,
    description,
    authorId,
    lang,
    availability,
    status,
    cover,
    ebook,
  } = body;

  const book = await prisma.books.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!book)
    return NextResponse.json({ error: "Invalid book" }, { status: 404 });

  const updatedBook = await prisma.books.update({
    where: { id: book.id },
    data: {
      title,
      description,
      authorId,
      lang,
      availability,
      status,
      cover,
      ebook,
      assignedToUserId: id,
    },
  });

  return NextResponse.json(updatedBook, { status: 200 });
}
