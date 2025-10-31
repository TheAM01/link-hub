import { HomePageLink } from "@/types/homepage"

export default function HomePageLinkCards({ link }: { link: HomePageLink }) {
    return (
        <div className="p-4 rounded-lg">
            {link.emoji} {link.title} {link.url}
        </div>
    )
}