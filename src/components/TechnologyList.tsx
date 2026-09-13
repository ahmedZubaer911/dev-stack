import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologgyCard";
import YourStack from "./YourStack";
import { useState } from "react";
import { toast } from "react-toastify";


interface TechnologyListProps {
  technologies: Technology[];
}

function TechnologyList({ technologies }: TechnologyListProps) {

    const [selectedTechnologies, setSelectedTechnologies]= useState<Technology[]> ([]);

    const handleSelect = (technology: Technology) => {
      if (selectedTechnologies.some((item) => item.id === technology.id)) {
          toast.warning("This technology is already in your stack.");
          return;
      }

      toast.success(`${technology.name} added to your stack.`);

      setSelectedTechnologies((current) => [ ...current, technology]);
    };

    const handleRemove = (id: number) => {
        const technology = selectedTechnologies.find(
          (item) => item.id === id
        );

        if (technology) {
          toast.error(`${technology.name} removed from your stack.`);
        }

        setSelectedTechnologies((current) =>
          current.filter((technology) => technology.id !== id)
        );
    };

    const handleRemoveAll = () => {
      if (selectedTechnologies.length === 0) {
        return;
      }

      toast.error("All technologies removed from your stack.");

      setSelectedTechnologies([]);
    };
    return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Explore <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
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
              onSelect={handleSelect}
              isSelected = {selectedTechnologies.some((item)=> item.id === technology.id)}
            />
          ))}
        </div>

        <div className="lg:self-start">
          <YourStack selectedTechnologies={selectedTechnologies}
          onRemove=  {handleRemove}
          onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologyList;