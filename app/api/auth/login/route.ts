import { NextResponse } from "next/server";
import User from "@/models/User";
import connectToDB from "@/lib/mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
    await connectToDB();
    const { username, password } = await req.json();

    const user = await User.findOne({ username });
    if (!user) return NextResponse.json({ success: false, message: "Nope." });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return NextResponse.json({ success: false, message: "Wrong password, genius." });

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "7d" });

    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, { httpOnly: true, sameSite: "lax", path: "/" });


    return res;
}
