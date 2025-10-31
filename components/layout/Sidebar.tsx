export default function Sidebar() {
    return (
        <div className="flex flex-1 flex-col bg-rose-100 w-max min-h-screen">
            <div className="text-2xl text-rose-300 p-3">LinkHub</div>
            <div className="flex flex-col gap-2 p-2">
                <div className="rounded-md transition-all duration-200 cursor-pointer w-full text-sm p-4 text-neutral-400 hover:bg-rose-400 hover:text-gray-700">All Links</div>
                <div className="rounded-md transition-all duration-200 cursor-pointer w-full text-sm p-4 text-neutral-400 hover:bg-rose-400 hover:text-gray-700">Analytics</div>
                <div className="rounded-md transition-all duration-200 cursor-pointer w-full text-sm p-4 text-neutral-400 hover:bg-rose-400 hover:text-gray-700">Theme</div>
                <div className="rounded-md transition-all duration-200 cursor-pointer w-full text-sm p-4 text-neutral-400 hover:bg-rose-400 hover:text-gray-700">Settings</div>
            </div>
        </div>
    )
}