import Image from "next/image"
import { auth } from "../auth"
import { SignOutButton } from "./auth/SignOutButton"
import placeholderAvatar from "@/assets/user_avatar2.png"

export default async function UserAvatar() {
  const session = await auth()

  if (!session?.user) return null

  // check user avatar image
  let avatar = session.user?.image? session.user?.image : placeholderAvatar;

  return (
    <div className="flex gap-4">
      <p className="hidden md:block justify-end py-4">Welcome {session.user?.name}!</p>
      <SignOutButton />
      
      <Image 
        src={avatar}
        alt="User Avatar" 
        width={60} 
        height={60} 
        className="rounded-full items-end"
      />
      
    </div>
  )
}