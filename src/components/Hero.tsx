import heroImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
    
        {/* Left: Hero Text */}
        <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal <br />
            <span
                className="ml-2 bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--brand-gradient)" }}
            >
                Development Stack
            </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options, 
            compare them side by side, and put together the stack that fits your
            next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                    href="#technologies"
                    className="rounded-full px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
                    style={{ background: "var(--brand-gradient)" }}
                >
                    Explore Technologies
                </a>

                <a
                    href="#about"
                    className="rounded-full border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                    Learn More
                </a>
            </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex justify-center lg:justify-end">
            <img
                src={heroImage}
                alt="Technology stack illustration"
                className="w-full max-w-sm object-contain sm:max-w-md"
            />
        </div>

    </section>
    );
}

