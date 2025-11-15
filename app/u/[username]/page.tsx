import connectToDB from "@/lib/mongoose";
import { themes } from "@/lib/themes";
import Link from "@/models/Link";
import User from "@/models/User";
import { ExternalLink } from "lucide-react";

interface PageProps {
    params: Promise<{
        username: string;
    }>
}


export default async function UserPage({ params }: PageProps) {

    const { username } = await params;

    await connectToDB();
    const user = await User.findOne({ username }).lean();
    const theme = themes[user?.themePrefs || "default"] || themes.default;
    const links = await Link.find({ user: username })
            .sort({ order: 1, createdAt: 1})
            .lean()
            .then(links => 
                links.map(link => ({
                    title: link.title,
                    url: link.url,
                    clicks: link.clicks,
                }))
            );
    
    return (
        <div className={`${theme.background} min-h-screen flex flex-col items-center p-10`}>
            <div className={`${theme.fontFace} ${theme.fontStyle} text-4xl`}>
                {user?.fullName}
            </div>

            <div className={theme.linksParentClasses}>
                {links.map((link) => (
                    <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                            theme
                            ? theme.anchorTagClasses
                            : "bg-white rounded-lg shadow-sm border-gray-200 border p-4"
                        }
                    >
                        <span className="">
                            {link.title}
                        </span>
                        
                        {theme.showExternalLinkIcon && <ExternalLink className="w-4 h-4 text-gray-400"/>}
                    </a>
                ))}
            </div>

        </div>
    )
    
}