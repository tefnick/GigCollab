import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { getLoggedInArtistId } from "@/lib/dbActions"
import Link from "next/link"

export async function Nav() {
    const artistId = await getLoggedInArtistId()
    return (
        <div className="flex flex-row gap-2 justify-end p-2">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Gigs</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:grid-cols-1 w-[300px] ">
                                <li>
                                    <Link
                                        href={`/gigs/my-upcoming-gigs/${artistId}`}
                                        className="text-sm leading-none text-muted-foreground"
                                    >
                                        My Upcoming Gigs
                                    </Link>
                                </li> 
                                <li>
                                    <Link
                                        href="/gigs/management"
                                        className="text-sm leading-none text-muted-foreground"
                                    >
                                        Gig Management
                                    </Link>
                                </li>    
                                <li>
                                    <Link
                                        href="/gigs/open-gigs"
                                        className="text-sm leading-none text-muted-foreground"
                                    >
                                        Open Gigs
                                    </Link>
                                </li>      
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/artists" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Artists
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/venues" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Venues
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}