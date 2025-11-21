"use client";

import { useState } from "react";
import { incrementClick } from "@/actions/incrementClick";

interface SafeLinkType {
    title: string;
    url: string;
    clicks?: number;
    order: number;
    createdAt: string;
    user: string;
    _id: string;
}

interface AnalyticsPageProps {
    username: string;
    initialLinks: SafeLinkType[];
}

export default function AnalyticsPage({ username, initialLinks }: AnalyticsPageProps) {
    const [links, setLinks] = useState<SafeLinkType[]>(initialLinks);

    async function handleClick(linkUrl: string) {
        await incrementClick(username, linkUrl);

        setLinks((prev) => 
            prev.map(link =>
                link.url === linkUrl
                    ? { ...link, clicks: (link.clicks ?? 0 ) + 1}
                    : link
            )
        );
    }

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Analytics</h1>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">Link Title</th>
                        <th className="p-2 border">URL</th>
                        <th className="p-2 border">Clicks</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link) => (
                        <tr key={link.url} className="hover:bg-gray-50">
                            <td className="p-2 border">{link.title}</td>
                            <td className="p-2 border wrap-break-words">{link.url}</td>
                            <td className="p-2 border text-center">{link.clicks || 0}</td>
                            <td className="p-2 border text-center">
                                <button
                                    onClick={() => handleClick(link.url)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    Open & Track
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
