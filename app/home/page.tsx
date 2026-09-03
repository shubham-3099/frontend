import Dish from "@/components/Dish";
import { MapPin, Search } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col gap-5 mx-8">
            <div className="flex gap-2 h-10 items-center mt-8">
                <MapPin size={20} />
                <p className="font-bold text-sm">72 Outer Circle, New York</p>
            </div>
            <div className="flex bg-green-200 p-3 rounded-lg items-center mt-[-15px]">
                <Search size={18} />
                <input className="pl-2 w-full text-sm" type="text" placeholder="Search dishes, cuisines, vloggers..." />
            </div>
            <img src="/ad-1.png" alt="advertisement" className="w-full"/>
            <p className="font-bold">Recommended for you</p>
            <div className="flex flex-col gap-3">
                <Dish name="Salmon Poke Bowl" restaurant="Healthy Greens Cafe" price={220} distance={0.5} image="/food/food-1.png" review="10 Must try!" />
                <Dish name="Vegetable Stir Fry" restaurant="Tasty Bites" price={180} distance={1.2} image="/food/food-2.png" review="4 Must try!" />
                <Dish name="Chicken Caesar Salad" restaurant="Fresh Eats" price={200} distance={0.8} image="/food/food-3.png" review="8 Must try!" />
            </div>
        </div>
    )
}