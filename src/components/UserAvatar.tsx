import Image from "next/image"
import { auth } from "../auth"
import placeholderAvatar from "@/assets/user_avatar2.png"

export default async function UserAvatar() {
  const session = await auth()

  if (!session?.user) return null

  // check user avatar image
  let avatar = session.user?.image? session.user?.image : placeholderAvatar;

  return (
    <div className="flex">      
      <Image 
        src={avatar}
        alt="User Avatar" 
        width={60} 
        height={60} 
        className="hidden md:block rounded-full items-end mr-4"
      />
      
    </div>
  )
}