import { Gig as GigModel, GigStatus} from "@prisma/client"

interface GigProps extends GigModel {
    venue : {
        name: string;
        address?: string;
        city?: string;
    },
    status: GigStatus;
    lineup: {
        id: number;
        name: string;
    }[]
}

export default function Gig({id, eventName, date, venue, lineup, status}: GigProps) {
    console.log('gig venue...')
    console.log(venue)
    const eventDisplayDate = date?.toLocaleString()
    const eventStatusStyles = status === 'CLOSED'? "text-red-500" : "text-green-500"
    return (
        <article key={id} className="hover:bg-slate-400 dark:hover:bg-blue-700 rounded-xl p-4">
            <h1 className="font-semibold mt-2 text-xl" >{eventName}</h1>
            <h2>Venue: {venue.name}</h2>
            <h1>{eventDisplayDate}</h1>
            <h2 className="mt-2">Lineup:</h2>
            <ul>
                {lineup?.map((artist) => (
                    <li key={artist.id}>
                        - {artist.name}
                    </li>))}
            </ul>
            <h2 className={eventStatusStyles}>Event Status: &quot;{status}&quot;</h2>

        </article>
    )
}