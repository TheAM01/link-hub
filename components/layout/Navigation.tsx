export default function Navigation() {
    return (
        <div className="flex flex-1 w-full justify-around border-b border-neutral-200 items-center p-1 sticky top-0">
            <div className="text-2xl text-rose-300 p-3">LinkHub</div>
            <div className="flex gap-2">
                <div className="p-2 text-sm text-stone-900 rounded-md hover:rounded-full transition-all bg-neutral-100 hover:shadow-sm duration-200 cursor-pointer">Login</div>
                <div className="p-2 text-sm text-neutral-50 rounded-md hover:rounded-full transition-all bg-rose-400 hover:shadow-sm duration-200 cursor-pointer">Sign up</div>
            </div>
        </div>
    )
}