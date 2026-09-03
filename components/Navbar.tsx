'use client'
import Image from "next/image";
import { Menu } from "lucide-react";
import {useRouter} from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="flex justify-between md:px-12 px-5 items-center h-18">
            <Image src="/logo.png" alt="Logo of the company" width={100} height={70} />
            <button onClick={() => router.push("/home")} className="hidden md:flex bg-black text-white py-2 px-5">Sign up</button>
            <Menu className="md:hidden"/>
        </nav>
    )
}