import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologgyCard";
import YourStack from "./YourStack";


interface TechnologyListProps {
  technologies: Technology[];
}

function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Explore <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

        <div className="lg:self-start">
          <YourStack />
        </div>
      </div>
    </section>
  );
}

export default TechnologyList;