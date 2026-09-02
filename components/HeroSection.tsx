import IdeaFeature from "./IdeaFeature";
import { ChevronRight, MapPin, Gem, Image as ImageIcon, MessagesSquare } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center lg:flex-row md:justify-center my-10 md:my-25 md:px-20 gap-10">
            <div className="flex flex-col gap-8 justify-center w-[340px] md:w-[600px] md:mr-40">
                <h1 className="text-4xl md:text-5xl font-bold">The dish comes first, not the restaurant</h1>
                <p className="text-lg">You know what you want to eat. See the exact plate, the real price, and a clear photo before you ever leave the house.</p>
                <div className="flex flex-col gap-4">
                    <IdeaFeature icon={ImageIcon} text="High-quality photos of every dish" />
                    <IdeaFeature icon={MessagesSquare} text="Trusted review system" />
                    <IdeaFeature icon={Gem} text="Transparent pricing with no surprises" />
                    <IdeaFeature icon={MapPin} text="Location-based results near you" />
                </div>
                <div className="flex gap-4 pb-5">
                    <button className="border px-4 py-2"> Search </button>
                    <button className="flex items-center"> Explore <ChevronRight className="w-5 h-4 mt-1" /> </button>
                </div>
            </div>
            <img src="/food/image-1.jpg" alt="" className="max-w-[340px] md:max-w-[700px] md:h-[600px]" />
        </div>
    )
}