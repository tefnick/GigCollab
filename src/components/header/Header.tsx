import { auth, signIn, signOut } from "@/auth"
import { Nav } from "../nav/Nav"
import { Button } from "../ui/button"
import UserAvatar from "../UserAvatar"

type HeaderProps = {
    heading: string
    text?: string
    children?: React.ReactNode
}

export async function Header({
    heading,
    text,
    children,
}: HeaderProps) {
    const session = await auth()
    return (
        <>
            <div className="flex items-center justify-between px-2">
                <div className="grid gap-1">
                    <h1 className="font-heading text-2xl md:text-3xl px-2">{heading}</h1>
                    {text && <p className="text-lg text-muted-foreground px-2">{text}</p>}
                </div>
                {children}
                <div className="flex items-center justify-end">
                    {session?.user && (
                        <>
                        <Nav />
                        <UserAvatar />
                        </>
                    )}
                    
                    {!session?.user? (
                        <form action={async () => {
                            "use server"
                            await signIn();
                        }}>
                            <Button type="submit">Sign In</Button>
                        </form>
                    ) : (
                        <form action={async () => {
                            "use server"
                            await signOut();
                        }}>
                            <Button type="submit">Sign Out</Button>
                        </form>
                    )}
                </div>
            </div>
        </>
    )
}