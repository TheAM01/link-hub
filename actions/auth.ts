"use server";

import connectToDB from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function signup({ username, password }: { username: string; password: string }) {
    await connectToDB();

    const exists = await User.findOne({ username });
    if (exists) return { success: false, error: "Username already taken." };

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashed, fullName: "Default User" });

    return { success: true };
}

export async function login({ username, password }: { username: string; password: string }) {
    await connectToDB();

    const user = await User.findOne({ username });
    if (!user) return { success: false, error: "Invalid credentials." };

    const match = await bcrypt.compare(password, user.password);
    if (!match) return { success: false, error: "Invalid credentials." };

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET!, {
        expiresIn: "7d",
    });

    const cookieStore = await cookies()
    cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
    });

    return { success: true };
}
