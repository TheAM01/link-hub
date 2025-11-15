// Topbar.tsx
"use client";

import { Bell, ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser } from "@/actions/getUser";

export function Topbar() {

    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsername() {
            try {
                const u = await getUser();
                setUsername(u?.username ?? null);
            } catch (e) {
                console.log(e);
            }
        }
        void fetchUsername()
    }, [])

    return (
        <header className="p-5 border-b border-stone-300 bg-stone-900 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="placeholder:text-gray-300 w-full pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                {username && 
                    <Link href={`/u/${username}`} className="flex items-center gap-1 rounded-sm px-2 py-1 bg-rose-500 text-sm text-white hover:bg-rose-700 hover:rounded-lg duration-150">
                        Visit Page
                        <ExternalLink size={14}/>
                    </Link>
                }
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                    <Bell className="w-5 h-5 text-gray-200" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                    U
                </div>
            </div>
        </header>
    );
}
