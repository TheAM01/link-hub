export const runtime = "nodejs"; // allows access to process.env

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_PATHS = ["/", "/auth/login", "/auth/signup"]; // Added signup

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const path = req.nextUrl.pathname;
    
    // Public routes = allowed to pass
    if (PUBLIC_PATHS.includes(path)) return NextResponse.next();

    // If no token, kick them to login
    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    // Token exists, verify it
    try {
        jwt.verify(token, process.env.JWT_SECRET!);
        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/dashboard"], // Fixed typo
};