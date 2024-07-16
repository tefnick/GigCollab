import { prisma } from "@/lib/prisma";
import Venue from "@/components/venues/Venue";

async function getVenues() {
    const venues = await prisma.venue.findMany({
        include: {
            state: { select: {name: true}},
            country: { select: {name: true}}
        }
    });
    return venues;
}

export default async function Venues() {
    const venues = await getVenues();
    return (
        <>
            <h1 className="flex justify-center font-bold text-2xl mt-6 mb-6">Venues</h1>
            <ul>
                {venues.length === 0 && <p>No Venues found...</p>}
                {venues.map((venue) => (
                    <Venue key={venue.id} {...venue}/>
                ))}
            </ul>
        </>
    )
}
