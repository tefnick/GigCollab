import { Artist as ArtistModel } from "@prisma/client";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export default function ArtistCard({name, id, bio, genre, url}: ArtistModel) {
    let urlStyles = url? "text-blue-500" : "text-yellow-500";
    return (
        <Card className="w-[350px] hover:bg-slate-200" key={id}>
            <CardHeader>
                <Link className="hover:text-blue-700" href={`/artists/${id}`}>
                    <CardTitle>{name}</CardTitle>
                </Link>
                <CardDescription>
                    <p className="font-semibold">{genre.length > 1 ? `Genres: ${genre?.join(", ")}` : `Genre: ${genre}`}</p>
                    
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <p>{bio}</p>
                <p>link: <a href={url? url : "#"} className={urlStyles}>{url? url : "No URL listed"}</a></p>
            </CardContent>
        </Card>
    )
}