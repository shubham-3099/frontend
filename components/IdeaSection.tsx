import Image from "next/image";
import IdeaFeature from "./IdeaFeature";
import { ChevronRight, MapPin, CircleDollarSign, Image as ImageIcon } from "lucide-react";

export default function IdeaSection() {
    return (
        <div className="flex flex-col md:flex-row px-5 md:px-30 py-15">
            <div className="flex flex-col gap-6 pr-10 justify-center">
                <h1 className="text-4xl md:text-5xl font-bold md:w-[600px]">The dish comes first, not the restaurant</h1>
                <p className="text-lg md:w-[550px]">You know what you want to eat. See the exact plate, the real price, and a clear photo before you ever leave the house.</p>
                <div className="flex flex-col gap-2">
                    <IdeaFeature icon={ImageIcon} text="High-quality photos of every dish" />
                    <IdeaFeature icon={CircleDollarSign} text="Transparent pricing with no surprises" />
                    <IdeaFeature icon={MapPin} text="Location-based results near you" />
                </div>
                <div className="flex gap-4 pb-5">
                    <button className="border px-4 py-2"> Search </button>
                    <button className="flex items-center"> Explore <ChevronRight className="w-5 h-4 mt-1" /> </button>
                </div>
            </div>
            <Image src="/food/food-5.png" alt="Feature Image" width={630} height={100} className="rounded-xl" />
        </div>
    )
}