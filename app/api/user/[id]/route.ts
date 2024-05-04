import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import authOptions from "../../auth/[...nextauth]/authOptions";

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const {
    user: { id },
  } = session;

  const body = await request.json();
  const { profile } = body;
  if (!profile)
    return NextResponse.json(
      { message: "Please Provide the file!" },
      { status: 404 }
    );

  const uploadedFile = await prisma.user.update({
    where: { id },
    data: {
      image: profile,
    },
  });
  
  return NextResponse.json(uploadedFile, { status: 200 });
}
