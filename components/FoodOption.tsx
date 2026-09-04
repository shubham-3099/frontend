type FoodOptionProps = {
    text: string;
    image: string;
}

export default function FoodOption({text, image}: FoodOptionProps) {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg w-[70px] h-[70px] bg-green-200 gap-1">
            <img src={image} alt="food option" className="w-[30px] h-[30px] rounded-full" />
            <p className="text-[12px]">{text}</p>
        </div>
    )
}