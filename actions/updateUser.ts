"use server";

import connectToDB from "@/lib/mongoose";
import User from "@/models/User";
import { revalidatePath } from "next/cache";

export async function updateUser(formData: FormData) {
    await connectToDB();

    const username = formData.get("username") as string;
    const fullName = formData.get("fullName") as string;
    const profilePicUrl = formData.get("profilePicUrl") as string;
    const themePrefs = formData.get("themePrefs") as string;

    if (!username) return console.log("No user!");

    await User.findOneAndUpdate(
        { username },
        { fullName, profilePicUrl, themePrefs },
        { new: true },
    );

    revalidatePath("/dashboard/settings");
}