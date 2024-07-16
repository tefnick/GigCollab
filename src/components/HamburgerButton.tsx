'use client';

import { useState } from "react";
import HamburgerNav from "./HamburgerNav";

export default function HamburgerButton() {
    const styles = "menu menu-sm dropdown-content bg-base-100 rounded-box z-[4] mt-3 w-52 p-2 shadow"
    const [isActive, setIsActive] = useState(false);
    let activeHambugerMenuContent = (
        <div className="md:hidden">
            <HamburgerNav />
        </div>
        
    );

    function handleClick() {
        setIsActive(() =>!isActive);
    }

    return (
        <>
        <button 
            className="md:hidden mt-4 ml-6"
            onClick={handleClick}    
        >
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
        </button>
        <div className="navbar bg-base-100">
            <div className="navbar-end">
                <div className="dropdown">
                    {isActive && activeHambugerMenuContent}
                </div>
            </div>
        </div>
        </>
    )
    
}