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
    }
}