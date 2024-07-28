import Nav from "../nav/Nav";
import Link from "next/link";
import Image from "next/image"
import GuitarIcon from '@/app/icon.jpg'
import React from "react";
import ToggleButtton from "../ToggleButton";
import HamburgerButton from "../HamburgerButton";
import UserAvatar from "../UserAvatar";
import { SignOutButton } from "../auth/SignOutButton";
import { auth } from "@/auth";


export default async function Header() {
    const session = await auth()

    return (
        <header className="">
            <div className="bg-slate-100 dark:bg-gray-800 relative w-full z-20 top-0 start-0 border-b border-gray-300 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    {/* Logo / Banner */}
                    <Link href="/" className="flex items-center space-x-4 rtl:space-x-reverse">
                        <Image src={GuitarIcon} height={80} width={80} alt="guitar-icon" className="rounded-lg hidden md:block"/>
                        <span className="text-slate-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            GigManager
                        </span>
                    </Link>

                    {/* Right Side */}
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {/* SignUp/ Log out */}
                        {!session &&
                            <Link href={'/accounts/signin'}>
                                <button 
                                    type="button" 
                                    className="flex flex-row text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mt-2 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:justify-items-start sm-mt-3"
                                    >
                                        Log in
                                    </button>
                            </Link>
                        }

                        {/* Dark Mode Toggle */}
                        <ToggleButtton />

                        {/* User Avatar */}
                        <UserAvatar />
                        
                    </div>
                
                    {/* Navigation */}
                    <Nav />
                </div>
                
                {/* Hamburger Icon? */}
                <HamburgerButton />
            </div>
        </header>
    )
}