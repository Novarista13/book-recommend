import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "../auth/[...nextauth]/authOptions";

const createReviewSchema = z.object({
  rating: z.number(),
  content: z.string().min(1),
  bookId: z.number(),
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
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const {
    user: { id },
  } = session;

  const body = await request.json();
  const validation = createReviewSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { rating, content, bookId } = body;
  const newReview = await prisma.reviews.create({
    data: {
      rating,
      content,
      bookId,
      userId: id,
    },
  });
  return NextResponse.json(newReview, { status: 201 });
}
