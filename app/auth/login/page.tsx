"use client";

import { useState } from "react";
import { login } from "@/actions/auth";
import Link from "next/link";

export default function LoginPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setMsg("");
        setLoading(true);

        const result = await login(form);
        setLoading(false);

        if (result.success) {
            // Use window.location instead of router.push for hard refresh
            window.location.href = "/dashboard";
        } else {
            setMsg(result.error || "Invalid username or password.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg w-full max-w-sm shadow-sm space-y-4"
        >
            <h1 className="text-2xl font-semibold text-center">Welcome Back</h1>

            <input
                type="text"
                placeholder="Username"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
            />

            <button
                disabled={loading}
                className="w-full py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition disabled:opacity-50"
            >
                {loading ? "Logging in..." : "Login"}
            </button>

            {msg && <p className="text-center text-sm text-red-600">{msg}</p>}

            <p className="text-center text-sm">
                No account?{" "}
                <Link href="/auth/signup" className="text-rose-600 hover:underline">
                    Create one
                </Link>
            </p>
        </form>
    );
}