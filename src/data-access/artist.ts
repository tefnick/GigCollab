"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function getArtists() {
  const session = await auth()
  if (!session) {
    redirect('/accounts/signin')
  }

  try {
    const artists = await prisma.artist.findMany();
    return artists;
  } catch (error) {
    console.error("error getting artists", error);
  }
}