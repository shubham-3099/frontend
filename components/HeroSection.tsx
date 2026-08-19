export default function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row px-5 md:px-30 items-center">
            <div className="flex flex-col justify-between h-[270px] md:h-[250px] my-10 md:w-[1200px]">
                <h1 className="text-4xl md:text-5xl font-bold pr-2 md:w-[450px]">Find the dish worth leaving home for</h1>
                <p className="md:w-[550px] md:text-lg">Stop searching for restaurants. Start searching for the meal. See the exact plate, the price, and the proof before you go.</p>
                <div className="flex gap-4">
                    <button className="bg-black text-white px-4 py-2">Search</button>
                    <button className="border px-4 py-2">Explore</button>
                </div>
            </div>
            <div className="h-[600px] w-full"></div>
        </div>
    )
}