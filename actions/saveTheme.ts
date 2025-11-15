"use server";

import connectToDB from "@/lib/mongoose";
import User from "@/models/User";

export async function saveTheme(username: string, theme: string) {
    await connectToDB();

    await User.updateOne(
        { username },
        { $set: { themePrefs: theme } }
    );

    return { success: true };
}