"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function getOpenGigs() {
  const session = await auth();
  if (!session) {
    redirect('/accounts/signin')
  }

  try {
    const gigs = await prisma.gig.findMany({
      where: {
        date: {
          gte: new Date() // date constructor initializes to current date
        },
        status: "PLANNING"
      },
      include: {
        venue: { 
          include: {
            state: true,
            country: true,
          }
        },
        lineup: true,
      }
    })

    return gigs;
  } catch (error) {
    console.error("Error fetching gigs:", error);
  }
}

export async function getUpcomingGigsByArtistId(artistId: number) {
  const session = await auth();
  if (!session) {
    redirect('/accounts/signin')
  }

  try {
    const upcomingGigs = await prisma.gig.findMany({
      where: {
        date: {
          gte: new Date() // date constructor initializes to current date
        },
        lineup: {
          some: {
            id: artistId
          }
        }
      },
      include: {
        venue: { 
          include: {
            state: true,
            country: true,
          }
        },
        lineup: true,
      }
    })
    return upcomingGigs
  } catch (error) {
    console.error("Error fetching my upcoming gigs:", error);
  }
}