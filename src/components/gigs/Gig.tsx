import { Gig as GigModel, GigStatus, Venue } from "@prisma/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type GigProps = GigModel & {
    date: Date, 
    eventName: string,
    status: GigStatus;
    venue: Venue & {
        state: {
            name: string;
        }
    },
    lineup: {
        id: number;
        name: string;
    }[]
}

export default function Gig({venue, lineup, status, date, eventName }: GigProps) {
    console.log('venue' , venue)
    const eventDisplayDate = date?.toLocaleString()
    const eventStatusStyles = status === 'CLOSED' ? "text-red-500" : "text-green-500"
    return (
        <Card className="w-[350px] hover:bg-slate-200">
            <CardHeader>
                <CardTitle>{eventName}</CardTitle>
                <CardDescription>
                    <p className="font-semibold">{venue.name}</p>
                    <p>{venue.city}, {venue.state.name}</p>
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="space-y-1">
                    <div className="text-sm font-medium leading-none">
                        {eventDisplayDate}<br/>
                        <h2 className="my-4 font-semibold">Lineup</h2>
                        {lineup.map((artist) => (
                            <span key={artist.id} className="text-sm font-medium leading-none">
                                - {artist.name}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}