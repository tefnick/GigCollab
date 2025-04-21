import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ArtistCard from "@/components/artists/ArtistCard";
import { getArtists } from "@/data-access/artist";

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'



export default async function Artists() {
    const artists = await getArtists();

    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl mt-6 mb-6">Artists</h1>
            <ul>
                {artists?.length === 0 && <p className="text-center">No Artists found...</p>}
                {artists?.map((artist) => (
                    <ArtistCard key={artist.id} {...artist}/>
                ))}
            </ul>
        </>
    )
}