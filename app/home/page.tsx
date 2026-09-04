import { MapPin, Search } from "lucide-react";
import Home from "@/components/Home";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-5 mx-8 pb-30">
            <div className="flex gap-2 h-10 items-center mt-8">
                <MapPin size={20} />
                <p className="font-bold text-sm">72 Outer Circle, New York</p>
            </div>
            <div className="flex bg-green-200 p-3 rounded-lg items-center mt-[-15px]">
                <Search size={18} />
                <input className="pl-2 w-full text-sm" type="text" placeholder="Search dishes, cuisines, vloggers..." />
            </div>
            <Home />
        </div>
    )
}