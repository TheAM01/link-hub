"use server";

import connectToDB from "@/lib/mongoose";
import Link from "@/models/Link";


export async function incrementClick(username: string, linkUrl: string) {

    await connectToDB();

    await Link.updateOne(
        { user: username, url: linkUrl },
        { $inc: { clicks: 1 } }
    );
    
    
}