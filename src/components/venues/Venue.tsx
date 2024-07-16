import { Venue as VenueModel } from "@prisma/client";
import Link from "next/link";

interface VenueProps extends VenueModel {
    state: {
        name: string;
    };

    country: {
        name: string;
    };
}

export default function Venue({name, id, city, state, country, capacity, numberOfStages, hasBackline, backlineDetails}: VenueProps) {
    const backlineStyles = !hasBackline? "text-yellow-500" : "";
    return (
        <article className="bg-slate-300 text-slate-900 dark:bg-blue-950 mb-6 dark:text-slate-300 hover:bg-slate-400 dark:hover:bg-blue-800 rounded-lg p-6" key={id}>
            <Link className="hover:text-purple-700" href={`/venues/${id}`}><h1 className="text-xl font-semibold">{name}</h1></Link>
            <h2 className="font-thin font-sans">{`${city}, ${state.name}`}</h2>
            <h2>{country.name}</h2>
            <h2>Capacity: {capacity? capacity : "No capacity info listed"}</h2>
            <h2>Number of stages: {numberOfStages}</h2>
            <h2 className={backlineStyles}>Backline info: {hasBackline? backlineDetails : "No backline info listed"}</h2>
        </article>
    )
}