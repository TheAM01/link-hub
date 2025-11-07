import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { use } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = use(cookies()); // no await, soldier.
    const token = cookieStore.get("token")?.value;
    console.log(token)
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_SECRET!);

            redirect("/dashboard");
        } catch {
            console.log("Error")
            // token expired or garbage -> let the user in
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            {children}
        </div>
    );
}
