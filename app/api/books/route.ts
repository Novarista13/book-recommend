import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createBookSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  rating: z.string(),
  authorId: z.number().min(1),
  lang: z.string(),
  availability: z.string(),
  status: z.string(),
  publishedYear: z.number().positive().optional(),
  parts: z.number().positive().optional(),
  publishedPlatform: z.string().max(255).optional(),
  cover: z.string().optional(),
  ebook: z.string().optional(),
  assignedToUserId: z.string().optional(),
});

export async function GET(request: NextRequest) {
  const books = await prisma.books.findMany({
    orderBy: { title: "asc" },
    include: {
      author: { select: { name: true, about: true } },
    },
  });
  return NextResponse.json(books, { status: 200 });
}

export async function POST(request: NextRequest) {
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
    publishedYear,
    publishedPlatform,
    parts,
    assignedToUserId,
  } = body;

  const newBook = await prisma.books.create({
    data: {
      title,
      description,
      rating,
      authorId: parseInt(authorId),
      lang,
      availability,
      status,
      cover,
      ebook,
      publishedYear,
      publishedPlatform,
      parts,
      assignedToUserId,
    },
  });

  return NextResponse.json(newBook, { status: 201 });
}
