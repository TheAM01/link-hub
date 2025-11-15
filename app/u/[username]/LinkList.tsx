"use client";

import { ExternalLink } from "lucide-react";
import { themes } from "@/lib/themes";

interface LinkType {
    title: string;
    url: string;
    clicks?: number;
}

interface LinkListProps {
    username: string;
    links: LinkType[]
}

interface IndividualUserObject {
    fullName: string;
    themePrefs: string;
    profilePicUrl: string;
}

const allUsers: Record<string, IndividualUserObject> = {
    "johndoe": {
        fullName: "Johnathan K. Doe",
        themePrefs: "default",
        profilePicUrl: "https://placehold.co/400x400/171717/fffafc"
    },
    "yusuf": {
        fullName: "Yusuf",
        themePrefs: "minimalist",
        profilePicUrl: "https://placehold.co/400x400/171717/fffafc"
    }
}

export default function LinkList({ username, links}: LinkListProps) {
    if (!links.length) {
        return (
            <div className="">
                No Links found!
            </div>
        )
    }

    const selectedTheme = themes[allUsers[username].themePrefs];


    return (
        <div className={`min-h-screen flex flex-col items-center justify-start p-8 gap-4 ${selectedTheme.fontFace} ${selectedTheme.background}`}>
            <img src={allUsers[username].profilePicUrl} alt="profile pic" className=" flex w-40 h-40 rounded-full "/>
            <div className="flex-col gap-2">
                <h1>{allUsers[username].fullName}</h1>
                <div className="text-sm italic text-neutral-400">@{username}</div>
            </div>
            <div className={selectedTheme.linksParentClasses}>
                {links.map((link) => (
                    <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                            selectedTheme
                            ? selectedTheme.anchorTagClasses
                            : "bg-white rounded-lg shadow-sm border-gray-200 border p-4"
                        }
                    >
                        <span className="">
                            {link.title}
                        </span>
                        
                        {selectedTheme.showExternalLinkIcon && <ExternalLink className="w-4 h-4 text-gray-400"/>}
                    </a>
                ))}
            </div>

            <div className="text-sm text-black bg-white rounded-full px-3 py-2 font-semibold mt-30">Powered by LinkHub</div>
        </div>
    )
}