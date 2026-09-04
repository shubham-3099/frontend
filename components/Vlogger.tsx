type VloggerProps = {
    name: string;
    bio: string;
    image: string;
};

export default function Vlogger({name, bio, image}: VloggerProps) {
    return (
        <div className="flex text-[12px] items-center">
            <img src={image} alt="Vlogger"/>
            <div className="flex flex-col w-full pl-3">
                <p className="font-bold">{name}</p>
                <p>{bio}</p>     
            </div>
            <button className="bg-yellow-200 h-[25px] px-2 rounded-lg">Remove</button>
        </div>
    )
}