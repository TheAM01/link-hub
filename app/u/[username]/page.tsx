import LinkButton from "@/components/ui/LinkButton";
import connectToDB from "@/lib/mongoose";
import { themes } from "@/lib/themes";
import Link from "@/models/Link";
import User from "@/models/User";

interface PageProps {
    params: Promise<{
        username: string;
    }>
}

interface LinkType {
    title: string;
    url: string;
    clicks: number;
}


export default async function UserPage({ params }: PageProps) {

    const { username } = await params;

    if (!username) {
        return (
            <div className="flex flex-1 justify-center items-center text-red-400">
                No user found with username: {username}!
            </div>
        )
    }

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
                {links.map((link: LinkType) => (
                    <LinkButton link={link} theme={theme} key={link.url} username={user?.username} />
                ))}
            </div>

        </div>
    )
    
}