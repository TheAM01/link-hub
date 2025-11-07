"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getUser() {
    const cookieStore = await cookies(); // yes, we now wait to read a cookie, welcome to 2025
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    try {
        return jwt.verify(token, process.env.JWT_SECRET!) as { username: string };
    } catch {
        return null;
    }
}
