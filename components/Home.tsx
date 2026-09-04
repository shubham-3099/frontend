import Dish from "@/components/Dish";
import FoodOption from "./FoodOption";
import { Funnel } from "lucide-react";

export default function Home() {
    return (
        <>
            <p className="font-bold">Popular Categories</p>
            <div className="flex justify-evenly">
                <FoodOption text="Burgers" image="/food/food-1.png" />
                <FoodOption text="Noodles" image="/food/food-2.png" />
                <FoodOption text="Chicken" image="/food/food-3.png" />
                <FoodOption text="Pizza" image="/food/food-4.png" />
            </div>
            <p className="font-bold">Best places in your city</p>
            <div className="flex flex-col gap-3">
                <Dish name="Salmon Poke Bowl" restaurant="Healthy Greens Cafe" price={220} distance={0.5} image="/food/food-1.png" review="10 Must try!" />
                <Dish name="Vegetable Stir Fry" restaurant="Tasty Bites" price={180} distance={1.2} image="/food/food-2.png" review="4 Must try!" />
            </div>
            <img src="/ad-1.png" alt="ad" className="w-full"/>
            <div className="flex justify-between">
                <p className="font-bold">Other options to try</p>
                <Funnel />
            </div>
            <div className="flex flex-col gap-3">
                <Dish name="Salmon Poke Bowl" restaurant="Healthy Greens Cafe" price={220} distance={0.5} image="/food/food-1.png" review="10 Must try!" />
                <Dish name="Vegetable Stir Fry" restaurant="Tasty Bites" price={180} distance={1.2} image="/food/food-2.png" review="4 Must try!" />
            </div>
        </>
    )
}