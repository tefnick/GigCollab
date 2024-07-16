'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HamburgerNav() {
    const listItemStyles = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    const activeTabStyles = 'bg-slate-300 dark:bg-slate-500 rounded-md';
    const currentPath = usePathname();

    return (
        <nav className="md:flex md:flex-col md:justify-start md:items-start md:w-auto md:order-1 z-30 mt-6">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className={currentPath === '/' ? activeTabStyles : ''}>
                    <Link href="/" className={listItemStyles}>Home</Link>
                </li>
                <li className={currentPath === '/venues' ? activeTabStyles : ''}>
                    <Link href="/venues" className={listItemStyles}>Venues</Link>
                </li>
                <li className={currentPath === '/artists' ? activeTabStyles : ''}>
                    <Link href="/artists" className={listItemStyles}>Artists</Link>
                </li>
                <li className={currentPath === '/gigs' ? activeTabStyles : ''}>
                    <Link href="/gigs" className={listItemStyles}>Gigs</Link>
                </li>
            </ul>
        </nav>
    )
}