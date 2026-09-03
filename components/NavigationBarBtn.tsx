import { IconType } from "react-icons";
import Link from "next/link";

type NavigationBarBtnProps = {
    icon: IconType;
    text: string;
    link: string;
}

export default function NavigationBarBtn({text, icon:Icon, link}: NavigationBarBtnProps) {
    return (
        <Link href={link}> 
            <div className="flex flex-col items-center gap-1">
                <Icon size={20}/>
                <p className="text-sm font-bold">{text}</p>
            </div>
        </Link>
    )
}