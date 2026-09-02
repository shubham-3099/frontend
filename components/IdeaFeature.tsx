import {LucideIcon} from "lucide-react";

type IdeaFeatureProps = {
    icon: LucideIcon;
    text: string;
}

export default function IdeaFeature(props: IdeaFeatureProps) {
    return (
        <div className="flex items-center">
            <props.icon className="w-6 h-6" />
            <p className="pl-2 md:pl-4">{props.text}</p>
        </div>
    )
}