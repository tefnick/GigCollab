import { prisma } from "@/lib/prisma";
import Artist from "@/components/artists/Artist";


async function getArtists() {
    const artists = await prisma.artist.findMany();
    return artists;
}

export default async function Artists() {
    const artists = await getArtists();

    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl mt-6 mb-6">Artists</h1>
            <ul>
                {artists.length === 0 && <p className="text-center">No Artists found...</p>}
                {artists.map((artist) => (
                    <Artist key={artist.id} {...artist}/>
                ))}
            </ul>
        </>
    )
}