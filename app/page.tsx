"use client";
import { useState } from "react";
import { Menu, X, Link, Sparkles, Users, Zap, ArrowRight } from "lucide-react";

export default function LinkHubLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: Link,
            title: "Unlimited Links",
            description: "Add as many links as you want. No limits, no restrictions."
        },
        {
            icon: Sparkles,
            title: "Beautiful Themes",
            description: "Customize your hub with stunning themes and colors."
        },
        {
            icon: Users,
            title: "Analytics",
            description: "Track your clicks and understand your audience better."
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Your hub loads instantly, keeping your audience engaged."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
            {/* Navigation */}
            <nav className="bg-white/60 backdrop-blur-md border-b border-rose-200/50 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Link className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">LinkHub</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-gray-700 hover:text-rose-600 font-medium transition">Features</a>
                            <a href="#pricing" className="text-gray-700 hover:text-rose-600 font-medium transition">Pricing</a>
                            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition">Login</a>
                            <button className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-700"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pt-4 pb-2 space-y-3">
                            <a href="#features" className="block text-gray-700 hover:text-rose-600 font-medium">Features</a>
                            <a href="#pricing" className="block text-gray-700 hover:text-rose-600 font-medium">Pricing</a>
                            <a href="#" className="block text-gray-700 hover:text-rose-600 font-medium">Login</a>
                            <button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white px-5 py-2.5 rounded-xl font-semibold">
                                Get Started
                            </button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="inline-block">
                <span className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ The Better Way to Share Links
                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Your Links,
                                <br />
                                <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
                  One Beautiful Hub
                </span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Create a stunning landing page for all your important links. Share your entire world with just one link.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                                    Get Started Free
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-rose-200">
                                    View Demo
                                </button>
                            </div>

                            <div className="flex items-center gap-8 pt-4">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">10k+</div>
                                    <div className="text-sm text-gray-600">Active Users</div>
                                </div>
                                <div className="w-px h-12 bg-gray-300"></div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">50k+</div>
                                    <div className="text-sm text-gray-600">Links Created</div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Phone Preview */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl blur-3xl opacity-30"></div>
                            <div className="relative max-w-sm mx-auto bg-white rounded-3xl p-8 shadow-2xl border border-rose-100">
                                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 space-y-4">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl shadow-lg"></div>
                                        <div>
                                            <h3 className="text-xl font-bold text-center">@yourname</h3>
                                            <p className="text-sm text-gray-600 text-center">Creator & Designer</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 pt-2">
                                        {["Website", "Instagram", "YouTube", "Shop"].map((link, i) => (
                                            <div
                                                key={i}
                                                className="bg-white p-4 rounded-xl border border-rose-200 font-semibold text-center hover:border-rose-400 hover:shadow-md transition-all cursor-pointer"
                                            >
                                                {link}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6 bg-white/40">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need
                        </h2>
                        <p className="text-xl text-gray-600">
                            Powerful features to make your hub stand out
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-rose-200 hover:border-rose-300 hover:shadow-xl transition-all group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-12 shadow-2xl text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Ready to Build Your Hub?
                        </h2>
                        <p className="text-xl text-rose-50">
                            Join thousands of creators sharing their world with LinkHub
                        </p>
                        <button className="bg-white text-rose-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            Get Started for Free
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white/60 backdrop-blur-md border-t border-rose-200/50 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Link className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">LinkHub</span>
                        </div>
                        <p className="text-gray-600">© 2025 LinkHub. All rights reserved.</p>
                        <div className="flex gap-6 text-gray-600">
                            <a href="#" className="hover:text-rose-600 transition">Privacy</a>
                            <a href="#" className="hover:text-rose-600 transition">Terms</a>
                            <a href="#" className="hover:text-rose-600 transition">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}