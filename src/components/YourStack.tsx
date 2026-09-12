
import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
}

export default function YourStack({selectedTechnologies}: YourStackProps) {
  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">
        Your Stack
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {selectedTechnologies.length === 0
            ? "No technologies selected yet"
            : `${selectedTechnologies.length} ${
                selectedTechnologies.length === 1 ? "Technology" : "Technologies"
            } Selected`}
        </p>

      <div className="mt-6 flex min-h-48 items-center justify-center rounded-xl border border-dashed border-gray-300">
            {selectedTechnologies.length === 0 ? (
                <p className="text-sm text-gray-400">
                Your stack is empty
                </p>
            ) : (
            <div className="space-y-3">
                {selectedTechnologies.map((technology) => (
                <div
                    key={technology.id}
                    className="rounded-lg bg-gray-50 p-3"
                >
                    <p className="font-medium text-gray-900">
                    {technology.name}
                    </p>

                    <p className="text-xs text-gray-500">
                    {technology.category}
                    </p>
                </div>
                ))}
            </div>
            )}
        </div>
    </div>
    );
}

