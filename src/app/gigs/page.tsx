import { title } from "@/src/components/primitives";
import {prisma} from "@/src/lib/prisma";

export default async function GigsPage() {
    const artists = await prisma.artist.findMany()
  return (
    <div>
      <h1 className={title()}>Gigs</h1>
        <ul>
            {artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
            ))}
        </ul>
    </div>
  );
}
