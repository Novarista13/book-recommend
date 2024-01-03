import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const users = await prisma.book.findUnique({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(users);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // const session = await getServerSession(authOptions);
  // if (!session) return NextResponse.json({}, { status: 401 });

  const book = await prisma.book.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!book)
    return NextResponse.json({ error: "Invalid book" }, { status: 404 });

  await prisma.book.delete({
    where: { id: book.id },
  });

  return NextResponse.json({});
}

const createBookSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = createBookSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { title, description } = body;

  const book = await prisma.book.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!book)
    return NextResponse.json({ error: "Invalid book" }, { status: 404 });

  const updatedBook = await prisma.book.update({
    where: { id: book.id },
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(updatedBook, { status: 200 });
}
