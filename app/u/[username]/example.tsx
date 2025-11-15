import connectToDB from "@/lib/mongoose";
import Link from "@/models/Link";
import LinkList from "./LinkList";

interface PageProps {
    params: Promise<{
        username: string;
    }>
}

export default async function UserPage({ params }: PageProps) {

    const {username} = await params;


    await connectToDB();

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

    return <LinkList username={username} links={links}/>
    
}