import { NextResponse } from "next/server";
import User from "@/models/User";
import connectToDB from "@/lib/mongoose";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    await connectToDB();
    const { username, password } = await req.json();

    const hash = await bcrypt.hash(password, 10);
    await User.create({ username, password: hash });

    return NextResponse.json({ success: true });
}