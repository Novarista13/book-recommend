import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createCategorySchema = z.object({
  bookId: z.number(),
  categoryId: z.number(),
});

export async function GET(request: NextRequest) {
  const bookId = request.nextUrl.searchParams.get("bookId");

  if (!bookId)
    return NextResponse.json({ msg: "required bookId" }, { status: 400 });

  const primaryCategoryLists = await prisma.categoryList.findMany({
    where: { bookId: parseInt(bookId) },
    select: {
      bookId: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  let categoryArray: string[] = [];

  primaryCategoryLists.forEach((list) => {
    const { name } = list.category;
    categoryArray.push(name);
  });

  return NextResponse.json({ categoryArray });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createCategorySchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newCategory = await prisma.categoryList.create({
    data: {
      bookId: body.bookId,
      categoryId: body.categoryId,
    },
  });
  return NextResponse.json(newCategory, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const bookId = request.nextUrl.searchParams.get("bookId");
  const categoryId = request.nextUrl.searchParams.get("categoryId");

  if (!bookId || !categoryId)
    return NextResponse.json(
      { msg: "required bookId & categoryId" },
      { status: 400 }
    );

  const existCategoryList = await prisma.categoryList.findMany({
    where: { bookId: parseInt(bookId), categoryId: parseInt(categoryId) },
  });

  if (!existCategoryList)
    return NextResponse.json(
      { error: "Invalid book or category" },
      { status: 404 }
    );

  await prisma.categoryList.deleteMany({
    where: { bookId: parseInt(bookId), categoryId: parseInt(categoryId) },
  });

  return NextResponse.json({});
}
