"use client";

import { addLink } from "@/actions/addLink";
import { useState, FormEvent, use } from "react";

export default function DashboardClient() {

    const [links, setLinks] = useState<{ title: string; url: string; }[]>([])

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const title = (form.elements.namedItem("title") as HTMLInputElement).value;
        const url = (form.elements.namedItem("url") as HTMLInputElement).value;

        const result = await addLink({ title, url });

        if (result.success) {
            alert(`Link added: ${result?.link?.title}!`);
            setLinks([...links, { title, url }]);
            form.reset();
        } else {
            alert("There was an error");
        }
    }


    return (
        <div className="flex flex-col flex-1 bg-stone-900 h-screen items-center justify-center gap-6">

            <form onSubmit={handleSubmit} className="gap-4 p-4 flex flex-col bg-stone-800 border border-stone-700">

                <div className="text-2xl text-white">Add New Link</div>

                <input type="text" name="title" id="" className="bg-stone-700 border border-stone-600 p-2 placeholder:italic text-white outline-0" placeholder="Link Title" required/>
                <input type="url" name="url" id="" className="bg-stone-700 border border-stone-600 p-2 placeholder:italic text-white outline-0" placeholder="Link URL"  required/>

                <button className="p-2 bg-stone-600 border border-stone-500"  type="submit">
                    Submit
                </button>
            </form>


            <div className="bg-stone-800 border border-stone-800 flex flex-wrap p-4 gap-4">
                {
                    links.map((link, idx) => (
                        <a className="bg-stone-700 border border-stone-600 p-2 flex flex-col gap-2 duration-200 hover:shadow-sm shadow-white" href={link.url}>
                            
                            <span className="text-sm text-white">Link Title: <span className="text-rose-500 ">{link.title}</span></span>
                            <span className="text-sm text-white">Link URL: <span className="text-rose-500 underline">{link.url}</span></span>
                        </a>
                    ))
                }
            </div>

        </div>
    )
}