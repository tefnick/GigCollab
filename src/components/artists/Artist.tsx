import { Artist as ArtistModel } from "@prisma/client";
import Link from "next/link";

export default function Artist({name, id, bio, genre, url}: ArtistModel) {
    let urlStyles = url? "text-blue-500" : "text-yellow-500";
    return (
        <article className="bg-slate-300 text-slate-900 dark:bg-blue-950 mb-6 dark:text-slate-300 hover:bg-slate-400 dark:hover:bg-blue-800 rounded-lg p-6" key={id}>
            <Link className="hover:text-purple-700" href={`/artists/${id}`}><h1 className="text-xl font-semibold">{name}</h1></Link>
            <h2 className="font-thin font-sans">{genre?.join(", ")}</h2>
            <p>{bio}</p>
            <a href={url? url : "#"} className={urlStyles}>{url? url : "No URL listed"}</a>
        </article>
    )
}