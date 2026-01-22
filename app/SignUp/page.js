'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SignUp attempt:', { name, email, phone, password });
        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, password }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("sign up successful:", data);
                router.push("/login");
            }
        } catch (error) {
            console.error("Sign up error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
                <Link href="/" className="text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <button className="text-gray-400 text-sm">Help</button>
            </div>

            <div className="max-w-md mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                    <p className="text-gray-400">Book your next cut in seconds.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-14 bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-14 bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex gap-3">
                        <div className="w-20 h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center">
                            <span className="text-sm text-gray-300">🇺🇸 +1</span>
                        </div>
                        <div className="flex-1 relative">
                            <input
                                type="tel"
                                placeholder="(555) 000-0000"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full h-14 bg-slate-800 border border-slate-700 rounded-xl pl-4 pr-12 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                                required
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-14 bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-12 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-colors mt-6"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-slate-900 px-4 text-gray-400">Or continue with</span>
                    </div>
                </div>

                {/* Social Buttons */}
                <div className="flex gap-4 mb-8">
                    <button className="flex-1 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                        <span className="text-white">🍎</span>
                        <span className="text-white font-medium">Apple</span>
                    </button>
                    <button className="flex-1 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                        <span className="text-white">G</span>
                        <span className="text-white font-medium">Google</span>
                    </button>
                </div>

                {/* Login Link */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 font-medium hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}