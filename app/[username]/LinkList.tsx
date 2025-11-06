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

interface IndividualUserObject {
    fullName: string;
    themePrefs: string;
    profilePicUrl: string;
}

const allUsers: Record<string, IndividualUserObject> = {
    "johndoe": {
        fullName: "Johnathan K. Doe",
        themePrefs: "neobrutalism",
        profilePicUrl: "https://placehold.co/400x400/171717/fffafc"
    }
}

interface ThemeStyles {
    anchorTagClasses: string;
    fontFace: string;
}

const themes: Record<string, ThemeStyles> = {
    "neobrutalism": {
        anchorTagClasses: "flex items-center justify-between p-4 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:bg-neutral-100 duration-150 transition-all",
        fontFace: 'bebas',
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

    return (
        <div className={`min-h-screen flex flex-col items-center justify-start p-8 gap-4 ${themes[allUsers[username].themePrefs].fontFace}`}>
            <img src={allUsers[username].profilePicUrl} alt="profile pic" className=" flex w-20 h-20 rounded-full"/>
            <h1>{allUsers[username].fullName}</h1>
            <div className="text-sm italic text-neutral-400">@{username}</div>
            <div className="w-2/3 flex flex-col gap-4">
                {links.map((link) => (
                    <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                            themes[allUsers[username].themePrefs]
                            ? themes[allUsers[username].themePrefs].anchorTagClasses
                            : "bg-white rounded-lg shadow-sm border-gray-200 border p-4"
                        }
                    >
                        <span className="text-gray-900 font-bold text-2xl">
                            {link.title}
                            </span>
                        {typeof link.clicks === "number" && (
                            <span className="text-sm text-gray-900">{link.clicks} clicks</span>
                        )}
                        <ExternalLink className="w-4 h-4 text-gray-400"/>
                    </a>
                ))}
            </div>
        </div>
    )
}