import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createCategorySchema = z.object({
  name: z.string().min(1).max(255),
});

export async function GET(request: NextRequest) {
  const categories = await prisma.categories.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createCategorySchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newCategory = await prisma.categories.create({
    data: {
      name: body.name,
    },
  });
  return NextResponse.json(newCategory, { status: 201 });
}
