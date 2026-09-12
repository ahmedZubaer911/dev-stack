
export default function YourStack() {
  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">
        Your Stack
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        No technologies selected yet
      </p>

      <div className="mt-6 flex min-h-48 items-center justify-center rounded-xl border border-dashed border-gray-300">
        <p className="text-sm text-gray-400">
          Your stack is empty
        </p>
      </div>
    </div>
  );
}

