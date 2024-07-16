'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";

/**
 * Navigation component for the GigManager application.
 * Renders a navigation bar with links to different pages.
 */
const Nav = () => {

    const currentPath = usePathname();

    return (
            <nav> 
                {/* Navigation Links */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-100 dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                        <li className={currentPath === '/'? 'underline' : ''}>
                            <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                        </li>
                        <li className={currentPath === '/venues'? 'underline' : ''}>
                            <Link href="/venues" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Venues</Link>
                        </li>
                        <li className={currentPath === '/artists'? 'underline' : ''}>
                            <Link href="/artists" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Artists</Link>
                        </li>
                        <li className={currentPath === '/gigs'? 'underline' : ''}>
                            <Link href="/gigs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gigs</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav

