import { NextRequest, NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import prisma from "@/prisma/client";

const createReviewSchema = z.object({
  content: z.string().min(1),
  bookId: z.number(),
  userId: z.string().min(1),
});

export async function GET(request: NextRequest) {
  const bookId = request.nextUrl.searchParams.get("bookId");

  if (!bookId)
    return NextResponse.json({ msg: "required bookId" }, { status: 400 });

  const reviews = await prisma.reviews.findMany({
    where: { bookId: parseInt(bookId) },
    select: {
      id: true,
      content: true,
      createdAt: true,
      user: {
        select: {
          username: true,
          image: true,
        },
      },
    },
  });
  return NextResponse.json(reviews);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createReviewSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { content, bookId, userId } = body;
  const newReview = await prisma.reviews.create({
    data: {
      content,
      bookId,
      userId,
    },
  });
  return NextResponse.json(newReview, { status: 201 });
}
