import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onSelect:  (technology: Technology) => void;
  isSelected: boolean;
}

function TechnologyCard({ technology, onSelect, isSelected }: TechnologyCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12"
        />

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
          {technology.badge}
        </span>
      </div>

      {/* Name + Description */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>
      </div>

      {/* Category + Difficulty */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-yellow-500">★</span>
        <span className="font-medium text-gray-700">
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() => onSelect(technology)}
        disabled={isSelected}
        className="mt-5 w-full rounded-xl px-4 py-2.5 font-semibold text-white transition 
          disabled:cursor-not-allowed disabled:opacity-40 hover:opacity-90"
        style={{ background: "var(--brand-gradient)" }}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;