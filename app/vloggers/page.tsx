import Vlogger from "@/components/Vlogger";
import { Search } from "lucide-react";

export default function Vloggers() {
    return (
        <div className="flex flex-col gap-5 mx-8 mt-10 pb-20">
            <p className="font-bold text-xl">Follow Food Vloggers</p>
            <div className="flex bg-green-200 p-3 rounded-lg items-center ">
                <Search size={18} />
                <input className="pl-2 w-full text-sm" type="text" placeholder="Search dishes, cuisines, vloggers..." />
            </div>
            <img src="/ad-1.png" alt="ad" className="w-full"/>
            <div className="flex flex-col gap-5">
                <Vlogger name="Ajay Khanna" bio="Premium food explorer" image="/vlogger.png" />
                <Vlogger name="Ajay Khanna" bio="Premium food explorer" image="/vlogger-2.png" />
                <Vlogger name="Ajay Khanna" bio="Premium food explorer" image="/vlogger.png" />
                <Vlogger name="Ajay Khanna" bio="Premium food explorer" image="/vlogger-2.png" />
            </div>
        </div>
    )
}