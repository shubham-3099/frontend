import { Ban } from 'lucide-react';

type PlanProps = {
    offer: string;
    description: string;
    beforePrice: string;
    afterPrice: string;
    period: string;
    saving: string;
};

export default function Plan({offer, description, beforePrice, afterPrice, period, saving}: PlanProps) {
    return (
        <div className="flex flex-col bg-yellow-200 py-5 px-4 rounded-md gap-3">
            <div className="flex items-center gap-2">
                <Ban size={42} />
                <div className="flex flex-col">
                    <p className="font-bold">{offer}</p>
                    <p className="text-[12px]">{description}</p>
                </div>
            </div>
            <div className="flex text-[12px] items-center">
                <p>{beforePrice}</p>
                <p className="font-bold text-[24px] ml-2">{afterPrice}</p>
                <p className="text-[12px]">{period}</p>
                <p className="bg-green-100 h-[16px] w-[140px] items-center justify-center flex rounded-xl ml-4 text-[11px]">{saving}</p>
            </div>
            <button className="bg-green-200 py-2 px-4 rounded-md text-sm font-bold w-[140px]">Upgrade Now</button>
        </div>
    )
}