"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface GetUserReturnType {
    username: string;
}

export async function getUser(): Promise<GetUserReturnType | null> {
    const cookieStore = await cookies(); // yes, we now wait to read a cookie, welcome to 2025
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    try {
        return jwt.verify(token, process.env.JWT_SECRET!) as { username: string };
    } catch {
        return null;
    }
}
