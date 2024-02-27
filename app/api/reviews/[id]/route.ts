import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

const editReviewSchema = z.object({
  content: z.string().min(1),
});


export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = editReviewSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { content } = body;

  const review = await prisma.reviews.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!review)
    return NextResponse.json({ error: "Invalid review" }, { status: 404 });

  const updatedReview = await prisma.reviews.update({
    where: { id: review.id },
    data: {
      content,
    },
  });

  return NextResponse.json(updatedReview, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const review = await prisma.reviews.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!review)
    return NextResponse.json({ error: "Invalid review" }, { status: 404 });

  await prisma.reviews.delete({
    where: { id: review.id },
  });

  return NextResponse.json({});
}
