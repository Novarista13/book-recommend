import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/authOptions";
import { Lang, Status } from "@prisma/client";

export async function GET(request: NextRequest) {
  const allBooks = request.nextUrl.searchParams.get("all");
  const bookId = request.nextUrl.searchParams.get("bookId");
 

  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const {
    user: { id },
  } = session;

  if (!allBooks) {
    let result;
    if (bookId) {
      result = await prisma.lists.findMany({
        where: { userId: id, bookId: parseInt(bookId) },
        include: {
          book: {
            select: {
              id: true,
              title: true,
              description: true,
              author: {
                select: {
                  name: true,
                },
              },
              lang: true,
              publishedYear: true,
              status: true,
              cover: true,
              Lists: {
                where: { userId: id },
                select: {
                  listType: true,
                },
              },
            },
          },
        },
      });
    } else {
      result = await prisma.lists.findMany({
        where: { userId: id },
        include: {
          book: {
            select: {
              id: true,
              title: true,
              description: true,
              author: {
                select: {
                  name: true,
                },
              },
              lang: true,
              publishedYear: true,
              status: true,
              cover: true,
              Lists: {
                where: { userId: id },
                select: {
                  listType: true,
                },
              },
            },
          },
        },
      });
    }

    let booksByListType: {
      [listType: string]:
        | {
            id: number;
            status: Status;
            title: string;
            Lists: { listType: string }[] | string[];
            description: string;
            lang: Lang;
            publishedYear: number | null;
            cover: string | null;
            author: {
              name: string;
            };
          }[];
    } = {};

    result?.forEach((list) => {
      const { listType, book } = list;
      if (!booksByListType[listType]) {
        booksByListType[listType] = [];
      }
      if (book && Array.isArray(booksByListType[listType])) {
        booksByListType[listType].push(book);
      }
    });

    Object.keys(booksByListType).map((keyName) => {
      booksByListType[keyName].forEach((book) => {
        for (let i = 0; i < book.Lists.length; i++) {
          if (
            typeof book.Lists[i] === "object" &&
            !Array.isArray(book.Lists[i])
          ) {
            const list = book.Lists[i] as { listType: string };
            book.Lists[i] = list.listType;
          }
        }
      });
    });

    return NextResponse.json(booksByListType, { status: 200 });
  } else {
    const lists = await prisma.lists.findMany({
      where: { userId: id },
      orderBy: [
        {
          book: {
            id: "asc",
          },
        },
      ],
      select: {
        listType: true,
        book: {
          select: {
            id: true,
            title: true,
            description: true,
            author: {
              select: {
                name: true,
              },
            },
            lang: true,
            publishedYear: true,
            status: true,
            cover: true,
          },
        },
      },
    });

    return NextResponse.json(lists, { status: 200 });
  }
}

const createlistSchema = z.object({
  bookIdArray: z.array(z.number()),
  listType: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createlistSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const {
    user: { id },
  } = session;

  const { bookIdArray, listType } = body;

  const createdBookLists = await prisma.lists.createMany({
    data: bookIdArray.map((b: number) => ({
      userId: id,
      bookId: b,
      listType,
    })),
    skipDuplicates: true,
  });
  return NextResponse.json(createdBookLists, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const listType = request.nextUrl.searchParams.get("listType");
  const bookId = request.nextUrl.searchParams.get("bookId");

  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const {
    user: { id },
  } = session;

  if (!listType)
    return NextResponse.json({ msg: "required listType" }, { status: 400 });

  if (id && listType && !bookId) {
    const lists = await prisma.lists.findMany({
      where: { userId: id, listType: listType },
    });

    if (!lists)
      return NextResponse.json({ error: "Invalid list" }, { status: 404 });

    await prisma.lists.deleteMany({
      where: { userId: id, listType: listType },
    });
    return NextResponse.json({});
  }

  if (id && listType && bookId) {
    const lists = await prisma.lists.findMany({
      where: { userId: id, listType: listType, bookId: parseInt(bookId) },
    });

    if (!lists)
      return NextResponse.json({ error: "Invalid lists" }, { status: 404 });

    await prisma.lists.deleteMany({
      where: { userId: id, listType: listType, bookId: parseInt(bookId) },
    });
    return NextResponse.json({});
  }
}

const updatelistSchema = z.object({
  originalList: z.string().min(1).max(255),
  listType: z.string().min(1).max(255),
});

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const validation = updatelistSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const {
    user: { id },
  } = session;

  const { originalList, listType } = body;

  const Lists = await prisma.lists.findMany({
    where: { userId: id, listType: originalList },
  });

  if (!Lists)
    return NextResponse.json({ error: "Invalid List type" }, { status: 404 });

  const updatedLists = await prisma.lists.updateMany({
    where: { userId: id, listType: originalList },
    data: {
      listType,
    },
  });

  return NextResponse.json(updatedLists, { status: 200 });
}
