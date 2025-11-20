// DashboardClient.tsx
"use client";


import { useEffect, useState, FormEvent, useRef } from "react";
import { createLink, getLinksForUser, updateLink, deleteLink, ILinkInput } from "@/actions/links";
import { Edit, ExternalLink, LinkIcon, Plus, Trash } from "lucide-react";

interface Link {
    title: string;
    url: string;
}

export default function DashboardClient() {
    const [loading, setLoading] = useState<boolean>(true);
    const [links, setLinks] = useState<Link[]>([]);
    const [editingUrl, setEditingUrl] = useState<string | null>(null);

    const formRef = useRef<HTMLFormElement | null>(null);


    useEffect(() => {
        const fetchLinks = async () => {
            const data = await getLinksForUser();
            setLinks(data);
            setLoading(false);
        }
        void fetchLinks();
    }, [])

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const title = (form.elements.namedItem("title") as HTMLInputElement).value;
        const url = (form.elements.namedItem("url") as HTMLInputElement).value;

        if (editingUrl) {
            const result = await updateLink(editingUrl, { title, url });

            if (result.success) {
                setLinks(links.map(l => l.url === editingUrl ? { title, url} : l));
                setEditingUrl(null);
                form.reset();
            }
        } else {
            const result = await createLink({ title, url });

            if (result.success) {
                alert(`Link added: ${result?.link?.title}!`);
                setLinks([...links, { title, url }]);
                form.reset();
            } else {
                alert("There was an error");
            }
        }

        
    }

    const handleEdit = (link: Link) => {
        setEditingUrl(link.url);
        const form = document.querySelector<HTMLFormElement>("form");

        if (!form) return;

        (form.elements.namedItem("title") as HTMLInputElement).value = link.title;
        (form.elements.namedItem("url") as HTMLInputElement).value = link.url;
    }

    const handleDelete = async (url: string) => {
        await deleteLink(url);
        setLinks(links.filter(l => l.url !== url));
    }

    if (loading) return <div className="flex flex-1 justify-center items-center">Loading</div>

    return (
        <div className="flex-1 p-8 overflow-auto">
            <div className="max-w-6xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Links</h1>
                    <p className="text-gray-600">Add and organize your important links</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Plus className="w-5 h-5 text-gray-700" />
                        <h2 className="text-xl font-semibold text-gray-900">
                            {editingUrl ? "Edit Link" : "Add New Link"}
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                Link Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter link title"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                                Link URL
                            </label>
                            <input
                                type="url"
                                name="url"
                                id="url"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="https://example.com"
                                required
                            />
                        </div>

                        <button
                            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            type="submit"
                        >
                            { editingUrl ? "Update Link" : "Add Link"}
                        </button>
                    </form>
                </div>

                {links.length > 0 && (
                    <div className="">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Links</h2>
                        <div className="flex flex-col gap-4">
                            {links.map((link, idx) => (
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5" key={idx}>
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-semibold">{link.title}</h3>
                                        <div className="flex gap-3">
                                            <button onClick={() => handleEdit(link)}>
                                                <Edit className="w-4 h-4 text-gray-400"/>
                                            </button>
                                            <button onClick={() => handleDelete(link.url)}>
                                                <Trash className="w-4 h-4 text-gray-400"/>
                                            </button>
                                        </div>
                                    </div>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-500 truncate"
                                    >{link.url}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {links.length === 0 && (
                    <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
                        <LinkIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No links yet</h3>
                        <p className="text-gray-600">Add your first link using the form above</p>
                    </div>
                )}
            </div>
            <button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="duration-150 fixed bottom-6 right-6 w-14 h-14 rounded-full flex justify-center items-center bg-rose-200 shadow-lg hover:shadow-sm">
                    <Plus className="w-6 h-6"/>
                </button>
        </div>
    );
}

