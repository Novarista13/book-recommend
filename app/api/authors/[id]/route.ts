import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const author = await prisma.authors.findUnique({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(author);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const author = await prisma.authors.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!author)
    return NextResponse.json({ error: "Invalid author" }, { status: 404 });

  await prisma.authors.delete({
    where: { id: author.id },
  });

  return NextResponse.json({});
}

const createAuthorSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  about: z.string().min(1).optional(),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = createAuthorSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { name, about } = body;

  const author = await prisma.authors.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!author)
    return NextResponse.json({ error: "Invalid author" }, { status: 404 });

  const updatedAuthor = await prisma.authors.update({
    where: { id: author.id },
    data: {
      name,
      about,
    },
  });

  return NextResponse.json(updatedAuthor, { status: 200 });
}
