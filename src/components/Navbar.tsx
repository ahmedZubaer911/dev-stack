import { useState } from "react";
import logoText from "../assets/logo-text.png";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">

            {/* Mobile Navbar */}
            <div className="flex h-16 items-center justify-between px-4 lg:hidden">

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
                <a href="#">
                    <img
                        src={logoText}
                        alt="Dev Stack"
                        className="h-8 w-auto"
                    />
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
                    className="rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                    style={{background: "var( --brand-gradient)"}}
                    >
                    Sign Up
                    </button>
                </div>
            </div>

            {isMenuOpen && (
            <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
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
            <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:flex lg:px-8">
                
                {/* Logo + Brand */}
                <a href="#" className="flex items-center gap-2">
                    <img
                        src={logoText}
                        alt="Dev Stack"
                        className="h-9 w-auto"
                    />
                </a>

                {/* Navigation Links */}
                <div className="hidden items-center gap-8 lg:flex">
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
                        className="rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                        style={{background: "var(--brand-gradient"}}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}

