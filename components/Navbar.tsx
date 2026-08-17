import Image from "next/image";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="flex justify-between px-12 items-center h-18">
            <Image src="/logo.png" alt="Logo of the company" width={100} height={70} />
            <ul className="hidden md:flex gap-8">
                <li><a href="/">Home</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/about">About <ChevronDown className="inline h-5" /></a></li>
            </ul>
            <button className="hidden md:flex bg-black text-white py-2 px-5">Sign up</button>
            <Menu className="md:hidden"/>
        </nav>
    )
}