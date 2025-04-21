import { Venue as VenueModel } from "@prisma/client";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

interface VenueProps extends VenueModel {
    state: {
        name: string;
    };

    country: {
        name: string;
    };
}

export default function Venue({ name, id, city, state, country, capacity, numberOfStages, hasBackline, backlineDetails }: VenueProps) {
    const backlineStyles = !hasBackline ? "text-yellow-500" : "";
    return (
        <Card className="relative w-[350px] hover:bg-slate-200" key={id}>
        <CardHeader>
            <Link className="hover:text-blue-700" href={`/venues/${id}`}>
                <CardTitle>{name}</CardTitle>
            </Link>
            <CardDescription>
                <p className="font-semibold">{`${city}, ${state.name}`}</p>
                <h2>{country.name}</h2>
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <h2>Capacity: {capacity ? capacity : "No capacity info listed"}</h2>
            <h2>Number of stages: {numberOfStages}</h2>
            <h2 className={backlineStyles}>Backline info: {hasBackline ? backlineDetails : "No backline info listed"}</h2>
        </CardContent>
        <CardFooter className="mt-2">
            <Link href={'/venues/booking'}>
                <Button>Book Venue</Button>
            </Link>
        </CardFooter>
        </Card>
    )
}