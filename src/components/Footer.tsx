import logoText from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <img
              src={logoText}
              alt="Dev Stack"
              className="mx-auto h-9 w-auto md:mx-0"
            />

            <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-600 md:mx-0">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex justify-center gap-4 md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-orange-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-orange-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-orange-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
        <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3">
                <a href="#" className="block text-sm text-gray-600 hover:text-orange-500">
                    Home
                </a>
                <a href="#technologies" className="block text-sm text-gray-600 hover:text-orange-500">
                    Technologies
                </a>
                <a href="#projects" className="block text-sm text-gray-600 hover:text-orange-500">
                    Projects
                </a>
            </div>
        </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#about" className="block text-sm text-gray-600 hover:text-orange-500">
                About
              </a>
              <a href="#contact" className="block text-sm text-gray-600 hover:text-orange-500">
                Contact Us
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-orange-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#" className="block text-sm text-gray-600 hover:text-orange-500">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-orange-500">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex items-center justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex shrink-0 gap-3">
            <a href="#" className="hover:text-orange-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-orange-500">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}