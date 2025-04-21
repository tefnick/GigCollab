import { Gig as GigModel, GigStatus, Venue } from "@prisma/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react"
import Link from "next/link";

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
    console.log('lineup' , lineup)
    const eventDisplayDate = date?.toLocaleString()
    const eventStatusStyles = status === 'CLOSED' ? "text-red-500" : "text-green-500"
    return (
        <Card className="w-[350px] hover:bg-slate-200 shadow-lg">
            <CardHeader>
                <CardTitle className="flex justify-start mb-4">{eventName}</CardTitle>
                <CardDescription>
                    <p className="font-semibold">@ {venue.name}</p>
                    <p className="ml-4">{venue.city}, {venue.state.name}</p>
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="space-y-1">
                    <div className="text-sm font-medium leading-none">
                        {eventDisplayDate}<br/>
                        <h3 className="mt-6">Event Status:</h3>
                        <h3 className={`mt-2 ${eventStatusStyles}`}>{status}</h3>
                        <div className="border-2 border-slate-100 mt-4 pt-4 rounded-md">
                            <h3 className="m-2 font-semibold">Lineup</h3>
                            {lineup.map((artist) => (
                                <Link href={`/artists/${artist.id}`} key={artist.id}>
                                    <span key={artist.id} className="text-slate-500 font-medium leading-none p-4 my-6">
                                        - {artist.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}