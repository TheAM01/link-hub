"use client";

import { ExternalLink } from "lucide-react";
import { ThemeStyles } from "@/types/theme";
import { incrementClick } from "@/actions/incrementClick";


interface LinkType {
    title: string;
    url: string;
    clicks: number;
}


interface LinkButtonProps {
    link: LinkType,
    theme: ThemeStyles,
    username?: string;
    // onLinkClick: (link: LinkType) => void;
}

export default function LinkButton({ link, theme, username }: LinkButtonProps) {

    function handleClick(link: LinkType) {

        if (username) {
            incrementClick(username, link.url);
        }

        window.open(link.url, "_blank");
    }


    return (
        <button
            key={link.url}
            onClick={() => handleClick(link)}
            // href={link.url}
            // target="_blank"
            // rel="noopener noreferrer"
            className={
                theme
                    ? theme.anchorTagClasses
                    : "bg-white rounded-lg shadow-sm border-gray-200 border p-4"
            }
        >
            <span className="">
                {link.title}
            </span>

            {theme.showExternalLinkIcon && <ExternalLink className="w-4 h-4 text-gray-400" />}
        </button>
    )
}