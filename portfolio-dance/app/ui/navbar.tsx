"use client"; // Ensure this is at the top

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { tajawal } from "@/app/ui/fonts";

export const Navbar = () => {
    const pathname = usePathname(); // Get current route

    return (
        <nav className="bg-black-800 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className={`${tajawal.className} antialiased bg-black text-5xl font-bold`}>
                    Anna Deganello
                </Link>
                <div className="hidden md:flex">
                    <Link 
                        href='/works' 
                        className={`mx-2 px-10 py-1 rounded transition ${
                            pathname === "/works" ? "underline underline-offset-3 decoration-white hover:bg-white hover:text-black" : "hover:bg-white hover:text-black"
                        }`}
                    >
                        Works
                    </Link>
                    <Link 
                        href='/contact' 
                        className={`mx-2 px-10 py-1 rounded transition ${
                            pathname === "/contact" ? "underline underline-offset-3 decoration-white hover:bg-white hover:text-black" : "hover:bg-white hover:text-black"
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};
