"use server"

import { redirect } from "next/navigation";
import { prisma } from "./prisma"
import { auth } from "@/auth"

export async function getVenues() {
  try {
    const venues = await prisma.venue.findMany()
    return venues;
  } catch (error) {
    console.error("error getting venues", error)
  }
}

export async function getLoggedInArtistId() {
  const session = await auth()
  if (!session) {
    redirect('/accounts/signin')
  }

  try {
    const artist = await prisma.artist.findFirst({
      where : {
        contactId: session.user?.id
      },
      select: {
        id: true
      }
    })
    return artist?.id
  } catch (error) {
    console.error("error getting artist", error)
  }
}