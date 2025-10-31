export default function Footer() {
    return (
        <div className="flex flex-col bg-neutral-100 border-t border-neutral-200 p-5">
            <div className="flex justify-evenly">

                <div className="flex flex-col gap-2">
                    <div className="font-bold mb-2">Product</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Features</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Pricing</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Templates</div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="font-bold mb-2">Product</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Features</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Pricing</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Templates</div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="font-bold mb-2">Product</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Features</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Pricing</div>
                    <div className="text-sm text-neutral-500 hover:text-rose-400">Templates</div>
                </div>

            </div>
            <div className="flex justify-between p-7 mt-7 border-t border-neutral-200 w-5xl mx-auto text-neutral-500 text-sm">
                <div className="tex-xs">© 2025 LinkHub. All rights reserved.</div>
                <div className="flex gap-4">test</div>
            </div>
        </div>
    )
}