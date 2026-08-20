import Image from "next/image";
import IdeaFeature from "./IdeaFeature";
import { ChevronRight, MapPin, CircleDollarSign, Image as ImageIcon } from "lucide-react";

export default function VloggerSection() {
    return (
        <div className="h-screen flex flex-col md:flex-row px-5 md:px-30 py-15">
            <Image src="/food/food-5.png" alt="Feature Image" width={630} height={100} />
            <div className="flex flex-col gap-6 pl-10 justify-center">
                <h1 className="text-4xl md:text-5xl font-bold md:w-[600px]">Watch the vloggers before you take a bite</h1>
                <p className="text-lg md:w-[550px]">We embed YouTube food-vlogger reviews directly on the dish page. See the taste test, the texture, and the honest reaction before you commit.</p>
                {/* <div className="flex flex-col gap-2">
                    <IdeaFeature icon={ImageIcon} text="High-quality photos of every dish" />
                    <IdeaFeature icon={CircleDollarSign} text="Transparent pricing with no surprises" />
                    <IdeaFeature icon={MapPin} text="Location-based results near you" />
                </div> */}
                <div className="flex gap-4 pb-5">
                    <button className="border px-4 py-2"> Search </button>
                    <button className="flex items-center"> Explore <ChevronRight className="w-5 h-4 mt-1" /> </button>
                </div>
            </div>
        </div>
    )
}