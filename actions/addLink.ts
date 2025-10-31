'use server';

import connectToDB from "@/lib/mongoose";
import Link, { ILink } from "@/models/Link";

export interface AddLinkInput {
    title: string;
    url: string;
    order?: number;
}

export async function addLink(data: AddLinkInput) {
    await connectToDB();

    try {
        console.log(data)
        const newLink: ILink = await Link.create({
            ...data,
            order: data.order ?? 0,
        });
        return { success: true, link: newLink.toObject() };
    } catch (err) {
        let errorMessage = "Unknown Error";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return { success: false, error: errorMessage }
    }
}