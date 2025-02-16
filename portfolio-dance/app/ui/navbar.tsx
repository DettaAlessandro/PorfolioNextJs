import Link from "next/link";
import { tajawal } from "@/app/ui/fonts";
 export const Navbar = () =>{
    return (
        <nav className="bg-black-800 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center">
           <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className={`${tajawal.className} antialiased bg-black text-5xl font-bold`}>
                Anna Deganello
            </Link>
            <div className="hidden md:flex">
                <Link href='/gallery' className="mx-2 hover:bg-white hover:text-black px-10 py-1 rounded">
                    Gallery
                </Link>
                <Link href='/contact' className="mx-2 hover:bg-white hover:text-black px-10 py-1 rounded">
                    Contact
                </Link>
            </div>
           </div>
        </nav>
    );
 };