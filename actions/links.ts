'use server';

import connectToDB from "@/lib/mongoose";
import Link, { ILink } from "@/models/Link";
import { getUser } from "./getUser"; // you already have this

export interface ILinkInput {
    title: string;
    url: string;
    order?: number;
}

// CREATE
export async function createLink(data: ILinkInput) {
    await connectToDB();
    const user = await getUser();
    if (!user) return { success: false, message: "Not authenticated" };

    const exists = await Link.findOne({ url: data.url, user: user.username });
    if (exists) return { success: false, message: "URL already exists" };

    const doc = await Link.create({
        ...data,
        order: data.order ?? 0,
        user: user.username,
        createdAt: new Date(),
    });

    return {
        success: true,
        link: {
            _id: doc?._id?.toString(),
            title: doc.title,
            url: doc.url,
            order: doc.order,
            createdAt: doc.createdAt.toISOString(),
        }
    };
}

// READ
export async function getLinksForUser() {
    await connectToDB();
    const user = await getUser();
    if (!user) return [];

    const links = await Link.find({ user: user.username })
        .sort({ createdAt: 1 })
        .lean();

    return links.map(l => ({
        _id: l._id.toString(),
        title: l.title,
        url: l.url,
        order: l.order,
        createdAt: l.createdAt.toISOString(),
    }));
}

// UPDATE
export async function updateLink(url: string, data: Partial<ILinkInput>) {
    await connectToDB();
    const user = await getUser();
    if (!user) return { success: false, message: "Not authenticated" };

    const updated = await Link.findOneAndUpdate(
        { url, user: user.username },
        { $set: data },
        { new: true }
    );

    return updated
        ? { success: true }
        : { success: false, message: "Link not found" };
}

// DELETE
export async function deleteLink(url: string) {
    await connectToDB();
    const user = await getUser();
    if (!user) return { success: false, message: "Not authenticated" };

    const deleted = await Link.findOneAndDelete({ url, user: user.username });
    return deleted
        ? { success: true }
        : { success: false, message: "Link not found" };
}
