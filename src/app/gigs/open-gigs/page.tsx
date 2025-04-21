import Gig from '@/components/gigs/Gig';
import { getOpenGigs } from '@/data-access/gig'

// Opt out of caching for all data requests in the route segment
// export const dynamic = 'force-dynamic'

export default async function OpenGigsPage() {
  const gigs = await getOpenGigs()
  return (
    <>
        <h1 className="flex justify-items-start font-bold text-2xl mt-6 mb-6">Open Gigs</h1>
        {gigs?.length === 0 && <p className="text-center">No upcoming gigs</p>}
        <ul>
            {gigs?.map((gig) => (
                <Gig key={gig.id} {...gig}/>
            ))}
        </ul>
    </>
    );
}
