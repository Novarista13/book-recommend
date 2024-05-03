import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/authOptions";

const createBookSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  authorId: z.number().min(1),
  lang: z.string(),
  availability: z.string(),
  status: z.string(),
  publishedYear: z.number().positive().optional(),
  parts: z.number().positive().optional(),
  publishedPlatform: z.string().max(255).optional(),
  cover: z.string().optional(),
  ebook: z.string().optional(),
});

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const {
    user: { id },
  } = session;
  const books = await prisma.books.findMany({
    orderBy: { title: "asc" },
    include: {
      author: { select: { name: true, about: true } },
      Lists: {
        where: { userId: id },
        select: {
          listType: true,
        },
      },
    },
  });
  books.map(
    (book: {
      author: {
        name: string;
        about: string | null;
      };
      Lists: { listType: string }[] | string[];
    }) => {
      for (let i = 0; i < book.Lists.length; i++) {
        if (
          typeof book.Lists[i] === "object" &&
          !Array.isArray(book.Lists[i])
        ) {
          const list = book.Lists[i] as { listType: string };
          book.Lists[i] = list.listType;
        }
      }
    }
  );

  return NextResponse.json(books, { status: 200 });
}

export async function POST(request: NextRequest) {
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
    publishedYear,
    publishedPlatform,
    parts,
  } = body;

  const newBook = await prisma.books.create({
    data: {
      title,
      description,
      authorId: parseInt(authorId),
      lang,
      availability,
      status,
      cover,
      ebook,
      publishedYear,
      publishedPlatform,
      parts,
      assignedToUserId: id,
    },
  });

  return NextResponse.json(newBook, { status: 201 });
}
