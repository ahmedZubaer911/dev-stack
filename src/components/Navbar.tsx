
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
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

