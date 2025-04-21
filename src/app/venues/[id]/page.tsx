import { prisma } from "@/lib/prisma";
import Gig from "@/components/gigs/Gig";

/**
 * Retrieves a venue object by its ID.
 * @param {string} id - The ID of the venue to retrieve.
 * @returns {Venue | undefined} The venue object matching the provided ID, or undefined if not found.
 */
async function getVenueById(id: string) {
    const venueId = parseInt(id);
    const venue = await prisma.venue.findUnique({
        where: {
            id: venueId
        },
        include: {
            state: {select: {name: true}},
            country: {select: {name: true}},
            upcomingGigs: {
                where: {
                    date: {
                        gte: new Date()
                    }
                },
                include: {
                    venue: {
                        include: {
                            state: true
                        }
                    },
                    lineup: true,
                },
                orderBy: {
                    date: 'asc'
                }
            }
    }})

    return venue;
}

export default async function VenueDetailsPage({ params }: { params: { id: string } }) {
    const venue = await getVenueById(params.id)
    console.log(venue);
    const backlineStyles = !venue?.hasBackline? "text-yellow-500" : "";

    let venueContent = (
        <div key={venue?.id}>
            <div className="p-6 rounded-md border-b-2 shadow-md">
                <h1 className="font-bold text-xl mb-4">Venue Details</h1>
                <h1>{venue?.name}</h1>
                <h3 className="text-blue-700 hover:text-blue-500">{venue?.url}</h3>
                <h2 className="font-thin font-sans">{venue?.address} {venue?.address2 ? venue.address2: ''}, {`${venue?.city}, ${venue?.state.name}`}</h2>
                <h2>{venue?.country.name}</h2>
                <h2>Capacity: {venue?.capacity? venue?.capacity : "No capacity info listed"}</h2>
                <h2>Number of stages: {venue?.numberOfStages}</h2>
                <h2 className={backlineStyles}>Backline info: {venue?.hasBackline? venue?.backlineDetails : "No backline info listed"}</h2>
            </div>
            
            <div className="p-6">
                <h1 className="font-bold text-xl mb-4">Upcoming Gigs 🎤</h1>
                {!venue?.upcomingGigs || venue?.upcomingGigs.length === 0 && <p className="text-yellow-500">No upcoming gigs 🥱 </p>}
            
                {venue?.upcomingGigs?.map((gig) => (
                    <Gig key={gig.id} {...gig}/>
                ))}
            </div>
        </div>
    )

    let noVenueDefaultContent = <p className="text-yellow-500 text-center mt-6">Oops.. No venue found...</p>

    let data = !venue? noVenueDefaultContent : venueContent;

    return (
        <>
            {data}
        </>
    )
}




