'use server';

import connectToDB from "@/lib/mongoose";
import Link, { ILink } from "@/models/Link";

export interface ILinkInput {
    title: string;
    url: string;
    order?: number;
}

// CREATE
// export async function addLink(data: ILinkInput) {
//     await connectToDB();

//     try {
//         const newLink: ILink = await Link.create({
//             ...data,
//             order: data.order ?? 0,
//             user: "johndoe"
//         });
//         return { success: true, link: newLink.toObject() };
//     } catch (err) {
//         let errorMessage = "Unknown Error";
//         if (err instanceof Error) {
//             errorMessage = err.message;
//         }
//         return { success: false, error: errorMessage }
//     }
// }

export async function addLink(data: ILinkInput) {
    await connectToDB();
    const existing = await Link.findOne({ url: data.url });
    if (existing) return {success: false, message: "URL already exists"};

    const link = await Link.create({ ...data, createdAt: new Date() });
    return { success: true, link: link.toObject() };
}

// READ
export async function getLinksForUser() {
    await connectToDB();
    const links = await Link.find().sort({ createdAt: 1}).lean();
    return links.map((l) => ({ title: l.title, url: l.url }));
}

// DELETE
export async function deleteLink(url: string) {
    await connectToDB();
    try {
        await Link.findOneAndDelete({url});
        return { sucess: true }
    } catch (err) {
        let errorMessage = "Unknown Error";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return { success: false, error: errorMessage }
    }
}

export async function updateLink(url: string, data: Partial<ILinkInput>) {
    await connectToDB();
    try {
        // const updated = await Link.findByIdAndUpdate(
        //     linkId,
        //     { $set: data },
        //     { new: true },
        // ).lean();
        // return updated;

        const updated = await Link.findOneAndUpdate(
            {url},
            { $set: data },
            { new: true },
        ).lean();

        if (!updated) return { success: false };

        return { success: true };
    } catch (err) {
        let errorMessage = "Unknown Error";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return { success: false, error: errorMessage }
    }
}