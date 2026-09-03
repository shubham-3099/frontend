
type DishProps = {
    name: string;
    restaurant: string;
    price: number;
    distance: number;
    image: string;
    review: string;
}

export default function Dish({ name, restaurant, price, distance, image, review }: DishProps) {
    return (
        <div className="flex text-[12px] rounded-xl bg-yellow-200 pl-2 py-4">
            <img className="h-16 w-18 rounded-xl" src={image} alt={`image of ${name}`} />
            <div className="w-full flex flex-col px-2">
                <div className="flex justify-between">
                    <p className="font-bold text-[13px]">{name}</p>
                    <p className="bg-green-200 p-1 text-[10px] font-bold">{review}</p>
                </div>
                <p>{restaurant}</p>
                <div className="flex justify-between">
                    <p className="font-bold">{price}</p>
                    <p>{`${distance} km`}</p>
                </div>
            </div>
        </div>
    )
}