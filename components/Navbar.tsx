import Image from "next/image";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="flex justify-between md:px-12 px-5 items-center h-18">
            <Image src="/logo.png" alt="Logo of the company" width={100} height={70} />
            <button className="hidden md:flex bg-black text-white py-2 px-5">Sign up</button>
            <Menu className="md:hidden"/>
        </nav>
    )
}