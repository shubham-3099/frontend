import { Crown } from "lucide-react";
import Plan from "./Plan";

export default function UserPremium() {
    return (
        <div className="flex flex-col gap-3 mx-8 my-8 mb-20 text-sm">
            <div>
                <Crown size={52}/>
            </div>
            <p className="font-bold text-xl">Choose Your Plan</p>
            <p className="mb-4 w-[250px]">Unlock premium features and enjoy a better experience.</p>
            <div className="flex flex-col gap-2">
                <Plan offer="Remove Ads" description="Browse, watch and explore without any interruptions" beforePrice="399" afterPrice="99" period="/month" saving="You save 300 (75% OFF)" />
                <Plan offer="Remove Ads" description="Browse, watch and explore without any interruptions" beforePrice="4788" afterPrice="999" period="/year" saving="You save 3,789 (79% OFF)" />
            </div>
            <p className="font-bold underline mt-4">Advertise your brand on our app →</p>
        </div>
    )
}