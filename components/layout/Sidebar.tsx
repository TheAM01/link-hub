// Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as LinkIcon, Palette, Settings, User } from "lucide-react";

export function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Manage Links", href: "/dashboard", icon: LinkIcon },
        { name: "Theme", href: "/dashboard/theme", icon: Palette },
        { name: "Settings", href: "/dashboard/settings", icon: Settings },
        { name: "User Data", href: "/dashboard/user-data", icon: User },
    ];

    return (
        <aside className="w-64 border-r bg-stone-900 backdrop-blur-sm flex flex-col">
            <div className="p-6 border-b border-stone-300">
                <h2 className="text-2xl font-semibold text-gray-200">Dashboard</h2>
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-50 text-blue-600 font-medium"
                                            : "text-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
