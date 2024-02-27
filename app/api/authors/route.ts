import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createAuthorSchema = z.object({
  name: z.string().min(1).max(255),
  about: z.string().min(1),
});

export async function GET(request: NextRequest) {
  const authors = await prisma.authors.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(authors);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createAuthorSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const { name, about } = body;
  const newAuthor = await prisma.authors.create({
    data: {
      name,
      about,
    },
  });
  return NextResponse.json(newAuthor, { status: 201 });
}
