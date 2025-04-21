import Gig from '@/components/gigs/Gig';
import { getUpcomingGigsByArtistId } from '@/data-access/gig'
import { parse } from 'path';

export default async function MyUpcomingGigsPage({ params }: { params: { artistId: string } }) {
    let artistId = undefined;
    try {
        artistId = parseInt(params.artistId)
    } catch (error) {
        console.error("Error parsing artistId:", error);
        return <p className="text-center">Invalid artist ID</p>;
    }
    const upcomingGigs = await getUpcomingGigsByArtistId(artistId)

    return (
        <>
            <h1 className="flex justify-items-start font-bold text-2xl mt-6 mb-6">My Upcoming Gigs</h1>
            {upcomingGigs?.length === 0 && <p className="text-center">No upcoming gigs found. Time to get out there!</p>}
            <ul>
                {upcomingGigs?.map((gig) => (
                    <Gig key={gig.id} {...gig}/>
                ))}
            </ul>
        </>
    );
}