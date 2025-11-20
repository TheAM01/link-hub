import { ThemeStyles } from "@/types/theme";

export const themes: Record<string, ThemeStyles> = {
    "minimalist": {
        anchorTagClasses: "flex items-center justify-center p-4 bg-white shadow-sm hover:shadow-md duration-200 rounded-lg hover:rounded-2xl border border-blue-400 transition-all",
        fontFace: 'font-montserrat',
        background: "bg-blue-50",
        fontStyle: "text-sm",
        showExternalLinkIcon: false,
        linksParentClasses: "w-2/3 flex flex-col gap-4"
    },
    "neobrutalism": {
        anchorTagClasses: "flex items-center justify-between p-4 bg-white text-2xl border-4 border-black shadow-[6px_6px_0_0_#000] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:bg-neutral-100 duration-150 transition-all",
        fontFace: 'font-bebas',
        background: "bg-rose-300",
        fontStyle: "font-bold",
        showExternalLinkIcon: true,
        linksParentClasses: "w-2/3 flex flex-col gap-4"
    },
    "default": {
        anchorTagClasses: "flex items-center justify-center text-xl p-4 border-4 border-white hover:bg-white font-medium text-white hover:text-black duration-150 transition-all",
        fontFace: 'font-montserrat',
        background: "bg-emerald-400",
        fontStyle: "font-bold ",
        showExternalLinkIcon: false,
        linksParentClasses: "w-2/5 flex flex-col gap-4 bg-white/20 p-10 rounded-lg"
    },
    "cyberpunk": {
        anchorTagClasses:
            "flex items-center justify-between p-4 bg-black text-neon-pink border hover:border-neon-blue hover:shadow-[0_0_10px_#0ff] hover:shadow-[0_0_20px_#f0f] duration-150 transition-all rounded-lg",
        fontFace: "font-mono",
        background: "bg-gradient-to-br from-black via-purple-900 to-black",
        fontStyle: "font-bold tracking-wide text-neon-pink",
        showExternalLinkIcon: true,
        linksParentClasses: "w-2/3 flex flex-col gap-4"
    },
    "glass": {
        anchorTagClasses:
            "flex items-center justify-center p-4 backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/40 rounded-xl shadow-md duration-150 transition-all",
        fontFace: "font-montserrat",
        background: "bg-gradient-to-br from-slate-800 to-slate-900",
        fontStyle: "text-white text-lg",
        showExternalLinkIcon: false,
        linksParentClasses: "w-2/5 flex flex-col gap-4 backdrop-blur-xl bg-white/10 p-10 rounded-lg"
    },
    "pastelDream": {
        anchorTagClasses:
            "flex items-center justify-center p-4 bg-pink-100 hover:bg-pink-200 border border-pink-300 rounded-2xl shadow-sm duration-150 transition-all",
        fontFace: "font-sans",
        background: "bg-gradient-to-br from-pink-50 to-blue-50",
        fontStyle: "text-lg font-medium text-pink-700",
        showExternalLinkIcon: false,
        linksParentClasses: "w-2/3 flex flex-col gap-4"
    },
}