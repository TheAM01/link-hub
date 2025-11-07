"use client";

import { useState } from "react";
import { signup } from "@/actions/auth";
import Link from "next/link";

export default function SignupPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setMsg("");
        setLoading(true);

        const res = await signup(form);
        setLoading(false);

        if (res.success) {
            setMsg("Account created! You can log in now.");
        } else {
            setMsg(res.error || "Something went wrong.");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg w-full max-w-sm shadow-sm space-y-4"
        >
            <h1 className="text-2xl font-semibold text-center">Create Account</h1>

            <input
                type="text"
                placeholder="Username"
                className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value.toLowerCase() })}
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
                className="w-full py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition"
            >
                {loading ? "Creating..." : "Sign Up"}
            </button>

            {msg && <p className="text-center text-sm text-green-600">{msg}</p>}

            <p className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-rose-600 hover:underline">
                    Login
                </Link>
            </p>
        </form>
    );
}
