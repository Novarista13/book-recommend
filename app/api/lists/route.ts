import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createlistSchema = z.object({
  userId: z.string().min(1).max(255),
  bookId: z.number(),
  listType: z.string().min(1).max(255),
});

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");

  if (!userId)
    return NextResponse.json({ msg: "required userId" }, { status: 400 });

  const lists = await prisma.lists.findMany({
    where: { userId: userId },
    include: {
      book: {
        select: {
          title: true,
          description: true,
          rating: true,
          authorId: true,
          lang: true,
          availability: true,
          status: true,
          cover: true,
        },
      },
    },
  });

  let name = "List Type sample";
  const booksByListType = { [name]: [{}] };

  lists.forEach((list) => {
    const { listType, book } = list;
    if (!booksByListType[listType]) {
      booksByListType[listType] = [];
    }
    if (book) booksByListType[listType].push(book);
  });

  return NextResponse.json(booksByListType, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createlistSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const { userId, bookId, listType } = body;
  const newList = await prisma.lists.create({
    data: {
      userId,
      bookId,
      listType,
    },
  });
  return NextResponse.json(newList, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const listType = request.nextUrl.searchParams.get("listType");
  const bookId = request.nextUrl.searchParams.get("bookId");

  if (!userId || !listType)
    return NextResponse.json(
      { msg: "required both userId & listType" },
      { status: 400 }
    );

  if (userId && listType && !bookId) {
    const lists = await prisma.lists.findMany({
      where: { userId: userId, listType: listType },
    });

    if (!lists)
      return NextResponse.json({ error: "Invalid list" }, { status: 404 });

    await prisma.lists.deleteMany({
      where: { userId: userId, listType: listType },
    });
  }

  if (userId && listType && bookId) {
    const lists = await prisma.lists.findMany({
      where: { userId: userId, listType: listType, bookId: parseInt(bookId) },
    });

    if (!lists)
      return NextResponse.json({ error: "Invalid list" }, { status: 404 });

    await prisma.lists.deleteMany({
      where: { userId: userId, listType: listType, bookId: parseInt(bookId) },
    });
  }

  return NextResponse.json({});
}

const updatelistSchema = z.object({
  userId: z.string().min(1).max(255),
  originalList: z.string().min(1).max(255),
  listType: z.string().min(1).max(255),
});

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const validation = updatelistSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { userId, originalList, listType } = body;

  const Lists = await prisma.lists.findMany({
    where: { userId: userId, listType: originalList },
  });

  if (!Lists)
    return NextResponse.json({ error: "Invalid List type" }, { status: 404 });

  const updatedLists = await prisma.lists.updateMany({
    where: { userId: userId, listType: originalList },
    data: {
      listType,
    },
  });

  return NextResponse.json(updatedLists, { status: 200 });
}
