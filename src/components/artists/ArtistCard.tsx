import { Artist as ArtistModel } from "@prisma/client";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export default function ArtistCard({ name, id, bio, genre, url }: ArtistModel) {
    let urlStyles = url ? "text-blue-500" : "text-yellow-500";
    return (
        <>
            <Link className="hover:text-blue-700" href={`/artists/${id}`}>
                <Card className="w-[350px] hover:bg-slate-200" key={id}>
                    <CardHeader>

                        <CardTitle>{name}</CardTitle>

                        <CardDescription>
                            <p className="font-semibold">{genre.length > 1 ? `Genres: ${genre?.join(", ").replace('/[]"','')}` : `Genre: ${genre.toString().replace(/[]/g,'')}`}</p>

                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <p>{bio}</p>
                        <p>link: <a href={url ? url : "#"} className={urlStyles}>{url ? url : "No URL listed"}</a></p>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}