"use client";

import { ExternalLink } from "lucide-react";

interface LinkType {
    title: string;
    url: string;
    clicks?: number;
}

interface LinkListProps {
    username: string;
    links: LinkType[]
}

export default function LinkList({ username, links}: LinkListProps) {
    if (!links.length) {
        return (
            <div className="">
                No Links found!
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-8">
            <h1>{username}&apos;s links!</h1>
            <div className="flex flex-col gap-4">
                {links.map((link) => (
                    <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow-sm border-gray-200 border p-4"
                    >
                        <span className="font-medium text-gray-900">{link.title}</span>
                        {typeof link.clicks === "number" && (
                            <span className=" text-sm text-gray-900">{link.clicks} clicks</span>
                        )}
                        <ExternalLink className="w-4 h-4 text-gray-400"/>
                    </a>
                ))}
            </div>
        </div>
    )
}