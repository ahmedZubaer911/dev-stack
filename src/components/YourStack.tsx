
import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

export default function YourStack({selectedTechnologies, onRemove, onRemoveAll}: YourStackProps) {
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

        <div className="mt-5 rounded-xl border border-dashed border-gray-300 p-3">
            {selectedTechnologies.length === 0 ? (
                <div className="flex min-h-14 items-center justify-center">
                <p className="text-sm text-gray-400">
                    Your stack is empty
                </p>
                </div>
            ) : (
                <div className="space-y-2">
                {selectedTechnologies.map((technology) => (
                    <div
                    key={technology.id}
                    className="flex w-full items-center gap-3 rounded-lg bg-gray-50 px-3 py-2"
                    >
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-7 w-7 shrink-0"
                    />

                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                        {technology.name}
                        </p>

                        <p className="text-xs text-gray-500">
                        {technology.category}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => onRemove(technology.id)}
                        className="shrink-0 text-gray-400 font-semibold transition hover:text-red-500"
                    >
                        ✕
                    </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={onRemoveAll}
                    className="mt-3 w-full rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                    Remove All
                </button>

                </div>
            )}
            </div>
    </div>
    );
}

