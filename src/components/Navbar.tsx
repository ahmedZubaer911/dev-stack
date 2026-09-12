import { useState } from "react";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

            {/* Mobile Navbar */}
            <div className="flex h-16 items-center justify-between px-4 md:hidden">

                {/* Hamburger */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl text-gray-700"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Center Brand */}
                <a href="#" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-sm font-bold text-white">
                    D
                    </div>

                    <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-lg font-bold text-transparent">
                    Dev Stack
                    </span>
                </a>

                {/* Auth Buttons */}
                <div className="flex items-center gap-2">
                    <button
                    type="button"
                    className="text-xs font-medium text-gray-700"
                    >
                    Sign In
                    </button>

                    <button
                    type="button"
                    className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-1.5 text-xs font-semibold text-white"
                    >
                    Sign Up
                    </button>
                </div>
            </div>

            {isMenuOpen && (
            <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
                <div className="flex flex-col gap-4">
                    <a href="#" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </a>

                    <a href="#technologies" onClick={() => setIsMenuOpen(false)}>
                        Technologies
                    </a>

                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </a>

                    <a href="#about" onClick={() => setIsMenuOpen(false)}>
                        About
                    </a>

                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </a>
                </div>
            </div>
            )}

            {/* Desktop Navbar */}
            <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:flex lg:px-8">
                
                {/* Logo + Brand */}
                <a href="#" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 text-lg font-bold text-white">
                        D
                    </div>

                    <div className="bg-linear-to-r bg-clip-text text-xl font-bold"> Dev
                        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
                            Stack
                        </span>
                    </div>
                </a>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-sm font-semibold text-red-500 hover:text-orange-500">
                        Home
                    </a>

                    <a href="#technologies" className="text-sm font-medium text-mist-700 hover:text-orange-500">
                        Technologies
                    </a>

                    <a href="#projects" className="text-sm font-medium text-mist-700 hover:text-orange-500">
                        Projects
                    </a>

                    <a href="#about" className="text-sm font-medium text-mist-700 hover:text-orange-500">
                        About
                    </a>

                    <a href="#contact" className="text-sm font-medium text-mist-700 hover:text-orange-500">
                        Contact
                    </a>
                </div>

                {/* Authentication Buttons */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="hidden text-sm font-medium text-gray-700 hover:text-orange-500 sm:block"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}

