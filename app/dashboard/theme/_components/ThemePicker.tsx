"use client";

import { saveTheme } from "@/actions/saveTheme";
import { themes } from "@/lib/themes";
import { useState } from "react";

interface ThemePickerProps {
    username: string;
    currentTheme: string;
}

export default function ThemePicker({ username, currentTheme}: ThemePickerProps) {
    const [selected, setSelected] = useState<string>(currentTheme);

    async function selectTheme(themeName: string) {
        setSelected(themeName);
        await saveTheme(username, themeName);
    }

    return (
        <div className="grid gird-cols-1 gap-6">
            {Object.entries(themes).map(([key, theme]) => (
                <div
                    key={key}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all
                        ${selected === key ? "border-blue-500" : "border-neutral-600"}
                    `}
                    onClick={() => selectTheme(key)}
                >
                    <div className={`h-24 rounded-md mb-4 shadow ${theme.background || "bg-white"}`}>

                    </div>
                    <div className="font-bold text-lg capitalize">{key}</div>
                    <div className="text-sm opacity-70">{theme.fontFace}</div>
                </div>
            ))

            }
        </div>
    )
}