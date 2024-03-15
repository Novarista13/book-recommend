import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const category = await prisma.categories.findUnique({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(category);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const category = await prisma.categories.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!category)
    return NextResponse.json({ error: "Invalid category" }, { status: 404 });

  await prisma.categories.delete({
    where: { id: category.id },
  });

  return NextResponse.json({});
}

const createCategorySchema = z.object({
  name: z.string().min(1).max(255),
});

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const body = await request.json();

//   const validation = createCategorySchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });

//   const category = await prisma.categories.findUnique({
//     where: { id: parseInt(params.id) },
//   });

//   if (!category)
//     return NextResponse.json({ error: "Invalid author" }, { status: 404 });

//   const updatedCategory = await prisma.authors.update({
//     where: { id: category.id },
//     data: {
//       name: body.name,
//     },
//   });

//   return NextResponse.json(updatedCategory, { status: 200 });
// }
