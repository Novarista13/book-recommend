import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const users = await prisma.books.findUnique({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(users);
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
  rating: z.string(),
  authorId: z.number().min(1),
  lang: z.string(),
  availability: z.string(),
  status: z.string(),
  cover: z.string().optional(),
  ebook: z.string().optional(),
  assignedToUserId: z.string().optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = createBookSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const {
    title,
    description,
    rating,
    authorId,
    lang,
    availability,
    status,
    cover,
    ebook,
    assignedToUserId,
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
      rating,
      authorId,
      lang,
      availability,
      status,
      cover,
      ebook,
      assignedToUserId,
    },
  });

  return NextResponse.json(updatedBook, { status: 200 });
}
