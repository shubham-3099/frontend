import NavigationBarBtn from "./NavigationBarBtn";
import { FiHome } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";

export default function NavigationBar() {
    return (
        <div className="flex justify-evenly items-center h-18 bg-green-200 bottom-0 fixed w-full">
            <NavigationBarBtn icon={FiHome} text="Home" link="/home" />
            <NavigationBarBtn icon={IoVideocamOutline} text="Vloggers" link="/vloggers" />
            <NavigationBarBtn icon={LuCrown} text="Premium" link="/premium" />
            <NavigationBarBtn icon={FaRegUser} text="Profile" link="/profile" />
        </div>
    )
}